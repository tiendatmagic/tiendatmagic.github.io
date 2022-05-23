console.log("%cTiendatmagic", "color: #ea00ff; font-size: x-large");

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
var vimgavatar1 = JSON.parse(localStorage.getItem("vimgavatar1"));
var vimgavatar2 = JSON.parse(localStorage.getItem("vimgavatar2"));
if (vimgavatar1 === null) {
  vimgavatar1 = "./boy.png";
}
if (vimgavatar2 === null) {
  vimgavatar2 = "./girl.png";
}
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
var dtitle = JSON.parse(localStorage.getItem("dtitle"));
if (dtitle === null) {
  dtitle = "Đếm Ngày Yêu";
}
var gmonthh = new Date().getMonth() + 1;
var gdatee = new Date().getDate();
if (gmonthh < 10) {
  gmonthh = "0" + gmonthh;
}
if (gdatee < 10) {
  gdatee = "0" + gdatee;
}
var dbirthday1 = JSON.parse(localStorage.getItem("dbirthday1"));
if (dbirthday1 === null) {
  dbirthday1 = new Date().getFullYear() + "-" + gmonthh + "-" + gdatee;
}
var dbirthday2 = JSON.parse(localStorage.getItem("dbirthday2"));
if (dbirthday2 === null) {
  dbirthday2 = new Date().getFullYear() + "-" + gmonthh + "-" + gdatee;
}
var dstartday = JSON.parse(localStorage.getItem("dstartday"));
if (dstartday === null || dstartday == "") {
  dstartday = new Date().getFullYear() + "-" + gmonthh + "-" + gdatee;
}
var simg = 0;
var susername1 = JSON.parse(localStorage.getItem("susername1"));
if (susername1 === null) {
  susername1 = "Chưa đặt tên";
}
var susername2 = JSON.parse(localStorage.getItem("susername2"));
if (susername2 === null) {
  susername2 = "Chưa đặt tên";
}
var sgt = JSON.parse(localStorage.getItem("sgt"));
if (sgt === null) {
  sgt = "";
}
var sngaysinh = JSON.parse(localStorage.getItem("sngaysinh"));
if (sngaysinh === null) {
  sngaysinh = "";
}
var sstartday = Date.parse(dstartday) - 25200000;
var sstatus = JSON.parse(localStorage.getItem("sstatus"));
if (sstatus === null) {
  sstatus = "Yêu một người rất khó, nên đừng vì chút sóng gió mà buông tay";
}
var dmhns = "";
var heartcolor = JSON.parse(localStorage.getItem("heartcolor"));
if (heartcolor === null) {
  heartcolor = "red";
}
var fontcolorr = JSON.parse(localStorage.getItem("fontcolorr"));
if (fontcolorr === null) {
  fontcolorr = "#ea00ff";
}
var info1 = JSON.parse(localStorage.getItem("info1"));
if (info1 === null || info1 === "") {
  info1 = "Đã yêu";
}
var info2 = JSON.parse(localStorage.getItem("info2"));
if (info2 === null || info2 === "") {
  info2 = "Ngày";
}
var hiddentitle = JSON.parse(localStorage.getItem("hiddentitle"));
if (hiddentitle === null || hiddentitle === "") {
  hiddentitle = true;
}
var data = JSON.parse(localStorage.getItem("datadncd"));
var arrdncd = JSON.parse(localStorage.getItem("arrdncd"));
if (arrdncd === null) {
  arrdncd = [];
}
var i;
var d = new Date();
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
  fontfamily = '"Mulish", sans-serif';
}
var passwordl = JSON.parse(localStorage.getItem("passwordl"));
if (passwordl == null || passwordl == "" || passwordl == false) {
  passwordl = false;
}
var passwordlock = JSON.parse(localStorage.getItem("passwordlock"));
if (passwordlock == null || passwordlock == "" || passwordl == false) {
  passwordlock = "";
}
var countpassword = 0;
var openwindow = 0;
const defaultBtn1 = getQuery("#default-btn1");
const defaultBtn2 = getQuery("#default-btn2");
const img1 = getQuery("#avataruser1 .imgavatar");
const img2 = getQuery("#avataruser2 .imgavatar");

function openimg1() {
  defaultBtn1.click();
}

function openimg2() {
  defaultBtn2.click();
}
getId("avataruser1").addEventListener("click", openmenuprofile1);
getId("avataruser2").addEventListener("click", openmenuprofile2);

function openmenuprofile1() {
  openwindow = 2;
  setTimeout(function () {
    getClass("listgroup")[0].classList.add("active");
    getClass("listgroup")[0].classList.add("lite");
    getClass("listgroup")[0].innerHTML =
      '<ul><li class="waves-effect listprofile pitem1">Đổi ảnh đại diện</li><li class="waves-effect listprofile pitem2">Đổi tên</li><li class="waves-effect listprofile pitem3">Đổi ngày sinh</li></ul>';
    getClass("select-options")[0].classList.remove("active");
    getClass("blur")[0].classList.add("active");
    getClass("pitem1")[0].onclick = function () {
      if (this.disable == undefined) {
        this.disable = true;
        setTimeout(function () {
          openimg1();
          getClass("blur")[0].classList.remove("active");
          getClass("listgroup")[0].classList.remove("active");
          getClass("listgroup")[0].classList.remove("lite");
        }, 400);
      }
    };
    getClass("pitem2")[0].onclick = function () {
      if (this.disable == undefined) {
        this.disable = true;
        setTimeout(function () {
          getClass("dialog")[0].classList.toggle("active");
          getClass("select-options")[0].classList.remove("active");
          getClass("dialog")[0].innerHTML =
            '<div class="ops"><label for="contentevent">Tên của bạn</label><input type="text" id="username1" value="" /></div><div class="ops-buttons"><button id="xacnhaneventprofile1" class="waves-effect">Xác nhận</button><button id="huyeventprofile1" class="waves-effect">Hủy</button></div>';
          getClass("blur")[0].classList.add("active");
          getClass("listgroup")[0].classList.remove("active");
          getId("username1").value = susername1;
          getId("xacnhaneventprofile1").addEventListener("click", function () {
            openwindow = 0;
            setTimeout(function () {
              if (getId("username1").value != "") {
                susername1 = getId("username1").value;
                getId("dusername1").innerText = susername1;
                localStorage.setItem("susername1", JSON.stringify(susername1));
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              } else {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }
            }, 300);
          });
          getId("huyeventprofile1").addEventListener("click", function () {
            if (this.disable == undefined) {
              this.disable = true;
              openwindow = 0;
              setTimeout(function () {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }, 300);
            }
          });
          getClass("listgroup")[0].classList.remove("lite");
        }, 400);
      }
    };
    getClass("pitem3")[0].onclick = function () {
      if (this.disable == undefined) {
        this.disable = true;
        setTimeout(function () {
          getClass("dialog")[0].classList.toggle("active");
          getClass("select-options")[0].classList.remove("active");
          getClass("dialog")[0].innerHTML =
            '<div class="ops"><label for="contentevent">Ngày sinh của bạn</label><input type="date" name="birthdayuser1" min="1900-01-01" id="birthdayuser1" value="" /> </div> <div class="ops-buttons"> <button id="xacnhaneventbirthday1" class="waves-effect">Xác nhận</button ><button id="huyeventprofile1" class="waves-effect">Hủy</button> </div> ';
          getId("birthdayuser1").max = new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .split("T")[0];
          getClass("blur")[0].classList.add("active");
          getClass("listgroup")[0].classList.remove("active");
          getId("birthdayuser1").value = dbirthday1;
          getId("xacnhaneventbirthday1").addEventListener("click", function () {
            openwindow = 0;
            setTimeout(function () {
              if (getId("birthdayuser1").value != "") {
                dbirthday1 = getId("birthdayuser1").value;
                localStorage.setItem("dbirthday1", JSON.stringify(dbirthday1));
                getClass("pageuser1")[0].innerText =
                  new Date().getFullYear() - new Date(dbirthday1).getFullYear();
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
                getzodia1();
              } else {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }
            }, 300);
          });
          getId("huyeventprofile1").addEventListener("click", function () {
            if (this.disable == undefined) {
              this.disable = true;
              openwindow = 0;
              setTimeout(function () {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }, 300);
            }
          });
          getClass("listgroup")[0].classList.remove("lite");
        }, 400);
      }
      //
    };
  }, 300);
  if (dark === 1) {
    getClass("listgroup")[0].classList.add("dark");
  } else {
    getClass("listgroup")[0].classList.remove("dark");
  }
}

