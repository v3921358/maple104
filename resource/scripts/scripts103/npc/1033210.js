var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendNext("大家不要开挂喔，和谐嘛!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("#r         ┈═☆欢迎来到"+cm.GetSN()+"☆═┈#l\r\n\r\n#r┈═☆游戏版本：冒险岛Ver.099 -《冒险传说之精灵觉醒》\r\n#r┈═☆游戏帮助：聊天框内 @帮助 即可查看玩家命令#l\r\n#r┈═☆游戏特色：长久稳定，随官方同步更新\r\n#r┈═☆游戏元宝：1元即可兑换1000元宝，活动时期更高\r\n#r┈═☆新手礼包：10520元宝＋100全属性枫叶＋会员①#l\r\n\r\n        不速之客系列武器可到市场购买哦#l\r\n #e━═☆请点击按钮(是) 祝您游戏愉快☆═━#l#k#n");
        } else if (status == 1) {
            if (cm.getChar().getPresent() == 0) {
                cm.gainMeso(20000000);
                cm.getChar().modifyCSPoints(1,+10520);
                cm.getChar().SetVip(1);
                cm.warp(910000000);
                if(cm.getChar().GetMoney() >= 0) {
                    player.GainMoney(-0); 
                    var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
                    var type = ii.getInventoryType(1012101); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1012101)).copy(); // 生成一个Equip类
                    toDrop.AddFlag(1);
                    toDrop.setStr(100);
                    toDrop.setDex(100);
                    toDrop.setInt(100);
                    toDrop.setLuk(100);
                    toDrop.setHp(1000);
                    toDrop.setMatk(1);
                    toDrop.setWatk(1);
                    toDrop.setMdef(1);
                    toDrop.setWdef(1);
                    toDrop.setAcc(1);
                    toDrop.setAvoid(1);
                    toDrop.setHands(1);
                    toDrop.setSpeed(1);
                    toDrop.setJump(1);
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背包		
                    cm.getChar().saveToDB(true);
                    cm.dispose();
                }else{
                    cm.sendOk(".............!");
                    cm.dispose();
                }
                cm.getChar().setPresent(1);
                cm.getChar().saveToDB(true);
                cm.sendOk("恭喜您.领取完毕！展开您的冒险之旅吧！");
                cm.dispose();
            } else {
                // cm.warp(910000000);
                cm.sendOk("每个帐号只可以领取#b1次#k。你已经领取过了!");
                cm.dispose();
            }	
        }
    }
}
