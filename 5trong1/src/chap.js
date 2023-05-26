load('libs.js');
function execute(url) {
    if (url.includes("uukanshu")) {
        return Response.success(getTocUU(url))
    } else if (url.includes("69shu")) {
        return Response.success(getTo69shu(url))
    } 
    // else if (url.includes("fqnovel") || url.includes("novel.snssdk")) {
    //     return Response.success(getToFanqie(url))
    // } 
    else if (url.includes("html5")) {
        return Response.success(getToHtml5(url))
    } else if (url.includes("ptwxz")) {
        return Response.success(getToPtwxz(url))
    }
    return Response.success(getTostv(url))
}
function getToPtwxz(url) {
    var response = fetch(url);
    var doc = response.html('gb2312');
    var htm = $.Q(doc, 'body', { remove: 'h1, div, table, script, center' }).html();
    htm = cleanHtml(htm);
    return htm.replace(/<br\s*\/?>|\n/g, "<br><br>");
}
function getToHtml5(url) {
    const [resourceId, serialId] = url.match(/resourceid=(\d+).*serialid=(\d+)/).slice(1);
    let response = fetch('https://novel.html5.qq.com/be-api/content/ads-read', {
        method: 'POST',
        headers: {
            'Referer': 'https://novel.html5.qq.com/',
            'Q-GUID': '0ee63838b72eb075f63e93ae0bc288cb',
            'QIMEI36': '8ff310843a87a71101958f5610001e316a11',
        },
        body: JSON.stringify({
            'ContentAnchorBatch': [
                {
                    'BookID': resourceId,
                    'ChapterSeqNo': [serialId]
                }
            ],
            'Scene': 'chapter'
        })
    });
    let doc = response.json();
    let content = doc.data.Content[0].Content[0]
    // if(!doc.data.isFree) return Response.success("Không FREE");
    // let content = doc.data.content.join("<br>")
    content = content.replace(/\r\n/g, "<br><br>").replace(/<br\s*\/?>|\n/g, "<br><br>")

    return content;
}
function getTocUU(url) {
    var htm = "";
    if (url.indexOf("sj.uukanshu.com") !== -1) {
        var doc = Http.get(url).html();
        doc.select(".ad_content").remove();
        doc.select("div.box").remove();
        htm = doc.select("#bookContent").html();
    } else {
        var doc = Http.get(url).html("gb2312");
        doc.select(".ad_content").remove();
        htm = doc.select("#contentbox").html();
    }
    htm = htm.replace(/[UＵ][UＵ]\s*看书\s*[wｗ][wｗ][wｗ][\.．][uｕ][uｕ][kｋ][aａ][nｎ][sｓ][hｈ][uｕ][\.．][cｃ][oｏ][mｍ]/gi, "");
    htm = htm.replace(/\&nbsp;/g, "").replace(/<br\s*\/?>|\n/g, "<br><br>");
    return htm;
}
function getTo69shu(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');

        var htm = $.Q(doc, 'div.txtnav', { remove: ['h1', 'div'] }).html();

        htm = cleanHtml(htm)
            .replace(/^ *第\d+章.*?<br>/, '') // Ex: '  第11745章 大结局，终<br>'
            .replace('(本章完)', '')
            ;
        // log(htm);
        return htm.replace(/<br\s*\/?>|\n/g, "<br><br>");
    }
    return null;
}
function getToFanqie(url) {
    let response = fetch(url, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    let res_json = response.json();
    let dataa = res_json.data.content;
    var doc = Html.parse(dataa);
    var content = doc.select('article').html();
    return content;

}
function getTostv(url) {
    if (url.slice(-1) !== "/") url = url + "/";
    const book = url.split('/truyen/')[1];
    var browser = Engine.newBrowser();
    browser.setUserAgent(UserAgent.android());
    browser.launch(url, 4000);
    browser.callJs(`document.location='/truyen/${book}';`, 2000);
    browser.callJs(`document.querySelector(".blk-item2").click();`, 1000);
    let doc = browser.html()
    var content = doc.select("#content-container .contentbox").html();
    while (content.includes("Đang tải nội dung chương") == 1) {
        browser.callJs(`document.location='/truyen/${book}';`, 1000);
        browser.callJs(`document.querySelector(".blk-item2").click();`, 1000);
        let doc = browser.html()
        var content = doc.select("#content-container .contentbox").html();
    }
    browser.close();
    content = content.replace(/<span(.*?)>(.*?)<\/span>/g, "")
        .replace(/id\=\"(.*?)\"/g, '')
        .replace(/p\=\"(.*?)\"/g, '')
        .replace(/onclick\=\"pr\(this\)\;\"/g, '')
        .replace(/isname\=\"true\"/g, '')
        .replace(/namelen\=\".*?\"/g, '')
        .replace(/asynctask\=\".*?\"/g, '')
        .replace(/style\=\".*?\"/g, '')
        .replace(/<\/i><i h="(h|s|c)(.*?)\" t=\"(h|s|c)(.*?)\"(.*?)<\/i>/gim, '</i>')
        .replace(/<i t="(h|s|c)(.*?)\" h=\"(h|s|c)(.*?)\"(.*?)>(.*?)<\/i>/gim, "")
        .replace(/<i(.*?)h=\"(.*?)t=\"(.*?)\"(.*?)<\/i>/g, "$3")
        .replace(/<i(.*?)t=\"(.*?)\"(.*?)<\/i>/g, "$2")
        .replace(/\·\·\·\·\·\·/g, ".")
        .replace(/\s/g, "")
    return content;
}