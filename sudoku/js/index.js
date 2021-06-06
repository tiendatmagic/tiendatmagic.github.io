var numselectmode = 0;
var numrandom = 0;
var btnnumber = document.querySelectorAll(".btnn");
var number = 0;
var start = 0;
var indexbox = 0;
var indexcolor = JSON.parse(localStorage.getItem("indexcolor"));
if (indexcolor === null) {
  indexcolor = 0;
}

var falsee = 0;
var minute = 0;
var second = 0;
var overgame = 0;
var stime;

function getId(id) {
  return document.getElementById(id);
}
function getClass(clss) {
  {
    return document.getElementsByClassName(clss);
  }
}
window.onload = () => {
  getClass("logo")[0].style.backgroundColor = colorss[indexcolor];
};

getClass("left")[0].onclick = () => {
  if (numselectmode > 0) {
    getClass("selectmodess")[0].style.transform += "translateX(33.33%)";
    numselectmode--;
  }
};
getClass("right")[0].onclick = () => {
  if (numselectmode < 2) {
    getClass("selectmodess")[0].style.transform += "translateX(-33.33%)";
    numselectmode++;
  }
};

getId("startgame").onclick = () => {
  if (numselectmode === 0) {
    numrandom = Math.floor(Math.random() * easy.length);
  } else if (numselectmode === 1) {
    numrandom = Math.floor(Math.random() * medium.length);
  } else {
    numrandom = Math.floor(Math.random() * hard.length);
  }
  startgame();
};

function startgame() {
  getClass("mainscreen")[0].style.display = "none";
  getClass("maingame")[0].style.display = "block";
  getClass("bottomnavigation")[0].style.display = "none";
  createboard();
  start = 1;
}
createboard = () => {
  for (var i = 0; i < 81; i++) {
    var box = document.createElement("div");
    box.classList.add("boxs");
    getClass("board")[0].appendChild(box);
  }

  for (var l = 0; l < 9; l++) {
    getClass("boxs")[l].style.borderTop = "2px solid #ff0077";
  }

  for (var l = 8; l < 81; l += 9) {
    getClass("boxs")[l].style.borderRight = "2px solid #ff0077";
  }

  for (var l = 72; l < 81; l++) {
    getClass("boxs")[l].style.borderBottom = "2px solid #ff0077";
  }
  for (var l = 0; l < 81; l += 9) {
    getClass("boxs")[l].style.borderLeft = "2px solid #ff0077";
  }

  for (var l = 2; l < 81; l += 9) {
    getClass("boxs")[l].style.borderRight = "2px solid #ff0077";
  }

  for (var l = 6; l < 81; l += 9) {
    getClass("boxs")[l].style.borderLeft = "2px solid #ff0077";
  }
  for (var l = 18; l < 27; l++) {
    getClass("boxs")[l].style.borderBottom = "2px solid #ff0077";
  }

  for (var l = 45; l < 54; l++) {
    getClass("boxs")[l].style.borderBottom = "2px solid #ff0077";
  }
  createmode();
  checkclick();
  starttime();
};

function createmode() {
  if (numselectmode == 0) {
    for (var k = 0; k < getClass("boxs").length; k++) {
      getClass("boxs")[k].innerText = easy[numrandom][0].charAt(k);
      if (getClass("boxs")[k].innerText !== "-") {
        getClass("boxs")[k].classList.add("nochange");
      }
      if (getClass("boxs")[k].innerText == "-") {
        getClass("boxs")[k].innerText = "";
        getClass("boxs")[k].classList.add("maychange");
      }
    }
  } else if (numselectmode === 1) {
    for (var k = 0; k < getClass("boxs").length; k++) {
      getClass("boxs")[k].innerText = medium[numrandom][0].charAt(k);
      if (getClass("boxs")[k].innerText !== "-") {
        getClass("boxs")[k].classList.add("nochange");
      }
      if (getClass("boxs")[k].innerText == "-") {
        getClass("boxs")[k].innerText = "";
        getClass("boxs")[k].classList.add("maychange");
      }
    }
  } else {
    for (var k = 0; k < getClass("boxs").length; k++) {
      getClass("boxs")[k].innerText = hard[numrandom][0].charAt(k);
      if (getClass("boxs")[k].innerText !== "-") {
        getClass("boxs")[k].classList.add("nochange");
      }
      if (getClass("boxs")[k].innerText == "-") {
        getClass("boxs")[k].innerText = "";
        getClass("boxs")[k].classList.add("maychange");
      }
    }
  }
  getClass("time")[0].style.visibility = "visible";
  getClass("heart")[0].style.visibility = "visible";
}

function checkclick() {
  for (var m = 0; m < getClass("boxs maychange").length; m++) {
    getClass("boxs maychange")[m].onclick = function () {
      for (var l = 0; l < getClass("boxs maychange").length; l++) {
        getClass("boxs maychange")[l].classList.remove("active");
      }
      this.classList.add("active");
    };
  }
}

function starttime() {
  stime = setInterval(() => {
    second += 1;

    if (second >= 60) {
      second = 0;
      minute += 1;
    }
    getId("minutes").innerText = minute;
    getId("seconds").innerText = second;
  }, 1000);
}

