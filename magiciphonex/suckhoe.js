var a = document.getElementById("chca").value;
var b = document.getElementById("cana").value;
var sele = 0;
var ketqua = 0;
var rb = document.getElementsByName("inp");

function sobay() {
	if (rb[0].checked) a += "7";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "7";
	document.getElementById("cana").value = b;
}

function sotam() {
	if (rb[0].checked) a += "8";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "8";
	document.getElementById("cana").value = b;
}

function sochin() {
	if (rb[0].checked) a += "9";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "9";
	document.getElementById("cana").value = b;
}

function sobon() {
	if (rb[0].checked) a += "4";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "4";
	document.getElementById("cana").value = b;
}

function sonam() {
	if (rb[0].checked) a += "5";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "5";
	document.getElementById("cana").value = b;
}

function sosau() {
	if (rb[0].checked) a += "6";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "6";
	document.getElementById("cana").value = b;
}

function somot() {
	if (rb[0].checked) a += "1";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "1";
	document.getElementById("cana").value = b;
}

function sohai() {
	if (rb[0].checked) a += "2";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "2";
	document.getElementById("cana").value = b;
}

function soba() {
	if (rb[0].checked) a += "3";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "3";
	document.getElementById("cana").value = b;
}

function sokhong() {
	if (rb[0].checked) a += "0";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += "0";
	document.getElementById("cana").value = b;
}

function cham() {
	if (rb[0].checked) a += ".";
	document.getElementById("chca").value = a;
	if (rb[1].checked) b += ".";
	document.getElementById("cana").value = b;
}

function ketquask() {
	bmi = (b / (a * a)) * 10000;
	document.getElementById("kqsk").value = bmi;
	if (bmi < 16) {
		document.getElementById("kqtt").value = "cực kỳ nhẹ cân";
	} else if (bmi >= 16 && bmi <= 16.9) {
		document.getElementById("kqtt").value = "rất nhẹ cân";
	} else if (bmi >= 17 && bmi <= 18.4) {
		document.getElementById("kqtt").value = "nhẹ cân";
	} else if (bmi > 18.5 && bmi <= 24.9) {
		document.getElementById("kqtt").value = "bình thường";
	} else if (bmi > 25 && bmi <= 29.9) {
		document.getElementById("kqtt").value = "thừa cân";
	} else if (bmi > 30 && bmi <= 34.9) {
		document.getElementById("kqtt").value = "béo phì cấp độ I";
	} else if (bmi > 35 && bmi <= 39.9) {
		document.getElementById("kqtt").value = "béo phì cấp độ II";
	} else {
		document.getElementById("kqtt").value = "béo phì cấp độ III";
	}
}

function deleteall() {
	document.getElementById("chca").value = "";
	document.getElementById("cana").value = "";
	a = "";
	b = "";
}