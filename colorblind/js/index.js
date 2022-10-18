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
getId("mainbestscore").innerText = bestscorecb;
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
getId("homegame").onclick = function () {
  location.reload();
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
      if (scorecb >= 20) {
        time -= 5.5;
      }
      if (scorecb >= 30) {
        time -= 6;
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
      if (scorecb < 20) {
        time -= 5;
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
  randomcolor = Math.floor(Math.random() * 16);
  var bgcolorlight = '';
  var opacity = 1;
  if (scorecb >= 10) {
    opacity = 0.65;
  }
  if (scorecb >= 15) {
    opacity = 0.7;
  }
  if (scorecb >= 20) {
    opacity = 0.75;
  }
  if (scorecb >= 25) {
    opacity = 0.8;
  }
  if (scorecb >= 30) {
    opacity = 0.85;
  }
  if (scorecb >= 35) {
    opacity = 0.9;
  }
  if (scorecb >= 40) {
    opacity = 0.95;
  }
  if (scorecb < 10) {
    opacity = 0.5;
  }
  switch (randomcolor) {
    case 0:
      bgcolor = 'rgb(255, 0,0,' + 1 + ')';
      bgcolorlight = 'rgb(255, 0,0,' + opacity + ')';
      break;
    case 1:
      bgcolor = 'rgb(255, 0, 140,' + 1 + ')';
      bgcolorlight = 'rgb(255, 0, 140,' + opacity + ')';
      break;
    case 2:
      bgcolor = 'rgb(111, 0, 255,' + 1 + ')';
      bgcolorlight = 'rgb(111, 0, 255,' + opacity + ')';
      break;
    case 3:
      bgcolor = 'rgb(0, 119, 255,' + 1 + ')';
      bgcolorlight = 'rgb(0, 119, 255,' + opacity + ')';
      break;
    case 4:
      bgcolor = 'rgb(0, 247, 255,' + 1 + ')';
      bgcolorlight = 'rgb(0, 247, 255,' + opacity + ')';
      break;
    case 5:
      bgcolor = 'rgb(0, 199, 149,' + 1 + ')';
      bgcolorlight = 'rgb(0, 199, 149,' + opacity + ')';
      break;
    case 6:
      bgcolor = 'rgb(0, 255, 98,' + 1 + ')';
      bgcolorlight = 'rgb(0, 255, 98,' + opacity + ')';
      break;
    case 7:
      bgcolor = 'rgb(60, 255, 0,' + 1 + ')';
      bgcolorlight = 'rgb(60, 255, 0,' + opacity + ')';
      break;
    case 8:
      bgcolor = 'rgb(50, 175, 0,' + 1 + ')';
      bgcolorlight = 'rgb(50, 175, 0,' + opacity + ')';
      break;
    case 9:
      bgcolor = 'rgb(168, 240, 0,' + 1 + ')';
      bgcolorlight = 'rgb(168, 240, 0,' + opacity + ')';
      break;
    case 10:
      bgcolor = 'rgb(255, 238, 0,' + 1 + ')';
      bgcolorlight = 'rgb(255, 238, 0,' + opacity + ')';
      break;
    case 11:
      bgcolor = 'rgb(255, 166, 0,' + 1 + ')';
      bgcolorlight = 'rgb(255, 166, 0,' + opacity + ')';
      break;
    case 12:
      bgcolor = 'rgb(255, 94, 0,' + 1 + ')';
      bgcolorlight = 'rgb(255, 94, 0,' + opacity + ')';
      break;
    case 13:
      bgcolor = 'rgb(187, 184, 0,' + 1 + ')';
      bgcolorlight = 'rgb(187, 184, 0,' + opacity + ')';
      break;
    case 14:
      bgcolor = 'rgb(124, 49, 49,' + 1 + ')';
      bgcolorlight = 'rgb(124, 49, 49,' + opacity + ')';
      break;
    case 15:
      bgcolor = 'rgb(124, 0 ,140,' + 1 + ')';
      bgcolorlight = 'rgb(124, 0 ,140,' + opacity + ')';
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

function onBackButton() {
  if (mainmenu == 1) {
    navigator.app.exitApp();
  } else {
    location.reload();
  }
}
var admobid = {
  banner: '',
};

function onDeviceReady() {
  document.addEventListener("backbutton", onBackButton, false);
  AdMob.createBanner({
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  });
}