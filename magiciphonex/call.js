var tel = document.getElementById("telall").value;
var lockscreen = 0;





$(".mainlockscreen").click(function () {
	$(".lockscreenn").slideUp(400);
	$(".lockscreen").show(1000);
});

function sobayc() {
	tel += "7";
	document.getElementById("telall").value = tel;
}

function sotamc() {
	tel += "8";
	document.getElementById("telall").value = tel;
}

function sochinc() {
	tel += "9";
	document.getElementById("telall").value = tel;
}

function sobonc() {
	tel += "4";
	document.getElementById("telall").value = tel;
}

function sonamc() {
	tel += "5";
	document.getElementById("telall").value = tel;
}

function sosauc() {
	tel += "6";
	document.getElementById("telall").value = tel;
}

function somotc() {
	tel += "1";
	document.getElementById("telall").value = tel;
}

function sohaic() {
	tel += "2";
	document.getElementById("telall").value = tel;
}

function sobac() {
	tel += "3";
	document.getElementById("telall").value = tel;
}

function sokhongc() {
	tel += "0";
	document.getElementById("telall").value = tel;
}

function congc() {
	tel += "+";
	document.getElementById("telall").value = tel;
}

function ketquaskc() {
	if (plane === 1) {
		$(".tbb").show();
		$("div.tbb.papp > div > h4").text("Đang bật chế độ máy bay!");
	} else {
		if (tel == "") {
			$(".tbb").show();
			$("div.tbb.papp > div > h4").text("Chưa nhập số điện thoại");
		} else {
			Redirect();
		}
	}

}

function Redirect() {
	window.location = ("tel:" + (tel));
}

function deleteallc() {
	tel = "";
	document.getElementById("telall").value = "";
}