/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("我是专为#rVIP4#k以上会员理发的，只要你有万能高级美发卡，就把头发交给我吧。选择你想做的事情吧。\r\n#b#L0#更换发型(使用高级会员卡)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33710, 33720, 33750, 33660, 33670, 33680, 33690, 33970, 33980, 33990, 33810, 33960, 33730, 33740, 33760, 33770, 33800, 36020, 33960, 36300, 36290, 36010, 36220, 37280, 36340, 37020, 36030, 33950, 33830, 33930, 33940, 33820, 33800, 33760, 33690, 33700, 33670, 36410, 36360, 36450, 36440, 36430, 36190, 36150, 36330, 36110];
            } else {
                hair_Colo_new = [34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34670, 34710, 34720, 34750, 34760, 31990, 34880, 34890, 34900, 34910, 34680, 34690, 34660, 34790, 34800, 34860, 34540, 34700, 34730, 34740, 34770, 34830, 34870, 34990, 37000, 36330, 36110, 37320, 37290, 36370, 36360, 34970, 37090, 36180, 37200, 37190, 37180, 36310, 34820, 37050, 34810, 33810, 34850, 34840, 34610, 33730, 34760, 34640, 37230, 37100, 37060, 37040, 37350, 37430, 37420, 37410, 37220, 37210, 37310, 37300, 37260, 37250, 37240];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("我可以帮你换成全新的发型。你厌倦了现在的发型了吗？只要你有#b#z5150052##k，我就可以帮你更换发型。请慢慢挑选自己喜欢的发型～", hair_Colo_new, 5150052);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.askAvatar("我们可以为你改变头发的颜色。是不是已经厌倦了头发的颜色啊？如果你有#b万能会员卡#k，我就可以给你染发，慢慢挑选你喜欢的颜色吧！", hair_Colo_new, 5151036);
        }
    } else if (status == 2) {
        if (beauty == 1) {
        if (cm.getChar().getVip() < 4) {
            cm.sendOk("更换失败，会员等级必须在#rVIP4#k以上才能使用");
            } else if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
                cm.sendOk("理发好了，怎么样？看看你的新发型吧！");
            } else {
                cm.sendOk("嗯……你好像没有#b#z5150052##k？不好意思，没有#b#z5150052##k，我就不能帮你理发，虽然是VIP但是也应该去商城买张卡吧？");
            }
        } else {
            if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
                cm.sendOk("好了，让朋友们赞叹你的新发色吧！");
            } else {
                cm.sendOk("嗯… 看来你没有我们美发店的会嘛！不好意思，如果没有会员卡，我们不可以给你染头发。");
            }
        }
        cm.dispose();
    }
}