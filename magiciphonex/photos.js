var selectedimg = 0;
var sselectedimg = 0;
var sselectedimgg = 0;

function changeimage(id) {
	var imagePath = document.getElementById(id).getAttribute('src');
	$("#img-main-photos").attr('src', imagePath);
}
$(".mainpphotos #one").click(function () {
	selectedimg = 1;
});
$(".mainpphotos #two").click(function () {
	selectedimg = 2;
});
$(".mainpphotos #three").click(function () {
	selectedimg = 3;
});
$(".mainpphotos #four").click(function () {
	selectedimg = 4;
});
$(".mainpphotos #five").click(function () {
	selectedimg = 5;
});

function btnnx() {
	if (selectedimg == 0) {
		$(".tbb").show();
		$("div.tbb.papp > div > h4").text("Chưa chọn ảnh");
	} else {
		if (selectedimg == 1) {
			$(".mainpphotos #one").remove();
		} else if (selectedimg == 2) {
			$(".mainpphotos #two").remove();
		} else if (selectedimg == 3) {
			$(".mainpphotos #three").remove();
		} else if (selectedimg == 4) {
			$(".mainpphotos #four").remove();
		} else if (selectedimg == 5) {
			$(".mainpphotos #five").remove();
		}
		selectedxoa();
		selectedimg = 0;
	}
}

function btnnd() {
	if (selectedimg == 0) {
		$(".tbb").show();
		$("div.tbb.papp > div > h4").text("Chưa chọn ảnh");
	} else {
		if (selectedimg == 1) {
			sselectedimg = 1;
		} else if (selectedimg == 2) {
			sselectedimg = 2;
		} else if (selectedimg == 3) {
			sselectedimg = 3;
		} else if (selectedimg == 4) {
			sselectedimg = 4;
		} else if (selectedimg == 5) {
			sselectedimg = 5;
		}
		selectedok();
		selectedimg = 0;
	}
}

function btnndg() {
	if (selectedimg == 0) {
		$(".tbb").show();
		$("div.tbb.papp > div > h4").text("Chưa chọn ảnh");
	} else {
		if (selectedimg == 1) {
			sselectedimgg = 1;
		} else if (selectedimg == 2) {
			sselectedimgg = 2;
		} else if (selectedimg == 3) {
			sselectedimgg = 3;
		} else if (selectedimg == 4) {
			sselectedimgg = 4;
		} else if (selectedimg == 5) {
			sselectedimgg = 5;
		}
		selectedok();
		selectedimg = 0;
	}

}


function selectedok() {
	$(".tbb").show();
	$("div.tbb.papp > div > h4").text("Đặt ảnh thành công");
}

function selectedxoa() {
	$(".tbb").show();
	$("div.tbb.papp > div > h4").text("Xóa ảnh thành công");
}