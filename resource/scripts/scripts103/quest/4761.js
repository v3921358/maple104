var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if(status == -1){
            qm.sendOk("怎么了？不想要奖励吗？没关系，想好再来。")
            qm.dispose();
        }else if (status == 0) {
                  
            qm.sendAcceptDecline("恭喜你达到8级，感谢你对"+qm.GetSN()+"的支持！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#b#i2000006# #t2000006#100个。");
        } else if (status == 1) {
            if (qm.gainItem(2000006, 100)){
                qm.forceCompleteQuest();
                qm.sendOk("为了感谢你对"+qm.GetSN()+"的支持，我们将在10级送你一份神秘大礼！")
                qm.MissionFinish(qm.getPlayer().getId(),100118005)
                qm.dispose();
            }
        }
    }
}
