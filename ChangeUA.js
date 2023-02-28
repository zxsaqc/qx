#!name=ChangeUA
#!desc=更换 User-Agent 以提升体验，使用手机百度 Quark 的 User-Agent。
#原链接：https://raw.githubusercontent.com/zZPiglet/Task/master/ChangeUA.sgmodule
#修改为 Quantumult X 格式




# 百度（全站替换为手机百度 Quark 的 User-Agent）
^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com url request-header User-Agent.+iPhone.+ request-header User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)


# 知乎（部分替换为手机百度 Quark 的 User-Agent）
^https?:\/\/www\.zhihu\.com url request-header User-Agent.+iPhone.+ request-header User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)


# 必应 （免必应浏览器打开New Bing AI）
^https:\/\/www\.bing\.com\/(search|new) url request-header (\r\nUser-Agent:.+?)\w+\/[\d\.]+(\r\n) request-header $1AppleWebKit/537.36 Chrome/110.0 Safari/537.36 Edg/110.0$2

hostname= *.baidu.com, www.zhihu.com, www.bing.com
