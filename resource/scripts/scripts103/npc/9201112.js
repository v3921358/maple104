function start() {
//地图代码 803000505
if (cm.getChar().getMapId() != 803001400){
    cm.sendSimple ("#b在这里必须要打败BOSS,在他们身上得到通过凭证您,才可以通过\r\n#d#r\r\n        #L0#召唤宝箱#l    #r#L2#查看帮助#l");
    } else {
    cm.sendOk("找我什么事，想要启动我的力量吗，你需要足够的条件")
    }
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
        if (cm.haveItem(4021010,1)) {
	cm.gainItem(4021010, -1);
      cm.serverNotice("『领奖公告』：：【"+ cm.getChar().getName() +"】通关,绯红副本,召唤出奖励宝箱获得 海量120装备"); 
        cm.summonMob(9400442, 1000, 20000,1);
        }else{
        cm.sendOk("抱歉，你没有#v4021010#无法为你开启");
	cm.dispose();}
} else if (selection == 1) {
	if(cm.haveItem(4001102)) {
        cm.warp(103000000, 0);
	cm.dispose();
        }else{ 
        cm.sendOk("你不拿宝箱就要走吗？"); 
	cm.dispose(); } 
} else if (selection == 2) {
        cm.sendOk("在这里一个人可以捡到一个#v4001102#拿着他去废弃都市找权达开，让他帮打开这个箱子，有几率获得#r永恒货重生装备哦"); 
	cm.dispose(); 
}  
}