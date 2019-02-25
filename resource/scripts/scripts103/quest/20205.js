/*
 * Cygnus 2nd Job advancement - Proof of test
 * Striker
 */

var status = -1;

function start(mode, type, selection) {
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("I guess you are not ready to tackle on the responsibilities of an official knight.");
	    qm.dispose();
	    return;
	} else if (status >= 2) {
	    status--;
	} else {
	    qm.dispose();
	    return;
	}
    } else {
	status++;
    }
    if (status == 0) {
	if (qm.getQuestStatus(20205) == 0) {
	    qm.forceStartQuest();
	    qm.dispose();
	} else {
	    if (qm.haveItem(4032100, 30)) {
		qm.sendYesNo("So you brought all of Proof of Test... Okay, I believe that you are now qualified to become an official knight. Do you want to become one?");
	    } else {
		qm.dispose(); // Hack
	    }
	}
    } else if (status == 1) {
	if (!qm.canHold(1142067)) {
	    qm.sendOk("You are currently in full inventory, please check.");
	    qm.dispose();
	} else {
	    qm.forceCompleteQuest();
	    if (qm.getJob() != 1510) {
		qm.changeJob(1510); // Striker
		qm.gainItem(4032100, -30);
		qm.gainItem(1142067, 1);
	    }
	    qm.sendNext("The knight-in-training has ended. You are now an official knight of the Knights of Cygnus.");
	}
    } else if (status == 2) {
	qm.sendNextPrev("I have given you some #bSP#k. I have also given you a number of skills for a Soul Master that's only available to knights, so I want you to work on it and hopefully cultivate it as much as your soul.");
    } else if (status == 3) {
	qm.sendPrev("Now that you are officially a Knight of cygnus, act like one so you will keep Goodness's name up high.");
	qm.dispose();
    }
}
