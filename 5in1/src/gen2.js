load('libs.js');
function execute(url, page) {
    if (!page) page = 1;
    if (url.includes("qidian")) {
        url = url.replace(/https:\/\/www\.qidian\.com/g, "");
    }
    let host = 'https://www.qidian.com';
    url = (host + url).formatUnicorn({
        page: page || 1,
    });
    if (url.slice(-1) !== "/") url = url + "/";
    log(url)
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let data = [];

        let elems = $.QA(doc, '#book-img-text > ul > li');
        if (!elems.length) {
            let elems = $.QA(doc, '#rank-view-list > div > ul > li');
            if (!elems.length) {
                return null
            }
        }
        elems.forEach(function (e, index) {
            let i = (page - 1) * 20 + + index + 1;
            let link = $.Q(e, '.book-mid-info h2 a').attr('href').mayBeFillHost(host)
            let newLink = STVHOST + "truyen/qidian/1/" + getLink(link) + "/";
            data.push({
                name: "<" + i + ">" + $.Q(e, '.book-mid-info h2 a').text(),
                link: newLink,
                cover: $.Q(e, 'div a img').attr('src').mayBeFillHost(host),
                description: $.Q(e, '.book-mid-info p.update a').text().replace('最新更新', '').replace(/.*?/g,"").trim()
            })
        })
        let next = $.Q(doc, '#rank-view-list .rank-tag', -1).text();
        if (next) next = +next / 20 + 1; // 20 items/page

        return Response.success(data, next);
    }
    return null;
}