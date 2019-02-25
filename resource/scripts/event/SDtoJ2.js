importPackage(net.sf.odinms.tools);

var returnTo = new Array(310000010,310000010);
var rideTo = new Array(310000010,310000010);
var birdRide = new Array(200090600,200090310);
var myRide;
var returnMap;
var map;
var docked;

var timeOnRide = 2 * 60 * 1000; //Seconds

function init() {
	em.setProperty("isRiding","false");
}

function playerEntry(eim, player) {
	myRide = em.getProperty("myRide");
	docked = em.getChannelServer().getMapFactory().getMap(rideTo[myRide]);
	returnMap = em.getChannelServer().getMapFactory().getMap(returnTo[myRide]);
	onRide = em.getChannelServer().getMapFactory().getMap(birdRide[myRide]);

	em.setProperty("isRiding","true");
	em.schedule("timeOut", timeOnRide);
	player.changeMap(onRide, onRide.getPortal(0));
	player.getClient().getSession().write(MaplePacketCreator.getClock(timeOnRide/1000));
}

function timeOut() {
	var iter = em.getInstance("SDtoJ2").getPlayers().iterator();
	while (iter.hasNext()) {
		var player = iter.next();
		player.changeMap(docked, docked.getPortal(0));
		em.getInstance("SDtoJ2").unregisterPlayer(player);
	}
	em.setProperty("isRiding","false");
	em.disposeInstance("SDtoJ2");
}

function playerDisconnected(eim, player) {
	eim.unregisterPlayer(player);
	em.disposeInstance("SDtoJ2");
}

function cancelSchedule() {
}
