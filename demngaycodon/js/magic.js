console.log("%cTiendatmagic", "color: deeppink; font-size: x-large");

function getId(id) {
  return document.getElementById(id);
}

function getClass(clss) {
  return document.getElementsByClassName(clss);
}

function getQuery(query) {
  return document.querySelector(query);
}

function getQueryAll(query) {
  return document.querySelectorAll(query);
}
var admobid = {
  interstitial: "",
};
const wrapper = getQuery(".wrapper");
const defaultBtn = getQuery("#default-btn");
const customBtn = getQuery("#custom-btn");
const cancelBtn = getQuery("#cancel-btn i");
const img = getQuery("img");
var result = JSON.parse(localStorage.getItem("result"));
if (result === null) {
  result = "./error.png";
}
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive() {
  defaultBtn.click();
}
getClass("image")[0].addEventListener("click", defaultBtnActive);
defaultBtn.addEventListener("change", insertimage);

function insertimage() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      result = reader.result;
      img.src = result;
      getId("imgavatar").src = result;
      getClass("imgavatar")[0].src = result;
      localStorage.setItem("result", JSON.stringify(result));
      wrapper.classList.add("active");
      simg = 1;
    };
    reader.readAsDataURL(file);
  }
}
var ten = getId("ten");
var gioitinh = document.getElementsByName("gender");
var dtieude = JSON.parse(localStorage.getItem("dtieude"));
if (dtieude === null) {
  dtieude = "Đếm Ngày Cô Đơn";
}
var ngaysinh = getId("ngaysinh");
var dngaysinh = JSON.parse(localStorage.getItem("dngaysinh"));
if (dngaysinh === null) {
  dngaysinh = "";
}
var ngaybatdau = getId("ngaybatdau");
var dngaybatdau = JSON.parse(localStorage.getItem("dngaybatdau"));
if (dngaybatdau === null) {
  dngaybatdau = "";
}
var trangthai = getId("statuss");
var simg = 0;
var sten = JSON.parse(localStorage.getItem("sten"));
if (sten === null) {
  sten = "";
}
var sgt = JSON.parse(localStorage.getItem("sgt"));
if (sgt === null) {
  sgt = "";
}
var sngaysinh = JSON.parse(localStorage.getItem("sngaysinh"));
if (sngaysinh === null) {
  sngaysinh = "";
}
var sngaybatdau = JSON.parse(localStorage.getItem("sngaybatdau"));
if (sngaybatdau === null) {
  sngaybatdau = "";
}
var strangthai = JSON.parse(localStorage.getItem("strangthai"));
if (strangthai === null) {
  strangthai = "";
}
var dmhns = "";
var dmngs = JSON.parse(localStorage.getItem("dmngs"));
if (dmngs === null) {
  dmngs = "red";
}
var dmcs = JSON.parse(localStorage.getItem("dmcs"));
if (dmcs === null) {
  dmcs = "deeppink";
}
var info1 = JSON.parse(localStorage.getItem("info1"));
if (info1 === null || info1 === "") {
  info1 = "Đã cô đơn";
}
var info2 = JSON.parse(localStorage.getItem("info2"));
if (info2 === null || info2 === "") {
  info2 = "Ngày";
}
var hiddentitle = JSON.parse(localStorage.getItem("hiddentitle"));
if (hiddentitle === null || hiddentitle === "") {
  hiddentitle = true;
}
var text = getId("contentevent");
var data = JSON.parse(localStorage.getItem("datadncd"));
var arrdncd = JSON.parse(localStorage.getItem("arrdncd"));
if (arrdncd === null) {
  arrdncd = [];
}
var i;
var d = new Date();
var profile = JSON.parse(localStorage.getItem("profile"));
if (profile === null) {
  profile = 0;
}
var dark = JSON.parse(localStorage.getItem("dark"));
if (dark === null) {
  dark = 0;
}
var orderstatus = JSON.parse(localStorage.getItem("orderstatus"));
if (orderstatus === null) {
  orderstatus = new Date().getDate();
}
var fontfamily = JSON.parse(localStorage.getItem("fontfamily"));
if (fontfamily === null) {
  fontfamily = '"Roboto", sans-serif';
}
var openwindow = 0;
var status_apps = ["Đau khổ nhất là khi yêu ai đó, thương ai đó mà không thể ở bên, không thể nói ra nỗi lòng của mình với người ấy", "Bây giờ tôi mới đau khổ nhận ra một sự thật là có những người chỉ có thể ở trong tim ta chứ không bao giờ có thể bước cùng ta đi đến cuối cuộc đời", "Đêm nay, đêm mai, đêm sau nữa ….. Tôi nhớ 1 người chưa từng nhớ tôi", "Nỗi buồn lớn nhất khi lúc nào cũng phải tỏ ra mình là người đang hạnh phúc. Nỗi đau lớn nhất là luốn phải cố gắng mỉm cười", "Khi yêu … sợ nhất là người ta vẫn nhận lời yêu nhưng trong trái tim của họ chưa bao giờ xuất hiện hình bóng của mình", "Thật đáng sợ nếu bỗng dưng một ngày mình thức dậy và nhận ra rằng mình không có ai và không còn điều gì để chờ đợi", "Tình yêu của anh nhẹ nhàng như gió, mong manh như nắng và để lại trong tim em “cay đắng ngút ngàn”", "Cố gắng để quên người mình yêu cũng giống như cách mà mình cố gắng nhớ một người chưa từng gặp", "Đôi khi chỉ một khoảng trống của anh để lại, mà cả thế giới ngoài kia cũng không thể lấp đầy khoảng trống đó trong tim em", "Cảm ơn ai đó đã vô tâm hời hợt để rồi tôi biết mình nên dừng lại ở đâu", "Lần cuối cùng em khóc vì anh. Em sẽ ngừng khóc và ngừng cả sự yêu thương", "Hạnh phúc thì chẳng được bao lâu mà nỗi đau thì in sâu không thể xóa", "Cái lạnh nhất không phải là khi mùa đông sang, mà là sự vô tâm hời hợt từ người mà bạn đã từng xem là tất cả", "Có những người mình yêu mà không thể gần được. Và cũng có những người yêu mình nhưng không thể ừ được", "Quá khó để bắt buộc ai đó phải yêu mình. Và càng khó hơn khi ép bản thân mình phải ngừng yêu ai đó", "Yêu một người không yêu mình giống như ôm một cây xương rồng, càng ôm chặt càng làm bản thân mình đau hơn", "Chỉ cần khoảng cách đủ xa, thời gian đủ lâu thì dù có quen thuộc đến thế nào cũng sẽ trở lên xa lạ", "Đôi khi ngủ rồi, nhưng tay vẫn nắm chặt điện thoại để chờ tin nhắn của ai đó, Và vội nhận ra… mình là gì của người ta đâu mà đợi", "Hãy nhớ rằng, đôi khi sự im lặng là câu trả lời hay nhất.", "Với thế giới, bạn chỉ là một hạt cát nhỏ – nhưng với một người nào đó, bạn là cả thế giới của họ.", "Người ta có thể quên đi điều bạn nói, nhưng những gì bạn để lại trong lòng họ thì không bao giờ nhạt phai", "Con người trở nên cô đơn vì trong cuộc đời, thay vì xây những chiếc cầu người ta lại xây những bức tường.", "Con người sinh ra không phải để tan biến đi như một hạt cát vô danh. Họ sinh ra để in dấu lại trên mặt đất, in dấu lại trong trái tim người khác.", "Đừng nói mà hãy làm. Đừng huyên thuyên mà hãy hành động. Đừng hứa mà hãy chứng minh.", "Độc thân không phải là ế mà là đang chờ người tử tế để yêu", "Đừng bao giờ quyết định những vấn đề lâu dài trong lúc cảm xúc đang ngắn hạn.", "Hạnh phúc không có sẵn. Hạnh phúc xuất phát từ chính hành động của bạn.", "Hãy nhớ rằng mối quan hệ đẹp nhất là khi tình yêu thương bạn dành cho nhau vượt trên những nhu cầu đòi hỏi từ nhau.", "Độc thân không đáng sợ … đáng sợ là đang yêu mà cảm giác như chỉ có một mình", "Thà sống một mình còn hơn là khi có ai đó bên cạnh mà vẫn cảm thấy cô đơn", "Nếu bạn thật sự quan trọng với một người, thì người đó sẽ luôn có thời gian dành cho bạn: không lý do, không dối trá và không thất hứa.", "Cảm ơn ai đó đã vô tâm hời hợt để rồi tôi biết mình nên dừng lại ở đâu.", "Lần cuối cùng em khóc vì anh. Em sẽ ngừng khóc và ngừng cả sự yêu thương.",];

