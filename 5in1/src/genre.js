function execute() {
    var data2 = [
        { title: '🔴Bảng nguyệt phiếu tháng này🔴', input: '0000', script: 'cat.js' },
        { title: "玄幻", input: "/rank/yuepiao/chn21/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "奇幻", input: "/rank/yuepiao/chn1/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "武侠", input: "/rank/yuepiao/chn2/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "仙侠", input: "/rank/yuepiao/chn22/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "都市", input: "/rank/yuepiao/chn4/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "现实", input: "/rank/yuepiao/chn15/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "军事", input: "/rank/yuepiao/chn6/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "历史", input: "/rank/yuepiao/chn5/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "游戏", input: "/rank/yuepiao/chn7/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "体育", input: "/rank/yuepiao/chn8/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "科幻", input: "/rank/yuepiao/chn9/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "诸天无限", input: "/rank/yuepiao/chn20109/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "悬疑", input: "/rank/yuepiao/chn10/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "轻小说", input: "/rank/yuepiao/chn12/year{year}-month{month}-page{page}/", script: "gen.js" },

        { script: "gen2.js", title: "🔴玄幻榜", input: "/all/chanId21-siteid1-page{page}" },
        { script: "gen2.js", title: "东方玄幻", input: "/all/chanId21-subCateId8-siteid1-page{page}" },
        { script: "gen2.js", title: "异世大陆", input: "/all/chanId21-subCateId73-siteid1-page{page}" },
        { script: "gen2.js", title: "王朝争霸", input: "/all/chanId21-subCateId58-siteid1-page{page}" },
        { script: "gen2.js", title: "高武世界", input: "/all/chanId21-subCateId78-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn21/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn21/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn21/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn21/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId21-page{page}/" },

        { script: "gen2.js", title: "🔴奇幻榜", input: "/all/chanId1-siteid1-page{page}" },
        { script: "gen2.js", title: "剑与魔法", input: "/all/chanId1-subCateId62-siteid1-page{page}" },
        { script: "gen2.js", title: "史诗奇幻", input: "/all/chanId1-subCateId201-siteid1-page{page}" },
        { script: "gen2.js", title: "黑暗幻想", input: "/all/chanId1-subCateId202-siteid1-page{page}" },
        { script: "gen2.js", title: "现代魔法", input: "/all/chanId1-subCateId38-siteid1-page{page}" },
        { script: "gen2.js", title: "历史神话", input: "/all/chanId1-subCateId20092-siteid1-page{page}" },
        { script: "gen2.js", title: "另类幻想", input: "/all/chanId1-subCateId20093-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn1/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn1/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn1/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn1/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId1-page{page}/" },

        { script: "gen2.js", title: "🔴武侠榜", input: "/all/chanId2-siteid1-page{page}" },
        { script: "gen2.js", title: "传统武侠", input: "/all/chanId2-subCateId5-siteid1-page{page}" },
        { script: "gen2.js", title: "武侠幻想", input: "/all/chanId2-subCateId30-siteid1-page{page}" },
        { script: "gen2.js", title: "国术无双", input: "/all/chanId2-subCateId206-siteid1-page{page}" },
        { script: "gen2.js", title: "古武未来", input: "/all/chanId2-subCateId20099-siteid1-page{page}" },
        { script: "gen2.js", title: "武侠同人", input: "/all/chanId2-subCateId20100-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn2/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn2/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn2/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn2/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId2-page{page}/" },

        { script: "gen2.js", title: "🔴仙侠榜", input: "/all/chanId22-siteid1-page{page}" },
        { script: "gen2.js", title: "修真文明", input: "/all/chanId22-subCateId18-siteid1-page{page}" },
        { script: "gen2.js", title: "幻想修仙", input: "/all/chanId22-subCateId44-siteid1-page{page}" },
        { script: "gen2.js", title: "现代修真", input: "/all/chanId22-subCateId64-siteid1-page{page}" },
        { script: "gen2.js", title: "神话修真", input: "/all/chanId22-subCateId207-siteid1-page{page}" },
        { script: "gen2.js", title: "古典仙侠", input: "/all/chanId22-subCateId20101-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn22/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn22/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn22/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn22/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId22-page{page}/" },

        { script: "gen2.js", title: "🔴都市榜", input: "/all/chanId4-siteid1-page{page}" },
        { script: "gen2.js", title: "都市生活", input: "/all/chanId4-subCateId12-siteid1-page{page}" },
        { script: "gen2.js", title: "艺术超能", input: "/all/chanId4-subCateId74-siteid1-page{page}" },
        { script: "gen2.js", title: "都市异能", input: "/all/chanId4-subCateId16-siteid1-page{page}" },
        { script: "gen2.js", title: "青春校园", input: "/all/chanId4-subCateId130-siteid1-page{page}" },
        { script: "gen2.js", title: "娱乐明星", input: "/all/chanId4-subCateId151-siteid1-page{page}" },
        { script: "gen2.js", title: "商战职场", input: "/all/chanId4-subCateId153-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn4/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn4/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn4/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn4/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId4-page{page}/" },

        { script: "gen2.js", title: "🔴现实榜", input: "/all/chanId15-siteid1-page{page}" },
        { script: "gen2.js", title: "现实百态", input: "/all/chanId15-subCateId209-siteid1-page{page}" },
        { script: "gen2.js", title: "爱情婚姻", input: "/all/chanId15-subCateId6-siteid1-page{page}" },
        { script: "gen2.js", title: "社会乡土", input: "/all/chanId15-subCateId20104-siteid1-page{page}" },
        { script: "gen2.js", title: "生活时尚", input: "/all/chanId15-subCateId20105-siteid1-page{page}" },
        { script: "gen2.js", title: "文学艺术", input: "/all/chanId15-subCateId20106-siteid1-page{page}" },
        { script: "gen2.js", title: "成功励志", input: "/all/chanId15-subCateId20107-siteid1-page{page}" },
        { script: "gen2.js", title: "青春文学", input: "/all/chanId15-subCateId20108-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn15/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn15/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn15/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn15/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId15-page{page}/" },

        { script: "gen2.js", title: "🔴军事榜", input: "/all/chanId6-siteid1-page{page}" },
        { script: "gen2.js", title: "战争幻想", input: "/all/chanId6-subCateId80-siteid1-page{page}" },
        { script: "gen2.js", title: "谍战特工", input: "/all/chanId6-subCateId231-siteid1-page{page}" },
        { script: "gen2.js", title: "军旅生涯", input: "/all/chanId6-subCateId54-siteid1-page{page}" },
        { script: "gen2.js", title: "抗战烽火", input: "/all/chanId6-subCateId230-siteid1-page{page}" },
        { script: "gen2.js", title: "军事战争", input: "/all/chanId6-subCateId65-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn6/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn6/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn6/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn6/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId6-page{page}/" },

        { script: "gen2.js", title: "🔴历史榜", input: "/all/chanId5-siteid1-page{page}" },
        { script: "gen2.js", title: "外国历史", input: "/all/chanId5-subCateId226-siteid1-page{page}" },
        { script: "gen2.js", title: "历史传记", input: "/all/chanId5-subCateId32-siteid1-page{page}" },
        { script: "gen2.js", title: "架空历史", input: "/all/chanId5-subCateId22-siteid1-page{page}" },
        { script: "gen2.js", title: "上古先秦", input: "/all/chanId5-subCateId220-siteid1-page{page}" },
        { script: "gen2.js", title: "秦汉三国", input: "/all/chanId5-subCateId48-siteid1-page{page}" },
        { script: "gen2.js", title: "两晋隋唐", input: "/all/chanId5-subCateId222-siteid1-page{page}" },
        { script: "gen2.js", title: "五代十国", input: "/all/chanId5-subCateId223-siteid1-page{page}" },
        { script: "gen2.js", title: "两宋元明", input: "/all/chanId5-subCateId224-siteid1-page{page}" },
        { script: "gen2.js", title: "清史民国", input: "/all/chanId5-subCateId225-siteid1-page{page}" },
        { script: "gen2.js", title: "民间传说", input: "/all/chanId5-subCateId20094-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn5/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn5/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn5/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn5/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId5-page{page}/" },

        { script: "gen2.js", title: "🔴游戏榜", input: "/all/chanId7-siteid1-page{page}" },
        { script: "gen2.js", title: "电子竞技", input: "/all/chanId7-subCateId7-siteid1-page{page}" },
        { script: "gen2.js", title: "虚拟网游", input: "/all/chanId7-subCateId70-siteid1-page{page}" },
        { script: "gen2.js", title: "游戏异界", input: "/all/chanId7-subCateId240-siteid1-page{page}" },
        { script: "gen2.js", title: "游戏系统", input: "/all/chanId7-subCateId20102-siteid1-page{page}" },
        { script: "gen2.js", title: "游戏主播", input: "/all/chanId7-subCateId20103-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn7/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn7/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn7/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn7/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId7-page{page}/" },

        { script: "gen2.js", title: "🔴体育榜", input: "/all/chanId8-siteid1-page{page}" },
        { script: "gen2.js", title: "篮球运动", input: "/all/chanId8-subCateId28-siteid1-page{page}" },
        { script: "gen2.js", title: "体育赛事", input: "/all/chanId8-subCateId55-siteid1-page{page}" },
        { script: "gen2.js", title: "足球运动", input: "/all/chanId8-subCateId82-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn8/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn8/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn8/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn8/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId8-page{page}/" },

        { script: "gen2.js", title: "🔴科幻榜", input: "/all/chanId9-siteid1-page{page}" },
        { script: "gen2.js", title: "星际文明", input: "/all/chanId9-subCateId68-siteid1-page{page}" },
        { script: "gen2.js", title: "时空穿梭", input: "/all/chanId9-subCateId251-siteid1-page{page}" },
        { script: "gen2.js", title: "未来世界", input: "/all/chanId9-subCateId25-siteid1-page{page}" },
        { script: "gen2.js", title: "古武机甲", input: "/all/chanId9-subCateId21-siteid1-page{page}" },
        { script: "gen2.js", title: "超级科技", input: "/all/chanId9-subCateId250-siteid1-page{page}" },
        { script: "gen2.js", title: "进化变异", input: "/all/chanId9-subCateId252-siteid1-page{page}" },
        { script: "gen2.js", title: "末世危机", input: "/all/chanId9-subCateId253-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn9/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn9/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn9/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn9/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId9-page{page}/" },

        { script: "gen2.js", title: "🔴悬疑榜", input: "all/chanId10-siteid1-page{page}" },
        { script: "gen2.js", title: "诡秘惊险", input: "/all/chanId10-subCateId26-siteid1-page{page}" },
        { script: "gen2.js", title: "奇妙世界", input: "/all/chanId10-subCateId35-siteid1-page{page}" },
        { script: "gen2.js", title: "悬疑侦探", input: "/all/chanId10-subCateId57-siteid1-page{page}" },
        { script: "gen2.js", title: "寻墓探险", input: "/all/chanId10-subCateId260-siteid1-page{page}" },
        { script: "gen2.js", title: "古今传奇", input: "/all/chanId10-subCateId20095-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn10/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn10/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn10/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn10/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId10-page{page}/" },

        { script: "gen2.js", title: "🔴轻小说榜", input: "/all/chanId12-siteid1-page{page}" },
        { script: "gen2.js", title: "原生幻想", input: "/all/chanId12-subCateId60-siteid1-page{page}" },
        { script: "gen2.js", title: "衍生同人", input: "/all/chanId12-subCateId281-siteid1-page{page}" },
        { script: "gen2.js", title: "搞笑吐槽", input: "/all/chanId12-subCateId282-siteid1-page{page}" },
        { script: "gen2.js", title: "青春日常", input: "/all/chanId12-subCateId66-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn12/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn12/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn12/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn12/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId12-page{page}/" },

        { script: "gen2.js", title: "🔴诸天无限", input: "/all/chanId20109-siteid1-page{page}" },
        { script: "gen2.js", title: "无限", input: "/all/chanId20109-subCateId20110-siteid1-page{page}" },
        { script: "gen2.js", title: "诸天", input: "/all/chanId20109-subCateId20111-siteid1-page{page}" },
        { script: "gen2.js", title: "综漫", input: "/all/chanId20109-subCateId20112-siteid1-page{page}" },
        { script: "gen2.js", title: "签约榜", input: "/rank/signnewbook/chn20109/page{page}/" },
        { script: "gen2.js", title: "畅销榜", input: "/rank/hotsales/chn20109/page{page}/" },
        { script: "gen2.js", title: "月票榜", input: "/rank/yuepiao/chn20109/page{page}/" },
        { script: "gen2.js", title: "收藏榜", input: "/rank/collect/chn20109/page{page}/" },
        { script: "gen2.js", title: "最近更新", input: "/rank/all/chanId20109-page{page}/" },

        { script: "gen2.js", title: "🔴短篇榜", input: "/all/chanId20076-siteid1-page{page}" },
        { script: "gen2.js", title: "诗词散文", input: "/all/chanId20076-subCateId20097-siteid1-page{page}" },
        { script: "gen2.js", title: "人物传记", input: "/all/chanId20076-subCateId20098-siteid1-page{page}" },
        { script: "gen2.js", title: "影视剧本", input: "/all/chanId20076-subCateId20075-siteid1-page{page}" },
        { script: "gen2.js", title: "评论文集", input: "/all/chanId20076-subCateId20077-siteid1-page{page}" },
        { script: "gen2.js", title: "生活随笔", input: "/all/chanId20076-subCateId20078-siteid1-page{page}" },
        { script: "gen2.js", title: "美文游记", input: "/all/chanId20076-subCateId20079-siteid1-page{page}" },
        { script: "gen2.js", title: "短篇小说", input: "/all/chanId20076-subCateId20096-siteid1-page{page}" },

        { title: '🔴Bảng nguyệt phiếu tuỳ chỉnh🔴', input: '///', script: 'cat.js' },
        { title: "玄幻🎈", input: "/rank/yuepiaoQ票榜/chn21/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "奇幻🎈", input: "/rank/yuepiaoQ票榜/chn1/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "武侠🎈", input: "/rank/yuepiaoQ票榜/chn2/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "仙侠🎈", input: "/rank/yuepiaoQ票榜/chn22/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "都市🎈", input: "/rank/yuepiaoQ票榜/chn4/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "现实🎈", input: "/rank/yuepiaoQ票榜/chn15/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "军事🎈", input: "/rank/yuepiaoQ票榜/chn6/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "历史🎈", input: "/rank/yuepiaoQ票榜/chn5/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "游戏🎈", input: "/rank/yuepiaoQ票榜/chn7/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "体育🎈", input: "/rank/yuepiaoQ票榜/chn8/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "科幻🎈", input: "/rank/yuepiaoQ票榜/chn9/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "诸天无限🎈", input: "/rank/yuepiaoQ票榜/chn20109/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "悬疑🎈", input: "/rank/yuepiaoQ票榜/chn10/year{year}-month{month}-page{page}/", script: "gen.js" },
        { title: "轻小说🎈", input: "/rank/yuepiaoQ票榜/chn12/year{year}-month{month}-page{page}/", script: "gen.js" },
    ]
    return Response.success(data2);
}