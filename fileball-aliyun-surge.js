#!name=Fileball 阿里云挂载
#!desc= 原作者Chosen One 支持1.2.8


//食用方法1-Alist扫码获取
//打开Fileball 添加Synology协议
//地址填 aliyun.example.com
//用户名填 abc
//密码填 refresh_token（需要用阿里云盘扫描alist的二维码获得）地址如下
// https://alist-doc.nn.ci/docs/driver/aliyundrive
// 连接 & Enjoy



//食用方式2-抓包
//通过软件抓包，比如qx，surge，stream等工具
//开启http抓包
//打开已登录账号的阿里云盘
//关闭http抓包
//在抓包记录中记录中搜索关键词 refresh 或 refresh token
//打开Fileball 添加Synology协议
//地址填 aliyun.example.com
//用户名填 abc
//密码填 refresh_token
// 连接 & Enjoy


[General]
force-http-engine-hosts = %APPEND% aliyun.example.com:0


[Script]
阿里云挂载 = type=http-request,pattern=^http:\/\/aliyun\.example\.com,requires-body=1,script-path=https://raw.githubusercontent.com/zxsaqc/qx/master/aliyun2.js,max-size=0,debug=1
