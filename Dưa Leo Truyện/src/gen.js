load('config.js');
function execute(url, page) {
    if (!page) page = 1;
    let response = fetch(BASE_URL + url + ".html?page=" + page);
    if (response.ok) {
        let doc = response.html();
        let next = page + 1;
        let data = [];
        doc.select("div.box_list .li_truyen").forEach(e => {
            let coverImg = e.select("img").first().attr("src");
            data.push({
                name: e.select(".name").first().text(),
                link: e.select("a").first().attr("href"),
                cover: coverImg,
                host: BASE_URL
            });
        });

        return Response.success(data, next);
    }

    return null;
}