/*

驾校一点通解锁VIP


特别注意：必须v10.6.2版本


软件链接：https://apps.apple.com/cn/app/id620262310
软件旧版本抓包ID：841949668

[rewrite_local]

^https:\/\/vipapi\.jxedt\.com\/store\/vip\/check url script-response-body https://raw.githubusercontent.com/zxsaqc/qx/master/jxydt.js

[mitm]

hostname= vipapi.jxedt.com

*/





let obj = JSON.parse($response.body);

obj.result.vipCheckResult = 'zlW9SsBvibu+JT9FUFFUy2VSnXcs//FxdzKwYaofC9ij7Z6NpblTKPxI+GeUOs+zxvDy8jq7/Hwv75MAqZ7402iKtz9IATt3yQk6I1gABuJbFKyid8E8+4f0I+0VK96ELJFm3tswVWzx9Z6EM2QLYDg3ixfhUASjTZi6GIwerPxyxQgBjK8vh5YLw7WGn/PXrdHN4tSIpn8p0T5886YR5sB5m2qjG/NRxkNaVpFEmUXR3fc9MeaZiYRMTdho/vMH9JR8VPKaoRV/IT30Tyv8aL6e/+WzDw3Qlvw2vjlHdt0b3LTNRNTec51CT9KakoqYBjidFZ6vl2oyCsjA8/HRDQ==';



$done({body: JSON.stringify(obj)});
