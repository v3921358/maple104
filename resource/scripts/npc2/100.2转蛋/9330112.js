var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(5220040)) { //���ְٱ�ȯ
            cm.sendYesNo("ð�յ�ת�������и���#bװ���������ϡ������ĵ���#k�ޣ�ʹ�á�#b#t5220040##k���Ϳ��Խ���. ��Ϸ�̳��еġ�������������Ϸ���������ޡ� ���粻��ת��ȯ�Ļ����ǲ�����ʹ���ҵġ�����Ҫ��ת����ô? ");
        } else {
            cm.sendOk("�㱳������#b#t5220040##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var item;
        if (Math.floor(Math.random() * 300) == 0) {
            item = cm.gainGachaponItem(1102042, 1);
        } else {
            var itemList = new Array(1032007, //��ĸ��
            1032008, //è�۶���
            1032009, //�Ʒ�����
            1032012, //���ö���
            1032017, //õ�����
            1032019, //ˮ�ɶ���
            1032022, //��ɫԲ�Ͷ���
            1032023, //��ݮ����
            1032025, //Ҷ�Ӷ���
            1032026, //��ˮ������
            1032040, //��Ҷ�Ͷ���
            1032041, //��Ҷ�Ͷ���
            1032042, //��Ҷ�Ͷ���
            //-------ñ��-------
            1002418, //�ϱ�ֽͷ��
            1002419, //��Ҷñ
            1002424, //������ñ
            1002425, //������ñ
            1002436, //����˹̹֮ñ
            1002441, //��Ѫͷ��
            1002448, //��ɫͷ��
            1002452, //���ǰ�ͷ��
            1002453, //���Ǻ�ͷ��
            1002454, //���Ǻ�ͷ��
            1002455, //���Ǻ�ͷ��
            1002492, //��ɫ����ñ
            1002543, //����ñ
            1002550, //��ɫ������ͷ��
            1002551, //����ͷ��
            1002554, //����ͷ��
            1002699, //�Ϲ�ñ��
            1002776, //����ھ���
            //------����------
            1102000, //��ɫð������
            1102001, //��ɫð������
            1102002, //��ɫð������
            1102003, //��ɫð������
            1102004, //��ɫð������
            1102011, //��ɫ�ػ�����
            1102031, //����������
            1102032, //����������
            1102033, //����������
            1102034, //����������
            1102035, //����������
            1102040, //��������(��)
            1102041, //��������(��)
            1102042, //��������(��)
            1102043, //��������(��)
            1102046, //�������
            1102047, //��������
            1102048, //��������
            1102140, //������������
            1102147, //��߽�������
            1102172, //���㲻������
            1102174, //������Ա����
            1102166, //��Ҷ����
            1102167, //��Ҷ����
            1102168, //��Ҷ����
            //------����------
            1082001, //���ƶ�����
            1082002, //��������
            1082098, //��ս������
            1082099, //��ս������
            1082100, //��ս������
            1082112, //����ʹ����
            1082114, //����˹��ȭ��
            1082115, //����˹��ȭ��
            1082116, //����˹��ȭ��
            1082117, //����˹��ȭ��
            1082139, //��������(��)
            1082140, //��������(��)
            1082141, //��������(��)
            1082144, //�ù�����(��)
            1082145, //��������(��)
            1082146, //��������(��)
            1082147, //��������(��)
            1082148, //��������(��)
            1082149, //��������(��)
            1082150, //��������(��)
            1082168, //��������
            1082234, //���㶨������
            1082239, //������������
            //-------����------
            1302016, //��ɫ��ɡ
            1302017, //��ɫ��ɡ
            1302018, //����
            1302019, //������
            1302020, //��Ҷս��
            1302021, //��Ƥ��ͷ
            1302024, //�ϱ�ֽ��
            1302025, //����ɡ
            1302026, //����ɡ
            1302027, //����ɡ
            1302028, //����ɡ
            1302029, //����ɡ
            1302030, //��Ҷ��
            1302049, //���߱���
            1302050, //ս��
            1302051, //����֮��
            1302052, //���͵�
            1302053, //���͵�
            1302054, //����
            1302056, //һ������
            1302058, //ð�յ�ɡ
            1302059, //�������罣
            1302060, //ս��
            1302061, //���ٱ���
            1302087, //���
            1312002, //����
            1312012, //Ǭ��Ȧ
            1312013, //�йٱ�
            1312030, //��Ӱҡ��
            1312031, //����ŭն
            1312032, //��Ҷ�ƻ���
            1312033, //��Ҷ3����
            1312034, //��ɫ������ӾȦ
            1312037, //������Ÿ�
            1312038, //�������Ÿ�
            1312039, //ʥ��������ʹ����(���ָ�)
            1322000, //���ϴ�
            1322001, //����
            1322002, //�ִ�
            1322003, //������
            1322004, //���ʹ�
            1322005, //����
            1322006, //�ֹ�
            1322007, //Ƥ�������
            1322008, //007���
            1322009, //��Ͱ��
            1322010, //��������
            1322011, //��������
            1322012, //��ɫשͷ
            1322056, //��ɫ������ӾȦ
            1322060, //���㾪����
            1322061, //����������
            1322065, //ʥ��������ʹ����(���ֶ���)
            1322071, //�ɿ�����
            1332053, //Ұ���տ���
            1332057, //��Ҷ3����
            1332059, //��ɫ������ӾȦ
            1332063, //���������Ķ̽�
            1332066, //���ֹκ���
            1402006, //��ԭ֮��
            1402007, //���¾޵�
            1402008, //������
            1402009, //ľ���
            1402010, //�����
            1402011, //�޼���
            1402012, //������
            1402013, //���ս�
            1402015, //����ɽ��֮��
            1402016, //������֮��
            1402017, //�����彣
            1402018, //��ľ��
            1402019, //��
            1402020, //����
            1402021, //�޼���
            1402022, //������
            1402023, //����ɽ��֮��
            1402024, //��
            1402025, //����
            1402026, //�޼���
            1402027, //������
            1402028, //����ɽ��֮��
            1402029, //����������
            1402030, //��
            1402031, //����
            1402032, //�޼���
            1402033, //������
            1402034, //����ɽ��֮��
            1402035, //ն�쵶
            1402036, //�����޽�
           //1402037, //������
            1402039, //��Ҷ���׽�
            1402040, //��Ҷ3����
            1402041, //��ɫ������ӾȦ
            1402044, //�Ϲϵ���
            1402046, //������ڤ��
            1402047, //������ڤ��
            1402053, //ʥ��������ʹ����(˫�ֽ�)
            1412000, //˫�ָ�
            1412001, //����
            1412002, //������
            1412003, //̫��֮��
            1412004, //���ߵ�
            1412005, //�񶷸�
            1412006, //���;޸�
            1412007, //������
            1412008, //�׵縫
            1412009, //������֮��
            1412021, //�����
            1412022, //̫��֮��
            1412023, //������
            1412024, //�׵縫
            1412025, //������֮��
            1412026, //����ħ����
            1412027, //��ҶǬ����
            1412028, //��Ҷ3����
            1412029, //��ɫ������ӾȦ
            1412033, //����������
            1412034, //����������
            1412035, //ʥ��������ʹ����(˫�ָ�)
            1422004, //����
            1422005, //�ƽ�
            1422006, //ʮ�ָ�
            1422007, //���˴�
            1422008, //��
            1422009, //����֮��
            1422010, //���֮��
            1422011, //��ƿ
            1422012, //����֮��
            1422013, //ʨ��֮��
            1422014, //��Ҷ��
            1422015, //�ƽ�
            1422028, //�������촸
            1422029, //��Ҷ������
            1422030, //�ۺ캣������
            1422031, //��ɫ��������
            1422032, //��Ҷ3����
            1422033, //��ɫ������ӾȦ
            1422036, //��߽��˵Ĵ���
            1422037, //����������
            1422038, //����������
            //------ҩˮ------
            1402049, //�İ�ѻ֮��
            1002894, //��ɫ��֯����
            1002895, //��ɫ��֯����
            1002896, //��ɫ��֯����
            1002897, //��ɫ��֯����
            1002898, //��ɫ��֯����
            1002899, //��ɫ��֯����
            1002800, //��ɫ��֯����
            1002915, //�Ǹ���˹��ñ��(����
            1012056, //������
            1122001, //��ɫ�������
            1122002, //��ɫ�������
            1122003, //��ɫ�������
            1122004, //�ۺ�������
            1122005, //��ɫ�������
            1122006, //��ɫ�������
            1122015, //��ҶΧ��
            1002391, //����ͷ��(��)
            1002392, //����ͷ��(��)
            1002393, //����ͷ��(��)
            1002394, //����ͷ��(��)
            1002395, //����ͷ��(��)
            1002418, //�ϱ�ֽͷ��
            1002419, //��Ҷñ
            1002424, //������ñ
            1002425, //������ñ
            1002441, //��Ѫͷ��
            1002508, //��Ҷͷ��
            1002509, //��Ҷͷ��
            1002510, //��Ҷͷ��
            1002511, //��Ҷͷ��
            1002547, //������ñ��
            1002550, //��ɫ������ͷ��
            1002551, //����ͷ��
            // ------ 093 ------------
            1432075, //�ƽ��Ҷǹ
            1312056, //�ƽ��Ҷ����
            1312065, //δ��֮�ŵ��ָ�
            1322084, //�ƽ��Ҷ����
            1322091, //Ѧ��˹�ı��紸
            1302163, //����ս��
            1302164, //�������͵�
            1302165, //����������
            1432089, //���������
            1432090, //����ʮ��ǹ
            1432091, //���纮����ħǹ
            1302143, //һ������֮�͵��ֽ�
            1302144, //��������֮�͵��ֽ�
            1302145, //��������֮�͵��ֽ�
            1312058, //һ������֮�͵��ָ�
            1312059, //��������֮�͵��ָ�
            1312060, //��������֮�͵��ָ�
            1322086, //һ������֮�͵��ֶ���
            1322087, //��������֮�͵��ֶ���
            1322088, //��������֮�͵��ֶ���
            1402086, //һ������֮��˫�ֽ�
            1402087, //��������֮��˫�ֽ�
            1402088, //��������֮��˫�ֽ�
            1412058, //һ������֮��˫�ָ�
            1412059, //��������֮��˫�ָ�
            1412060, //��������֮��˫�ָ�
            1422059, //һ������֮��˫�ֶ���
            1422060, //��������֮��˫�ֶ���
            1422061, //��������֮��˫�ֶ���
            1432077, //һ������֮��ǹ
            1432078, //��������֮��ǹ
            1432079, //��������֮��ǹ
            1442107, //һ������֮��ì
            1442108, //2������֮��ì
            1442109, //3������֮��ì
            1302172, //�»ƽ��Ҷ���ֽ�
            1312071, //�»ƽ��Ҷ����
            1322105, //�»ƽ��Ҷ����
            1412070, //�»ƽ��Ҷս��
            1422072, //�»ƽ��Ҷ�޴�
            1432098, //�»ƽ��Ҷǹ
            1442135, //�»ƽ��Ҷ��ɽ��
            1402104, //��Ҷ��ɬ��
            1402105, //��Ҷ������
            1442130, //��Ҷ��ɬ��
            1442131, //��Ҷ������
            1402085, //�ƽ��Ҷ˫�ֽ�
            1302911, //����֮��
//------------------------------------------------
/*3010002, //��ɫʱ��ת��
3010003, //��ɫʱ��ת�� 
3010004, //����������
3010005, //����������
3010006, //��ɫʱ��ת��
3010209, //��ݱ�����±�����
3010210, //��ݮ������±�����
3010007, //��ɫ��������
3010008, //��ɫ��������
3010009, //�齵�
3010010, //��ɫ�������� 
3010012, //��ʿ ���� 
3010013, //�Ƴ�����
3010014, //������
3010016, //��ɫ��������
3010294, //��ɫ��������
3010017, //��ɫ��������
3010295, //��ɫ�������棨�ɽ��ף�
3010018, //Ҭ����ɳ̲��
3010019, //��˾��
3010021, //ůů��
3010024, //��߷�����
3010025, //��Ҷ�����
3010028, //�����ķ�²
3010029, //������
3010030, //�ڻ���
3010031, //�컷��
3010032, //�ƻ���
3010033, //�̻���
3010034, //�Ƴ�����(��ɫ)
3010035, //�Ƴ�����(��ɫ)
3010036, //������ǧ
3010037, //������
3010038, //����ɳ�� 
3010039, //��ɫ�������� 
3010040, //������ 
3010041, //��������
3010043, //ħŮ�ķ�ɨ��
//3010044, //ͬһ��ɡ��
3010045, //��������
3010046, //������ 
3010047, //������ 
3010048, //ʥ��������
3010049, //ѩ����
3010199, //ѩ����
3010050, //������
3010051, //ɳĮ����1����
3010052, //ɳĮ����2����
3010054, //������ല
3010057, //Ѫɫõ�� 
3010058, //����ĩ�� 
3010060, //���ĵ�
3010062, //���
3010068, //¶ˮ����
3010069, //��Ʒ�
//3010070, //���ް�Ʒ����
3010071, //������
3010073, //babyƷ���� 
3010075, //��Ϊ���ֿ�
3010077, //èͷӥ����
3010085, //����������
3010092, //ħŮ�ķ�ɨ��
3010093, //�����Ļ�
3010094, //ƯƯ������
3010095, //ʯͷ������ 
3010096, //������ʯ����
3010098, //����լ��
3010099, //����������
3010100, //��������
3010106, //ѩ��ս��
3010110, //���ʴ��������
3010111, //��������
3010112, //�������
3010116, //ҡ��֮������
3010117, //ħ��������
3010118, //�ǹ���������
3010119, //��������
3010120, //�ʵ�����
3010123, //���ջ���
3010124, //����˹��������
3010125, //�ᱴ¡ս����
3010126, //����ħ����
3010127, //��������
3011000, //����������
3012001, //����
3012002, //ԡͰ
3012003, //��������
3012006, //�紵����
3012010, //�ɿ�����������
3012011, //�Ұ��ɿ������
3020000, //̰����è��
//3020001, //����������
3010061, //������
3010063, //�������Ǳ����� 
3010064, //��ɫɰ�ñ����� 
3010065, //�ۺ캣̲������ 
3010066, //����ɫ��ëɳ�� 
3010067, //��ɫ���ʦ��
3010080, //�������F�a 
3010081, //��ñ�������
3010082, //��ñ������� 
3010083, //�����������
3010084, //̫ƽ���������
3010097, //��̵�ľ�� 
3010107, //�����ĵ�����
3010108, //������ǧ 
3010109, //ů¯��
3010292, //ů¯�Σ��ɽ��ף�
3010113, //�Ļ귢�������� 
3010114, //��²�Ұɣ�����
3010115, //�ܱ�����
3010055, //��ѩ��������
3010137, //��������
3010149, //è�������
3010144, //��Ϧ����
3010155, //��Ӱ˫����èͷӥ����
3010020, //����uľͰ 
3010078, //����è����
3010079, //��èè����
3010105, //�{ɫ����������
3010102, //�{ɫ����������
3010103, //�{ɫ����������
3010104, //�{ɫ����������
3010026, //���鸽������������
3010129, //��������
3010130, //Ѫɫõ�� 
3010131, //̰����è�� 
3010132, //����������
3010133, //������
3010134, //��Ҷ�����
3010157, //��������
3010186, //��������
3010191, //��������
3010194, //ҰӪ��������
3010202, //��˵��Ҷ�¡���
3010203, //�ۺ�ɳ̲����ɡ
3010205, //����¼��������
3010206, //���뻭������
3010207, //���ֺ�������
3010208, //��è����
3010211, //��������
3010162, //��������
3010163, //������
3010164, //������(����)  
3010135, //���ն��������� 
3010139, //˽�ܿռ�
3010168, //������������
3010170, //ѩҹ����
3010172, //�ǿ�����
3010173, //��ʥ����������
3010175, //����������
3010179, //��β��è����
3010169, //ֽ�����������
3010171, //����������
3010174, //Ů����ҩ��
3010182, //���Ӽ�����
3010183, //���ܲ�����
3010299, //С��������
3010053, //���Ӽ��������
3010187, //���������� 
3010142, //ˮ�������
3013000, //ӣ������
3010152, //������������ 
3010128, //��������
3010140, //���տ����� 
3010291, //���տ��������ɽ��ף�
3010141, //��������
3010151, //���˵�����
//3010166, //˫��ͬ��
3010180, //HP����
3010181, //MP����
3010184, //��������
//3010189, //����������
//3010188, //�ࡤ�װ�����
3010220, //�Ұ���������
3010218, //�ǿ˶�������
//3010293, //�ǿ˶������ӣ��ɽ��ף�
3010219, //������������
3010221, //�Ұ��ڱ�����
3010212, //��������
3010196, //����ԡ����
3010177, //�ֱ�����
//3010197, //Ӣ�۵�����-ս��
//3010200, //Ӣ�۵�����-���� 
//3010201, //Ӣ�۵�����-��Ӱ˫��
3010161, //������
3010222, //���ð������
3010226, //�¹���������
3010281, //����֮������
3010282, //�����ɺ���
3010283, //��̺��
3010288, //���������
3010195, //�޼�֮������
3010280, //ˮ������
3010286, //ŵ����˹���� 
3010296, //���۵�ʥ������
3010287, //��������
3010290, //��ħ������
3010300, //��ɫHPҩˮ����
3010301, //�߼�HPҩˮ����
3010302, //����ҩˮ����
3010303, //�ӷʱ�����
3010304, //��ħ��������
3010305, //õ���ֱ�����
3010306, //�����Ļ�����
3010138, //����������
3010311, //��������
3010224, //�����������
3010225, //Ʒ��������
3010257, //�����¡���
3010279, //�����Ϲ�����
3010320, //�����̶�ͯ������
3010321, //�������ն�ͯ������
3010289, //���˼Ҷ�ͯ������
3010356, //��ܰ�ɻ���*/
//--------------------------------------
            1442111, //������֮��ì
            1442110, //ĩ������֮��ì
            1432081, //������֮��ǹ
            1422063, //������֮��˫�ֶ���
            1412062, //������֮��˫�ָ�
            1402090, //������֮��˫�ֽ�
            1322090, //������֮�͵��ֶ���
            1312062 //������֮�͵��ָ�
            );
            item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "սʿת����");
        }
        if (item != -1) {
            cm.gainItem(5220040, -1);
            cm.sendOk("������ #b#t" + item + "##k.");
        } else {
            cm.sendOk("��ȷʵ��#b#t5220040##k��?�����,����ȷ���ڱ�����װ��,����,�����������Ƿ���һ�����ϵĿռ�?");
        }
        cm.safeDispose();
    }
}