function applock() {
	if (app == 2) {
		$(".pclock").show();
	} else if (app == 1) {
		$(".pcalculator").show();
	} else if (app == 2) {
		$(".pcalculator").show();
	} else if (app == 3) {
		$(".pdondep").show();
		gamerotate();
	} else if (app == 4) {
		$(".psuckhoe").show();
	} else if (app == 5) {
		$(".pthosan").show();
		gamerotate();
	} else if (app == 6) {
		$(".pcalendar").show();
	} else if (app == 7) {
		$(".pphotos").show();
	} else if (app == 8) {
		$(".psetting").show();
	} else if (app == 9) {
		$(".pmusic").show();
	} else if (app == 10) {
		$(".pmessage").show();
	} else if (app == 11) {
		$(".pcall").show();
		themea();
		//$(".bordert").css("background-size", "500px");
		//$(".bordert").css("background-image", "linear-gradient(violet, deeppink)");

	} else if (app == 12) {
		$(".pyoutube").show();
	} else {}
}

function gamerotate() {
	$(".border").css("transform", "rotateZ(-90deg");
	$(".warning").hide();
}

function deletealllockapp() {
	deletealll();
	$(".lockapp").hide();
}