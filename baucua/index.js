var bg_sound = new Audio('./sound/bg.mp3');
if (typeof bg_sound.loop == 'boolean') {
  bg_sound.loop = true;
} else {
  bg_sound.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}

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
var tselect = 0;

var closedisk = 0;


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
document.getElementById("btn-start").onclick = function () {

  getClass("version")[0].style.display = "none";
  getClass("nametitle")[0].style.display = "none";
  getId("mainstart").style.display = "none";
  getId("maingame").style.display = "block";
  maingame();

}

function maingame() {
  openimg();
  getClass("total")[0].innerText = total;
  getClass("lmoney")[0].onclick = function () {
    console.log(this.innerText);
  }
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

    }

    if (
      getClass("bowl")[0].getAttribute("class") == 'bowl close'
    ) {
      document.querySelector("#plate > div.bowl.close").onclick = function () {
        closeDisk();
      }

      shake.startWatch(closeDisk, 40);
      function closeDisk() {
        closedisk == 0;
        document.querySelector("#plate > div.bowl").classList.remove("close");
        openresult();
      }
    }
  }
  var linknode;

  function touchcoin() {
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
  {
    getClass("list-1")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select0 = 1;

        onselect0 += tselect;
        total -= tselect;

        localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;



        touchcoin();
        document.querySelector(".list-1.listselect > div").appendChild(linknode);
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
      }
    }
    getClass("list-3")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select2 = 1;

        onselect2 += tselect;
        total -= tselect; localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;

        touchcoin();
        document.querySelector(".list-3.listselect > div").appendChild(linknode);
      }
    }
    getClass("list-4")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select3 = 1;

        onselect3 += tselect;
        total -= tselect; localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;

        touchcoin();
        document.querySelector(".list-4.listselect > div").appendChild(linknode);
      }
    }
    getClass("list-5")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select4 = 1;

        onselect4 += tselect;
        total -= tselect; localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;

        touchcoin();
        document.querySelector(".list-5.listselect > div").appendChild(linknode);
      }
    }
    getClass("list-6")[0].onclick = function () {
      if (total >= 0 + tselect) {
        select5 = 1;

        onselect5 += tselect;
        total -= tselect; localStorage.setItem("total", JSON.stringify(total));
        getClass("total")[0].innerText = total;

        touchcoin();
        document.querySelector(".list-6.listselect > div").appendChild(linknode);
      }
    }
  }
}