function openmenuprofile2() {
  openwindow = 2;
  setTimeout(function () {
    getClass("listgroup")[0].classList.add("active");
    getClass("listgroup")[0].classList.add("lite");
    getClass("listgroup")[0].innerHTML =
      '<ul><li class="waves-effect listprofile pitem1">Đổi ảnh đại diện</li><li class="waves-effect listprofile pitem2">Đổi tên</li><li class="waves-effect listprofile pitem3">Đổi ngày sinh</li></ul>';
    getClass("select-options")[0].classList.remove("active");
    getClass("blur")[0].classList.add("active");
    getClass("pitem1")[0].onclick = function () {
      if (this.disable == undefined) {
        this.disable = true;
        setTimeout(function () {
          openimg2();
          getClass("blur")[0].classList.remove("active");
          getClass("listgroup")[0].classList.remove("active");
          getClass("listgroup")[0].classList.remove("lite");
        }, 400);
      }
    };
    getClass("pitem2")[0].onclick = function () {
      if (this.disable == undefined) {
        this.disable = true;
        setTimeout(function () {
          getClass("dialog")[0].classList.toggle("active");
          getClass("select-options")[0].classList.remove("active");
          getClass("dialog")[0].innerHTML =
            '<div class="ops"><label for="contentevent">Tên của bạn</label><input type="text" id="username2" value="" /></div><div class="ops-buttons"><button id="xacnhaneventprofile2" class="waves-effect">Xác nhận</button><button id="huyeventprofile2" class="waves-effect">Hủy</button></div>';
          getClass("blur")[0].classList.add("active");
          getClass("listgroup")[0].classList.remove("active");
          getId("username2").value = susername2;
          getId("xacnhaneventprofile2").addEventListener("click", function () {
            openwindow = 0;
            setTimeout(function () {
              if (getId("username2").value != "") {
                susername2 = getId("username2").value;
                getId("dusername2").innerText = susername2;
                localStorage.setItem("susername2", JSON.stringify(susername2));
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              } else {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }
            }, 300);
          });
          getId("huyeventprofile2").addEventListener("click", function () {
            if (this.disable == undefined) {
              this.disable = true;
              openwindow = 0;
              setTimeout(function () {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }, 300);
            }
          });
          getClass("listgroup")[0].classList.remove("lite");
        }, 400);
      }
    };
    getClass("pitem3")[0].onclick = function () {
      if (this.disable == undefined) {
        this.disable = true;
        setTimeout(function () {
          getClass("dialog")[0].classList.toggle("active");
          getClass("select-options")[0].classList.remove("active");
          getClass("dialog")[0].innerHTML =
            '<div class="ops"><label for="contentevent">Ngày sinh của bạn</label><input type="date" name="birthdayuser2" min="1900-01-01" id="birthdayuser2" value="" /> </div> <div class="ops-buttons"> <button id="xacnhaneventbirthday2" class="waves-effect">Xác nhận</button ><button id="huyeventprofile2" class="waves-effect">Hủy</button> </div> ';
          getId("birthdayuser2").max = new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .split("T")[0];
          getClass("blur")[0].classList.add("active");
          getClass("listgroup")[0].classList.remove("active");
          getId("birthdayuser2").value = dbirthday2;
          getId("xacnhaneventbirthday2").addEventListener("click", function () {
            openwindow = 0;
            setTimeout(function () {
              if (getId("birthdayuser2").value != "") {
                dbirthday2 = getId("birthdayuser2").value;
                localStorage.setItem("dbirthday2", JSON.stringify(dbirthday2));
                getClass("pageuser2")[0].innerText =
                  new Date().getFullYear() - new Date(dbirthday2).getFullYear();
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
                getzodia2();
              } else {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }
            }, 300);
          });
          getId("huyeventprofile2").addEventListener("click", function () {
            if (this.disable == undefined) {
              this.disable = true;
              openwindow = 0;
              setTimeout(function () {
                getClass("dialog")[0].classList.toggle("active");
                getClass("blur")[0].classList.remove("active");
              }, 300);
            }
          });
          getClass("listgroup")[0].classList.remove("lite");
        }, 400);
      }
    };
  }, 300);
  if (dark === 1) {
    getClass("listgroup")[0].classList.add("dark");
  } else {
    getClass("listgroup")[0].classList.remove("dark");
  }
}
defaultBtn1.addEventListener("change", insertimage1);
defaultBtn2.addEventListener("change", insertimage2);

function insertimage1() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      vimgavatar1 = reader.result;
      img1.src = vimgavatar1;
      localStorage.setItem("vimgavatar1", JSON.stringify(vimgavatar1));
      simg = 1;
    };
    reader.readAsDataURL(file);
  }
}

function insertimage2() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      vimgavatar2 = reader.result;
      img2.src = vimgavatar2;
      localStorage.setItem("vimgavatar2", JSON.stringify(vimgavatar2));
      simg = 1;
    };
    reader.readAsDataURL(file);
  }
}

function alertDismissed() {}
window.onload = function () {
  loadpasslockopen();
  setTimeout(function () {
    getQueryAll("body")[0].style.opacity = "1";
    getQueryAll("body")[0].style.visibility = "visible";
  }, 500);
  displayprofile();
};
getId("dmng").addEventListener("change", function () {
  heartcolor = getId("dmng").value;
  for (var j = 0; j <= 3; j++) {
    getClass("heart")[j].style.setProperty("--after", heartcolor);
  }
  localStorage.setItem("heartcolor", JSON.stringify(heartcolor));
});
getId("dmc").addEventListener("change", function () {
  fontcolorr = getId("dmc").value;
  for (var j = 0; j < getClass("pcolor").length; j++) {
    getQueryAll(".pcolor")[j].style.color = fontcolorr;
    getQueryAll(".pcolor")[j].style.fill = fontcolorr;
  }
  for (var k = 0; k < getClass("pcolorstroke").length; k++) {
    getQueryAll(".pcolorstroke")[k].style.stroke = fontcolorr;
  }
  localStorage.setItem("fontcolorr", JSON.stringify(fontcolorr));
});
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
  setTimeout(function () {
    openwindow = 1;
    getClass("newscreen")[0].style.display = "block";
    getClass("event")[0].innerHTML =
      '<div class="exitnewscreen"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-a</title><polyline points="244 400 100 256 244 112" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/><line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/></svg></div><div div class="mainnewscreen"><h4>Nhấn (+) để tạo sự kiện của bạn</h4><div class="inputField"><input type="text" placeholder="Thêm sự kiện của bạn" /><button class="btnaddevent waves-effect"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-a</title><line x1="256" y1="112" x2="256" y2="400" style="fill:none;stroke:#fff;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"/><line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#fff;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"/></svg></button></div><ul class="todoList"></ul><div class="footer"><div class="footers"> <span>Bạn có <span class="pendingTasks"></span> sự kiện</span></div><div class="footers"><button class="waves-effect">Xóa tất cả</button></div></div></div>';
    if (dark === 1) {
      getQueryAll(".exitnewscreen> svg polyline")[0].style.stroke = "#fff";
      getQueryAll(".exitnewscreen > svg line")[0].style.stroke = "#fff";
    } else {
      getQueryAll(".exitnewscreen > svg polyline")[0].style.stroke = "#000";
      getQueryAll(".exitnewscreen > svg line")[0].style.stroke = "#000";
    }
    getClass("dialog")[0].classList.remove("active");
    getClass("select-options")[0].classList.remove("active");
    showTasks();
  }, 300);
}

