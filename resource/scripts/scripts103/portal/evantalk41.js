function enter(pi) {
	if (pi.getEvanIntroState("mo30=o;mo40=o;mo41=o")) {
		pi.blockPortal();
		return false;
	}
	pi.updateEvanIntroState("mo30=o;mo40=o;mo41=o");
	pi.blockPortal();
	pi.showWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon41", 1);
	return true;
}