function alertDismissed() { }
window.onload = function () {
  setTimeout(function () {
    getQueryAll("body")[0].style.opacity = "1";
    getQueryAll("body")[0].style.visibility = "visible";
    getClass("selectgender")[0].style.display = "flex";
  }, 500);
  displayprofile();
};
getId("submit").addEventListener("click", function () {
  sten = ten.value;
  localStorage.setItem("sten", JSON.stringify(sten));
  for (i = 0; i <= 2; i++) {
    if (gioitinh[i].checked) {
      sgt = gioitinh[i].value;
      localStorage.setItem("sgt", JSON.stringify(sgt));
    }
  }
  sngaysinh = Date.parse(ngaysinh.value);
  dngaysinh = new Date(ngaysinh.value).getDate() + "/" + (new Date(ngaysinh.value).getMonth() + 1) + "/" + new Date(ngaysinh.value).getFullYear();
  localStorage.setItem("sngaysinh", JSON.stringify(sngaysinh));
  sngaybatdau = Date.parse(ngaybatdau.value) - 25200000;
  localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
  dngaybatdau = ngaybatdau.value;
  strangthai = trangthai.value;
  localStorage.setItem("strangthai", JSON.stringify(strangthai));
  if (!sngaybatdau || !sngaysinh || sten == "" || sgt == "" || strangthai == "") {
    openwindow = 2;
    getClass("modalq")[0].classList.add("active");
    getClass("blur")[0].classList.add("active");
    getClass("modalq")[0].innerHTML = '<div class="modalq-img"> <i class="fas fa-times-circle"></i> </div> Không được bỏ trống nha<div class="ops-buttons"><button class="waves-effect huy-exit">OK</button></div>';
    getClass("huy-exit")[0].addEventListener("click", function () {
      setTimeout(function () {
        openwindow = 1;
        getClass("modalq")[0].classList.remove("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    });

  } else {
    if (sngaysinh >= Date.parse(new Date())) {
      sngaysinh = Date.parse(new Date());
      localStorage.setItem("sngaysinh", JSON.stringify(sngaysinh));
    }
    if (sngaybatdau >= Date.parse(new Date())) {
      sngaybatdau = Date.parse(new Date());
      localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
    }
    profile = 1;
    localStorage.setItem("profile", JSON.stringify(profile));
    displayprofile();
  }
});
getId("dmng").addEventListener("change", function () {
  dmngs = getId("dmng").value;
  for (var j = 0; j <= 3; j++) {
    getClass("heart")[j].style.setProperty("--after", dmngs);
  }
  localStorage.setItem("dmngs", JSON.stringify(dmngs));
});
getId("dmc").addEventListener("change", function () {
  dmcs = getId("dmc").value;
  for (var j = 0; j < getClass("pcolor").length; j++) {
    getQueryAll(".pcolor")[j].style.color = dmcs;
  }
  localStorage.setItem("dmcs", JSON.stringify(dmcs));
});
getId("ngaysinh").max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
getId("ngaybatdau").max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
getClass("select1")[0].addEventListener("click", function () {
  openwindow = 0;
  getClass("content")[0].style.display = "block";
  getClass("setting")[0].style.display = "none";
  getClass("ssetting")[0].classList.remove("active");
  getClass("scontent")[0].style.transform = "translateX(0%)";
  getClass("content2")[0].classList.remove("active");
});
getClass("select2")[0].addEventListener("click", function () {
  openwindow = 1;
  getClass("content")[0].style.display = "block";
  getClass("setting")[0].style.display = "none";
  getClass("ssetting")[0].classList.remove("active");
  getClass("scontent")[0].style.transform = "translateX(-50%)";
});
getClass("select3")[0].addEventListener("click", function () {
  openwindow = 1;
  getClass("content")[0].style.display = "none";
  getClass("setting")[0].style.display = "block";
  getClass("ssetting")[0].classList.add("active");
  getClass("content2")[0].classList.add("active");
});
getClass("buttonstatus")[0].addEventListener("click", function () {
  getClass("statuseveryday")[0].classList.toggle("active");
  getClass("circle")[0].classList.toggle("active");
});
getClass("buttonsk")[0].addEventListener("click", function () {
  loadevent();
});

function loadevent() {
  openwindow = 1;
  getClass("event")[0].style.display = "block";
  getClass("event")[0].innerHTML = '<div class="exitevent"><i class="fas fa-sign-out-alt"></i></div><div div class="mainevent"><h4>Nhấn (+) để tạo sự kiện của bạn</h4><div class="inputField"><input type="text" placeholder="Thêm sự kiện của bạn" /><button class="btnaddevent waves-effect"> <i class="fas fa-plus"></i> </button></div><ul class="todoList"></ul><div class="footer"><div class="footers"> <span>Bạn có <span class="pendingTasks"></span> sự kiện</span></div><div class="footers"><button class="waves-effect">Xóa tất cả</button></div></div></div>';
  getClass("dialog")[0].classList.remove("active");
  getClass("select-options")[0].classList.remove("active");
  showTasks();
}

function loaddark() {
  if (dark === 1) {
    getClass("lightoff")[0].style.display = "block";
    getClass("lighton")[0].style.display = "none";
    dmhns = "#272727";
    getClass("navigation")[0].style.backgroundColor = "#272727";
    getClass("statuseveryday")[0].style.backgroundColor = dmhns;
    getQuery(".content .circle").classList.add("dark");
    getQuery(".personal_info").classList.add("dark");
    getQuery(".ssetting .pavatar").classList.add("dark");
    getQuery(".contentstatus").classList.add("dark");
    getQuery(".content .statuseveryday").classList.add("dark");
    getQuery(".content .buttonstatus").classList.add("dark");
    getQuery(".content .buttonsk").classList.add("dark");
    getQuery(".iconcamera").classList.add("dark");
    getQuery(".content .countday").style.color = "#fff";
    getQuery(".contentstatus").style.color = "#fff";
    getClass("datetime")[0].classList.add("dark");
    for (k = 0; k <= getQueryAll(".setting-option li").length - 1; k++) {
      document.querySelectorAll(".setting-option li")[k].classList.add("dark");
    }
  } else {
    getClass("lightoff")[0].style.display = "none";
    getClass("lighton")[0].style.display = "block";
    dmhns = "#fff";
    getClass("navigation")[0].style.backgroundColor = "#fff";
    getClass("statuseveryday")[0].style.backgroundColor = dmhns;
    getQuery(".content .circle").classList.remove("dark");
    getQuery(".personal_info").classList.remove("dark");
    getQuery(".ssetting .pavatar").classList.remove("dark");
    getQuery(".contentstatus").classList.remove("dark");
    getQuery(".content .statuseveryday").classList.remove("dark");
    getQuery(".content .buttonstatus").classList.remove("dark");
    getQuery(".content .buttonsk").classList.remove("dark");
    getQuery(".iconcamera").classList.remove("dark");
    getQuery(".content .countday").style.color = "#000";
    getQuery(".contentstatus").style.color = "#000";
    getClass("datetime")[0].classList.remove("dark");
    for (k = 0; k <= getQueryAll(".setting-option li").length - 1; k++) {
      document.querySelectorAll(".setting-option li")[k].classList.remove("dark");
    }
  }
}

function checkdark() {
  if (dark === 1) {
    dark = 0;
    localStorage.setItem("dark", JSON.stringify(dark));
  } else {
    dark = 1;
    localStorage.setItem("dark", JSON.stringify(dark));
  }
  displayprofile();
}
getClass("sli1")[0].addEventListener("click", checkdark);
getClass("sli2")[0].addEventListener("click", loadevent);
getClass("sli3")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("dialog")[0].innerHTML = '<div class="ops"><div class="col mb-15"><label for="statustitle">Trạng thái</label><div class="ui-switch"><input type="checkbox" checked id="switch" name="switch" class="switch-input" /><label for="switch" class="switch-wrapper"><div class="switch-spin"></div></label></div></div><label for="contentevent">Tiêu đề</label><input type="text" id="stieude" value="" /></div><div class="ops-buttons"><button id="acceptevent2" class="waves-effect">Xác nhận</button><button id="declineevent3" class="waves-effect">Hủy</button></div>';
  if (hiddentitle == true) {
    getClass("header")[0].classList.add("hidden");
    getClass("ssetting")[0].classList.add("height");
    getId("switch").checked = false;
  } else {
    getClass("header")[0].classList.remove("hidden");
    getClass("ssetting")[0].classList.remove("height");
    getId("switch").checked = true;
  }
  getId("stieude").value = dtieude;
  getId("switch").onclick = function () {
    if (getId("switch").checked) {
      getClass("header")[0].classList.remove("hidden");
      getClass("ssetting")[0].classList.remove("height");
      hiddentitle = false;
    } else {
      getClass("header")[0].classList.add("hidden");
      getClass("ssetting")[0].classList.add("height");
      hiddentitle = true;
    }
    localStorage.setItem("hiddentitle", JSON.stringify(hiddentitle));
  };
  getId("acceptevent2").addEventListener("click", function () {
    setTimeout(function () {
      dtieude = getId("stieude").value;
      getClass("stitle")[0].innerText = dtieude;
      localStorage.setItem("dtieude", JSON.stringify(dtieude));
      displayprofile();
      getId("stieude").innerText === "";
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getId("declineevent3").addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  loadfont();
  loaddarkdialog();
});
getClass("sli4")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("dialog")[0].innerHTML = '<div class="ops"><label for="contentevent">Ngày bắt đầu đếm</label><input type="date" name="ngaybatdau2" min="1900-01-01" id="ngaybatdau2" value="" /></div><div class="ops-buttons"><button id="xacnhanevent2" class="waves-effect">Xác nhận</button><button id="huyevent2" class="waves-effect">Hủy</button></div>';
  getClass("blur")[0].classList.add("active");
  getId("xacnhanevent2").addEventListener("click", function () {
    setTimeout(function () {
      if (getId("ngaybatdau2").value === "") {
        openwindow = 1;
        getClass("dialog")[0].classList.toggle("active");
        getClass("blur")[0].classList.remove("active");
      } else {
        dngaybatdau = getId("ngaybatdau2").value;
        getClass("snbdcd")[0].innerText = new Date(ngaybatdau2.value).getDate() + "/" + (new Date(ngaybatdau2.value).getMonth() + 1) + "/" + new Date(ngaybatdau2.value).getFullYear();
        sngaybatdau = Date.parse(dngaybatdau) - 25200000;
        localStorage.setItem("dngaybatdau", JSON.stringify(dngaybatdau));
        localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
        getId("ngaybatdau2").value = "";
        getClass("dialog")[0].classList.toggle("active");
        getClass("blur")[0].classList.remove("active");
        displayprofile();
      }
    }, 300);
  });
  getId("huyevent2").addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getId("ngaybatdau2").max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
  loadfont();
  loaddarkdialog();
});
getClass("sli5")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("dialog")[0].innerHTML = '<div class="ops"><label for="ndt">Tiêu đề trên</label><input type="text" id="ndt" value="" /></div><div class="ops mt-15"><label for="ndd">Tiêu đề dưới</label><input type="text" id="ndd" value="" /></div><div class="ops-buttons"><button id="xacnhan"class="waves-effect">Xác nhận</button><button id="huy" class="waves-effect">Hủy</button></div>';
  getId("xacnhan").addEventListener("click", function () {
    setTimeout(function () {
      getClass("info1")[0].innerText = getId("ndt").value;
      getClass("info2")[0].innerText = getId("ndd").value;
      info1 = getId("ndt").value;
      localStorage.setItem("info1", JSON.stringify(info1));
      info2 = getId("ndd").value;
      localStorage.setItem("info2", JSON.stringify(info2));
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getId("huy").addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getId("ndt").value = info1;
  getId("ndd").value = info2;
  getClass("info1")[0].innerText = getId("ndt").value;
  getClass("info2")[0].innerText = getId("ndd").value;
  loadfont();
  loaddarkdialog();
});


getClass("sli10")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("dialog")[0].innerHTML = '<div class="ops"><label for="ndd">Nội dung trạng thái</label><textarea type="text" id="ndtt" value=""> </textarea></div><div class="ops-buttons"><button id="xacnhantt"class="waves-effect">Xác nhận</button><button id="huy" class="waves-effect">Hủy</button></div>';


  getId("xacnhantt").addEventListener("click", function () {
    setTimeout(function () {
      getClass("dstatus")[0].innerText = getId("ndtt").value;
      strangthai = getId("ndtt").value;
      localStorage.setItem("strangthai", JSON.stringify(strangthai));
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getId("huy").addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getId("ndtt").value = getClass("dstatus")[0].innerText;
  loadfont();
  loaddarkdialog();
});


getClass("sli6")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("select-options")[0].classList.toggle("active");
  getClass("dialog")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("select-options")[0].innerHTML = '<ul><li class="dmc waves-effect text-red">Đổi màu chữ</li><li class="dkc waves-effect text-red">Đổi kiểu chữ</li><li class="huy4 waves-effect text-gray">Hủy</li></ul>';
  getClass("dmc")[0].addEventListener("click", function () {
    getId("dmc").click();
  });
  getClass("dkc")[0].addEventListener("click", function () {
    setTimeout(function () {
      getClass("fontfa")[0].classList.add("active");
      getClass("fontfa")[0].innerHTML = '<ul><li class="waves-effect font">Roboto</li><li class="waves-effect font">Poppins</li><li class="waves-effect font">Yaldevi</li><li class="waves-effect font">Nunito</li>    <li class="waves-effect font">Varela</li><li class="waves-effect font">Overlock</li><li class="waves-effect font">Mulish</li></ul>';
      getClass("select-options")[0].classList.remove("active");
      getClass("blur")[0].classList.add("active");
      for (f = 0; f < getClass("font").length; f++) {
        getClass("font")[f].onclick = function () {
          fontfamily = this.innerText;
          for (ii = 0; ii < getQueryAll('*').length; ii++) {
            getQueryAll('*')[ii].style.fontFamily = this.innerText + "," + "sans-serif";
          }
          localStorage.setItem("fontfamily", JSON.stringify(fontfamily));
          setTimeout(function () {
            getClass("blur")[0].classList.remove("active");
            getClass("fontfa")[0].classList.remove("active");
          }, 400)
        };
      }
    }, 300);
    if (dark === 1) {
      getClass("fontfa")[0].classList.add("dark");
    } else {
      getClass("fontfa")[0].classList.remove("dark");
    }
  });
  getClass("huy4")[0].addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("select-options")[0].classList.remove("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getClass("dmc")[0].addEventListener("click", function () {
    getId("dmc").click();
  });
  loadfont();
  loaddarkselectoptions();
});
getClass("sli7")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("select-options")[0].classList.toggle("active");
  getClass("dialog")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("select-options")[0].innerHTML = '<ul><li class="dmng waves-effect text-red">Đổi màu trái tim</li><li class="huy waves-effect text-gray">Hủy</li></ul>';
  getClass("dmng")[0].addEventListener("click", function () {
    getId("dmng").click();
  });
  getClass("huy")[0].addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("select-options")[0].classList.remove("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  loaddarkselectoptions();
});
getClass("sli8")[0].addEventListener("click", function () {
  profile = 0;
  localStorage.setItem("profile", JSON.stringify(profile));
  displayprofile();
  location.reload();
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true,
    autoShow: true,
  });
});
getClass("sli9")[0].addEventListener("click", function () {
  cordova.plugins.market.open("com.tiendatmagic.demngaycodon");
});

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = getQuery(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;
  let newLiTag = "";
  listArray.forEach(function (element, index) {
    newLiTag += "<li>" + element + '<span class="icon" onclick="deleteTask(' + index + ')"><i class="fas fa-trash"></i></span></li>';
  });
  loaddark();
  getClass("exitevent")[0].addEventListener("click", function () {
    openwindow = 1;
    getClass("event")[0].style.display = "none";
    getClass("blur")[0].classList.remove("active");
    setTimeout(function () {
      AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: true,
        autoShow: true,
      });
    }, 1000);
  });
  const inputBox = getQuery(".inputField input");
  const addBtn = getQuery(".inputField button");
  const todoList = getQuery(".todoList");
  const deleteAllBtn = getQuery(".footer button");

  addBtn.onclick = function () {
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
      listArray = [];
    } else {
      listArray = JSON.parse(getLocalStorageData);
    }
    if (userEnteredValue === "") {
      openwindow = 2;
      getClass("modalq")[0].classList.add("active");
      getClass("blur")[0].classList.add("active");
      getClass("modalq")[0].innerHTML = '<div class="modalq-img"> <i class="fas fa-times-circle"></i> </div> Không được bỏ trống nha<div class="ops-buttons"><button class="waves-effect huy-exit">OK</button></div>';
      getClass("huy-exit")[0].addEventListener("click", function () {
        setTimeout(function () {
          openwindow = 1;
          getClass("modalq")[0].classList.remove("active");
          getClass("blur")[0].classList.remove("active");
        }, 300);
      });
      loaddarkmodal();
    } else {
      listArray.push(userEnteredValue);
      localStorage.setItem("New Todo", JSON.stringify(listArray));
      showTasks();
      addBtn.classList.remove("active");
    }
  };
  deleteAllBtn.onclick = function () {
    listArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
  };
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
  if (dark === 1) {
    getClass("mainevent")[0].style.color = "#fff";
    getQuery(".event input[type='text']").classList.add("dark");
    getClass("todoList")[0].classList.add("dark");
  } else {
    getClass("mainevent")[0].style.color = "#272727";
    getQuery(".event input[type='text']").classList.remove("dark");
    getClass("todoList")[0].classList.remove("dark");
  }
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}
document.onkeydown = function (t) {
  if (t.which == 9) {
    return false;
  }
};

