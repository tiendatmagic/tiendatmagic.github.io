var selectbm = 0;
var selectbms = 0;
$(".sbaomat").click(function () {
	$(".psetting").hide();
	$(".psettingsss").show();
	$(".psettingname").text("Bảo mật");
	$(".ex2").show();
	$(".sbmm *").remove();
	$(".ex2 .tr1").css("display", "block");
	$(".ex2 .tr2").css("display", "block");
	$(".ex2 .tr3").css("display", "none");

	$(".ex2 .td1").text("Hỏi mã PIN khóa ứng dụng");
	$(".ex2 .tr1").removeClass("sphongchu");
	$(".ex2 .tr1").addClass("bmdmp");
	$(".ex2 .td2").text("Hỏi mã PIN khóa màn hình");
	$(".ex2 .tr2").removeClass("sduongvien");
	$(".ex2 .tr2").addClass("bmdmps");
});
$(document).on('click', '.bmdmp', function (e) {
	$(".ex2").hide();
	$(".sbmm").show();
	$(".sbmm").append("<p>Trạng thái</p>");
	$(".sbmm").append("<input type='radio' name='pinapp' class='sbmmoff'>");
	$(".sbmm").append("<label> Tắt </label>");
	$(".sbmm").append("<input type='radio' name='pinapp' class='sbmmon'>");
	$(".sbmm").append("<label> Bật </label>");
	$(".sbmm").append("<p>Nhập mật khẩu cũ:</p>");
	$(".sbmm").append("<input type='text' id='sbmmmkc' value=''>");
	$(".sbmm").append("<p>Nhập mật khẩu mới:</p>");
	$(".sbmm").append("<input type='text' id='sbmmmkm' value=''>");
	$(".sbmm").append("<br>");
	$(".sbmm").append("<input type='button' class='sbmmluumk' value='Lưu' >");
	$(".sbmm").append("<input type='button' class='sbmmxoamk' value='Xóa' >");
	$(".sbmm").append("<br>");
	$(".sbmm").append("<div class='sbaomatpinbtn'>");
	$(".sbaomatpinbtn").append("<input class='btn spin7' type='button' value='7' >");
	$(".sbaomatpinbtn").append("<input class='btn spin8' type='button' value='8' >");
	$(".sbaomatpinbtn").append("<input class='btn spin9' type='button' value='9' >");
	$(".sbaomatpinbtn").append("<br>");
	$(".sbaomatpinbtn").append("<input class='btn spin4' type='button' value='4' >");
	$(".sbaomatpinbtn").append("<input class='btn spin5' type='button' value='5' >");
	$(".sbaomatpinbtn").append("<input class='btn spin6' type='button' value='6' >");
	$(".sbaomatpinbtn").append("<br>");
	$(".sbaomatpinbtn").append("<input class='btn spin1' type='button' value='1' >");
	$(".sbaomatpinbtn").append("<input class='btn spin2' type='button' value='2' >");
	$(".sbaomatpinbtn").append("<input class='btn spin3' type='button' value='3' >");
	$(".sbaomatpinbtn").append("<br>");
	$(".sbaomatpinbtn").append("<input class='btn spin0' type='button' value='0' >");
	$(".sbaomatpinbtn").append("<input class='btn sbmmluumk' type='button' value='=' >");
});
$(document).on('click', '.sbmmluumk', function (e) {
	if (sbmmmkc.value == "" || sbmmmkm.value == "") {
		$(".tbb").show();
		$("div.tbb.papp > div > h4").text("Mật khẩu không được để trống");
	} else {
		if (sbmmmkc.value.length > 15 || sbmmmkm.value.length > 15) {
			$(".tbb").show();
			$("div.tbb.papp > div > h4").text("Không được nhập bừa");
		} else {
			if (sbmmmkc.value == passlockapp) {
				passlockapp = sbmmmkm.value;
				$(".tbb").show();
				$("div.tbb.papp > div > h4").text("Đổi mật khẩu thành công");
				checkmapin = 0;
			} else {
				$(".tbb").show();
				$("div.tbb.papp > div > h4").text("Mật khẩu không khớp");
			}
		}
	}
	sdeletepin();
});
$(document).on('click', '.sbmmoff', function (e) {
	tbpass = 0;
});
$(document).on('click', '.sbmmon', function (e) {
	tbpass = 1;
});
$(document).on('click', '#sbmmmkc', function (e) {
	selectbm = 1;
});
$(document).on('click', '#sbmmmkm', function (e) {
	selectbm = 2;
});
$(document).on('click', '.spin1', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 1;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 1;
	}
});
$(document).on('click', '.spin2', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 2;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 2;
	}
});
$(document).on('click', '.spin3', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 3;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 3;
	}
});
$(document).on('click', '.spin4', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 4;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 4;
	}
});
$(document).on('click', '.spin5', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 5;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 5;
	}
});
$(document).on('click', '.spin6', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 6;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 6;
	}
});
$(document).on('click', '.spin7', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 7;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 7;
	}
});
$(document).on('click', '.spin8', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 8;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 8;
	}
});
$(document).on('click', '.spin9', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 9;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 9;
	}
});
$(document).on('click', '.spin0', function (e) {
	if (selectbm == 1) {
		sbmmmkc.value += 0;
	}
	if (selectbm == 2) {
		sbmmmkm.value += 0;
	}
});
$(document).on('click', '.sbmmxoamk', function (e) {
	sdeletepin();
});

