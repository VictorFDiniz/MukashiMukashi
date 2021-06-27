function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function openNavMobi_Portrait() {

	var x = document.getElementById("menumobi_close");
	var y = document.getElementById("arrow_down")


	if (x.className === "menumobi_close" || (x.className === "menumobi_close2")) {
		x.className = "menumobi_open";
		y.className = "arrow_up";

	} else if (x.className === "menumobi_open") { 
		x.className = "menumobi_close2";
		y.className = "arrow_down";
		sleep(400).then(() => { x.className = "menumobi_close"; });

	}

}

function openNavMobi_Landscape() {

	var x = document.getElementById("ThreelineMobi_close");
	var y = document.getElementById("NavigationMobi_close");


	if (x.className === "ThreelineMobi_close") {
		x.className = "ThreelineMobi_open";
		y.className = "NavigationMobi_open";

	}

}

function closeNavMobi_Landscape() {

	var x = document.getElementById("NavigationMobi_close");
	var y = document.getElementById("ThreelineMobi_close");

	if (x.className === "NavigationMobi_open") {
		x.className = "NavigationMobi_close2";
		y.className = "ThreelineMobi_close2";
		sleep(400).then(() => { x.className = "NavigationMobi_close"; y.className = "ThreelineMobi_close" });

	}
}