function loadmessenger() {
  setTimeout(function () {
    openwindow = 1;
    getClass("newscreen")[0].style.display = "block";
    getClass("event")[0].innerHTML = `

    <div class="exitnewscreen"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <title>ionicons-v5-a</title>
    <polyline points="244 400 100 256 244 112"
      style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    <line x1="120" y1="256" x2="412" y2="256"
      style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
  </svg></div>
<div class="mainnewscreen">
  <h4>Tin nhắn tình yêu</h4>
  <div class="list-messenger" id="list-messenger">


  </div>
</div>

    `;
    var list_mess_map = list_mess.map(function (x) {
      return (
        '<div class="messenger"><span class="numbermessenger"></span><span class="contentmessenger">' +
        x.content_mess +
        "</span></div>"
      );
    });
    document.getElementById("list-messenger").innerHTML =
      list_mess_map.join("");
    for (m = 0; m < list_mess.length; m++) {
      document.getElementsByClassName("numbermessenger")[m].innerHTML = m + 1;
      document.getElementsByClassName("numbermessenger")[
        m
      ].style.backgroundColor = fontcolorr;
    }
    for (n = 0; n < list_mess.length; n++) {
      document.getElementsByClassName("contentmessenger")[n].onclick =
        function () {
          copymessenger(this.innerText);
          window.plugins.toast.showWithOptions({
            message: "Đã sao chép tin nhắn vào bộ nhớ Clipboard",
            duration: 1500,
            position: "bottom",
            addPixelsY: -40,
          });
        };
    }

    if (dark === 1) {
      getClass("mainnewscreen")[0].style.color = "#fff";
      for (b = 0; b < list_mess.length; b++) {
        document.getElementsByClassName("messenger")[b].classList.add("dark");
      }
    } else {
      getClass("mainnewscreen")[0].style.color = "#272727";
      for (b = 0; b < list_mess.length; b++) {
        document.getElementsByClassName("messenger")[b].classList.remove("dark");
      }
    }
    function copymessenger(text) {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    getClass("exitnewscreen")[0].addEventListener("click", function () {
      setTimeout(function () {
        openwindow = 1;
        getClass("newscreen")[0].style.display = "none";
        getClass("blur")[0].classList.remove("active");
        AdMob.prepareInterstitial({
          adId: admobid.interstitial,
          isTesting: true,
          autoShow: true,
        });
      }, 300);
    });
    if (dark === 1) {
      getQueryAll(".exitnewscreen > svg polyline")[0].style.stroke = "#fff";
      getQueryAll(".exitnewscreen > svg line")[0].style.stroke = "#fff";
    } else {
      getQueryAll(".exitnewscreen > svg polyline")[0].style.stroke = "#000";
      getQueryAll(".exitnewscreen > svg line")[0].style.stroke = "#000";
    }
    getClass("dialog")[0].classList.remove("active");
    getClass("select-options")[0].classList.remove("active");
  }, 300);
}

function loadpasslock() {
  openwindow = 3;
  getClass("passlock")[0].style.display = "block";
  getClass("passlock")[0].innerHTML =
    '<div class="exitpasslock"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-a</title><polyline points="244 400 100 256 244 112" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/><line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"/></svg></div><div class="mainpasslock heightauto"><div><form action=""><h4 class="pcolor">Nhập mã khóa</h4><div class="inputFieldPass"><input id="inputpasslock" class="inputpasslock pcolor" disabled type="password" maxlength="8"></div><div class="listbuttonpasslock"><div class="col-lbtn"><div class="numberpl waves-effect numlock">1</div><div class="numberpl waves-effect numlock">2</div><div class="numberpl waves-effect numlock">3</div></div><div class="col-lbtn"><div class="numberpl waves-effect numlock">4</div><div class="numberpl waves-effect numlock">5</div><div class="numberpl waves-effect numlock">6</div></div><div class="col-lbtn"><div class="numberpl waves-effect numlock">7</div><div class="numberpl waves-effect numlock">8</div><div class="numberpl waves-effect numlock">9</div></div><div class="col-lbtn"><div class="numberpl waves-effect removenumlock bordernone"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-a</title><polyline points="244 400 100 256 244 112" style="fill:none;stroke:#fff;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" class="btncolor"/><line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#fff;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" class="btncolor"/></svg></div><div class="numberpl waves-effect numlock">0</div><div class="numberpl waves-effect acceptpasslock bordernone"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><polyline points="416 128 192 384 96 288" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"class="btncolor" /></svg></div></div></div></form></div></div>';
  if (dark === 1) {
    getQueryAll(".exitpasslock  > svg polyline")[0].style.stroke = "#fff";
    getQueryAll(".exitpasslock  > svg line")[0].style.stroke = "#fff";
  } else {
    getQueryAll(".exitpasslock  > svg polyline")[0].style.stroke = "#000";
    getQueryAll(".exitpasslock  > svg line")[0].style.stroke = "#000";
  }
  getClass("dialog")[0].classList.remove("active");
  getClass("select-options")[0].classList.remove("active");
  for (i = 0; i < getClass("numlock").length; i++) {
    getClass("numlock")[i].onclick = function () {
      if (getId("inputpasslock").value.length < 8) {
        getId("inputpasslock").value += this.innerText;
      }
    };
  }
  getClass("removenumlock")[0].onclick = function () {
    getId("inputpasslock").value = getId("inputpasslock").value.substr(
      0,
      getId("inputpasslock").value.length - 1
    );
  };
  getClass("acceptpasslock")[0].onclick = function () {
    if (getId("inputpasslock").value.length >= 1) {
      passwordlock = getId("inputpasslock").value;
      localStorage.setItem("passwordlock", JSON.stringify(passwordlock));
      passwordl = true;
      localStorage.setItem("passwordl", JSON.stringify(passwordl));
      openwindow = 2;
      getClass("modalq")[0].classList.add("active");
      getClass("blur")[0].classList.add("active");
      getClass("modalq")[0].innerHTML =
        '<div class="modalq-img success"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="width: 100%;height: 100%;margin: 0 auto; "><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z" style="fill: #00b40e"/></svg></div> Thiết lập mật khẩu thành công<div class="ops-buttons"><button class="waves-effect huy-exit">OK</button></div>';
      getClass("huy-exit")[0].addEventListener("click", function () {
        setTimeout(function () {
          openwindow = 1;
          getClass("modalq")[0].classList.remove("active");
          getClass("blur")[0].classList.remove("active");
        }, 300);
      });
      getClass("passlock")[0].style.display = "none";
    } else if (getId("inputpasslock").value.length <= 0) {
      passwordlock = "";
      localStorage.setItem("passwordlock", JSON.stringify(passwordlock));
      passwordl = false;
      localStorage.setItem("passwordl", JSON.stringify(passwordl));
      openwindow = 2;
      getClass("modalq")[0].classList.add("active");
      getClass("blur")[0].classList.add("active");
      getClass("modalq")[0].innerHTML =
        '<div class="modalq-img success"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="width: 100%;height: 100%;margin: 0 auto; "><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z" style="fill: #00b40e"/></svg></div> Đã xóa thiết lập mật khẩu<div class="ops-buttons"><button class="waves-effect huy-exit">OK</button></div>';
      getClass("huy-exit")[0].addEventListener("click", function () {
        setTimeout(function () {
          openwindow = 1;
          getClass("modalq")[0].classList.remove("active");
          getClass("blur")[0].classList.remove("active");
        }, 300);
      });
      getClass("passlock")[0].style.display = "none";
    }
  };
  getClass("exitpasslock")[0].addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("passlock")[0].style.display = "none";
      getClass("passlock")[0].innerHTML = "";
      getClass("blur")[0].classList.remove("active");
      AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: true,
        autoShow: true,
      });
    }, 300);
  });
  loadfont();
}

