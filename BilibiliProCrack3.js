/***********************************

> 应用名称：Bilibili大会员通用破解模板
> 软件版本：7.7.0
> 解锁说明：解锁VIP番剧和影视，没有会员权益和标识
> 问题反馈：没有反馈，自行解决
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：
本脚本仅供学习交流使用，禁止转载售卖
         


[rewrite_local]
  
# ～ Bilibili大会员（2022-12-18)
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/zxsaqc/qx/master/BilibiliProCrack3.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 

var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'buvid3=CD3B1ACD-C97E-4B52-BEE4-E240B39B0B52167623infoc; rpdid=|(k|k)RJJmm)0J'uYYm)~)J)k; b_nut=100; _uuid=9F88107B1-9A4D-F5DF-D1059-1068B671CEF7A30813infoc; buvid4=A0ABEC52-23DC-B3D4-5F4F-0599CE51198B30943-122121221-Vp25bGcbK8ZbKPlPmBeW3g%3D%3D; buvid_fp=e8654cd60379855c06445275e44afed7; Buvid=Y4412E4462D655134E27B92E551DCAD7F1E8; SESSDATA=8fcdc88f%2C1686642071%2Cda80bbc1; DedeUserID=3493083748502332; DedeUserID__ckMd5=4ceeee513f1cd199; bili_jct=d7d02c5e74b4d591e86ca4a179b3f692; sid=qfusoi3e';
modifiedHeaders['x-bili-device-bin'] = 'CAEQqJnbIRokWTQ0MTJFNDQ2MkQ2NTUxMzRFMjdCOTJFNTUxRENBRDdGMUU4IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoOaVBob25lIDEzIG1pbmlSBDE1LjJqBTcuNy4wckAxQjg2MzNDNEQ0NjBDQjI3RTI1Q0QyMjYwNTQ4NkM2QzIwMjIwMTE0MjA1OTMyM0VBNDY1QTQ4RDk1NzQyM0JGeKbur8XlLw==';
modifiedHeaders['Authorization'] = 'identify_v1 52f185e967c27b0121e58124b3f6c9c1';
modifiedHeaders['User-Agent'] =  'bili-universal/70700200 CFNetwork/1327.0.4 Darwin/21.2.0 os/ios model/iPhone 13 mini mobi_app/iphone build/70700200 osVer/15.2 network/1 channel/AppStore';
modifiedHeaders['buvid'] = 'Y4412E4462D655134E27B92E551DCAD7F1E8';
modifiedHeaders['x-bili-metadata-bin'] = 'CiA1MmYxODVlOTY3YzI3YjAxMjFlNTgxMjRiM2Y2YzljMRIGaXBob25lGgVwaG9uZSComdshKgVhcHBsZTIkWTQ0MTJFNDQ2MkQ2NTUxMzRFMjdCOTJFNTUxRENBRDdGMUU4OgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAIaBnVuaWNvbQ==';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDYyZTZiOTYx';
modifiedHeaders['x-bili-trace-id'] = '3773496344d6b49d27941f398aafaa69:27941f398aafaa69:0:0';
modifiedHeaders['x-bili-exps-bin'] = 'CgIIAQ==';
modifiedHeaders['x-bili-network-bin'] = 'CAIaBnVuaWNvbQ==';
$done({'headers': modifiedHeaders});