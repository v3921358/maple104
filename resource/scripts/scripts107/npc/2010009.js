/**
 * 蕾那丽 - 家族联盟负责人
 */

var status;
var choice;
var guildName;
var partymembers;

function start() {
    //cm.sendOk("The Guild Alliance is currently under development.");
    //cm.dispose();
    partymembers = cm.getPartyMembers();
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("您好！我叫#b蕾那丽#k。\r\n#b#L0#请您告诉我家族联盟是什么？#l\r\n#L1#要成立家族联盟的话应该怎么做？#l\r\n#L2#我想成立家族联盟。#l\r\n#L3#我想增加家族联盟的家族数量。#l\r\n#L4#我想解散家族联盟。#l");
    } else if (status == 1) {
        choice = selection;
        if (selection == 0) {
            status = -1;
            cm.sendNext("多个家族结合在一起成立的组织被称为家族联盟。我负责管理家族联盟的有关事务。");
        } else if (selection == 1) {
            status = 5;
            cm.sendNext("想要成立家族联盟的话，必须有2名家族长组成组队。其中队长会成为家族联盟的盟主。");
        } else if (selection == 2) {
            if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
                cm.sendOk("You may not create an alliance until you get into a party of 2 people"); //Not real text
                cm.dispose();
            } else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
                cm.sendOk("You cannot form a Guild Union until you own a guild");
                cm.dispose();
            } else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
                cm.sendOk("Your party member does not seem to own a guild.");
                cm.dispose();
            } else {
                var gs = cm.getGuild(cm.getPlayer().getGuildId());
                var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
                if (gs.getAllianceId() > 0) {
                    cm.sendOk("You cannot form a Guild Union if you are already affiliated with a different Union.");
                    cm.dispose();
                } else if (gs2.getAllianceId() > 0) {
                    cm.sendOk("Your party member is already affiliated with a guild union.");
                    cm.dispose();
                } else if (cm.partyMembersInMap() < 2) {
                    cm.sendOk("Get your other party member on the same map please.");
                    cm.dispose();
                } else {
                    cm.sendYesNo("Oh, are you interested in forming a Guild Union?");
                }
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
                cm.sendYesNo("To increase the capacity, you will need to pay 10,000,000 mesos. Are you sure you wish to proceed?"); //ExpandGuild Text
            } else {
                status = -1;
                cm.sendNext("只有家族联盟盟主可以增加家族数量。");
            }
        } else if (selection == 4) {
            if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
                cm.sendYesNo("你确定要解散你的家族联盟？");
            } else {
                status = -1;
                cm.sendNext("只有家族联盟盟主可以解散家族联盟。");
            }
        }
    } else if (status == 2) {
        if (choice == 2) {
            cm.sendGetText("请输入想要创建家族联盟的名称。(英文最多12字，中文最多6字)");
        } else if (choice == 3) {
            if (cm.getPlayer().getGuildId() <= 0) {
                cm.sendOk("你不能解散不存在的家族联盟。");
                cm.dispose();
            } else {
                if (cm.addCapacityToAlliance()) {
                    cm.sendOk("You have added capacity to your alliance.");
                } else {
                    cm.sendOk("Your guild union has too much capacity already. 5 is the maximum.");
                }
                cm.dispose();
            }
        } else if (choice == 4) {
            if (cm.getPlayer().getGuildId() <= 0) {
                cm.sendOk("你不能解散不存在的家族联盟。");
                cm.dispose();
            } else {
                if (cm.disbandAlliance()) {
                    cm.sendOk("Your Guild Union has been disbanded");
                } else {
                    cm.sendOk("An error occured when disbanding the Guild Union");
                }
                cm.dispose();
            }
        }
    } else if (status == 3) {
        guildName = cm.getText();
        cm.sendYesNo("你确定使用 #b" + guildName + "#k 做为家族联盟的名称吗？");
    } else if (status == 4) {
        if (!cm.createAlliance(guildName)) {
            cm.sendNext("你不能使用这个名称"); //Not real text
            status = 1;
            choice = 2;
        } else {
            cm.sendOk("你已成功建立了家族联盟。");
        }
        cm.dispose();
    } else if (status == 5) {
        cm.sendNext("想要成立家族联盟的话，必须有2名家族长组成组队。其中队长会成为家族联盟的盟主。");
    } else if (status == 6) {
        cm.sendNextPrev("2名家族长组队之后，需要5000万金币。这是创建家族联盟所必需的手续费。");
    } else if (status == 7) {
        status = -1;
        cm.sendNextPrev("另外还有一个！如果已经加入其他家族联盟的话，就无法建立新的家族联盟！");
    }
}