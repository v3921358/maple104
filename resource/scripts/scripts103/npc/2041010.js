var status = 0;
var beauty = 0;
var price = 1000000;
var mface = Array(20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20023,20025,20026,20027,20028);
var fface = Array(21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019,21020,21021,21022,21023,21025,21026);
var facenew = Array();
var card = 5152007;//会员卡ID。。

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("嘿~！你好，欢迎来到#b玩具城整形会员中心#k。如果你有#b#t"+card+"##k，我可以为你进行整形手术。\r\n\#L2##b进行整形手术#k(使用#b#t"+card+"##k)#l");
			} else if (status == 1) {
			if (selection == 1) {
				cm.dispose();
			} else if (selection == 2) {
				facenew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
					}
				}
				cm.sendStyle("我可以改变你的脸型,让它比现在看起来漂亮. 你为什么不试着改变它下? 如果你有#b#t"+card+"##k,我将会帮你改变你的脸型,那么选择一个你想要的新脸型吧!", facenew,5152001);
			}
		} else if (status == 2){	
			cm.dispose();
                      if (cm.haveItem(card) == true) {
				cm.gainItem(card, -1);
				cm.setFace(facenew[selection]);
				cm.sendOk("好了,你的朋友们一定认不出来是你了!");
			} else {
				cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
			}
	}
}
}