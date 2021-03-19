var ipp = document.getElementById("Resultll").value;
var countl = 0;
var lockscreen = 0;
var passlockscreen = "1";
var settimeoutls = 120000;
var autolockscreenn = 1;
$(".mainlockscreen").click(function () {
	$(".lockscreenn").slideUp(400);
	$(".lockscreen").show(1000);
});

$(window).keyup(function (e) {

	if (e.keyCode == 103 || e.keyCode == 55) {
		sobayll();
	}
	if (e.keyCode == 104 || e.keyCode == 56) {
		sotamll();
	}
	if (e.keyCode == 105 || e.keyCode == 57) {
		sochinll();
	}

	if (e.keyCode == 100 || e.keyCode == 52) {
		sobonll();
	}
	if (e.keyCode == 101 || e.keyCode == 53) {
		sonamll();
	}
	if (e.keyCode == 102 || e.keyCode == 54) {
		sosaull();
	}

	if (e.keyCode == 97 || e.keyCode == 49) {
		somotll();
	}
	if (e.keyCode == 98 || e.keyCode == 50) {
		sohaill();
	}
	if (e.keyCode == 99 || e.keyCode == 51) {
		soball();
	}

	if (e.keyCode == 96 || e.keyCode == 48) {
		sokhongll();
	}

	if (e.keyCode == 8) {
		deleteallll();
	}
	if (e.keyCode == 13) {
		ketquaskll();
	}

});


function sobayll() {
	ipp += "7";
	document.getElementById("Resultll").value = ipp;
}

function sotamll() {
	ipp += "8";
	document.getElementById("Resultll").value = ipp;
}

function sochinll() {
	ipp += "9";
	document.getElementById("Resultll").value = ipp;
}

function sobonll() {
	ipp += "4";
	document.getElementById("Resultll").value = ipp;
}

function sonamll() {
	ipp += "5";
	document.getElementById("Resultll").value = ipp;
}

function sosaull() {
	ipp += "6";
	document.getElementById("Resultll").value = ipp;
}

function somotll() {
	ipp += "1";
	document.getElementById("Resultll").value = ipp;
}

function sohaill() {
	ipp += "2";
	document.getElementById("Resultll").value = ipp;
}

function soball() {
	ipp += "3";
	document.getElementById("Resultll").value = ipp;
}

function sokhongll() {
	ipp += "0";
	document.getElementById("Resultll").value = ipp;
}

function ketquaskll() {
	kqq = ipp;
	if (countl < 3) {
		if (kqq.length == 0) {
			document.getElementById("kqttll").value = "Không được bỏ trống";
			deleteallll();
		} else {
			if (kqq.length >= 20) {
				alert("Không được nhập bừa");
				deleteallll();
			}
			if (kqq === passlockscreen) {
				matkhaup();
				
				deleteallll();
				
				autolockscreen();
			} else {
				document.getElementById("kqttll").value = "Sai mật mã";
				countl += 1;
				deleteallll();
			}
		}
	} else {
		document.getElementById("kqttll").value = "Điện thoại bị khóa";
		$('body > div > div > div.screen > div.program > div.lockscreen.papp > div > input.btn').attr('disabled', 'disabled');
		deleteallll();
	}
}

function matkhaup() {
	$(".lockscreen").hide();
	$(".item-application").slideDown(400);
	$(".item-application").show();
	$(".item-footer-border").show();
	$(".tbpass").show();
	countl = 0;
	lockscreen = 1;
}

function matkhauautolock() {
	$(".lockscreen").show();
	$(".item-application").slideUp(100);
	$(".item-application").hide();
	$(".item-footer-border").hide();
	$(".tbpass").hide();
	deleteallll();
	lockscreen = 0;
}

function autolockscreen() {
	if (autolockscreenn == 1) {


		var settimeoutt = setTimeout(function locked() {
			home();
			
			matkhauautolock();
		}, settimeoutls);
	} else {
		clearTimeout(settimeoutt);
	}
}


function deleteallll() {
	ipp = "";
	document.getElementById("Resultll").value = "";
	document.getElementById("kqttl").value = "";
}