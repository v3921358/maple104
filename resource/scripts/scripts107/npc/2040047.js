/*
	NPC Name: 		Sgt. Anderson
	Map(s): 		Ludibrium PQ Maps
	Description: 		Warps you out from Ludi PQ
*/

function start() {
    if (cm.getMapId() != 922010000) {
        cm.sendYesNo("你确定要出去吗?");
    } else {
        if (cm.haveItem(4001022)) {
            cm.removeAll(4001022);
        }
        if (cm.haveItem(4001023)) {
            cm.removeAll(4001023);
        }
        cm.warp(221023300, 0);
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(922010000, 0);
    }
    cm.dispose();
}