function loadpasslockopen() {
  var getnumber = true;
  if (passwordl == true) {
    getClass("passlock")[0].style.display = "block";
    getClass("passlock")[0].innerHTML =
      '<div class="mainpasslock"><div><form action=""><h4 class="pcolor">Nhập mã khóa</h4><div class="inputFieldPass"><input id="inputpasslock" class="inputpasslock pcolor" disabled type="password" maxlength="8"></div><div class="listbuttonpasslock"><div class="col-lbtn"><div class="numberpl waves-effect numlock">1</div><div class="numberpl waves-effect numlock">2</div><div class="numberpl waves-effect numlock">3</div></div><div class="col-lbtn"><div class="numberpl waves-effect numlock">4</div><div class="numberpl waves-effect numlock">5</div><div class="numberpl waves-effect numlock">6</div></div><div class="col-lbtn"><div class="numberpl waves-effect numlock">7</div><div class="numberpl waves-effect numlock">8</div><div class="numberpl waves-effect numlock">9</div></div><div class="col-lbtn"><div class="numberpl waves-effect removenumlock bordernone"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-a</title><polyline points="244 400 100 256 244 112" style="fill:none;stroke:#fff;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" class="btncolor"/><line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#fff;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" class="btncolor"/></svg></div><div class="numberpl waves-effect numlock">0</div><div class="numberpl waves-effect acceptpasslock bordernone"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><polyline points="416 128 192 384 96 288" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"class="btncolor" /></svg></div></div></div></form></div></div>';
    getClass("dialog")[0].classList.remove("active");
    getClass("select-options")[0].classList.remove("active");
    for (i = 0; i < getClass("numlock").length; i++) {
      getClass("numlock")[i].onclick = function () {
        if (getId("inputpasslock").value.length < 8 && getnumber == true) {
          getId("inputpasslock").value += this.innerText;
        }
      };
    }
    getClass("removenumlock")[0].onclick = function () {
      getId("inputpasslock").value = getId("inputpasslock").value.substr(
        0,
        getId("inputpasslock").value.length - 1
      );
    };
    getClass("acceptpasslock")[0].onclick = function () {
      if (getId("inputpasslock").value.length >= 1) {
        if (getId("inputpasslock").value == passwordlock) {
          getClass("passlock")[0].style.display = "none";
          getClass("passlock")[0].innerHTML = "";
          getClass("main")[0].style.display = "block";
          getnumber = true;
        } else {
          getId("inputpasslock").classList.add("active");
          getnumber = false;
          setTimeout(function () {
            countpassword += 1;
            getId("inputpasslock").classList.remove("active");
            getId("inputpasslock").value = "";
            getnumber = true;
          }, 600);
          if (countpassword >= 2 && getId("inputpasslock").value != "") {
            openwindow = 2;
            getClass("modalq")[0].classList.add("active");
            getClass("blur")[0].classList.add("active");
            getClass("modalq")[0].innerHTML =
              '<div class="modalq-img"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="width: 100%;height: 100%;margin: 0 auto; "><title>ionicons-v5-m</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm86.63,272L320,342.63l-64-64-64,64L169.37,320l64-64-64-64L192,169.37l64,64,64-64L342.63,192l-64,64Z" style="fill: #ea5e67"/></svg> </div> Nếu bạn quên mật khẩu, vui lòng cài đặt lại ứng dụng<div class="ops-buttons"><button class="waves-effect huy-exit">OK</button></div>';
            getClass("huy-exit")[0].addEventListener("click", function () {
              setTimeout(function () {
                openwindow = 0;
                getClass("modalq")[0].classList.remove("active");
                getClass("blur")[0].classList.remove("active");
              }, 300);
            });
            loaddarkmodal();
          }
        }
      }
    };
  } else {
    getClass("main")[0].style.display = "block";
  }
}

