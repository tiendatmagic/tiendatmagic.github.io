console.log("%cTiendatmagic", "color: #ea00ff; font-size: x-large");
var musicbg = document.getElementById("musicbg");
var click_sound = new Audio('./sound/click.mp3');
var diceshake_sound = new Audio('./sound/diceshake.mp3');
var open_sound = new Audio('./sound/open.mp3');
var total = JSON.parse(localStorage.getItem("total"));
if (total === null) {
  total = 100000;
}
var result_1 = 0;
var result_2 = 0;
var result_3 = 0;
result_1 = Math.ceil(Math.random() * 6);
result_2 = Math.ceil(Math.random() * 6);
result_3 = Math.ceil(Math.random() * 6);
arrresult = [result_1, result_2, result_3];
arrresult.sort(function (a, b) {
  return a - b;
});
var select0 = 0;
var select1 = 0;
var select2 = 0;
var select3 = 0;
var select4 = 0;
var select5 = 0;
var onselect0 = 0;
var onselect1 = 0;
var onselect2 = 0;
var onselect3 = 0;
var onselect4 = 0;
var onselect5 = 0;
var tselect = 10000;
var closedisk = 0;
var myTimeout;
var ongame = 0;
var admobid = {
  interstitial: "ca-app-pub-2636216160874899/6175252887",
};

function getId(id) {
  return document.getElementById(id);
}

function getClass(clss) {
  {
    return document.getElementsByClassName(clss);
  }
}

function getTagName(tagname) {
  {
    return document.getElementsByTagName(tagname);
  }
}
musicbg.play();
getClass("lmoney")[0].classList.add("active");
document.getElementById("btn-start").onclick = function () {
  getClass("version")[0].style.display = "none";
  getClass("nametitle")[0].style.display = "none";
  getId("mainstart").style.display = "none";
  getId("maingame").style.display = "block";
  maingame();
}
document.getElementById("btn-rate").onclick = function () {
  cordova.plugins.market.open("com.tiendatmagic.baucua");
}

function maingame() {
  openimg();
  getClass("total")[0].innerText = total;
  getClass("place_a_bet")[0].classList.add("result");
  getClass("lmoney")[0].onclick = function () { }
  for (i = 0; i < getClass("lmoney").length; i++) {
    getClass("lmoney")[i].onclick = function () {
      tselect = Number(this.getAttribute("data-money"));
      for (j = 0; j < getClass("lmoney").length; j++) {
        getClass("lmoney")[j].classList.remove("active");
      }
      this.classList.add("active");
    }
  }
  getId("wrapper-plate").onclick = function () {
    if (closedisk == 0) {
      closedisk = 1;
      document.querySelector("#plate > div.bowl").classList.add("close");
      processing();
      diceshake_sound.play();
    }
    if (getClass("bowl")[0].getAttribute("class") == 'bowl close') {
      document.querySelector("#plate > div.bowl.close").onclick = function () {
        closeDisk();
      }
      shake.startWatch(closeDisk, 40);

      function closeDisk() {
        if (closedisk == 1) {
          closedisk == 0;
          document.querySelector("#plate > div.bowl").classList.remove("close");
          openresult();
        }
      }
    }
  }
  var linknode;

  function touchcoin() {
    click_sound.play();
    linknode = document.createElement("img");
    var top = Math.ceil(Math.random() * 50);
    var left = Math.ceil(Math.random() * 50);
    switch (tselect) {
      case 10000:
        linknode.src = "./img/10k.png";
        break;
      case 20000:
        linknode.src = "./img/20k.png";
        break;
      case 50000:
        linknode.src = "./img/50k.png";
        break;
      case 100000:
        linknode.src = "./img/100k.png";
        break;
      case 200000:
        linknode.src = "./img/200k.png";
        break;
      case 500000:
        linknode.src = "./img/500k.png";
        break;
    }
    linknode.style = "position: absolute;top: " + top + "px;left: " + left + "px";
  }

  function not_enough_coins() {
    getClass("wrapper-modal")[0].classList.add("show");
    getId("not_enough_coins").classList.add("show");
  } {
    getClass("list-1")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select0 = 1;
        onselect0 += tselect;
        total -= tselect;
        localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;
        touchcoin();
        document.querySelector(".list-1.listselect > div").appendChild(linknode);
      } else {
        not_enough_coins();
      }
    }
    getClass("list-2")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select1 = 1;
        onselect1 += tselect;
        total -= tselect;
        localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;
        touchcoin();
        document.querySelector(".list-2.listselect > div").appendChild(linknode);
      } else {
        not_enough_coins();
      }
    }
    getClass("list-3")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select2 = 1;
        onselect2 += tselect;
        total -= tselect;
        localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;
        touchcoin();
        document.querySelector(".list-3.listselect > div").appendChild(linknode);
      } else {
        not_enough_coins();
      }
    }
    getClass("list-4")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select3 = 1;
        onselect3 += tselect;
        total -= tselect;
        localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;
        touchcoin();
        document.querySelector(".list-4.listselect > div").appendChild(linknode);
      } else {
        not_enough_coins();
      }
    }
    getClass("list-5")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select4 = 1;
        onselect4 += tselect;
        total -= tselect;
        localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;
        touchcoin();
        document.querySelector(".list-5.listselect > div").appendChild(linknode);
      } else {
        not_enough_coins();
      }
    }
    getClass("list-6")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select5 = 1;
        onselect5 += tselect;
        total -= tselect;
        localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;
        touchcoin();
        document.querySelector(".list-6.listselect > div").appendChild(linknode);
      } else {
        not_enough_coins();
      }
    }
  }
}

