function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        //cm.warp(240040700);
        cm.dispose();
    } 
    else {
        if (mode == 0) {
            //cm.warp(240040702);
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {			
            cm.sendNext("#v4031509##v4031509##v4031509##v4031509##v4031509##v4031509##v4031509##v4031509##v4031509##v4031509##v5000029##v5000029# #v5000029##v5000029##v5000029##v5000029##v5000029##v5000029##v5000029#  "+cm.GetSN()+"带给你无限的快乐~!,#l#k\r\n#r想挑战龙之传人副本?有可能获得                      #v1322052##v1332021##v1312031##v1122076##v1702274##v1402091##v1102248##v1003114##v1702208##v1402037##v3010046##v3010047##v3010096##v3010107##v3010108##v3010147##v3010128##v3010200#\r\n想的话就点下一项吧~!`                                #v5000028##v5000028##v5000028##v5000028##v5000028##v5000028##v5000028##v5000028##v5000028##v5000028#");											
        }else if (status == 1) {
            cm.sendYesNo("#e#b#v5000028#确定要去挑战龙之传人副本么?");
        }else if (status == 2) {
            cm.warp(240060201);			
            cm.dispose();
        }
    }
}

