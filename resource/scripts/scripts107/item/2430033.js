var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (im.getHyPay(1) >= 300000) {
            im.sendYesNo("�����ǳ�ֵ�齱ר�����ұ�����������˱سɾ��ᡢ��PB��140����װ��Ŷ��������ֵ����300������������ѳ齱һ��Ŷ����ȷ��Ҫ�齱��");
        } else {
            im.sendOk("�ұ�����������˱سɾ��ᡢ��PB��140����װ��Ŷ��������ֵ����300������������ѳ齱һ��Ŷ����ĳ�ֵ��300����");
            im.safeDispose();
        }
    } else if (status == 1) {
        if (im.delPayReward(300000) > 0) {
            var item;
            var chance = Math.floor(Math.random() * 30);
            if (chance >= 0 && chance <= 8) {
                im.gainExp( + 2000000000);
                im.sendOk("��ϲ������20E����ֵ��");
		im.worldMessage("��ϲ���" + im.getChar().getName() + "�ڳ�ֵ��ת��(300��ֵ)����ȡ20E���顣" );
                im.dispose();
            } else if (chance >= 9 && chance <= 19) {
                im.gainMeso( + 100000000);
                im.sendOk("��ϲ������1E��ҡ�");
		im.worldMessage("��ϲ���" + im.getChar().getName() + "�ڳ�ֵ��ת��(300��ֵ)�������õ�1E֧Ʊ��" );
                im.dispose();
            } else {
                var itemList = new Array(2040303, //���������سɾ�
                    2040006, //ͷ�������سɾ�
                    2040007, //ͷ�������سɾ�
                    2040403, //���·����سɾ�
                    2040506, //ȫ���������ݱسɾ�
                    2040507, //ȫ�����׷����سɾ�
                    2040603, //��ȹ�����سɾ�
                    2040507, //ȫ�����׷����سɾ�
                    2040603, //��ȹ�����سɾ�
                    2040709, //Ь�����ݱسɾ�
                    2040710, //Ь����Ծ�سɾ�
                    2040711, //Ь���ٶȱسɾ�
                    2040806, //�������ݱسɾ�
                    2040903, //���Ʒ����سɾ�
                    2040507, //ȫ�����׷����سɾ�
                    2040603, //��ȹ�����سɾ�
                    2041024, //����ħ�������سɾ�
                    2041025, //�������������سɾ�
                    2043003, //���ֽ������سɾ�
                    2044019, //˫�ֽ�ħ���سɾ�
                    2044019, //˫�ֽ�ħ���سɾ�
                    2043103, //���ָ������سɾ�
                    2043203, //���ֶ��������سɾ�
                    2043303, //�̽������سɾ�
                    2043703, //���ȹ����سɾ�
                    2043803, //���ȹ����سɾ�
                    2044003, //˫�ֽ������سɾ�
                    2044019, //˫�ֽ�ħ���سɾ�
                    2044103, //˫�ָ������سɾ�
                    2040903, //���Ʒ����سɾ�
                    2040903, //���Ʒ����سɾ�
                    2044203, //˫�ֶ��������سɾ�
                    2044303, //ǹ�����سɾ�
                    2044403, //ì�����سɾ�
                    2044503, //�������سɾ�
                    2044603, //�󹥻��سɾ�
                    2044703, //ȭ�׹����سɾ�
                    2044815, //ָ�ڹ����سɾ�
                    2044908, //��ǹ�����سɾ�
                    2340000, //ף������
                    2049406, //����Ǳ�ܸ��Ӿ���
                    2049303, //�߼�װ��ǿ������
                    3010070, //���ް�Ʒ����
                    3010073, //babyƷ����
                    3010073, //babyƷ����
                    1402014, //�¶ȼ�
                    1003172, //ʨ��ս��ͷ��
                    1102275, //ʨ��ս������
                    1082295, //ʨ��ս������
                    1052314, //ʨ��ս�����Ӽ�
                    1072485, //ʨ��ս��Ь
                    1003173, //��β��ʦñ��
                    1102276, //��β��ʦ����
                    1082296, //��β��ʦ����
                    1052315, //��β��ʦ����
                    1072486, //��β��ʦЬ
                    1003174, //ӥ���ڱ���ñ
                    1102277, //ӥ���ڱ�����
                    1082297, //ӥ���ڱ�����
                    1052316, //ӥ���ڱ���
                    1072487, //ӥ���ڱ�Ь
                    1003175, //��ѻ֮��׷����ñ
                    1102278, //��ѻ֮����������
                    1082298, //��ѻ֮��׷��������
                    1052317, //��ѻ֮��׷���߿���
                    1072488, //��ѻ֮��׷����Ь
                    1003176, //��ݴ���ñ
                    1102279, //��ݴ�������
                    1082299, //��ݴ�������
                    1052318, //��ݴ�������
                    1072489, //��ݴ���Ь
                    1432086, //ʨ�ĳ�ǹ
                    1442116, //ʨ�ĳ�ì
                    1322096, //ʨ������
                    1422066, //ʨ�ľ޴�
                    1402095, //ʨ��ս��
                    1412065, //ʨ��ս��
                    1302152, //ʨ���䵶
                    1312065, //ʨ���¸�
                    1372084, //��β����
                    1382104, //��β����
                    1452111, //ӥ���ع�
                    1462099, //ӥ������
                    1332130, //��ѻ֮�꣨�̵���
                    1472122, //��ѻ֮��
                    1342036, //����ǵ�
                    1492085, //������
                    1532018, //���ӥצ
                    1302016, //��ݻ���
                    1522018 //������ǹ
                    );
                item = im.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "��ֵ��ת��(300)");
            }
            if (item != -1) {
                im.sendOk("������ #b#t" + item + "##k.");
            } else {
                im.sendOk("��ȷʵ��ֵ��300����?�����,����ȷ���ڱ�����װ��,����,�����������Ƿ���һ�����ϵĿռ�?");
            }
        } else {
            im.sendOk("xx����");
        }
        im.safeDispose();
    }
}