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
var level = 1;
var boxlength = 4;
var time;
var tim;
var indexclick = 0;
var randomindex = 0;
var canplay = false;
var bgcolor = '';
var randomcolor = 0;
var scorecb = 0;
var mainmenu = 1;
var snd_next = new Audio('./sound/next.wav');
var snd_finish = new Audio('./sound/finish.wav');
var bestscorecb = JSON.parse(localStorage.getItem("bestscorecb"));
if (bestscorecb === null) {
  bestscorecb = 0;
}
getId("btn-start").onclick = function () {
  mainmenu = 0;
  getId("mainmenu").style.display = 'none';
  getId("maingame").style.display = 'block';
  playgame();
  checktime();
}
getId("btn-rate").onclick = function () {
  cordova.plugins.market.open('com.tiendatmagic.colorblind');
}
getId("reloadgame").onclick = function () {
  getClass("overgame")[0].classList.remove("active");
  scorecb = 0;
  level = 1;
  getId("score").innerText = scorecb;
  checktime();
  playgame();
}

function playgame() {
  getId("bestscore").innerText = bestscorecb;
  time = 3000;
  canplay = true;
  clearInterval(tim);
  checklevel();
  createcolor();
  checklistenclick();
}

function checktime() {
  var tim = setInterval(function () {
    if (canplay === true) {
      if (scorecb >= 30) {
        time -= 5.5;
      }
      if (scorecb >= 35) {
        time -= 6.5;
      }
      if (scorecb >= 40) {
        time -= 7.5;
      }
      if (scorecb >= 45) {
        time -= 8.5;
      }
      if (scorecb >= 50) {
        time -= 9.5;
      }
      if (scorecb >= 55) {
        time -= 10.5;
      }
      if (scorecb >= 60) {
        time -= 11.5;
      }
      if (scorecb >= 65) {
        time -= 12.5;
      }
      if (scorecb < 30) {
        time -= 4.5;
      }
    }
    if (time <= 0) {
      time = 0;
    }
    if (time === 0) {
      clearInterval(tim);
      canplay = false;
      processgame();
    }
    rtimee = (time) / 30;
    getClass("line")[0].style.width = rtimee + "%";
  }, 1);
}

function checklevel() {
  var boxitem = "";
  var sizebox = 'calc(320px/' + (level + 2) + ' + 10px)';
  switch (level) {
    case 1:
      boxlength = 4;
      break;
    case 2:
      boxlength = 9;
      break;
    case 3:
      boxlength = 16;
      break;
  }
  for (i = 0; i < boxlength; i++) {
    boxitem += "<div class='box-item'> </div>";
  }
  getId("grid-box").innerHTML = boxitem;
  for (j = 0; j < boxlength; j++) {
    getClass("box-item")[j].style.width = sizebox;
    getClass("box-item")[j].style.height = sizebox;
  }
}