function getzodia1() {
  var pzodiacuser = getClass("pzodiacuser1")[0];
  var pzodia = "";
  if (
    (new Date(dbirthday1).getDate() >= 21 &&
      new Date(dbirthday1).getMonth() + 1 == 3) ||
    (new Date(dbirthday1).getDate() <= 20 &&
      new Date(dbirthday1).getMonth() + 1 == 4)
  ) {
    pzodia = "Bạch Dương";
  } else if (
    (new Date(dbirthday1).getDate() >= 21 &&
      new Date(dbirthday1).getMonth() + 1 == 4) ||
    (new Date(dbirthday1).getDate() <= 21 &&
      new Date(dbirthday1).getMonth() + 1 == 5)
  ) {
    pzodia = "Kim Ngưu";
  } else if (
    (new Date(dbirthday1).getDate() >= 22 &&
      new Date(dbirthday1).getMonth() + 1 == 5) ||
    (new Date(dbirthday1).getDate() <= 21 &&
      new Date(dbirthday1).getMonth() + 1 == 6)
  ) {
    pzodia = "Song Ngư";
  } else if (
    (new Date(dbirthday1).getDate() >= 22 &&
      new Date(dbirthday1).getMonth() + 1 == 6) ||
    (new Date(dbirthday1).getDate() <= 22 &&
      new Date(dbirthday1).getMonth() + 1 == 7)
  ) {
    pzodia = "Cự Giải";
  } else if (
    (new Date(dbirthday1).getDate() >= 23 &&
      new Date(dbirthday1).getMonth() + 1 == 7) ||
    (new Date(dbirthday1).getDate() <= 22 &&
      new Date(dbirthday1).getMonth() + 1 == 8)
  ) {
    pzodia = "Sư tử";
  } else if (
    (new Date(dbirthday1).getDate() >= 23 &&
      new Date(dbirthday1).getMonth() + 1 == 8) ||
    (new Date(dbirthday1).getDate() <= 23 &&
      new Date(dbirthday1).getMonth() + 1 == 9)
  ) {
    pzodia = "Xử nữ";
  } else if (
    (new Date(dbirthday1).getDate() >= 24 &&
      new Date(dbirthday1).getMonth() + 1 == 9) ||
    (new Date(dbirthday1).getDate() <= 23 &&
      new Date(dbirthday1).getMonth() + 1 == 10)
  ) {
    pzodia = "Thiên Bình";
  } else if (
    (new Date(dbirthday1).getDate() >= 24 &&
      new Date(dbirthday1).getMonth() + 1 == 10) ||
    (new Date(dbirthday1).getDate() <= 22 &&
      new Date(dbirthday1).getMonth() + 1 == 11)
  ) {
    pzodia = "Thần Nông";
  } else if (
    (new Date(dbirthday1).getDate() >= 23 &&
      new Date(dbirthday1).getMonth() + 1 == 11) ||
    (new Date(dbirthday1).getDate() <= 21 &&
      new Date(dbirthday1).getMonth() + 1 == 12)
  ) {
    pzodia = "Nhân Mã";
  } else if (
    (new Date(dbirthday1).getDate() >= 22 &&
      new Date(dbirthday1).getMonth() + 1 == 12) ||
    (new Date(dbirthday1).getDate() <= 20 &&
      new Date(dbirthday1).getMonth() + 1 == 1)
  ) {
    pzodia = "Ma Kết";
  } else if (
    (new Date(dbirthday1).getDate() >= 21 &&
      new Date(dbirthday1).getMonth() + 1 == 1) ||
    (new Date(dbirthday1).getDate() <= 19 &&
      new Date(dbirthday1).getMonth() + 1 == 2)
  ) {
    pzodia = "Bảo Bình";
  } else if (
    (new Date(dbirthday1).getDate() >= 20 &&
      new Date(dbirthday1).getMonth() + 1 == 2) ||
    (new Date(dbirthday1).getDate() <= 20 &&
      new Date(dbirthday1).getMonth() + 1 == 3)
  ) {
    pzodia = "Song Ngư";
  } else pzodia = "?";
  pzodiacuser.innerText = pzodia;
}

function getzodia2() {
  var pzodiacuser = getClass("pzodiacuser2")[0];
  var pzodia = "";
  if (
    (new Date(dbirthday2).getDate() >= 21 &&
      new Date(dbirthday2).getMonth() + 1 == 3) ||
    (new Date(dbirthday2).getDate() <= 20 &&
      new Date(dbirthday2).getMonth() + 1 == 4)
  ) {
    pzodia = "Bạch Dương";
  } else if (
    (new Date(dbirthday2).getDate() >= 21 &&
      new Date(dbirthday2).getMonth() + 1 == 4) ||
    (new Date(dbirthday2).getDate() <= 21 &&
      new Date(dbirthday2).getMonth() + 1 == 5)
  ) {
    pzodia = "Kim Ngưu";
  } else if (
    (new Date(dbirthday2).getDate() >= 22 &&
      new Date(dbirthday2).getMonth() + 1 == 5) ||
    (new Date(dbirthday2).getDate() <= 21 &&
      new Date(dbirthday2).getMonth() + 1 == 6)
  ) {
    pzodia = "Song Ngư";
  } else if (
    (new Date(dbirthday2).getDate() >= 22 &&
      new Date(dbirthday2).getMonth() + 1 == 6) ||
    (new Date(dbirthday2).getDate() <= 22 &&
      new Date(dbirthday2).getMonth() + 1 == 7)
  ) {
    pzodia = "Cự Giải";
  } else if (
    (new Date(dbirthday2).getDate() >= 23 &&
      new Date(dbirthday2).getMonth() + 1 == 7) ||
    (new Date(dbirthday2).getDate() <= 22 &&
      new Date(dbirthday2).getMonth() + 1 == 8)
  ) {
    pzodia = "Sư tử";
  } else if (
    (new Date(dbirthday2).getDate() >= 23 &&
      new Date(dbirthday2).getMonth() + 1 == 8) ||
    (new Date(dbirthday2).getDate() <= 23 &&
      new Date(dbirthday2).getMonth() + 1 == 9)
  ) {
    pzodia = "Xử nữ";
  } else if (
    (new Date(dbirthday2).getDate() >= 24 &&
      new Date(dbirthday2).getMonth() + 1 == 9) ||
    (new Date(dbirthday2).getDate() <= 23 &&
      new Date(dbirthday2).getMonth() + 1 == 10)
  ) {
    pzodia = "Thiên Bình";
  } else if (
    (new Date(dbirthday2).getDate() >= 24 &&
      new Date(dbirthday2).getMonth() + 1 == 10) ||
    (new Date(dbirthday2).getDate() <= 22 &&
      new Date(dbirthday2).getMonth() + 1 == 11)
  ) {
    pzodia = "Thần Nông";
  } else if (
    (new Date(dbirthday2).getDate() >= 23 &&
      new Date(dbirthday2).getMonth() + 1 == 11) ||
    (new Date(dbirthday2).getDate() <= 21 &&
      new Date(dbirthday2).getMonth() + 1 == 12)
  ) {
    pzodia = "Nhân Mã";
  } else if (
    (new Date(dbirthday2).getDate() >= 22 &&
      new Date(dbirthday2).getMonth() + 1 == 12) ||
    (new Date(dbirthday2).getDate() <= 20 &&
      new Date(dbirthday2).getMonth() + 1 == 1)
  ) {
    pzodia = "Ma Kết";
  } else if (
    (new Date(dbirthday2).getDate() >= 21 &&
      new Date(dbirthday2).getMonth() + 1 == 1) ||
    (new Date(dbirthday2).getDate() <= 19 &&
      new Date(dbirthday2).getMonth() + 1 == 2)
  ) {
    pzodia = "Bảo Bình";
  } else if (
    (new Date(dbirthday2).getDate() >= 20 &&
      new Date(dbirthday2).getMonth() + 1 == 2) ||
    (new Date(dbirthday2).getDate() <= 20 &&
      new Date(dbirthday2).getMonth() + 1 == 3)
  ) {
    pzodia = "Song Ngư";
  } else pzodia = "?";
  pzodiacuser.innerText = pzodia;
}

