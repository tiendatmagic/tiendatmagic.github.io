var numselectmode = 0;
var numrandom = 0;
var btnnumber = document.querySelectorAll(".btnn");
var btnbox = document.querySelectorAll(".boxs");
var number = 0;
var start = 0;
var indexbox = 0;
var falsee = 0;
var minute = 0;
var second = 0;
var overgame = 0;
var stime;
// var arrays = ["", "", "", "", "", "", "", "", ""];
var arrays = [
  "6	9	8	2	4	7	5	3	1  7	5	4	9	1	3	8	6	2  3	2	1	8	6	5	9	7	4  9	1	7	4	8	6	3	2	5  8	6	5	7	3	2	4	1	9  4	3	2	5	9	1	7	8	6  5	8	6	3	2	9	1	4	7  2	7	3	1	5	4	6	9	8  1	4	9	6	7	8	2	5	3",
];
arrays.join(" ");
console.log(arrays);
function getId(id) {
  return document.getElementById(id);
}
function getClass(clss) {
  {
    return document.getElementsByClassName(clss);
  }
}

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

for (var i = 0; i < btnnumber.length; i++) {
  btnnumber[i].addEventListener("click", function () {
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
  });
}