function sdeletepin() {
	sbmmmkc.value = "";
	sbmmmkm.value = "";
}
//
$(document).on('click', '.bmdmps', function (e) {
	$(".ex2").hide();
	$(".sbmm").show();
	$(".sbmm").append("<p>Trạng thái</p>");
	$(".sbmm").append("<input type='radio' name='pinapp' class='sbmmoffs'>");
	$(".sbmm").append("<label> Tắt </label>");
	$(".sbmm").append("<input type='radio' name='pinapp' class='sbmmons'>");
	$(".sbmm").append("<label> Bật </label>");
	$(".sbmm").append("<p>Thời gian tự động khóa</p>");
	$(".sbmm").append("<select name='autolock' class='autolock' id='autolock'>");
	$(".autolock").append("<option value=''>Mặc định</option>");
	$(".autolock").append("<option value='m1p'>1 phút</option>");
	$(".autolock").append("<option value='m2p'>2 phút</option>");
	$(".autolock").append("<option value='m5p'>5 phút</option>");
	$(".autolock").append("<option value='m10p'>10 phút</option>");
	$(".autolock").append("<option value='mpp'>Không giới hạn</option>");
	$(".sbmm").append("<p>Nhập mật khẩu cũ:</p>");
	$(".sbmm").append("<input type='text' id='sbmmmkcs' value=''>");
	$(".sbmm").append("<p>Nhập mật khẩu mới:</p>");
	$(".sbmm").append("<input type='text' id='sbmmmkms' value=''>");
	$(".sbmm").append("<br>");
	$(".sbmm").append("<input type='button' class='sbmmluumks' value='Lưu' >");
	$(".sbmm").append("<input type='button' class='sbmmxoamks' value='Xóa' >");
	$(".sbmm").append("<br>");
	$(".sbmm").append("<div class='sbaomatpinbtn'>");
	$(".sbaomatpinbtn").append("<input class='btn spin7s' type='button' value='7' >");
	$(".sbaomatpinbtn").append("<input class='btn spin8s' type='button' value='8' >");
	$(".sbaomatpinbtn").append("<input class='btn spin9s' type='button' value='9' >");
	$(".sbaomatpinbtn").append("<br>");
	$(".sbaomatpinbtn").append("<input class='btn spin4s' type='button' value='4' >");
	$(".sbaomatpinbtn").append("<input class='btn spin5s' type='button' value='5' >");
	$(".sbaomatpinbtn").append("<input class='btn spin6s' type='button' value='6' >");
	$(".sbaomatpinbtn").append("<br>");
	$(".sbaomatpinbtn").append("<input class='btn spin1s' type='button' value='1' >");
	$(".sbaomatpinbtn").append("<input class='btn spin2s' type='button' value='2' >");
	$(".sbaomatpinbtn").append("<input class='btn spin3s' type='button' value='3' >");
	$(".sbaomatpinbtn").append("<br>");
	$(".sbaomatpinbtn").append("<input class='btn spin0s' type='button' value='0' >");
	$(".sbaomatpinbtn").append("<input class='btn sbmmluumks' type='button' value='=' >");
});
$(document).on('click', '.sbmmluumks', function (e) {
	if (sbmmmkcs.value == "" || sbmmmkms.value == "") {
		$(".tbb").show();
		$("div.tbb.papp > div > h4").text("Mật khẩu không được để trống");
	} else {
		if (sbmmmkcs.value.length > 15 || sbmmmkms.value.length > 15) {
			$(".tbb").show();
			$("div.tbb.papp > div > h4").text("Không được nhập bừa");
		} else {
			if (sbmmmkcs.value == passlockscreen) {
				passlockscreen = sbmmmkms.value;
				$(".tbb").show();
				$("div.tbb.papp > div > h4").text("Đổi mật khẩu thành công!");
			} else {
				$(".tbb").show();
				$("div.tbb.papp > div > h4").text("Mật khẩu chưa khớp");
			}
		}
	}
	sdeletepins();
});
$(document).on('click', '.sbmmoffs', function (e) {
	autolockscreenn = 0;
	settimeoutt = setTimeout(function locked() {
		home();
		matkhauautolock();
	}, 0);
	autolockscreen();
});
$(document).on('click', '.sbmmons', function (e) {
	autolockscreenn = 1;
	autolockscreen();
});
$(document).on('click', '#sbmmmkcs', function (e) {
	selectbms = 1;
});
$(document).on('click', '#sbmmmkms', function (e) {
	selectbms = 2;
});
$(document).on('click', '.spin1s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 1;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 1;
	}
});
$(document).on('click', '.spin2s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 2;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 2;
	}
});
$(document).on('click', '.spin3s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 3;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 3;
	}
});
$(document).on('click', '.spin4s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 4;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 4;
	}
});
$(document).on('click', '.spin5s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 5;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 5;
	}
});
$(document).on('click', '.spin6s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 6;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 6;
	}
});
$(document).on('click', '.spin7s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 7;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 7;
	}
});
$(document).on('click', '.spin8s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 8;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 8;
	}
});
$(document).on('click', '.spin9s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 9;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 9;
	}
});
$(document).on('click', '.spin0s', function (e) {
	if (selectbms == 1) {
		sbmmmkcs.value += 0;
	}
	if (selectbms == 2) {
		sbmmmkms.value += 0;
	}
});
$(document).on('click', '.sbmmxoamks', function (e) {
	sdeletepins();
});
$(document).ready(function () {
	$(document).on('click', '#autolock', function (e) {
		if (autolock.value === "m1p") {
			autolockscreenn = 1;
			settimeoutls = 6000 * 1;
			lockscreenhl();
		}
		if (autolock.value === "m2p") {
			autolockscreenn = 1;
			settimeoutls = 60000 * 2;
			lockscreenhl();
		}
		if (autolock.value === "m5p") {
			autolockscreenn = 1;
			settimeoutls = 60000 * 5;
			lockscreenhl();
		}
		if (autolock.value === "m10p") {
			autolockscreenn = 1;
			settimeoutls = 60000 * 10;
			lockscreenhl();
		}
		if (autolock.value === "mpp") {
			autolockscreenn = 0;
			settimeoutt = setTimeout(function locked() {
				home();
				matkhauautolock();
			}, 0);
			autolockscreen();
		}
		settimeoutt = setTimeout(function locked() {
			autolockscreen();
		}, settimeoutls);
	});
});

function lockscreenhl() {
	$(".tbb").show();
	$("div.tbb.papp > div > h4").text("Áp dụng vào lần khóa màn hình tiếp theo");
}

function sdeletepins() {
	sbmmmkcs.value = "";
	sbmmmkms.value = "";
}