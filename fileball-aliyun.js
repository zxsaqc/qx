#!name=Fileball 阿里云挂载
#!desc= 原作者Chosen One 支持1.2.8

//将阿里云挂载.js脚本放入icloud云 surge文件内
//打开Fileball 添加Synology协议
//地址填 aliyun.example.com
//用户名填 abc
//密码填 refresh_token（需要用阿里云盘扫描alist的二维码获得）地址如下
// https://alist-doc.nn.ci/docs/driver/aliyundrive
// 连接 & Enjoy


#surge规则

[General]
force-http-engine-hosts = %APPEND% aliyun.example.com:0
//要开mpv的话必须添加

[Script]
阿里云挂载 = type=http-request,pattern=^http:\/\/aliyun\.example\.com,requires-body=1,script-path=https://raw.githubusercontent.com/zxsaqc/qx/master/aliyun2.js,max-size=0,debug=1







#fileball挂载阿里云
#qx规则

[rewrite_local]

^http://aliyun\.example\.com url script-analyze-echo-response https://raw.githubusercontent.com/zxsaqc/qx/master/aliyun.js

[mitm] 
hostname = aliyun.example.com