function loaddark() {
  if (dark === 1) {
    getClass("lightoff")[0].style.display = "block";
    getClass("lighton")[0].style.display = "none";
    dmhns = "#272727";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#272727";
    getClass("navigation")[0].style.backgroundColor = "#272727";
    getClass("statuseveryday")[0].style.backgroundColor = dmhns;
    getQuery(".content .circle").classList.add("dark");
    getQuery(".personal_info").classList.add("dark");
    getQuery(".contentstatus").classList.add("dark");
    getQuery(".content .statuseveryday").classList.add("dark");
    getQuery(".content .buttonstatus").classList.add("dark");
    getQuery(".content .buttonsk").classList.add("dark");
    getQueryAll(
      ".personal_info .personal-user .personal-avatar"
    )[0].classList.add("dark");
    getQueryAll(
      ".personal_info .personal-user .personal-avatar"
    )[1].classList.add("dark");
    getQuery(".content .countday").style.color = "#fff";
    getQuery(".contentstatus").style.color = "#fff";
    getClass("passlock")[0].classList.add("dark");
    for (m = 0; m <= getQueryAll(".btncolor").length - 1; m++) {
      document.querySelectorAll(".btncolor")[m].classList.add("dark");
    }
    for (k = 0; k <= getQueryAll(".setting-option li").length - 1; k++) {
      document.querySelectorAll(".setting-option li")[k].classList.add("dark");
    }
    for (
      l = 0;
      l <= getQueryAll(".passlock .listbuttonpasslock .numberpl").length - 1;
      l++
    ) {
      document
        .querySelectorAll(".passlock .listbuttonpasslock .numberpl")
        [l].classList.add("dark");
    }
  } else {
    getClass("lightoff")[0].style.display = "none";
    getClass("lighton")[0].style.display = "block";
    dmhns = "#fff";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
    getClass("navigation")[0].style.backgroundColor = "#fff";
    getClass("statuseveryday")[0].style.backgroundColor = dmhns;
    getQuery(".content .circle").classList.remove("dark");
    getQuery(".personal_info").classList.remove("dark");
    getQuery(".contentstatus").classList.remove("dark");
    getQuery(".content .statuseveryday").classList.remove("dark");
    getQuery(".content .buttonstatus").classList.remove("dark");
    getQuery(".content .buttonsk").classList.remove("dark");
    getQueryAll(
      ".personal_info .personal-user .personal-avatar"
    )[0].classList.remove("dark");
    getQueryAll(
      ".personal_info .personal-user .personal-avatar"
    )[1].classList.remove("dark");
    getQuery(".content .countday").style.color = "#000";
    getQuery(".contentstatus").style.color = "#000";
    getClass("datetime")[0].classList.remove("dark");
    getClass("passlock")[0].classList.remove("dark");
    for (m = 0; m <= getQueryAll(".btncolor").length - 1; m++) {
      document.querySelectorAll(".btncolor")[m].classList.remove("dark");
    }
    for (k = 0; k <= getQueryAll(".setting-option li").length - 1; k++) {
      document
        .querySelectorAll(".setting-option li")
        [k].classList.remove("dark");
    }
    for (
      l = 0;
      l <= getQueryAll(".passlock .listbuttonpasslock .numberpl").length - 1;
      l++
    ) {
      document
        .querySelectorAll(".passlock .listbuttonpasslock .numberpl")
        [l].classList.remove("dark");
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
getClass("sli13")[0].addEventListener("click", loadmessenger);
getClass("sli3")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("dialog")[0].innerHTML =
    '<div class="ops"><div class="col mb-15"><label for="statustitle">Trạng thái</label><div class="ui-switch"><input type="checkbox" checked id="switch" name="switch" class="switch-input" /><label for="switch" class="switch-wrapper"><div class="switch-spin"></div></label></div></div><label for="contentevent">Tiêu đề</label><input type="text" id="stieude" value="" /></div><div class="ops-buttons"><button id="acceptevent2" class="waves-effect">Xác nhận</button><button id="declineevent3" class="waves-effect">Hủy</button></div>';
  if (hiddentitle == true) {
    getClass("header")[0].classList.add("hidden");
    getClass("ssetting")[0].classList.add("height");
    getId("switch").checked = false;
  } else {
    getClass("header")[0].classList.remove("hidden");
    getClass("ssetting")[0].classList.remove("height");
    getId("switch").checked = true;
  }
  getId("stieude").value = dtitle;
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
    if (this.disable == undefined) {
      this.disable = true;
      setTimeout(function () {
        dtitle = getId("stieude").value;
        getClass("stitle")[0].innerText = dtitle;
        localStorage.setItem("dtitle", JSON.stringify(dtitle));
        displayprofile();
        getId("stieude").innerText === "";
        getClass("dialog")[0].classList.toggle("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    }
  });
  getId("declineevent3").addEventListener("click", function () {
    if (this.disable == undefined) {
      this.disable = true;
      setTimeout(function () {
        openwindow = 1;
        getClass("dialog")[0].classList.remove("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    }
  });
  loadfont();
  loaddarkdialog();
});
/*
getClass("sli12")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("dialog")[0].innerHTML = `
  <div class="ops">
  <div class="col mb-15">
    <label for="statustitle"> Hiển thị thông báo trạng thái </label>
    <div class="ui-switch">
      <input
        type="checkbox"
        checked
        id="switch1"
        name="switch"
        class="switch-input"
      /><label for="switch1" class="switch-wrapper">
        <div class="switch-spin"></div>
      </label>
    </div>
  </div>

  <div class="col mb-15">
  <button id="notifi" class="waves-effect">Xác nhận</button
  >
    <label for="statustitle"> Hiển thị thông báo đếm ngày</label>
    <div class="ui-switch">
      <input
        type="checkbox"
        checked
        id="switch2"
        name="switch"
        class="switch-input"
      /><label for="switch2" class="switch-wrapper">
        <div class="switch-spin"></div>
      </label>

    </div>
  </div>
</div>
<div class="ops-buttons">
  <button id="acceptevent2" class="waves-effect">Xác nhận</button
  ><button id="declineevent3" class="waves-effect">Hủy</button>
</div>
`;
  document.getElementById("notifi").onclick = function () {
    var id = 1, dialog;
    cordova.plugins.notification.local.schedule({
      id: 1,
      text: 'Test Message 1',
      icon: 'file://res/icon/android/drawable-hdpi-icon.png',
      smallIcon: 'res://cordova',
      sound: null,
      badge: 1,
      data: { test: id }
    });
  }
  getId("acceptevent2").addEventListener("click", function () {
    setTimeout(function () {
      dtitle = getId("stieude").value;
      getClass("stitle")[0].innerText = dtitle;
      localStorage.setItem("dtitle", JSON.stringify(dtitle));
      displayprofile();
      getId("stieude").innerText === "";
      getClass("dialog")[0].classList.toggle("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  getId("declineevent3").addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("dialog")[0].classList.remove("active");
      getClass("blur")[0].classList.remove("active");
    }, 300);
  });
  loadfont();
  loaddarkdialog();
});
*/
getClass("sli4")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("dialog")[0].innerHTML =
    '<div class="ops"><label for="contentevent">Ngày bắt đầu đếm</label><input type="date" name="startday" min="1900-01-01" id="startday" value="" /></div><div class="ops-buttons"><button id="xacnhanevent2" class="waves-effect">Xác nhận</button><button id="huyevent2" class="waves-effect">Hủy</button></div>';
  var gmonth = new Date(dstartday).getMonth() + 1;
  var gdate = new Date(dstartday).getDate();
  if (gmonth < 10) {
    gmonth = "0" + gmonth;
  }
  if (gdate < 10) {
    gdate = "0" + gdate;
  }
  getId("startday").value =
    new Date(dstartday).getFullYear() + "-" + gmonth + "-" + gdate;
  getClass("blur")[0].classList.add("active");
  getId("xacnhanevent2").addEventListener("click", function () {
    if (this.disable == undefined) {
      this.disable = true;
      setTimeout(function () {
        if (getId("startday").value === "") {
          openwindow = 1;
          getClass("dialog")[0].classList.toggle("active");
          getClass("blur")[0].classList.remove("active");
        } else {
          dstartday = getId("startday").value;
          getClass("snbdcd")[0].innerText =
            new Date(startday.value).getDate() +
            "/" +
            (new Date(startday.value).getMonth() + 1) +
            "/" +
            new Date(startday.value).getFullYear();
          sstartday = Date.parse(dstartday) - 25200000;
          localStorage.setItem("dstartday", JSON.stringify(dstartday));
          localStorage.setItem("sstartday", JSON.stringify(sstartday));
          getId("startday").value = "";
          getClass("dialog")[0].classList.toggle("active");
          getClass("blur")[0].classList.remove("active");
          displayprofile();
        }
      }, 300);
    }
  });
  getId("huyevent2").addEventListener("click", function () {
    if (this.disable == undefined) {
      this.disable = true;
      setTimeout(function () {
        openwindow = 1;
        getClass("dialog")[0].classList.remove("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    }
  });
  getId("startday").max = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];
  loadfont();
  loaddarkdialog();
});
getClass("sli5")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("dialog")[0].classList.toggle("active");
  getClass("select-options")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("dialog")[0].innerHTML =
    '<div class="ops"><label for="ndt">Tiêu đề trên</label><input type="text" id="ndt" value="" /></div><div class="ops mt-15"><label for="ndd">Tiêu đề dưới</label><input type="text" id="ndd" value="" /></div><div class="ops-buttons"><button id="xacnhan"class="waves-effect">Xác nhận</button><button id="huy" class="waves-effect">Hủy</button></div>';
  getId("xacnhan").addEventListener("click", function () {
    if (this.disable == undefined) {
      this.disable = true;
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
    }
  });
  getId("huy").addEventListener("click", function () {
    if (this.disable == undefined) {
      this.disable = true;
      setTimeout(function () {
        openwindow = 1;
        getClass("dialog")[0].classList.remove("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    }
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
  getClass("dialog")[0].innerHTML =
    '<div class="ops"><label for="ndd">Nội dung trạng thái</label><textarea type="text" id="ndtt" value=""> </textarea></div><div class="ops-buttons"><button id="xacnhantt"class="waves-effect">Xác nhận</button><button id="huy" class="waves-effect">Hủy</button></div>';
  getId("xacnhantt").addEventListener("click", function () {
    if (this.disable == undefined) {
      this.disable = true;
      setTimeout(function () {
        getClass("dstatus")[0].innerText = getId("ndtt").value;
        sstatus = getId("ndtt").value;
        localStorage.setItem("sstatus", JSON.stringify(sstatus));
        getClass("dialog")[0].classList.toggle("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    }
  });
  getId("huy").addEventListener("click", function () {
    if (this.disable == undefined) {
      this.disable = true;
      setTimeout(function () {
        openwindow = 1;
        getClass("dialog")[0].classList.remove("active");
        getClass("blur")[0].classList.remove("active");
      }, 300);
    }
  });
  getId("ndtt").value = getClass("dstatus")[0].innerText;
  loadfont();
  loaddarkdialog();
});
getClass("sli11")[0].addEventListener("click", function () {
  setTimeout(function () {
    loadpasslock();
    loaddarkmodal();
    loaddark();
    for (var j = 0; j < getClass("pcolor").length; j++) {
      getQueryAll(".pcolor")[j].style.color = fontcolorr;
      getQueryAll(".pcolor")[j].style.fill = fontcolorr;
    }
    for (var k = 0; k < getClass("pcolorstroke").length; k++) {
      getQueryAll(".pcolorstroke")[k].style.stroke = fontcolorr;
    }
    getQueryAll(
      ".passlock .mainpasslock .inputFieldPass input"
    )[0].style.color = fontcolorr;
  }, 300);
});
getClass("sli6")[0].addEventListener("click", function () {
  openwindow = 2;
  getClass("select-options")[0].classList.toggle("active");
  getClass("dialog")[0].classList.remove("active");
  getClass("blur")[0].classList.add("active");
  getClass("select-options")[0].innerHTML =
    '<ul><li class="dmc waves-effect text-red">Đổi màu chữ</li><li class="dkc waves-effect text-red">Đổi kiểu chữ</li><li class="huy4 waves-effect text-gray">Hủy</li></ul>';
  getClass("dmc")[0].addEventListener("click", function () {
    getId("dmc").click();
  });
  getClass("dkc")[0].addEventListener("click", function () {
    setTimeout(function () {
      getClass("listgroup")[0].classList.add("active");
      getClass("listgroup")[0].innerHTML =
        '<ul><li class="waves-effect font">Mulish</li><li class="waves-effect font">Roboto</li><li class="waves-effect font">Poppins</li><li class="waves-effect font">Yaldevi</li><li class="waves-effect font">Nunito</li>    <li class="waves-effect font">Varela</li><li class="waves-effect font">Overlock</li></ul>';
      getClass("select-options")[0].classList.remove("active");
      getClass("blur")[0].classList.add("active");
      for (f = 0; f < getClass("font").length; f++) {
        getClass("font")[f].onclick = function () {
          fontfamily = this.innerText;
          for (ii = 0; ii < getQueryAll("*").length; ii++) {
            getQueryAll("*")[ii].style.fontFamily =
              this.innerText + "," + "sans-serif";
          }
          localStorage.setItem("fontfamily", JSON.stringify(fontfamily));
          setTimeout(function () {
            getClass("blur")[0].classList.remove("active");
            getClass("listgroup")[0].classList.remove("active");
          }, 400);
        };
      }
    }, 300);
    if (dark === 1) {
      getClass("listgroup")[0].classList.add("dark");
    } else {
      getClass("listgroup")[0].classList.remove("dark");
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
  getClass("select-options")[0].innerHTML =
    '<ul><li class="dmng waves-effect text-red">Đổi màu trái tim</li><li class="huy waves-effect text-gray">Hủy</li></ul>';
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
  localStorage.removeItem("hiddentitle");
  localStorage.removeItem("susername1");
  localStorage.removeItem("susername2");
  localStorage.removeItem("vimgavatar1");
  localStorage.removeItem("vimgavatar2");
  localStorage.removeItem("dtitle");
  localStorage.removeItem("info1");
  localStorage.removeItem("info2");
  localStorage.removeItem("sstatus");
  localStorage.removeItem("fontfamily");
  localStorage.removeItem("fontcolorr");
  localStorage.removeItem("heartcolor");
  localStorage.removeItem("listevent");
  localStorage.removeItem("dbirthday1");
  localStorage.removeItem("dbirthday2");
  localStorage.removeItem("dstartday");
  localStorage.removeItem("sstartday");
  localStorage.removeItem("passwordl");
  localStorage.removeItem("passwordlock");
  location.reload();
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true,
    autoShow: true,
  });
});
getClass("sli9")[0].addEventListener("click", function () {
  cordova.plugins.market.open("com.tiendatmagic.demngayyeu");
});

function showTasks() {
  let getLocalStorageData = localStorage.getItem("listevent");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = getQuery(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;
  let newLiTag = "";
  listArray.forEach(function (element, index) {
    newLiTag +=
      "<li>" +
      element +
      '<span class="icon" onclick="deleteTask(' +
      index +
      ')"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M296,64H216a7.91,7.91,0,0,0-8,8V96h96V72A7.91,7.91,0,0,0,296,64Z" style="fill:#fff"/><path d="M432,96H336V72a40,40,0,0,0-40-40H216a40,40,0,0,0-40,40V96H80a16,16,0,0,0,0,32H97L116,432.92c1.42,26.85,22,47.08,48,47.08H348c26.13,0,46.3-19.78,48-47L415,128h17a16,16,0,0,0,0-32ZM192.57,416H192a16,16,0,0,1-16-15.43l-8-224a16,16,0,1,1,32-1.14l8,224A16,16,0,0,1,192.57,416ZM272,400a16,16,0,0,1-32,0V176a16,16,0,0,1,32,0ZM304,96H208V72a7.91,7.91,0,0,1,8-8h80a7.91,7.91,0,0,1,8,8Zm32,304.57A16,16,0,0,1,320,416h-.58A16,16,0,0,1,304,399.43l8-224a16,16,0,1,1,32,1.14Z" style="fill:#fff"/></svg></span></li>';
  });
  loaddark();
  getClass("exitnewscreen")[0].addEventListener("click", function () {
    setTimeout(function () {
      openwindow = 1;
      getClass("newscreen")[0].style.display = "none";
      getClass("blur")[0].classList.remove("active");
      AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: true,
        autoShow: true,
      });
    }, 300);
  });
  const inputBox = getQuery(".inputField input");
  const addBtn = getQuery(".inputField button");
  const todoList = getQuery(".todoList");
  const deleteAllBtn = getQuery(".footer button");
  addBtn.onclick = function () {
    {
      let userEnteredValue = inputBox.value;
      let getLocalStorageData = localStorage.getItem("listevent");
      if (getLocalStorageData == null) {
        listArray = [];
      } else {
        listArray = JSON.parse(getLocalStorageData);
      }
      if (userEnteredValue === "") {
        openwindow = 2;
        getClass("modalq")[0].classList.add("active");
        getClass("blur")[0].classList.add("active");
        getClass("modalq")[0].innerHTML =
          '<div class="modalq-img"> <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" style="width: 100%;height: 100%;margin: 0 auto;"><title>ionicons-v5-m</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm86.63,272L320,342.63l-64-64-64,64L169.37,320l64-64-64-64L192,169.37l64,64,64-64L342.63,192l-64,64Z" style="fill: #ea5e67"/></svg> </div> Không được bỏ trống nha<div class="ops-buttons"><button class="waves-effect huy-exit">OK</button></div>';
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
        localStorage.setItem("listevent", JSON.stringify(listArray));
        showTasks();
        addBtn.classList.remove("active");
      }
    }
  };
  deleteAllBtn.onclick = function () {
    listArray = [];
    localStorage.setItem("listevent", JSON.stringify(listArray));
    showTasks();
  };
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
  if (dark === 1) {
    getClass("mainnewscreen")[0].style.color = "#fff";
    getQuery(".newscreen input[type='text']").classList.add("dark");
    getClass("todoList")[0].classList.add("dark");
  } else {
    getClass("mainnewscreen")[0].style.color = "#272727";
    getQuery(".newscreen input[type='text']").classList.remove("dark");
    getClass("todoList")[0].classList.remove("dark");
  }
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("listevent");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("listevent", JSON.stringify(listArray));
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
  if (openwindow == 3) {
    getClass("passlock")[0].style.display = "none";
    openwindow = 1;
  } else if (openwindow == 2) {
    getClass("blur")[0].classList.remove("active");
    getClass("modalq")[0].classList.remove("active");
    getClass("dialog")[0].classList.remove("active");
    getClass("listgroup")[0].classList.remove("active");
    getClass("select-options")[0].classList.remove("active");
    openwindow = 1;
    if (getClass("listgroup")[0].classList.value !== "listgroup active") {
      openwindow = 0;
    }
    if (getClass("modalq")[0].classList.value !== "modalq active") {
      openwindow = 1;
    }
  } else if (openwindow == 1) {
    getClass("newscreen")[0].style.display = "none";
    getClass("content")[0].style.display = "block";
    getClass("setting")[0].style.display = "none";
    getClass("ssetting")[0].classList.remove("active");
    getClass("scontent")[0].style.transform = "translateX(0%)";
    getClass("content2")[0].classList.remove("active");
    openwindow = 0;
  } else if (openwindow == 0) {
    getClass("blur")[0].classList.toggle("active");
    getClass("modalq")[0].classList.toggle("active");
    getClass("modalq")[0].innerHTML =
      '<div class="options-img col mb-15"> <img src="./res/icon/android/drawable-xhdpi-icon.png" alt=""> <span>Bye bye!</span></div> Bạn muốn thoát ứng dụng?<div class="ops-buttons"><button id="xacnhan-exit" class="waves-effect">Xác nhận</button><button id="huy-exit" class="waves-effect">Hủy</button></div>';
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
  getClass("dialog")[0].style.display = "block";
  getClass("select-options")[0].style.display = "block";
  getClass("htitle")[0].innerText = dtitle;
  getClass("dname")[0].innerText = susername1;
  getClass("dname")[1].innerText = susername2;
  getClass("ntns")[0].innerText =
    new Date(dstartday).getDate() +
    "/" +
    (new Date(dstartday).getMonth() + 1) +
    "/" +
    +new Date(dstartday).getFullYear();
  getClass("pageuser1")[0].innerText =
    new Date().getFullYear() - new Date(dbirthday1).getFullYear();
  getClass("pageuser2")[0].innerText =
    new Date().getFullYear() - new Date(dbirthday2).getFullYear();
  getClass("stitle")[0].innerText = dtitle;
  getClass("snbdcd")[0].innerText =
    new Date(dstartday).getDate() +
    "/" +
    (new Date(dstartday).getMonth() + 1) +
    "/" +
    new Date(dstartday).getFullYear();
  getClass("dstatus")[0].innerText = sstatus;
  getClass("container")[0].style.backgroundColor = dmhns;
  getClass("event")[0].style.backgroundColor = dmhns;
  getClass("contentstatuseveryday")[0].innerText = status_apps[orderstatus - 1];
  getzodia1();
  getzodia2();
  img1.src = vimgavatar1;
  img2.src = vimgavatar2;
  for (var j = 0; j <= 3; j++) {
    getClass("heart")[j].style.setProperty("--after", heartcolor);
  }
  for (var j = 0; j < getClass("pcolor").length; j++) {
    getQueryAll(".pcolor")[j].style.color = fontcolorr;
    getQueryAll(".pcolor")[j].style.fill = fontcolorr;
  }
  for (var k = 0; k < getClass("pcolorstroke").length; k++) {
    getQueryAll(".pcolorstroke")[k].style.stroke = fontcolorr;
  }
  localStorage.setItem("dbirthday1", JSON.stringify(dbirthday1));
  localStorage.setItem("dbirthday2", JSON.stringify(dbirthday2));
  localStorage.setItem("dstartday", JSON.stringify(dstartday));
  setInterval(function () {
    getClass("countday")[0].innerText = Math.floor(
      (new Date() - sstartday) / 86400000
    );
    getClass("dngay")[0].innerText = Math.floor(
      (new Date() - sstartday) / 86400000
    );
    getClass("dgio")[0].innerText = new Date().getHours();
    getClass("dphut")[0].innerText = new Date().getMinutes();
    getClass("dgiay")[0].innerText = new Date().getSeconds();
  }, 1000);
  getQueryAll(".blur")[0].onclick = function () {
    onBackButton();
  };
}

function loadfont() {
  for (i = 0; i < getQueryAll("button").length; i++) {
    getQueryAll("button")[i].style.fontFamily = fontfamily + "," + "sans-serif";
  }
  for (i = 0; i < getQueryAll("input").length; i++) {
    getQueryAll("input")[i].style.fontFamily = fontfamily + "," + "sans-serif";
  }
  for (ii = 0; ii < getQueryAll("*").length; ii++) {
    getQueryAll("*")[ii].style.fontFamily = fontfamily + "," + "sans-serif";
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
var config = {
  duration: 1000,
};
Waves.init(config);