function shadow(number) {
  if (number == 1) {
    getClass("lmoney")[0].classList.add("shadow");
  }
  if (number == 2) {
    getClass("lmoney")[1].classList.add("shadow");
  }
  if (number == 3) {
    getClass("lmoney")[2].classList.add("shadow");
  }
  if (number == 4) {
    getClass("lmoney")[3].classList.add("shadow");
  }
  if (number == 5) {
    getClass("lmoney")[4].classList.add("shadow");
  }
  if (number == 6) {
    getClass("lmoney")[5].classList.add("shadow");
  }
  return number;
}

function processing() {
  getClass("place_a_bet")[0].classList.remove("result");
  for (j = 0; j < document.querySelectorAll(".listselect img").length; j++) {
    document.querySelectorAll(".listselect img")[j].classList.remove("success");
  }
  result_1 = shadow(Math.ceil(Math.random() * 6));
  result_2 = shadow(Math.ceil(Math.random() * 6));
  result_3 = shadow(Math.ceil(Math.random() * 6));

  arrresult = [result_1, result_2, result_3];
  arrresult.sort(function (a, b) {
    return a - b;
  });
  myTimeout = setTimeout(function () {
    for (i = 0; i < getClass("lmoney").length; i++) {
      getClass("lmoney")[i].classList.remove("shadow");
    }
  }, 3000);
}