function createcolor() {
  randomindex = Math.floor(Math.random() * boxlength);
  randomcolor = Math.floor(Math.random() * 14);
  var bgcolorlight = '';
  switch (randomcolor) {
    case 0:
      bgcolor = 'rgb(255, 0, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(215, 0, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(225, 0, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(230, 0, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(235, 0, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(240, 0, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(205, 0, 0)';
      }
      break;
    case 1:
      bgcolor = 'rgb(255, 0, 140)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(214, 0, 118)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(224, 0, 123)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(230, 0, 126)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(235, 0, 129)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(240, 0, 132)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(204, 0, 112)';
      }
      break;
    case 2:
      bgcolor = 'rgb(111, 0, 255)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(93, 0, 214)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(97, 0, 224)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(99, 0, 230)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(102, 0, 235)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(104, 0, 240)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(88, 0, 204)';
      }
      break;
    case 3:
      bgcolor = 'rgb(0, 119, 255)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(0, 100, 214)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(0, 105, 224)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(0, 107, 230)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(0, 109, 235)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(0, 112, 240)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(0, 95, 204)';
      }
      break;
    case 4:
      bgcolor = 'rgb(0, 247, 255)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(0, 207, 214)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(0, 217, 224)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(0, 222, 230)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(0, 227, 235)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(0, 232, 240)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(0, 197, 204)';
      }
      break;
    case 5:
      bgcolor = 'rgb(0, 199, 149)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(0, 160, 120)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(0, 170, 128)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(0, 175, 131)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(0, 180, 135)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(0, 185, 139)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(0, 150, 112)';
      }
      break;
    case 6:
      bgcolor = 'rgb(0, 255, 98)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(0, 214, 82)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(0, 224, 86)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(0, 230, 88)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(0, 235, 90)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(0, 240, 92)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(0, 204, 78)';
      }
      break;
    case 7:
      bgcolor = 'rgb(60, 255, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(50, 214, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(52, 224, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(54, 230, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(55, 235, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(56, 240, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(48, 204, 0)';
      }
      break;
    case 8:
      bgcolor = 'rgb(50, 175, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(61, 216, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(58, 206, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(57, 201, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(55, 196, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(54, 190, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(64, 226, 0)';
      }
      break;
    case 9:
      bgcolor = 'rgb(168, 240, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(139, 199, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(146, 209, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(150, 214, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(154, 219, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(157, 224, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(133, 190, 0)';
      }
      break;
    case 10:
      bgcolor = 'rgb(255, 238, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(214, 200, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(224, 209, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(230, 214, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(235, 219, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(240, 224, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(204, 190, 0)';
      }
      break;
    case 11:
      bgcolor = 'rgb(255, 166, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(214, 139, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(224, 146, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(230, 149, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(235, 152, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(240, 156, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(204, 133, 0)';
      }
      break;
    case 12:
      bgcolor = 'rgb(255, 94, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(214, 79, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(224, 82, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(230, 84, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(235, 86, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(240, 88, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(204, 75, 0)';
      }
      break;
    case 13:
      bgcolor = 'rgb(187, 184, 0)';
      if (scorecb >= 15) {
        bgcolorlight = 'rgb(146, 144, 0)';
      }
      if (scorecb >= 20) {
        bgcolorlight = 'rgb(156, 154, 0)';
      }
      if (scorecb >= 25) {
        bgcolorlight = 'rgb(163, 160, 0)';
      }
      if (scorecb >= 30) {
        bgcolorlight = 'rgb(168, 165, 0)';
      }
      if (scorecb >= 35) {
        bgcolorlight = 'rgb(172, 169, 0)';
      }
      if (scorecb < 15) {
        bgcolorlight = 'rgb(136, 134, 0)';
      }
      break;
  }
  for (k = 0; k < boxlength; k++) {
    getClass("box-item")[k].style.backgroundColor = bgcolor;
  }
  getId("maingame").style.backgroundColor = 'rgb(100, 100, 100)';
  getClass("box-item")[randomindex].style.backgroundColor = bgcolorlight;
}

function checklistenclick() {
  for (l = 0; l < boxlength; l++) {
    getClass("box-item")[l].onclick = function () {
      if (canplay === true) {
        this.classList.add("active");
        for (n = 0; n < boxlength; n++) {
          if (getClass("box-item")[n].classList[1] == "active") {
            indexclick = n;
          }
        }
        checkgame();
      }
    }
  }
}

function checkgame() {
  if (indexclick == randomindex) {
    canplay = true;
  } else {
    canplay = false;
  }
  processgame();
}

function processgame() {
  if (canplay === true) {
    scorecb += 1;
    canplay = false;
    snd_next.play();
    time = 3000;
    if (scorecb == 5) {
      level = 2;
    } else if (scorecb == 12) {
      level = 3;
    }
    playgame();
  } else if (canplay === false) {
    snd_finish.play();
    savebestscore();
    time = 0;
    getClass("box-item")[randomindex].style.border = '5px solid #fff';
    setTimeout(function () {
      getClass("overgame")[0].classList.add("active");
    }, 1000)
  }
  getId("score").innerText = scorecb;
}

function savebestscore() {
  if (scorecb > bestscorecb) {
    bestscorecb = scorecb;
    localStorage.setItem("bestscorecb", JSON.stringify(bestscorecb));
  }
}
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  document.addEventListener("backbutton", onBackButton, false);
}

function onBackButton() {
  if (mainmenu == 1) {
    navigator.app.exitApp();
  } else {
    location.reload();
  }
}
document.addEventListener("deviceready", function () {
  onDeviceReady();
});