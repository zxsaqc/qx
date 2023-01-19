/**********


#!name=搜图神器
#!desc=搜图神器解锁会员
#!author= unknown
#保存并个性化修改


hostname=wallpaper.soutushenqi.com

http:\/\/wallpaper\.soutushenqi\.com\/api\/v1\/account\/token url script-response-body https://raw.githubusercontent.com/zxsaqc/qx/master/soutushenqi.js


**********/




let obj = JSON.parse($response.body);

obj.data.vipType = 1024,
obj.data.username = "帅锅",
obj.data.vipLabel = "至尊元老",
obj.data.avatarUrl = "https://raw.githubusercontent.com/zxsaqc/qx/master/IMG_1437.JPG",



$done({body: JSON.stringify(obj)});