function openresult() {
  if (closedisk == 1) {
    result_1 = Math.ceil(Math.random() * 6);
    result_2 = Math.ceil(Math.random() * 6);
    result_3 = Math.ceil(Math.random() * 6);
    arrresult = [result_1, result_2, result_3];
    arrresult.sort(function (a, b) {
      return a - b;
    });
    console.log(arrresult);
    closedisk = 0;
  }
  if (onselect0 == 0 &&
    onselect1 == 0 &&
    onselect2 == 0 &&
    onselect3 == 0 &&
    onselect4 == 0 &&
    onselect5 == 0) {
  }
  else {
    if (
      select0 == 1 &&
      (arrresult[0] == 1 && arrresult[1] !== 1 && arrresult[2] !== 1) ||
      (arrresult[0] !== 1 && arrresult[1] == 1 && arrresult[2] !== 1) ||
      (arrresult[0] !== 1 && arrresult[1] !== 1 && arrresult[2] == 1)
    ) {
      total += onselect0 * 2;
    }

    if (
      select1 == 1 &&
      (arrresult[0] == 2 && arrresult[1] !== 2 && arrresult[2] !== 2) ||
      (arrresult[0] !== 2 && arrresult[1] == 2 && arrresult[2] !== 2) ||
      (arrresult[0] !== 2 && arrresult[1] !== 2 && arrresult[2] == 2)
    ) {
      total += onselect1 * 2;
    }

    if (
      select2 == 1 &&
      (arrresult[0] == 3 && arrresult[1] !== 3 && arrresult[2] !== 3) ||
      (arrresult[0] !== 3 && arrresult[1] == 3 && arrresult[2] !== 3) ||
      (arrresult[0] !== 3 && arrresult[1] !== 3 && arrresult[2] == 3)
    ) {
      total += onselect2 * 2;
    }

    if (
      select3 == 1 &&
      (arrresult[0] == 4 && arrresult[1] !== 4 && arrresult[2] !== 4) ||
      (arrresult[0] !== 4 && arrresult[1] == 4 && arrresult[2] !== 4) ||
      (arrresult[0] !== 4 && arrresult[1] !== 4 && arrresult[2] == 4)
    ) {
      total += onselect3 * 2;
    }

    if (
      select4 == 1 &&
      (arrresult[0] == 5 && arrresult[1] !== 5 && arrresult[2] !== 5) ||
      (arrresult[0] !== 5 && arrresult[1] == 5 && arrresult[2] !== 5) ||
      (arrresult[0] !== 5 && arrresult[1] !== 5 && arrresult[2] == 5)
    ) {
      total += onselect4 * 2;
    }

    if (
      select5 == 1 &&
      (arrresult[0] == 6 && arrresult[1] !== 6 && arrresult[2] !== 6) ||
      (arrresult[0] !== 6 && arrresult[1] == 6 && arrresult[2] !== 6) ||
      (arrresult[0] !== 6 && arrresult[1] !== 6 && arrresult[2] == 6)
    ) {
      total += onselect5 * 2;
    }
    //
    if (
      select0 == 1 &&
      (arrresult[0] == 1 && arrresult[1] == 1 && arrresult[2] !== 1) ||
      (arrresult[0] !== 1 && arrresult[1] == 1 && arrresult[2] == 1)
    ) {
      total += onselect0 * 3;
    }

    if (
      select1 == 1 &&
      (arrresult[0] == 2 && arrresult[1] == 2 && arrresult[2] !== 2) ||
      (arrresult[0] !== 2 && arrresult[1] == 2 && arrresult[2] == 2)
    ) {
      total += onselect1 * 3;
    }

    if (
      select2 == 1 &&
      (arrresult[0] == 3 && arrresult[1] == 3 && arrresult[2] !== 3) ||
      (arrresult[0] !== 3 && arrresult[1] == 3 && arrresult[2] == 3)
    ) {
      total += onselect2 * 3;
    }

    if (
      select3 == 1 &&
      (arrresult[0] == 4 && arrresult[1] == 4 && arrresult[2] !== 4) ||
      (arrresult[0] !== 4 && arrresult[1] == 4 && arrresult[2] == 4)
    ) {
      total += onselect3 * 3;
    }

    if (
      select4 == 1 &&
      (arrresult[0] == 5 && arrresult[1] == 5 && arrresult[2] !== 5) ||
      (arrresult[0] !== 5 && arrresult[1] == 5 && arrresult[2] == 5)
    ) {
      total += onselect4 * 3;
    }

    if (
      select5 == 1 &&
      (arrresult[0] == 6 && arrresult[1] == 6 && arrresult[2] !== 6) ||
      (arrresult[0] !== 6 && arrresult[1] == 6 && arrresult[2] == 6)
    ) {
      total += onselect5 * 3;
    }
    //
    if (
      select0 == 1 &&
      (arrresult[0] == 1 && arrresult[1] == 1 && arrresult[2] == 1)
    ) {
      total += onselect0 * 4;
    }

    if (
      select1 == 1 &&
      (arrresult[0] == 2 && arrresult[1] == 2 && arrresult[2] == 2)
    ) {
      total += onselect1 * 4;
    }

    if (
      select2 == 1 &&
      (arrresult[0] == 3 && arrresult[1] == 3 && arrresult[2] == 3)
    ) {
      total += onselect2 * 4;
    }

    if (
      select3 == 1 &&
      (arrresult[0] == 4 && arrresult[1] == 4 && arrresult[2] == 4)
    ) {
      total += onselect3 * 4;
    }

    if (
      select4 == 1 &&
      (arrresult[0] == 5 && arrresult[1] == 5 && arrresult[2] == 5)
    ) {
      total += onselect4 * 4;
    }

    if (
      select5 == 1 &&
      (arrresult[0] == 6 && arrresult[1] == 6 && arrresult[2] == 6)
    ) {
      total += onselect5 * 4;
    }
  }



  getClass("total")[0].innerText = total;
  localStorage.setItem("total", JSON.stringify(total));
  resetnewgame();
  openimg();
}

