$(".smausac").click(function () {
    $(".psetting").hide();
    $(".psettingsss").show();
    $(".psettingname").text("Tùy chỉnh");
    $(".ex2").show();

    $(".ex2 .tr1").css("display", "block");
    $(".ex2 .tr2").css("display", "block");
    $(".ex2 .tr3").css("display", "none");
    $(".sbmm *").remove();
    $(".ex2 .td1").text("Phông chữ");
    $(".ex2 .tr1").removeClass("bmdmp");
    $(".ex2 .tr1").addClass("sphongchu");
    $(".ex2 .td2").text("Đường viền");
    $(".ex2 .tr2").removeClass("bmdmps");
    $(".ex2 .tr2").addClass("sduongvien");
});
$(document).on('click', '.sphongchu', function (e) {
    $(".ex2").hide();
    $(".sbmm").append("<p>Màu chữ</p>");
    $(".sbmm").append("<div class='smauchu'>");
    $(".smauchu").append("<div class='smauchu-item smdo'>Đỏ</div>");
    $(".smauchu").append("<div class='smauchu-item smvang'>Vàng</div>");
    $(".smauchu").append("<div class='smauchu-item smxanhla'>Xanh lá</div>");
    $(".smauchu").append("<div class='smauchu-item smxanhduong'>Xanh dương</div>");
    $(".smauchu").append("<div class='smauchu-item smhong'>Hồng</div>");
    $(".smauchu").append("<div class='smauchu-item smden'>Đen</div>");
    $(".sbmm").append("<p>Kích thước chữ</p>");
    $(".sbmm").append("<select name='kichthuocchu' class='kichthuocchu' id='kichthuocchu'>");
    $(".kichthuocchu").append("<option value=''>Mặc định</option>");
    $(".kichthuocchu").append("<option value='kt12'>12</option>");
    $(".kichthuocchu").append("<option value='kt14'>14</option>");
    $(".kichthuocchu").append("<option value='kt16'>16</option>");
    $(".kichthuocchu").append("<option value='kt17'>17</option>");
    $(".kichthuocchu").append("<option value='kt19'>19</option>");
    $(".sbmm").append("<p>Phông chữ</p>");
    $(".sbmm").append("<select name='phongchu' class='phongchu' id='phongchu'>");
    $(".phongchu").append("<option value=''>Mặc định</option>");
    $(".phongchu").append("<option value='pctime'>Time New Roman</option>");
    $(".phongchu").append("<option value='pcsegoe'>Segoe UI</option>");
    $(".phongchu").append("<option value='pctahoma'>Tahoma</option>");
    $(".phongchu").append("<option value='pcverdana'>Verdana</option>");
    $(".phongchu").append("<option value='pcsans'>sansserif</option>");
});
$(document).on('click', '.sduongvien', function (e) {
    $(".ex2").hide();
    $(".sbmm").append("<p>Chọn màu viền</p>");
    $(".sbmm").append("<div class='smauvien'>");
    $(".smauvien").append("<div class='smauvien-item smdoo'>Đỏ</div>");
    $(".smauvien").append("<div class='smauvien-item smvangg'>Vàng</div>");
    $(".smauvien").append("<div class='smauvien-item smxanhlaa'>Xanh lá</div>");
    $(".smauvien").append("<div class='smauvien-item smxanhduongg'>Xanh dương</div>");
    $(".smauvien").append("<div class='smauvien-item smhongg'>Hồng</div>");
    $(".smauvien").append("<div class='smauvien-item smdenn'>Đen</div>");
    $(".sbmm").append("<p>Hiển thị tai thỏ</p>");
    $(".sbmm").append("<input type='radio' name='taithoapp' class='staithooff'>");
    $(".sbmm").append("<label> Tắt </label>");
    $(".sbmm").append("<input type='radio' name='taithoapp' class='staithoon'>");
    $(".sbmm").append("<label> Bật </label>");
    $(".sbmm").append("<p>Chọn màu tai thỏ</p>");
    $(".sbmm").append("<div class='smauttho'>");
    $(".smauttho").append("<div class='smauttho-item smdooo'>Đỏ</div>");
    $(".smauttho").append("<div class='smauttho-item smvanggg'>Vàng</div>");
    $(".smauttho").append("<div class='smauttho-item smxanhlaaa'>Xanh lá</div>");
    $(".smauttho").append("<div class='smauttho-item smxanhduonggg'>Xanh dương</div>");
    $(".smauttho").append("<div class='smauttho-item smhonggg'>Hồng</div>");
    $(".smauttho").append("<div class='smauttho-item smdennn'>Đen</div>");
});
$(document).on('click', '.staithooff', function (e) {
    $(".taitho").css("visibility", "hidden");
});
$(document).on('click', '.staithoon', function (e) {
    $(".taitho").css("visibility", "visible");
});
$(document).on('click', '#kichthuocchu', function (e) {
    if (kichthuocchu.value === "kt12") {
        $("div.screen > div.item-content > ul > span").css("font-size", "12px");
        apply();
    }
    if (kichthuocchu.value === "kt14") {
        $("div.screen > div.item-content > ul > span").css("font-size", "14px");
        apply();
    }
    if (kichthuocchu.value === "kt16") {
        $("div.screen > div.item-content > ul > span").css("font-size", "16px");
        apply();
    }
    if (kichthuocchu.value === "kt17") {
        $("div.screen > div.item-content > ul > span").css("font-size", "17.5px");
        apply();
    }
    if (kichthuocchu.value === "kt19") {
        $("div.screen > div.item-content > ul > span").css("font-size", "19px");
        apply();
    }
});
$(document).on('click', '.smdo', function (e) {
    $("div.screen > div.item-content > ul > span").css("color", "red");
    apply();
});
$(document).on('click', '.smvang', function (e) {
    $("div.screen > div.item-content > ul > span").css("color", "yellow");
    apply();
});
$(document).on('click', '.smxanhla', function (e) {
    $("div.screen > div.item-content > ul > span").css("color", "green");
    apply();
});
$(document).on('click', '.smxanhduong', function (e) {
    $("div.screen > div.item-content > ul > span").css("color", "blue");
    apply();
});
$(document).on('click', '.smhong', function (e) {
    $("div.screen > div.item-content > ul > span").css("color", "deeppink");
    apply();
});
$(document).on('click', '.smden', function (e) {
    $("div.screen > div.item-content > ul > span").css("color", "black");
    
    apply();
});
$(document).on('click', '.smdoo', function (e) {
    $("body > div.border").css("background-color", "red");
    $(".taitho").css("background-color", "red");
    apply();
});
$(document).on('click', '.smvangg', function (e) {
    $("body > div.border").css("background-color", "yellow");
    $(".taitho").css("background-color", "yellow");
    apply();
});
$(document).on('click', '.smxanhlaa', function (e) {
    $("body > div.border").css("background-color", "green");
    $(".taitho").css("background-color", "green");
    apply();
});
$(document).on('click', '.smxanhduongg', function (e) {
    $("body > div.border").css("background-color", "blue");
    $(".taitho").css("background-color", "blue");
    apply();
});
$(document).on('click', '.smhongg', function (e) {
    $("body > div.border").css("background-color", "deeppink");
    $(".taitho").css("background-color", "deeppink");
    apply();
});
$(document).on('click', '.smdenn', function (e) {
    $("body > div.border").css("background-color", "black");
    $(".taitho").css("background-color", "black");
    apply();
});
$(document).on('click', '.smdooo', function (e) {
    $(".taitho").css("background-color", "red");
    apply();
});
$(document).on('click', '.smvanggg', function (e) {
    $(".taitho").css("background-color", "yellow");
    apply();
});
$(document).on('click', '.smxanhlaaa', function (e) {
    $(".taitho").css("background-color", "green");
    apply();
});
$(document).on('click', '.smxanhduonggg', function (e) {
    $(".taitho").css("background-color", "blue");
    apply();
});
$(document).on('click', '.smhonggg', function (e) {
    $(".taitho").css("background-color", "deeppink");
    apply();
});
$(document).on('click', '.smdennn', function (e) {
    $(".taitho").css("background-color", "black");
    apply();
});
$(document).on('click', '#phongchu', function (e) {
    if (phongchu.value === "pctime") {
        $("div.screen > div.item-content > ul > span").css("font-family", "'Times New Roman'");
        apply();
    }
    if (phongchu.value === "pcsegoe") {
        $("div.screen > div.item-content > ul > span").css("font-family", "'Segoe UI'");
        apply();
    }
    if (phongchu.value === "pctahoma") {
        $("div.screen > div.item-content > ul > span").css("font-family", "'Tahoma'");
        apply();
    }
    if (phongchu.value === "pcverdana") {
        $("div.screen > div.item-content > ul > span").css("font-family", "'Verdana'");
        apply();
    }
    if (phongchu.value === "pcsans") {
        $("div.screen > div.item-content > ul > span").css("font-family", "'sans-serif'");
        apply();
    }
});

function apply() {
    $(".tbb").show();
    $("div.tbb.papp > div > h4").text("Áp dụng thành công");
}   