function openresult() {
  clearTimeout(myTimeout);
  if (closedisk == 1) {
    closedisk = 0;
  }
  if (onselect0 == 0 && onselect1 == 0 && onselect2 == 0 && onselect3 == 0 && onselect4 == 0 && onselect5 == 0) { } else {
    if (select0 == 1 && (arrresult[0] == 1 && arrresult[1] !== 1 && arrresult[2] !== 1) || (arrresult[0] !== 1 && arrresult[1] == 1 && arrresult[2] !== 1) || (arrresult[0] !== 1 && arrresult[1] !== 1 && arrresult[2] == 1)) {
      total += onselect0 * 2;
    }
    if (select1 == 1 && (arrresult[0] == 2 && arrresult[1] !== 2 && arrresult[2] !== 2) || (arrresult[0] !== 2 && arrresult[1] == 2 && arrresult[2] !== 2) || (arrresult[0] !== 2 && arrresult[1] !== 2 && arrresult[2] == 2)) {
      total += onselect1 * 2;
    }
    if (select2 == 1 && (arrresult[0] == 3 && arrresult[1] !== 3 && arrresult[2] !== 3) || (arrresult[0] !== 3 && arrresult[1] == 3 && arrresult[2] !== 3) || (arrresult[0] !== 3 && arrresult[1] !== 3 && arrresult[2] == 3)) {
      total += onselect2 * 2;
    }
    if (select3 == 1 && (arrresult[0] == 4 && arrresult[1] !== 4 && arrresult[2] !== 4) || (arrresult[0] !== 4 && arrresult[1] == 4 && arrresult[2] !== 4) || (arrresult[0] !== 4 && arrresult[1] !== 4 && arrresult[2] == 4)) {
      total += onselect3 * 2;
    }
    if (select4 == 1 && (arrresult[0] == 5 && arrresult[1] !== 5 && arrresult[2] !== 5) || (arrresult[0] !== 5 && arrresult[1] == 5 && arrresult[2] !== 5) || (arrresult[0] !== 5 && arrresult[1] !== 5 && arrresult[2] == 5)) {
      total += onselect4 * 2;
    }
    if (select5 == 1 && (arrresult[0] == 6 && arrresult[1] !== 6 && arrresult[2] !== 6) || (arrresult[0] !== 6 && arrresult[1] == 6 && arrresult[2] !== 6) || (arrresult[0] !== 6 && arrresult[1] !== 6 && arrresult[2] == 6)) {
      total += onselect5 * 2;
    }
    //
    if (select0 == 1 && (arrresult[0] == 1 && arrresult[1] == 1 && arrresult[2] !== 1) || (arrresult[0] !== 1 && arrresult[1] == 1 && arrresult[2] == 1)) {
      total += onselect0 * 3;
    }
    if (select1 == 1 && (arrresult[0] == 2 && arrresult[1] == 2 && arrresult[2] !== 2) || (arrresult[0] !== 2 && arrresult[1] == 2 && arrresult[2] == 2)) {
      total += onselect1 * 3;
    }
    if (select2 == 1 && (arrresult[0] == 3 && arrresult[1] == 3 && arrresult[2] !== 3) || (arrresult[0] !== 3 && arrresult[1] == 3 && arrresult[2] == 3)) {
      total += onselect2 * 3;
    }
    if (select3 == 1 && (arrresult[0] == 4 && arrresult[1] == 4 && arrresult[2] !== 4) || (arrresult[0] !== 4 && arrresult[1] == 4 && arrresult[2] == 4)) {
      total += onselect3 * 3;
    }
    if (select4 == 1 && (arrresult[0] == 5 && arrresult[1] == 5 && arrresult[2] !== 5) || (arrresult[0] !== 5 && arrresult[1] == 5 && arrresult[2] == 5)) {
      total += onselect4 * 3;
    }
    if (select5 == 1 && (arrresult[0] == 6 && arrresult[1] == 6 && arrresult[2] !== 6) || (arrresult[0] !== 6 && arrresult[1] == 6 && arrresult[2] == 6)) {
      total += onselect5 * 3;
    }
    //
    if (select0 == 1 && (arrresult[0] == 1 && arrresult[1] == 1 && arrresult[2] == 1)) {
      total += onselect0 * 4;
    }
    if (select1 == 1 && (arrresult[0] == 2 && arrresult[1] == 2 && arrresult[2] == 2)) {
      total += onselect1 * 4;
    }
    if (select2 == 1 && (arrresult[0] == 3 && arrresult[1] == 3 && arrresult[2] == 3)) {
      total += onselect2 * 4;
    }
    if (select3 == 1 && (arrresult[0] == 4 && arrresult[1] == 4 && arrresult[2] == 4)) {
      total += onselect3 * 4;
    }
    if (select4 == 1 && (arrresult[0] == 5 && arrresult[1] == 5 && arrresult[2] == 5)) {
      total += onselect4 * 4;
    }
    if (select5 == 1 && (arrresult[0] == 6 && arrresult[1] == 6 && arrresult[2] == 6)) {
      total += onselect5 * 4;
    }
  }
  getClass("place_a_bet")[0].classList.add("result");
  getClass("total")[0].innerText = total;
  localStorage.setItem("total", JSON.stringify(total));
  resetnewgame();
  openimg();
  open_sound.play();
}

function resetnewgame() {
  onselect0 = 0;
  onselect1 = 0;
  onselect2 = 0;
  onselect3 = 0;
  onselect4 = 0;
  onselect5 = 0;

  for (i = 0; i < document.querySelectorAll(".listselect .lcoin").length; i++) {
    document.querySelectorAll(".listselect .lcoin")[i].innerHTML = "";
  }
  for (j = 0; j < document.querySelectorAll(".listselect img").length; j++) {
    document.querySelectorAll(".listselect img")[j].classList.remove("success");
  }
  for (i = 0; i < getClass("lmoney").length; i++) {
    getClass("lmoney")[i].classList.remove("shadow");
  }
}

