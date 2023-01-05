##################################################################################################
# - Safari 内输入 命令 + 空格 + 关键词 快速指定搜索引擎搜索
# - 注：请先进入设置更改 Safari 默认搜索为 DuckDuckGO
##################################################################################################
# wx    xxx (微信)
^https:\/\/duckduckgo.com\/\?q=wx\+([^&]+).+ url 302 https://weixin.sogou.com/weixinwap?query=$1
# gh    xxx (GitHub)
#^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ url 302 https://github.com/search?q=$1
# wb    xxx (微博)
^https:\/\/duckduckgo.com\/\?q=wb\+([^&]+).+ url 302 https://s.weibo.com/weibo/$1
# us  (切换至美国区)
^https:\/\/duckduckgo.com\/\?q=us&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143441&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=us&urlDesc=
# cn  (切换至中国区)
^https:\/\/duckduckgo.com\/\?q=cn&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143465&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=cn&urlDesc=
# tw  (切换至台湾区)
^https:\/\/duckduckgo.com\/\?q=tw&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143470&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tw&urlDesc=
# yt  xxx (YouTube)
^https:\/\/duckduckgo.com\/\?q=yt\+([^&]+).+ url 302 https://www.youtube.com/results?search_query=$1
# bli xxx (哔哩哔哩)
^https:\/\/duckduckgo.com\/\?q=bli\+([^&]+).+ url 302 https://m.bilibili.com/search?keyword=$1
# tre xxx (Google 译至英)
^https:\/\/duckduckgo.com\/\?q=tre\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1
# trj xxx (Google 译至日)
^https:\/\/duckduckgo.com\/\?q=trj\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1
# trc xxx (Google 译至中)
^https:\/\/duckduckgo.com\/\?q=trc\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1
# db    xxx (豆瓣)
^https:\/\/duckduckgo.com\/\?q=db\+([^&]+).+ url 302 https://m.douban.com/search/?query=$1
# tm    xxx (TMDB)
^https:\/\/duckduckgo.com\/\?q=tm\+([^&]+).+ url 302 https://www.themoviedb.org/search?query=$1
# zh    xxx (知乎)
^https:\/\/duckduckgo.com\/\?q=zh\+([^&]+).+ url 302 http://www.zhihu.com/search?q=$1
#   gg  xxx （Google）
^https:\/\/duckduckgo.com\/\?q=gg\+([^&]+).+ url 302 https://www.google.com/search?q=$1
# bi  xxx (必应)
^https:\/\/duckduckgo.com\/\?q=bi\+([^&]+).+ url 302 https://cn.bing.com/search?q=$1
# gi  xxx (Google 图片)
^https:\/\/duckduckgo.com\/\?q=gi\+([^&]+).+ url 302 https://www.google.com/search?&tbm=isch&q=$1
# yh  xxx (油猴搜索)
^https:\/\/duckduckgo.com\/\?q=yh\+([^&]+).+ url 302 https://greasyfork.org/zh-CN/scripts?q=$1
#     xxx (无指令默认为百度搜索)
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ url 302 https://www.baidu.com/s?wd=$1


hostname = duckduckgo.com