function resetnewgame() {


  onselect0 = 0;
  onselect1 = 0;
  onselect2 = 0;
  onselect3 = 0;
  onselect4 = 0;
  onselect5 = 0;

  for (i = 0; i < document.querySelectorAll(".listselect .lcoin").length; i++
  ) {
    document.querySelectorAll(".listselect .lcoin")[i].innerHTML = "";
  }

  for (j = 0; j < document.querySelectorAll(".listselect img").length; j++
  ) {
    document.querySelectorAll(".listselect img")[j].classList.remove("success");
  }


}
function openimg() {


  switch (arrresult[0]) {
    case 1:
      document.querySelector(".plate > div > div:nth-child(1) > img").src = "./img/naiCube.png";
      document.querySelector("div.list-1.listselect > img").classList.add("success");
      break;
    case 2:
      document.querySelector(".plate > div > div:nth-child(1) > img").src = "./img/bauCube.png";
      document.querySelector("div.list-2.listselect > img").classList.add("success");
      break;
    case 3:
      document.querySelector(".plate > div > div:nth-child(1) > img").src = "./img/gaCube.png";
      document.querySelector("div.list-3.listselect > img").classList.add("success");
      break;
    case 4:
      document.querySelector(".plate > div > div:nth-child(1) > img").src = "./img/caCube.png";
      document.querySelector("div.list-4.listselect > img").classList.add("success");
      break;
    case 5:
      document.querySelector(".plate > div > div:nth-child(1) > img").src = "./img/cuaCube.png";
      document.querySelector("div.list-5.listselect > img").classList.add("success");
      break;
    case 6:
      document.querySelector(".plate > div > div:nth-child(1) > img").src = "./img/tomCube.png";
      document.querySelector("div.list-6.listselect > img").classList.add("success");
      break;
    default:
      break;
  }

  switch (arrresult[1]) {
    case 1:
      document.querySelector(".plate > div > div:nth-child(2) > img").src = "./img/naiCube.png";
      document.querySelector("div.list-1.listselect > img").classList.add("success");
      break;
    case 2:
      document.querySelector(".plate > div > div:nth-child(2) > img").src = "./img/bauCube.png";
      document.querySelector("div.list-2.listselect > img").classList.add("success");
      break;
    case 3:
      document.querySelector(".plate > div > div:nth-child(2) > img").src = "./img/gaCube.png";
      document.querySelector("div.list-3.listselect > img").classList.add("success");
      break;
    case 4:
      document.querySelector(".plate > div > div:nth-child(2) > img").src = "./img/caCube.png";
      document.querySelector("div.list-4.listselect > img").classList.add("success");
      break;
    case 5:
      document.querySelector(".plate > div > div:nth-child(2) > img").src = "./img/cuaCube.png";
      document.querySelector("div.list-5.listselect > img").classList.add("success");
      break;
    case 6:
      document.querySelector(".plate > div > div:nth-child(2) > img").src = "./img/tomCube.png";
      document.querySelector("div.list-6.listselect > img").classList.add("success");
      break;
    default:
      break;
  }

  switch (arrresult[2]) {
    case 1:
      document.querySelector(".plate > div > div:nth-child(3) > img").src = "./img/naiCube.png";
      document.querySelector("div.list-1.listselect > img").classList.add("success");
      break;
    case 2:
      document.querySelector(".plate > div > div:nth-child(3) > img").src = "./img/bauCube.png";
      document.querySelector("div.list-2.listselect > img").classList.add("success");
      break;
    case 3:
      document.querySelector(".plate > div > div:nth-child(3) > img").src = "./img/gaCube.png";
      document.querySelector("div.list-3.listselect > img").classList.add("success");
      break;
    case 4:
      document.querySelector(".plate > div > div:nth-child(3) > img").src = "./img/caCube.png";
      document.querySelector("div.list-4.listselect > img").classList.add("success");
      break;
    case 5:
      document.querySelector(".plate > div > div:nth-child(3) > img").src = "./img/cuaCube.png";
      document.querySelector("div.list-5.listselect > img").classList.add("success");
      break;
    case 6:
      document.querySelector(".plate > div > div:nth-child(3) > img").src = "./img/tomCube.png";
      document.querySelector("div.list-6.listselect > img").classList.add("success");
      break;
    default:
      break;
  }
}