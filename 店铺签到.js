console.show();
auto.waitFor();
 
var i = 0;
var id=["52pojie","2089100916&shopId=111481369&pathInfo=/campaign-10827-88.htm#tq","1035757927&shopId=73516010&pathInfo=/campaign-10827-113.htm#tq","519286239&shopId=62832501&pathInfo=/campaign-10827-128.htm#tq","3079263591&shopId=289321551&pathInfo=/campaign-10827-92.htm#tq","2374579403&shopId=116386742&pathInfo=/campaign-10827-79.htm#tq","2838892713&shopId=150920153&pathInfo=/campaign-10827-142.htm#tq","2360209412&shopId=115862174&pathInfo=/campaign-10827-105.htm#tq","92688455&shopId=57299736&pathInfo=/campaign-10827-148.htm#tq","201749140&shopId=57616696&pathInfo=/campaign-10827-117.htm#tq","134363478&shopId=57301407&pathInfo=/campaign-10827-248.htm#tq","1790973264&shopId=106746477&pathInfo=/campaign-10827-85.htm#tq","890482188&shopId=71955116&pathInfo=/campaign-10827-125.htm#tq","749391658&shopId=68491548&pathInfo=/campaign-10827-127.htm#tq","1114511827&shopId=101717810&pathInfo=/campaign-10827-144.htm#tq","917264765&shopId=72571314&pathInfo=/campaign-10827-100.htm#tq","160586276&shopId=57301770&pathInfo=/campaign-10827-75.htm#tq","1714128138&shopId=104736810&pathInfo=/campaign-10827-276.htm#tq","2228361831&shopId=113462750&pathInfo=/campaign-10827-511.htm#tq","3164711246&shopId=306660112&pathInfo=/campaign-10827-61.htm#tq","901409638&shopId=72217984&pathInfo=/campaign-10827-91.htm#tq","3626596873&shopId=471050084&pathInfo=/campaign-10827-46.htm#tq","3527212490&shopId=434208197&pathInfo=/campaign-10827-47.htm#tq","533497499&shopId=62941831&pathInfo=/campaign-10827-111.htm#tq","883737303&shopId=71799145&pathInfo=/campaign-10827-107.htm#tq","2957642769&shopId=329012182&pathInfo=/campaign-10827-46.htm#tq","2064892827&shopId=110224300&pathInfo=/campaign-10827-107.htm#tq","446338500&shopId=62147762&pathInfo=/campaign-10827-171.htm#tq","470168984&shopId=62377409&pathInfo=/campaign-10827-130.htm#tq","1652554937&shopId=103715363&pathInfo=/campaign-10827-106.htm#tq","217101303&shopId=57895461&pathInfo=/campaign-10827-499.htm#tq","158748311&shopId=57301762&pathInfo=/campaign-10827-285.htm#tq",]
var name=["52pojie","dyson戴森官方旗舰店 ","奥克斯旗舰店 ","百雀羚旗舰店 ","GREE格力官方旗舰店 ","HR赫莲娜官方旗舰店  ","华为官方旗舰店 ","Lancome兰蔻官方旗舰店 ","李宁官方网店 ","美的官方旗舰店 ","美特斯邦威官方网店 ","蒙牛旗舰店 ","NIKE官方旗舰店 ","olay官方旗舰店 ","荣耀官方旗舰店 ","SK-II官方旗舰店 ","苏泊尔官方旗舰店 ","小米官方旗舰店 ","ZARA官方旗舰店 ","KIEHL'S科颜氏官方旗舰店 ","OPPO官方旗舰店 ","YSL圣罗兰美妆官方旗舰店 ","GIORGIO ARMANI阿玛尼美妆官方旗舰店 ","欧莱雅官方旗舰店 ","vivo官方旗舰店 ","HomeFacialPro旗舰店 ","Estee Lauder雅诗兰黛官方旗舰店 ","adidas官方旗舰店 ","海尔官方旗舰店","自然堂旗舰店 ","宝洁官方旗舰店 ","波司登旗舰店 ",]
 
log("共有31个店铺可签到\n开始自动签到");
sleep(1000);
 
setInterval(function(){  
i++;
jd();  //进店
 
className("android.widget.TextView").text("2019年双11互动").waitFor()
sleep(800); //这里是加载店铺网页时间根据网速自行调节，我这里改的比较低
toast("正在进"+name[i]);
sleep(800);  //这里是加载店铺网页时间 根据网速自行调节
qd();  //签到
 
back();
sleep(300);
if(i == 31){
    log("31个店铺签到成功\n结束任务")
    exit();
    }
}, 100);
 
function jd() {
    log("正在进入第"+i+"个店铺");
app.startActivity({ 
    data: "taobao://market.m.taobao.com/app/tb-source-app/campaign/pages/index?wh_weex=true&userId="+id[i], 
    packageName: "com.taobao.taobao", 
});
}
 
function qd() {
    if(text("签到领喵币").exists()){
    text("签到领喵币").findOne().click()
    text("开心收下").findOne().click()
    log("第"+i+"个店铺签到成功");
   }
   if(desc("签到领喵币").exists()){
      var b = desc("签到领喵币").findOne().bounds();
      click(b.centerX(), b.centerY());
      desc("开心收下").findOne().click()
      log("第"+i+"个店铺签到成功");
   }
   else log("此店铺已签到");
}