/*

一天阅读carck
软件下载短链：https://is.gd/bf3Bi5

[rewrite_local]

^https?:\/\/novel\.test\.onedayapp\.cn\/login\/sync.* url script-response-body https://raw.githubusercontent.com/zxsaqc/qx/master/yitianyuedu.js

[mitm]

hostname= novel.test.onedayapp.cn

*/





let obj = JSON.parse($response.body);

obj.data.vip = 1,
obj.data.vipEndTime = 1234567890,
obj.data.nickName = "帅锅",


$done({body: JSON.stringify(obj)});
