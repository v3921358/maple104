importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*2+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("很好下次再见");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("嗨。！ #h #! 我是 #b~点券赌博机#k!想参与金钱娱乐的游戏吗？哈哈 你先下注吧!\r\n#n#d剩余:#r" + cm.getChar().getNX() + "点券 ");
        } else if (status == 1) {
            cm.sendGetText("你想下注多少金额呢?如果赢了的话可以获得3倍的收益和GM送的丰厚礼品,呵呵,话不多说啦!快输入你想要赌博的金额吧,输了别哭喔!#r下注金额范围为500~15000点券");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("你确定要下注 #r" + fee + "#k 点券吗?请先检查你有没有那么多钱哦!");
        } else if (status == 3) {
            if (cm.getChar().getNX() < fee) {
                cm.sendOk("哦呵，不好意思你没那么多钱了，去赚点钱再来吧，这可不是免费的,快去当掉一些东西再来吧!");
                cm.dispose();
            //} else if (cm.getChar().getNX() > 50000000) {
                //cm.sendOk("请先确定包里的点券不能超过5000万!");
                //cm.dispose();
            } else if (cm.getChar().getNX() < 200) {
                cm.sendOk("对不起,你的点券不足200,所以不能参于此次下注!");
                cm.dispose();
            } else if (cm.getText() > 15000) {
                cm.sendOk("哦不好意思哦!这里最大赌注不能超过15000!");
                cm.dispose();
            } else if (cm.getText() < 500) {
                cm.sendOk("哦不好意思哦!这里最小赌注不能低于500!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在赌场输的只剩下内裤，他还准备去当掉内裤继续赌!哎.赌博害人害己害家园啊!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
                            cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在赌场输的只剩下内裤，他还准备去当掉内裤继续赌!哎.赌博害人害己害家园啊!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
                            cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在赌场输的只剩下内裤，他还准备去当掉内裤继续赌!哎.赌博害人害己害家园啊!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 4) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
                            cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在赌场输的只剩下内裤，他还准备去当掉内裤继续赌!哎.赌博害人害己害家园啊!"); 
	                    cm.dispose(); 
	                } 
                else if (chance >= 5) {
                    cm.gainNX(fee * 3);
                    //cm.gainItem(2022282,1);
                    //cm.gainItem(2022283,1);
                    //cm.gainItem(2210010,10);    
                    cm.gainItem(4031454,1);      
                    //cm.gainItem(3991000,1);              
                    cm.sendNext("#r哈哈，恭喜你#k! 你赢了! 获得3倍的点券赔偿和GM送的丰厚礼品!");
                    cm.serverNotice("『赌场公告』：恭喜"+ cm.getChar().getName() +"，在赌场赢得3倍的点券和GM送的丰厚礼品，大家一起为他祝贺吧,朋友们.赶快进来继续赌博!");
                    cm.dispose();
                }
            }
        }
    }
}
