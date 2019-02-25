var status = -1;
var maxAkayile = 2;

function start() {
    if (cm.getPlayer().getLevel() < 80) {
        cm.sendOk("��ĵȼ�С��80����������ս�������ա�");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2) {
        cm.sendOk("��������ֻ����1��2Ƶ���ٻ���");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("AkayileBattle");
    if (em == null) {
        cm.sendOk("�ű�����,����ϵ����Ա.");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");
    var data = cm.getBossLog("��������");
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("Akayile");
        if (squadAvailability == -1) {
            status = 0;
            if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                cm.dispose();
                return;
            }
            cm.sendYesNo("��Ҫ��Ϊ �������� Զ���Ӷӳ���?");
        } else if (squadAvailability == 1) {
            if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("Akayile");
            if (type == -1) {
                cm.sendOk("�Ѿ����������롣");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("Akayile");
                if (memberType == 2) {
                    cm.sendOk("���Ѿ���Զ�����Ʋ�С��.���ܽ���Զ������.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("������ʲô? \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                } else if (memberType == -1) {
                    cm.sendOk("5���ӽ���Զ�����Ѿ��Զ�ע��.������ע��");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("������ʲô? \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("Զ���Ӳ���: \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#���Զ���ӳ�Ա#l \r\n#b#L2#�鿴��������#l \r\n#r#L3#��ʼԶ������#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("AkayileBattle");
            if (eim == null) {
                var squd = cm.getSquad("Akayile");
                if (squd != null) {
                    if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                        cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("��Ҫ��������Զ��������");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("AkayileBattle");
        if (eim == null) {
            var squd = cm.getSquad("Akayile");
            if (squd != null) {
                if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                    cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("��Ҫ��������Զ��������");
            status = 1;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("Akayile", 5, " �ѱ�����Ϊ��������Զ���Ӷӳ�,���λ��ս����5�����ڱ���.")) {
                cm.sendOk("���Ѿ�������Ϊ��������Զ���Ӷӳ����ڽ�������5�����ڣ�����������Զ���ӳ�Ա.�뾡��Ӻö�Ա.����5���Ӻ󽫻�ȡ��Զ���Ӷӳ�.");
            } else {
                cm.sendOk("�����������Զ���ӵĻ�����ô�������Ұɡ�");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("AkayileBattle", "Akayile")) {
            cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Akayile");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("�����Ѿ���Զ�����ڽ���������...");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Akayile", 0)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Akayile", true);
            if (ba == 2) {
                cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
            } else if (ba == 1) {
                cm.sendOk("�������Զ����.");
            } else {
                cm.sendOk("���Ѿ���Զ���ӳ�Ա��.");
            }
        } else { // withdraw
            var baa = cm.addMember("Akayile", false);
            if (baa == 1) {
                cm.sendOk("��ɹ��˳���Զ����.");
            } else {
                cm.sendOk("�㻹����Զ���ӳ�Ա.�����˳�Զ����.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("Akayile", 0)) {
                    cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ�����");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Akayile", 1)) {
                    cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ�����");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Akayile", 2)) {
                    cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ�����");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Akayile") != null) {
                    var dd = cm.getEventManager("AkayileBattle");
                    dd.startInstance(cm.getSquad("Akayile"), cm.getMap(), "160111");
                } else {
                    cm.sendOk("����δ֪�Ĵ���Զ���Ӿܾ���Ĳ�����");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("Akayile", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Akayile", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}