function start() {
	if (cm.getChar().getMapId() == 802000710){
	    if(cm.countMonster()>0){
		 cm.sendSimple ("您正在挑战BOSS,请选把它消灭了再来找我召唤!!如果您想放弃挑战,我可以把你送回市场! \r\n \r\n    #L8##r回到市场#l");
	    }else{
   		 cm.sendSimple ("#b★★★★★★★★★★★★★★★★★★★★★★★★★★★\r\n★呼唤牛逼脑子★★★★★★★★★★★★★★★★★★★★★★★★★★★★\r\n               \r\n             #L0#呼唤牛逼脑子#l\r\n\r\n               #r#L8#打完退场#l\r\n\r\n\r\n              #b赶快来解救猴子吧\r\n#v3010281##v3010281##v3010281##v3010281##v3010281##v3010281##v3010281##v3010281##v3010281##v3010281#\r\n\r\n");
	    }
	} else {
	    cm.sendOk("找我什么事，想要启动我的力量吗，你需要足够的条件")
	}
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
       if(cm.haveItem(4031052,1) == true) {
        cm.gainItem(4031052,-1);
        cm.summonMob(9400296,2100000000, 40000, 1);   
cm.serverNotice("『牛逼首脑』：【"+ cm.getChar().getName() +"】已『财富大大』"+" : "+"亲。你来把·喜欢我就来爆我吧！");
cm.getC().getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0x10,cm.getC().getChannel(),"『牛逼首脑』"+" : "+"亲。你来把·喜欢我就来爆我吧！"))
cm.serverNotice("『牛逼首脑』：【"+ cm.getChar().getName() +"】带领他的队友开始挑牛逼首脑！哈哈。你们死啦死啦地.快叫你大哥来见我!!!八嘎! ");    
        }else{
        cm.sendOk("抱歉你没有召唤证明#v4031052#"); 

	cm.dispose();}
} else if (selection == 1) {
       if(cm.haveItem(4001126,200) == true) {
        cm.gainItem(4001126,-200);
cm.serverNotice("『地狱大公公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战地狱大公终极BOSS【血焰将军 】！");  
        cm.summonMob(9400591, 100000000, 40000, 1);//血焰将军     
        }else{
        cm.sendOk("抱歉你没有200个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 2) {
       if(cm.haveItem(4001126,200) == true) {
        cm.gainItem(4001126,-200);
cm.serverNotice("『会员公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战地狱大公终极BOSS【地狱船长  】！"); 
        cm.summonMob(9400589, 100000000, 40000, 1);//地狱船长     
        }else{
        cm.sendOk("抱歉你没有200个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 3) { 
        if (!cm.haveItem(4020012,2)) {
        cm.sendOk("抱歉，你没有2张#v4020012#求败#e#r(求败)");
        } else if (!cm.haveItem(4020012,2)) {
	cm.gainItem(4020012,-2);
        }else{
	cm.gainItem(4020012,-2);
        cm.warp(924010100,0); 
         cm.dispose();
}
} else if (selection == 4) {
        if (!cm.haveItem(4021010,1)) {
        cm.sendOk("抱歉，你没有200个#v4021010#无法为你开启");
cm.dispose();
    } else {
cm.warp(803001400, 0);
cm.dispose();
}
}else if (selection == 8) {
    cm.warp(910000000, 0);
    cm.dispose();
}else if (selection == 5) {
cm.sendOk("#r击败BOSS之后BOSS会掉落的物品有:\r\n\r\n#v1482080##v1482104##v1402091##v1402113##v1452107##v1452131##v1332152##v1492081##v1492103##v1522019##v1522022##v1532019##v1532039##v1472118##v1472143##v1382102##v1382126##v1462094##v1462120##v1332126##v1322135##v1322136##v1372080##v1372102##v1302149##v1442113##v1442138##v1432084##v1432101##v1312095##v1312096##v1302175#  雷昂一系列武器...");      
cm.dispose();
} else if (selection == 6) {
       if(cm.haveItem(4001126,1000) == true) {
        cm.gainItem(4001126,-1000);
cm.serverNotice("『会员公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战地狱大公终极BOSS【海之魔女  】！"); 
        cm.summonMob(9400590, 10000000, 40000, 1);//地狱船长     
        }else{
        cm.sendOk("抱歉你没有1000个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 7) {
       if(cm.haveItem(4001126,1000) == true) {
        cm.gainItem(4001126,-1000);
cm.serverNotice("『会员公告』：【"+ cm.getChar().getName() +"】带领他的队友开始挑战地狱大公终极BOSS【暗影杀手  】！"); 
        cm.summonMob(9400593, 100000000, 40000, 1);//地狱船长     
        }else{
        cm.sendOk("抱歉你没有1000个枫叶。我不能为您召唤"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("抱歉你没有5000万。我不能为您召唤"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400300, 100000000, 175000000, 1);//恶僧
	cm.dispose(); } 
} else if (selection == 9) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("抱歉你没有5000万。我不能为您召唤"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400549, 1, 200300000, 1);//火马
	cm.dispose(); } 
} 
}
