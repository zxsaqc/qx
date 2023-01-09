
/*
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



***********************
qx 远程脚本配置:
***********************/

[rewrite_local]
^http[s]:\/\/aliyun\.example\.com url script-analyze-echo-response https://raw.githubusercontent.com/zxsaqc/qx/master/aliyun.js

[mitm] 
hostname = %APPEND% aliyun.example.com


