/*
 *
 *  此脚本由冒险岛制作完成
 * 
 *
 */


importPackage(net.sf.odinms.client);

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


var status = 0;
var cost = 210000;
var jilv = 0;
var costa;
var xx = -1;



	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function GetRandomNum(Min,Max){  
		var Range = Max - Min;  
		var Rand = Math.random();  
		return(Min + Math.round(Rand * Range));  
		}  
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;





	if (status == 0) {
		
   	    var add = "欢迎来到#r◆◇◆冒险岛#k,这里是本服#r赌博与抽奖系统#k,";

		add += "一个强大游戏,就要拥有最全面的功能,本服特色多多,时尚全面,";

		add += "为您打造一个冒险之家的感觉,喜欢的朋友记得带上朋友一起哦.\r\n\r\n ";

		add += ""+xxx+"-增加下注请点#e#b[加注]#n#k\r\n ";

		add += ""+xxx+"-加倍赌博赔率由左到右赔率递增,奖金增加概率降低.\r\n ";

		add += ""+xxx+"-当前下注押金:#b<#e#r 金币赌博 #n#b>#b<#e#r "+cost+" 冒险币#n#b >#k\r\n";

		add += "#L0#"+ttt+"-[#r加注#k]#l\r\n\r\n";

		add += "#L1#"+ttt+"-[#b1:1倍赔率#k]#l";

		add += "#L2#"+ttt+"-[#b1:2倍赔率#k]#l";

		add += "#L3#"+ttt+"-[#b1:3倍赔率#k]#l";

		cm.sendSimple (add,2);   

	} else if (status == 1) {

	if (selection == 0){
		cm.sendOk("#b成功加注#r1000万#b,请点确定后查看.");
		cost = cost + 10000000
		status = -1; 

	} else if (selection == 1){

   	    var add = "#b<#e#r 金币赌博 #n#b>\r\n\r\n";

		add += ""+ttt+"-您选择的是[#r赔率1:1#b].\r\n";

		add += ""+ttt+"-您的押注为[#r"+cost+"冒险币#b].\r\n";

		add += ""+ttt+"-如果胜利将获取[#r除本金外"+cost*1+"冒险币#b]的奖励.\r\n";

		add += ""+ttt+"-点击[#r是#b]开始赌博,点击[#r不是#b]放弃赌博.";

		cm.sendYesNo (add); 

		jilv = 1; 

		xx=0

	} else if (selection == 2){

   	    var add = "#b<#e#r 金币赌博 #n#b>\r\n\r\n";

		add += ""+ttt+"-您选择的是[#r赔率1:2#b].\r\n";

		add += ""+ttt+"-您的押注为[#r"+cost+"冒险币#b].\r\n";

		add += ""+ttt+"-如果胜利将获取[#r除本金外"+cost*2+"冒险币#b]的奖励.\r\n";

		add += ""+ttt+"-点击[#r是#b]开始赌博,点击[#r不是#b]放弃赌博.";

		cm.sendYesNo (add); 

		jilv = 2; 

		xx=0

	} else if (selection == 3){

   	    var add = "#b<#e#r 金币赌博 #n#b>\r\n\r\n";

		add += ""+ttt+"-您选择的是[#r赔率1:3#b].\r\n";

		add += ""+ttt+"-您的押注为[#r"+cost+"冒险币#b].\r\n";

		add += ""+ttt+"-如果胜利将获取[#r除本金外"+cost*3+"冒险币#b]的奖励.\r\n";

		add += ""+ttt+"-点击[#r是#b]开始赌博,点击[#r不是#b]放弃赌博.";

		cm.sendYesNo (add); 

		jilv = 3; 

		xx=0

		}

	} else if (status == 2) {

	if (xx == 0){
		if (jilv == 0){
		} else if (jilv != 0){
		if (cm.getMeso() < cost) {
		cm.sendOk("#b您的冒险币不足,不能参加赌博.....");
		status = -1; 
		}else {
		jiaru = GetRandomNum(0,jilv);
		if (jiaru == 0) {
		costa = cost * jilv
		cm.gainMeso(costa)
		cm.sendOk("#b恭喜,您已经大获全胜...");
		status = -1; 
		} else {
		cm.gainMeso(-cost)
		cm.sendOk("#b悲剧啊.你输了....");
		status = -1; 
		}
		}
		}





		









		}					
		}
		}
		}

