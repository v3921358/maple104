function enter(pi) {
	if (pi.getEvanIntroState("mo30=o;mo40=o;mo41=o;mo42=o")) {
		pi.blockPortal();
		return false;
	}
	pi.updateEvanIntroState("mo30=o;mo40=o;mo41=o;mo42=o");
	pi.blockPortal();
    pi.showWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon42", 1);
	return true;
}