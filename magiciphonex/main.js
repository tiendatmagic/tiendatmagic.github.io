var power = 1;
var session = 0;
var rotatee = 0;
var app = 0;
var tbpass = 0;
var lockscreen = 0;
$(".setvolume").click(function () {
	rotatee += 1;
	rotateee();
});
$(".power").click(function () {
	if (power == 1) {
		$(".screen").hide();
		$(".bordert").css("background-image", "");
		$(".bordert").css("background", "black");
		power = 0;
	} else {
		if (session == 0) {
			theme();
			$(".bordert").css("background-size", "500px");
			$(".screen").show();
			power += 1;
		} else {
			themea();
			$(".screen").show();
			power += 1;
		}
	}
});
$(".calculator").click(function () {
	app = 1;
	openapp();
});
$(".clock").click(function () {
	app = 2;
	openapp();
});
$(".gdondep").click(function () {
	app = 3;
	openapp();
});
$(".suckhoe").click(function () {
	app = 4;
	openapp();
});
$(".gthosan").click(function () {
	app = 5;
	openapp();
});
$(".gcalendar").click(function () {
	app = 6;
	openapp();
});
$(".gphotos").click(function () {
	app = 7;
	openapp();
	$(".psetting").hide();
});
$(".gsetting").click(function () {
	app = 8;
	openapp();
});

$(".gmusic").click(function () {
	app = 9;
	openapp();
});
$(".message").click(function () {
	app = 10;
	openapp();
});
$(".call").click(function () {
	app = 11;
	openapp();
})
$(".gyoutube").click(function () {
	app = 12;
	openapp();
});


$(".home,.btnexit,.back").click(function () {
	home();
});
$(".borderp .btnc").click(function () {
	tbpass = 1;
	$(".tbpass").hide();
});
$(".borderp .btnk").click(function () {
	tbpass = 0;
	$(".tbpass").hide();
});
$(".btnko").click(function () {
	$(".tbb").hide();
});

function themea() {
	if (app == 11) {
		if (sselectedimgg == 1) {
			$(".bordert").css("background-image", "url('./images/imgphotos/1.jpg'");
		} else if (sselectedimgg == 2) {
			$(".bordert").css("background-image", "url('./images/imgphotos/2.jpg'");
			alert("OK");
		} else if (sselectedimgg == 3) {
			$(".bordert").css("background-image", "url('./images/imgphotos/3.jpg'");
		} else if (sselectedimgg == 4) {
			$(".bordert").css("background-image", "url('./images/imgphotos/4.jpg'");
		} else if (sselectedimgg == 5) {
			$(".bordert").css("background-image", "url('./images/imgphotos/5.jpg'");
		} else {
			$(".bordert").css("background-image", "linear-gradient(violet, deeppink)");
		}
	} else {
		$(".bordert").css("background-image", "");
		$(".bordert").css("background", "white");
	}
	$(".bordert").css("background-size", "500px");
}

function theme() {
	if (sselectedimg == 1) {
		$(".bordert").css("background-image", "url('./images/imgphotos/1.jpg'");
	} else if (sselectedimg == 2) {
		$(".bordert").css("background-image", "url('./images/imgphotos/2.jpg'");
	} else if (sselectedimg == 3) {
		$(".bordert").css("background-image", "url('./images/imgphotos/3.jpg'");
	} else if (sselectedimg == 4) {
		$(".bordert").css("background-image", "url('./images/imgphotos/4.jpg'");
	} else if (sselectedimg == 5) {
		$(".bordert").css("background-image", "url('./images/imgphotos/5.jpg'");
	} else {
		$(".bordert").css("background-image", "url('./images/border.jpg'");
	}
	$(".bordert").css("background-size", "500px");
}

function openapp() {
	session = 1;
	$(".bordert").css("background-image", "");
	$(".bordert").css("background", "white");
	$(".item-footer-border").hide();
	$(".item-content").hide();
	checktbpass();
}

function checktbpass() {
	if (tbpass == 1) {
		$(".lockapp").show();
		//applock();
	} else {
		applock();
	}
}

function home() {
	if (lockscreen == 0) {} else {
		session = 0;
		rotatee = 0;
		$(".papp").hide();
		$(".item-footer-border").show();
		$(".item-content").show();
		$(".item-application").slideUp(100);
		$(".item-application").slideDown(100);
		$(".bordert").css("background-size", "490px");
		theme();
		rotateee();
		app = 0;
	}
}

function rotateee() {
	if (rotatee == 0) {
		$(".border").css("transform", "rotateZ(0deg");
		$(".warning").show();
	}
	if (rotatee == 1) {
		$(".border").css("transform", "rotateZ(-90deg");
		$(".warning").hide();
	}
	if (rotatee == 2) {
		$(".border").css("transform", "rotateZ(-180deg");
		$(".warning").show();
	}
	if (rotatee == 3) {
		$(".border").css("transform", "rotateZ(90deg");
		$(".warning").show();
	}
	if (rotatee == 4) {
		$(".border").css("transform", "rotateZ(0deg");
		$(".warning").show();
		rotatee = 0;
	}
}