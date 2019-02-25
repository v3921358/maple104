/* 芬芬时尚潮流*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#r您好，请选择您需要合成的装备.#l:\r\n\r\n#b#L0#合成#v1402095##l\r\n#L1#飞侠#l\r\n#L2#法师#l\r\n#L3#法师#l\r\n#L4#弓箭手#l\r\n#L5#幻影#l\r\n#L6#双弩精灵#l\r\n#L7#夜光法师#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
           if (cm.itemQuantity(1402096) >0 && cm.itemQuantity(4310002) >20) {
           cm.gainItem(1402096,-1);
           cm.gainItem(4310002,-20);
           cm.gainItem(1402095,1);
           cm.sendOk("合成成功.请查看背包");
           cm.dispose();
           cm.worldMessage(cm.getChar().getName() + "成功合作成狮心战斗弯刀.大家祝福他.");
       } else {
           cm.sendOk("请查看背包是否有#v1402096#1把.#v4310002#20个");
           cm.dispose();
      }
         break;
        case 1://合成140
            cm.dispose();
            cm.openNpc(9900002,26);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1012123);
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1) >= 50000) {
	    	cm.gainNX(- 50000);
		cm.gainItem(5060003,1);
	    cm.sendOk("成功购买花生机 祝贺你抽到好东西!");
	    cm.worldMessage(cm.getChar().getName() + "在点卷商店购买了花生机 ,让我们一起祝贺他转到好货色。");
	    cm.dispose();
	} else {
	    cm.sendOk("你没有5W点卷。");
	    cm.dispose();
            break;
		}
        }
    }
}