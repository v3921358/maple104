function enter(pi) {
	if (pi.getEvanIntroState("dt00=o;mo00=o;mo01=o")) {
		pi.blockPortal();
		return false;
	}
	pi.updateEvanIntroState("dt00=o;mo00=o;mo01=o");
	pi.blockPortal();
        pi.showWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon01", 1);
	return true;
}