function changeclick() {
  for (var m = 0; m < getClass("boxs").length; m++) {
    if (numselectmode === 0) {
      if (getClass("boxs")[m].innerText == easy[numrandom][1].charAt(m)) {
        if (getClass("boxs")[m].classList.value == "boxs maychange active") {
          getClass("boxs")[m].classList.add("true");
        }

        if (getClass("true").length == getClass("maychange").length) {
          overgame = 1;
          gameover();
          break;
        }
      } else {
        getClass("boxs")[m].style.backgroundColor = "#f3f3f3";

        getClass("boxs")[m].classList.remove("true");
      }
    } else if (numselectmode === 1) {
      if (getClass("boxs")[m].innerText == medium[numrandom][1].charAt(m)) {
        if (getClass("boxs")[m].classList.value == "boxs maychange active") {
          getClass("boxs")[m].classList.add("true");
        }

        if (getClass("true").length == getClass("maychange").length) {
          overgame = 1;
          gameover();
          break;
        }
      } else {
        getClass("boxs")[m].style.backgroundColor = "#f3f3f3";

        getClass("boxs")[m].classList.remove("true");
      }
    } else if (numselectmode === 2) {
      if (getClass("boxs")[m].innerText == hard[numrandom][1].charAt(m)) {
        if (getClass("boxs")[m].classList.value == "boxs maychange active") {
          getClass("boxs")[m].classList.add("true");
        }

        if (getClass("true").length == getClass("maychange").length) {
          overgame = 1;
          gameover();
          break;
        }
      } else {
        getClass("boxs")[m].style.backgroundColor = "#f3f3f3";

        getClass("boxs")[m].classList.remove("true");
      }
    }
  }
}

function gameover() {
  if (overgame === 1) {
    clearInterval(stime);
    getClass("modal")[0].style.display = "flex";
    getId("mminutes").innerText = minute;
    getId("mseconds").innerText = second;
    document.querySelectorAll(
      "#app > div.modal > div  > div.over"
    )[0].style.display = "block";
    document.querySelectorAll(
      "#app > div.modal > div  > div.false"
    )[0].style.display = "none";
    document.querySelectorAll(
      "#app > div.modal > div  > div.infoapp"
    )[0].style.display = "none";
  } else if (falsee >= 3) {
    clearInterval(stime);
    getClass("modal")[0].style.display = "flex";
    getId("mminutes").innerText = minute;
    getId("mseconds").innerText = second;
    document.querySelectorAll(
      "#app > div.modal > div  > div.over"
    )[0].style.display = "none";
    document.querySelectorAll(
      "#app > div.modal > div  > div.false"
    )[0].style.display = "block";
    document.querySelectorAll(
      "#app > div.modal > div  > div.infoapp"
    )[0].style.display = "none";
  }
}

getId("btn-reload").onclick = () => {
  location.reload();
};
getId("btn-reloads").onclick = () => {
  location.reload();
};
getId("btn-close").onclick = () => {
  getClass("modal")[0].style.display = "none";
};
getClass("button-info")[0].onclick = () => {
  getClass("modal")[0].style.display = "flex";
  document.querySelectorAll(
    "#app > div.modal > div  > div.over"
  )[0].style.display = "none";
  document.querySelectorAll(
    "#app > div.modal > div  > div.false"
  )[0].style.display = "none";
  document.querySelectorAll(
    "#app > div.modal > div  > div.infoapp"
  )[0].style.display = "block";
};

var colorss = [
  "white",
  "red",
  "orange",
  "palevioletred",
  "blue",
  "green",
  "purple",
];

getClass("changecolor")[0].onclick = () => {
  getClass("settingchangecolor")[0].classList.toggle("active");
};

for (var o = 0; o < getClass("colors").length; o++) {
  getClass("colors")[o].onclick = function () {
    for (var j = 0; j < getClass("colors").length; j++) {
      getClass("colors")[j].classList.remove("active");
    }
    this.classList.add("active");
    for (ab = 0; ab < getClass("colors").length; ab++) {
      try {
        if (getClass("colors")[ab].classList.value == "colors active") {
          indexcolor = ab;
          break;
        }
      } catch (error) {}
    }
    localStorage.setItem("indexcolor", JSON.stringify(indexcolor));
    getClass("logo")[0].style.backgroundColor = colorss[indexcolor];
  };
}

for (var i = 0; i < btnnumber.length; i++) {
  btnnumber[i].onclick = function () {
    if (getClass("boxs maychange active").length === 1) {
      for (var j = 0; j < btnnumber.length; j++) {
        btnnumber[j].classList.remove("active");
      }

      this.classList.add("active");
      number = this.innerText;

      if (number == "X") {
        getClass("boxs maychange active")[0].innerText = "";
        falsee -= 1;
      } else {
        getClass("boxs maychange active")[0].innerText = number;
      }

      for (a = 0; a <= getClass("boxs").length; a++) {
        try {
          if (getClass("boxs")[a].classList.value == "boxs maychange active") {
            indexbox = a;
            break;
          }
        } catch (error) {}
      }

      if (numselectmode === 0) {
        if (
          getClass("boxs")[indexbox].innerText !==
          easy[numrandom][1].charAt(indexbox)
        ) {
          falsee += 1;
          getId("heart").innerText = falsee;
        }
      } else if (numselectmode === 1) {
        if (
          getClass("boxs")[indexbox].innerText !==
          medium[numrandom][1].charAt(indexbox)
        ) {
          falsee += 1;
          getId("heart").innerText = falsee;
        }
      } else if (numselectmode === 2) {
        if (
          getClass("boxs")[indexbox].innerText !==
          hard[numrandom][1].charAt(indexbox)
        ) {
          falsee += 1;
          getId("heart").innerText = falsee;
        }
      }
      changeclick();
      gameover();
    }
  };
}