function onDeviceReady() {
  document.addEventListener("backbutton", onBackButton, false);
}

function onBackButton() {
  if (openwindow == 2) {
    getClass("blur")[0].classList.remove("active");
    getClass("modalq")[0].classList.remove("active");
    getClass("dialog")[0].classList.remove("active");
    getClass("select-options")[0].classList.remove("active");
    getClass("fontfa")[0].classList.remove("active");
    openwindow = 1;
  } else if (openwindow == 1) {
    getClass("event")[0].style.display = "none";
    getClass("content")[0].style.display = "block";
    getClass("setting")[0].style.display = "none";
    getClass("ssetting")[0].classList.remove("active");
    getClass("scontent")[0].style.transform = "translateX(0%)";
    getClass("content2")[0].classList.remove("active");
    openwindow = 0;
  } else if (openwindow == 0) {
    getClass("blur")[0].classList.toggle("active");
    getClass("modalq")[0].classList.toggle("active");
    getClass("modalq")[0].innerHTML = '<div class="options-img col mb-15"> <img src="./res/icon/android/drawable-xhdpi-icon.png" alt=""> <span>Bye bye!</span></div> Bạn muốn thoát ứng dụng?<div class="ops-buttons"><button id="xacnhan-exit" class="waves-effect">Xác nhận</button><button id="huy-exit" class="waves-effect">Hủy</button></div>';
    getId("xacnhan-exit").addEventListener("click", function () {
      setTimeout(function () {
        navigator.app.exitApp();
      }, 500);
    });
    getId("huy-exit").addEventListener("click", function () {
      setTimeout(function () {
        openwindow = 0;
        getClass("modalq")[0].classList.remove("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    });
  }
  loaddarkmodal();
}
document.addEventListener("deviceready", function () {
  onDeviceReady();
});

function displayprofile() {
  if (profile === 1) {
    loaddark();
    getClass("info1")[0].innerText = info1;
    getClass("info2")[0].innerText = info2;
    if (hiddentitle == true) {
      getClass("header")[0].classList.add("hidden");
      getClass("ssetting")[0].classList.add("height");
    } else {
      getClass("header")[0].classList.remove("hidden");
      getClass("ssetting")[0].classList.remove("height");
    }
    loadfont();
    getQueryAll(".container .mainscr ")[0].classList.add("hidden");
    getClass("container")[0].style.overflow = "hidden";
    getClass("navigation")[0].style.display = "block";
    getClass("profile")[0].style.display = "none";
    getClass("dialog")[0].style.display = "block";
    getClass("select-options")[0].style.display = "block";
    getClass("main")[0].style.display = "block";
    getClass("htitle")[0].innerText = dtieude;
    getClass("dname")[0].innerText = sten;
    getClass("dname")[1].innerText = sten;
    getClass("imgavatar")[0].src = result;
    getClass("imgavatar")[1].src = result;
    getClass("dgioitinh")[0].innerText = sgt;
    getClass("ntns")[0].innerText = dngaysinh;
    getClass("stitle")[0].innerText = dtieude;
    getClass("snbdcd")[0].innerText = new Date(dngaybatdau).getDate() + "/" + (new Date(dngaybatdau).getMonth() + 1) + "/" + new Date(dngaybatdau).getFullYear();
    getClass("dstatus")[0].innerText = strangthai;
    getClass("container")[0].style.backgroundColor = dmhns;
    getClass("event")[0].style.backgroundColor = dmhns;
    getClass("contentstatuseveryday")[0].innerText = status_apps[orderstatus - 1];
    for (var j = 0; j <= 3; j++) {
      getClass("heart")[j].style.setProperty("--after", dmngs);
    }
    for (var j = 0; j < getClass("pcolor").length; j++) {
      getQueryAll(".pcolor")[j].style.color = dmcs;
    }
    localStorage.setItem("dngaysinh", JSON.stringify(dngaysinh));
    localStorage.setItem("dngaybatdau", JSON.stringify(dngaybatdau));
    setInterval(function () {
      getClass("countday")[0].innerText = Math.floor(
        (new Date() - sngaybatdau) / 86400000);
      getClass("dage")[0].innerText = new Date().getFullYear() - new Date(sngaysinh).getFullYear();
      getClass("dngay")[0].innerText = Math.floor(
        (new Date() - sngaybatdau) / 86400000);
      getClass("dgio")[0].innerText = new Date().getHours();
      getClass("dphut")[0].innerText = new Date().getMinutes();
      getClass("dgiay")[0].innerText = new Date().getSeconds();
    }, 1000);
    switch (sgt) {
      case "Nam":
        {
          getClass("page")[0].style.backgroundColor = "#719cfa";
          break;
        }
      case "Nữ":
        {
          getClass("page")[0].style.backgroundColor = "pink";
          break;
        }
      default:
        {
          getClass("page")[0].style.backgroundColor = "#e6e6e6";
          break;
        }
    }
  } else { }
}

function loadfont() {
  for (i = 0; i < getQueryAll('button').length; i++) {
    getQueryAll('button')[i].style.fontFamily = fontfamily + "," + "sans-serif";
  }
  for (i = 0; i < getQueryAll('input').length; i++) {
    getQueryAll('input')[i].style.fontFamily = fontfamily + "," + "sans-serif";
  }
  for (ii = 0; ii < getQueryAll('*').length; ii++) {
    getQueryAll('*')[ii].style.fontFamily = fontfamily + "," + "sans-serif";
  }
}

function loaddarkdialog() {
  if (dark === 1) {
    getClass("dialog")[0].classList.add("dark");
  } else {
    getClass("dialog")[0].classList.remove("dark");
  }
}

function loaddarkselectoptions() {
  if (dark === 1) {
    getClass("select-options")[0].classList.add("dark");
  } else {
    getClass("select-options")[0].classList.remove("dark");
  }
}

function loaddarkmodal() {
  if (dark === 1) {
    getClass("modalq")[0].classList.add("dark");
  } else {
    getClass("modalq")[0].classList.remove("dark");
  }
}