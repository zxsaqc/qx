/*
脚本功能：哔哩哔哩解锁大会员
软件版本：6.90.0
更新时间：2022-10-31
使用声明：⚠️此脚本仅供学习与交流，
 请勿转载与贩卖！⚠️⚠️⚠️
***************************
[rewrite_local]
# > 哔哩哔哩大会员

^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn|net|org)).*(playconf|player|reply)\.(v3|v2|v1)\.(ViewP|Reply|Play(URL|View|Conf)).*$ url script-request-header https://raw.githubusercontent.com/zxsaqc/qx/master/BilibiliProCrack3.js
[mitm] 

hostname = api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, *.bili*.*, app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net

*/







var Headers = $request['headers'];


modifiedHeaders['Cookie'] = 'buvid3=CD3B1ACD-C97E-4B52-BEE4-E240B39B0B52167623infoc; rpdid=|(k|k)RJJmm)0J'uYYm)~)J)k; b_nut=100; _uuid=C9864937-5ACF-4E99-86ED-6EE72AFF1059685336infoc; buvid4=AB728D4B-1D61-B957-737D-3453E528EA5E85591-122121921-BnxHijm4xdN0LRiB/Kz/NQ%3D%3D; buvid_fp=45dd61407650d44140af63dcbca23ca6; fingerprint3=e23fedd16bdda8df63919d37cda6e99b; fingerprint=8a422eb990d3556837500e2e9645baf4; Buvid=Y4412E4462D655134E27B92E551DCAD7F1E8; SESSDATA=cce250ef%2C1686925968%2Cbf9d2ac1; DedeUserID=3493083748502332; DedeUserID__ckMd5=4ceeee513f1cd199; bili_jct=88c4610a22f142553640f54cc82c697b; sid=50osw4fl';


modifiedHeaders['x-bili-device-bin'] = 'CAEQqJnbIRokWTQ0MTJFNDQ2MkQ2NTUxMzRFMjdCOTJFNTUxRENBRDdGMUU4IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoOaVBob25lIDEzIG1pbmlSBDE1LjJqBTcuNy4wckAxQjg2MzNDNEQ0NjBDQjI3RTI1Q0QyMjYwNTQ4NkM2QzIwMjIwMTE0MjA1OTMyM0VBNDY1QTQ4RDk1NzQyM0JGeKbur8XlLw==';


modifiedHeaders['Authorization'] = 'identify_v1 37ced28f3b8d8bcddda35c0796dd4ec1';


modifiedHeaders['User-Agent'] =  ' bili-universal/70700200 os/ios model/iPhone 13 mini mobi_app/iphone osVer/15.2 network/1';


modifiedHeaders['buvid'] = 'Y4412E4462D655134E27B92E551DCAD7F1E8';


modifiedHeaders['x-bili-metadata-bin'] = 'CiA1MmYxODVlOTY3YzI3YjAxMjFlNTgxMjRiM2Y2YzljMRIGaXBob25lGgVwaG9uZSComdshKgVhcHBsZTIkWTQ0MTJFNDQ2MkQ2NTUxMzRFMjdCOTJFNTUxRENBRDdGMUU4OgNpb3M=';


modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';


modifiedHeaders['x-bili-network-bin'] = 'CAIaBnVuaWNvbQ==';


modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDI5YjA1ZWQy';


modifiedHeaders['x-bili-trace-id'] = '24dd3eea2c456446cdd163f457c74f05:cdd163f457c74f05:0:0';


modifiedHeaders['x-bili-exps-bin'] = 'CgIIAQ==';




$done({'headers': Headers});
