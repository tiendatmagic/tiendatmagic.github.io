var ip = document.getElementById("Resultl").value;
var sele = 0;
var ketqua = 0;
var passlockapp = "1234";


function sobayl() {
	ip += "7";
	document.getElementById("Resultl").value = ip;
}

function sotaml() {
	ip += "8";
	document.getElementById("Resultl").value = ip;
}

function sochinl() {
	ip += "9";
	document.getElementById("Resultl").value = ip;
}

function sobonl() {
	ip += "4";
	document.getElementById("Resultl").value = ip;
}

function sonaml() {
	ip += "5";
	document.getElementById("Resultl").value = ip;
}

function sosaul() {
	ip += "6";
	document.getElementById("Resultl").value = ip;
}

function somotl() {
	ip += "1";
	document.getElementById("Resultl").value = ip;
}

function sohail() {
	ip += "2";
	document.getElementById("Resultl").value = ip;
}

function sobal() {
	ip += "3";
	document.getElementById("Resultl").value = ip;
}

function sokhongl() {
	ip += "0";
	document.getElementById("Resultl").value = ip;
}

function ketquaskl() {
	kqq = ip;
	if (kqq.length > 15) {
		alert("Không được nhập bừa");
	}
	if (kqq === passlockapp) {
		applock();
		deletealllockapp();
	} else {
		document.getElementById("kqttl").value = "Sai mật mã";
		ip = "";
		document.getElementById("Resultl").value = "";
	}
}

function deletealll() {
	ip = "";
	document.getElementById("Resultl").value = "";
	document.getElementById("kqttl").value = "";
}

function qmk() {
	alert("Mật khẩu là: ")
}