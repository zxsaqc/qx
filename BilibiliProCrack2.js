/***********************************

> 应用名称：Bilibili大会员通用破解模板
> 软件版本：7.10.1
> 脚本作者：Cuttlefish的通用破解模板
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2022-12-20
> 特别说明：于12.18日开了1个月，到期或和谐请自行删除脚本
          非专业人士，此为练手，有问题请自行处理
          本脚本仅供学习交流使用，禁止售卖
        


[rewrite_local]
  
# ～ Bilibili大会员（2022-12-20）


^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/zxsaqc/qx/master/BilibiliProCrack2.js


[mitm] 


hostname = %APPEND%  *.biliapi.*,*.bilibili.*


#mitm不到的，自己加
***********************************/

 


['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118M97t114T32Z109r111s100a105f102k105d101N100x72O101n97X100X101o114U115t32K61Z32y36k114d101M113U117c101M115o116r91H39j104h101S97S100O101e114H115V39N93c59T10r109d111p100k105L102T105v101I100D72Z101H97h100D101E114b115E91a34D67h111T111z107y105s101d34X93k32k61y32t34w32w98z117g118B105B100y51B61Y67Q68l51V66m49l65B67Y68a45x67Y57P55O69K45c52t66P53m50I45I66e69Q69b52y45J69B50h52x48A66b51X57g66H48r66y53a50r49B54A55Q54g50N51w105i110U102n111F99w59q32T114b112R100S105E100J61M124w40W107A124E107u41p82W74U74C109z109R41F48Q74X39n117Q89C89n109e41d126w41N74j41Q107g59n32E98y95B110M117d116b61E49k48h48F59G32B95K117d117J105D100m61a67f57a56F54G52V57t51e55h45n53t65S67W70E45n52p69t57d57I45z56a54g69p68t45S54m69z69j55m50v65Y70K70J49g48P53z57t54T56C53O51X51H54P105w110A102D111Y99v59K32V98j117T118A105e100f52m61w65N66n55S50b56l68l52H66v45D49f68i54e49w45Y66l57x53D55m45H55F51g55z68J45v51u52A53j51j69Y53k50G56i69d65p53u69I56n53E53t57R49n45v49d50V50G49P50L49i57w50C49i45E66G110f120x72i105T106v109T52l120L100e78S48O76c82X105X66E47h75Z122v47t78B81l61p61s59X32I98x117h118a105g100G95W102O112T61s52B53Y100j100H54H49N52g48E55t54I53Z48w100i52o52T49a52m48n97x102q54Z51o100m99K98p99k97A50h51X99G97K54l59f32e102v105K110W103v101K114s112Y114W105k110M116e51w61L101f50j51b102R101K100J100B49X54y98J100B100x97B56m100O102N54c51L57Z49u57n100Y51S55g99X100q97l54e101Z57R57z98U59q32v102F105N110n103Q101L114j112h114n105V110t116S61Y56u97e52N50k50m101E98L57q57v48O100O51m53b53Z54F56L51l55u53K48c48v101p50n101t57M54n52R53u98t97i102L52s59z32C66e117u118U105c100W61F89o52F52h49Q50f69V52h52Z54t50a68L54y53R53G49H51M52l69I50G55S66K57Y50n69G53Z53v49w68e67m65z68c55R70g49i69g56T59c32x68c101f100o101j85m115D101R114b73p68Y61a51E52L57F51E48V56T51H55Q52G56D53k48B50n51q51F50i59N32y68p101a100M101R85F115C101e114n73F68A95M95y99w107B77b100K53j61s52P99B101b101l101o101w53r49V51B102e49u99q100v49q57x57S59M32G83r69k83p83D68h65U84y65F61t99H99J101R50q53z48v101b102f44U49L54m56s54T57J50W53W57R54U56b44j98X102Y57C100J50U97A99d49k59f32X98e105F108W105X95l106t99B116v61A56x56c99F52f54X49N48n97K50Y50W102z49C52L50e53j53h51I54p52r48U102H53V52o99J99p56V50S99I54e57L55h98w59X32K115a105q100l61o53b48M111O115C119j52D102q108N34a59N10e109d111k100D105E102Z105E101Q100D72o101s97l100X101v114l115e91w39X120x45F98J105V108R105x45j100W101x118Y105A99d101k45l98Z105b110q39Z93y32W61T32w39v32e67N65I69I81w113u74I110R98s73s82k111n107S87r84U81w48y77K84s74y70j78y68O81X50I77Z107E81f50L78d84w85r120B77g122k82M70V77u106O100t67B79p84P74J70Z78H84n85N120i82G69M78Q66U82N68m100r71z77S85O85k52k73p103C90W112F99e71L104u118O98f109H85b113E65g50M108D118K99d122t73q70f99r71f104W118a98q109U85o54W66A87m70G119K99Y71a120C108u81p103l86F66G99x72M66Y115v90l85O111H79b97W86c66h111y98u50g53U108o73H68e69x122P73M71X49j112o98w109Y108M83S66k68Q69v49x76d106T74K113R66X84B99O117V78D121Y52f119Y99X107c65w120b81M106O103Z50J77h122r78G68J78M69L81u48D78v106F66n68K81O106y73Z51I82x84q73e49m81f48A81x121O77y106E89h119g78I84q81h52q78Z107I77S50A81w122q73O119P77j106G73a119Q77U84d69a48V77k106C65g49i79P84G77D121W77i48z86U66s78L68C89R49E81r84I81k52n82Y68n107I49D78s122l81w121x77N48s74i71U101H75i98k117Z114H56f88X108L76O119e61Z61i39C59H10J109s111o100p105Q102w105f101P100V72y101p97N100K101i114X115R91a39g65B117K116f104D111Z114Z105g122C97B116f105S111y110W39o93u32m61o32C39c32p105M100I101L110I116e105O102U121f95r118J49o32I51G55Q99j101W100N50F56E102a51r98H56D100M56k98P99a100D100h100a97Y51v53p99G48H55e57l54C100R100C52P101c99s49F39Y59v10m109s111m100x105G102F105M101f100Q72a101f97V100Y101n114J115H91r39A85K115K101I114b45w65e103i101K110Z116Z39a93S32P61a32x39K32H98K105V108H105N45n117Q110g105Z118o101U114T115l97n108O47f55K48x55p48B48W50y48B48x32R67o70y78w101I116O119G111j114q107O47g49X51l50B55m46I48F46l52a32s68Y97S114u119K105x110I47X50A49i46P50q46a48s32h111b115S47Q105e111V115p32q109d111g100t101z108V47G105O80P104p111q110J101K32L49b51c32g109f105F110u105j32B109i111Q98v105F95c97L112T112u47b105C112B104G111n110B101e32z98h117W105x108L100K47u55i48R55b48D48j50z48R48m32Y111P115R86e101A114u47A49Z53b46V50h32l110o101d116A119U111j114r107w47S50a32u99s104d97i110S110S101u108h47O65P112d112R83i116x111Z114X101g39c59Y10a109b111h100q105j102k105Z101h100m72Z101g97I100N101Z114q115X91p39z98Q117X118F105z100N39i93H32y61Q32S39N32R89u52d52a49c50B69q52W52N54E50I68a54z53D53O49H51k52n69l50y55H66n57C50C69i53V53J49u68d67z65Q68O55g70E49p69R56H39T59s10e109R111n100h105f102U105i101H100W72G101Z97l100k101v114x115Z91C39u120Q45c98R105G108Q105o45v109f101U116t97Q100V97V116C97r45s98H105M110a39T93R32t61F32L39c32z67M105W65d122v78K50o78C108W90F68o73g52d90b106H78z105P79t71o81y52z89e109x78Z107l90x71C82W104X77p122k86I106N77X68C99r53v78O109O82b107T78d71t86E106j77x82M73d71C97V88u66I111x98O50M53l108z71c103Y86T119w97N71P57F117k90l83j67j111R109J100l115I104p75E103T86A104j99i72W66g115V90B84s73A107A87K84j81E48w77j84W74o70Q78O68S81s50t77u107H81E50J78O84V85z120s77X122O82y70f77u106y100u67t79U84m74s70S78a84J85c120C82b69Y78F66x82q68C100x71F77x85K85i52Q79B103v78t112i98C51Y77i61o39o59M10S109W111i100D105t102c105S101o100v72P101A97C100o101Y114e115M91z39L120M45O98V105v108V105P45p108H111W99H97M108H101O45w98V105K110q39G93j32J61m32o39n39A59n10U109S111A100p105Q102Q105P101l100U72G101e97k100W101I114i115q91U39x120W45h98C105y108w105O45E110e101p116a119T111l114K107Q45F98W105V110U39N93I32h61Z32y39K39p59t10I109G111L100R105w102b105r101D100Z72w101q97U100Z101v114K115n91Z39b120R45q98S105N108D105g45r102k97C119g107h101U115z45N114Y101V113K45M98G105b110c39W93I32Y61n32a39q39K59k10T109V111s100k105D102T105n101q100b72a101i97w100d101j114L115g91C39C120f45C98H105x108M105b45N116e114i97j99O101U45c105H100D39L93L32z61d32a39j39J59j10a109w111z100T105k102u105N101u100e72E101V97r100h101b114E115A91w39j120q45h98j105s108p105J45X101e120l112m115P45H98l105x110L39c93J32o61Q32S39D39h59K10T109t111F100m105Y102j105q101G100H72i101C97T100C101X114C115E91W39x120g45l98k105a108X105g45T110M101R116b119d111O114s107g45x98d105W110Z39C93Q32X61R32k39L39M59l10q36M100V111w110j101C40T123J39l104g101K97S100C101F114V115Q39z58Z32R109g111m100M105V102X105j101u100R72i101C97o100a101e114L115V125r41U59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');