function openimg() {
  switch (arrresult[0]) {
    case 1:
      document.querySelectorAll(".pitem img")[0].src = "./img/naiCube.png";
      document.querySelector("div.list-1.listselect > img").classList.add("success");
      break;
    case 2:
      document.querySelectorAll(".pitem img")[0].src = "./img/bauCube.png";
      document.querySelector("div.list-2.listselect > img").classList.add("success");
      break;
    case 3:
      document.querySelectorAll(".pitem img")[0].src = "./img/gaCube.png";
      document.querySelector("div.list-3.listselect > img").classList.add("success");
      break;
    case 4:
      document.querySelectorAll(".pitem img")[0].src = "./img/caCube.png";
      document.querySelector("div.list-4.listselect > img").classList.add("success");
      break;
    case 5:
      document.querySelectorAll(".pitem img")[0].src = "./img/cuaCube.png";
      document.querySelector("div.list-5.listselect > img").classList.add("success");
      break;
    case 6:
      document.querySelectorAll(".pitem img")[0].src = "./img/tomCube.png";
      document.querySelector("div.list-6.listselect > img").classList.add("success");
      break;
    default:
      break;
  }
  switch (arrresult[1]) {
    case 1:
      document.querySelectorAll(".pitem img")[1].src = "./img/naiCube.png";
      document.querySelector("div.list-1.listselect > img").classList.add("success");
      break;
    case 2:
      document.querySelectorAll(".pitem img")[1].src = "./img/bauCube.png";
      document.querySelector("div.list-2.listselect > img").classList.add("success");
      break;
    case 3:
      document.querySelectorAll(".pitem img")[1].src = "./img/gaCube.png";
      document.querySelector("div.list-3.listselect > img").classList.add("success");
      break;
    case 4:
      document.querySelectorAll(".pitem img")[1].src = "./img/caCube.png";
      document.querySelector("div.list-4.listselect > img").classList.add("success");
      break;
    case 5:
      document.querySelectorAll(".pitem img")[1].src = "./img/cuaCube.png";
      document.querySelector("div.list-5.listselect > img").classList.add("success");
      break;
    case 6:
      document.querySelectorAll(".pitem img")[1].src = "./img/tomCube.png";
      document.querySelector("div.list-6.listselect > img").classList.add("success");
      break;
    default:
      break;
  }
  switch (arrresult[2]) {
    case 1:
      document.querySelectorAll(".pitem img")[2].src = "./img/naiCube.png";
      document.querySelector("div.list-1.listselect > img").classList.add("success");
      break;
    case 2:
      document.querySelectorAll(".pitem img")[2].src = "./img/bauCube.png";
      document.querySelector("div.list-2.listselect > img").classList.add("success");
      break;
    case 3:
      document.querySelectorAll(".pitem img")[2].src = "./img/gaCube.png";
      document.querySelector("div.list-3.listselect > img").classList.add("success");
      break;
    case 4:
      document.querySelectorAll(".pitem img")[2].src = "./img/caCube.png";
      document.querySelector("div.list-4.listselect > img").classList.add("success");
      break;
    case 5:
      document.querySelectorAll(".pitem img")[2].src = "./img/cuaCube.png";
      document.querySelector("div.list-5.listselect > img").classList.add("success");
      break;
    case 6:
      document.querySelectorAll(".pitem img")[2].src = "./img/tomCube.png";
      document.querySelector("div.list-6.listselect > img").classList.add("success");
      break;
    default:
      break;
  }
  ongame = 1;
}

function ajax() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = () => {
    if (xhr.status == 200 && xhr.status < 300) {
      getClass("wrapper-modal")[0].classList.remove("show");
      getId("not_enough_coins").classList.remove("show");
      getId("nointernet").classList.remove("show");
      AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: true,
        autoShow: true,
      });
      total += 100000;
      getClass("total")[0].innerText = total;
      localStorage.setItem("total", JSON.stringify(total));
    } else {
      offline();
    }
  }
  xhr.onerror = () => {
    offline();
  }
  xhr.send();
}

function offline() {
  getClass("wrapper-modal")[0].classList.add("show");
  getId("nointernet").classList.add("show");
}
getId("modal-yes").onclick = function () {
  ajax();
}
getId("modal-no").onclick = function () {
  getClass("wrapper-modal")[0].classList.remove("show");
  getId("not_enough_coins").classList.remove("show");
  getId("nointernet").classList.remove("show");
}
getId("modal-ok").onclick = function () {
  getClass("wrapper-modal")[0].classList.remove("show");
  getId("not_enough_coins").classList.remove("show");
  getId("nointernet").classList.remove("show");
}

function onDeviceReady() {
  document.addEventListener("backbutton", onBackButton, false);
}

document.addEventListener("deviceready", function () {
  onDeviceReady();
});

function onBackButton() {
  if (ongame == 1) {
    location.reload();
  }
  else {
    navigator.app.exitApp();
  }
}