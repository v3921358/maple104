/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = -1;
var job;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
        cm.sendOk("#r" + cm.getVipname() + " #b下定决心,再来找我!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (! (cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)) { // CLERIC


            cm.sendOk("#r" + cm.getVipname() + " #b你已经完成了 第三次转职 ！");
            cm.dispose();
            return;
        }


        if ((cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) && cm.getPlayerStat("LVL") >= 70) {


               if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //玩家使用了太多的SP意味着他们已经分配给他们的技能. .冲突
                    cm.sendOk("你还有未使用完的 SP ，请使用完后再来找我！");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("嗯……你还有#b SP #k未使用！请使用完后再来找我.");
                }
            }

                cm.sendNext("#r" + cm.getVipname() + "  #b恭喜你达到了70级以上！\r\n#d你现在已经可以进行第三次转职了！\r\n#r如果你已经准备好请点击下一步！");

            
        } else {
            cm.sendOk("#r" + cm.getVipname() + " #k你的等级还未达到70级以上！\r\n#r不能进行第三次转职！");
            cm.safeDispose();
        }

    } else if (status == 1) {
       var newjob = cm.getJob() + 1;
       cm.changeJob(newjob);
       cm.sendOk("恭喜你转职成为 #r" + cm.getJobNameById(newjob) + "#k !\r\n#b第四次转职是在 120级！加油吧！");
       cm.dispose();
}
      


}





/*
        if (! (cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)) { // CLERIC
            cm.sendOk("");
            cm.dispose();
            return;
        }
        if ((cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) && cm.getPlayerStat("LVL") >= 70) {
            if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
                    cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("Hmm...You have too many #bSP#k. You can't make the job advancement with too many SP left.");
                }
                cm.safeDispose();
            } else {
                cm.sendNext("You are indeed a strong one.");
            }
        } else {
            cm.sendOk("Please make sure that you are eligible for the job advancement. (level 70+)");
            cm.safeDispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
            if (cm.getJob() == 210) { // FP
                cm.changeJob(211); // FP MAGE
                cm.sendOk("You are now a #bFire/Poison Mage#k");
                cm.dispose();
            } else if (cm.getJob() == 220) { // IL
                cm.changeJob(221); // IL MAGE
                cm.sendOk("You are now an #bIce/Lightning Mage#k.");
                cm.dispose();
            } else if (cm.getJob() == 230) { // CLERIC
                cm.changeJob(231); // PRIEST
                cm.sendOk("You are now a #bPriest#k.");
                cm.dispose();
            }
        } else {
            cm.sendOk("Come back when you are level 70 and used SP.");
            cm.dispose();
        }
        
        
    }
}
*/
















/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/



/*
var status = -1;
var job;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
        cm.sendOk("#r" + cm.getVipname() + " #b下定决心,再来找我!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (! (cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)) { // CLERIC
            cm.sendOk("May the Gods be with you!");
            cm.dispose();
            return;
        }
        if ((cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) && cm.getPlayerStat("LVL") >= 70) {
            if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
                    cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("Hmm...You have too many #bSP#k. You can't make the job advancement with too many SP left.");
                }
                cm.safeDispose();
            } else {
                cm.sendNext("You are indeed a strong one.");
            }
        } else {
            cm.sendOk("Please make sure that you are eligible for the job advancement. (level 70+)");
            cm.safeDispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
            if (cm.getJob() == 210) { // FP
                cm.changeJob(211); // FP MAGE
                cm.sendOk("You are now a #bFire/Poison Mage#k");
                cm.dispose();
            } else if (cm.getJob() == 220) { // IL
                cm.changeJob(221); // IL MAGE
                cm.sendOk("You are now an #bIce/Lightning Mage#k.");
                cm.dispose();
            } else if (cm.getJob() == 230) { // CLERIC
                cm.changeJob(231); // PRIEST
                cm.sendOk("You are now a #bPriest#k.");
                cm.dispose();
            }
        } else {
            cm.sendOk("Come back when you are level 70 and used SP.");
            cm.dispose();
        }
    }
}



*/