
var arrquestion = [1, 2, 3];
var appfoodarr = [];
var resultarr = []
var canplay = false;
var tim;
var scorex = JSON.parse(localStorage.getItem("scorex"));
if (scorex === null) {
  scorex = 0;
}
var highscorex = JSON.parse(localStorage.getItem("highscorex"));
if (highscorex === null) {
  highscorex = 0;
}
var foodlength = 3;
var seconds = 60;
var audio_click = new Audio("./sound/pop.mp3");
var audio_win = new Audio("./sound/win.mp3");
var audio_lose = new Audio("./sound/lose.mp3");

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

var admobid = {
  banner: '',
};

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

  AdMob.createBanner({
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  });
}

getId("btn-start").onclick = function () {
  playg();
  runtime();
}
getId("btn-rate").onclick = function () {
  cordova.plugins.market.open('com.tiendatmagic.xepdoan');
}

function playg() {
  getClass("version")[0].style.display = 'none';
  getClass("nametitle")[0].style.display = 'none';
  document.getElementsByTagName("body")[0].style.backgroundColor = '#e6c1c1';
  getId("mainstart").style.display = 'none';
  getId("maingame").style.display = 'block';
  getClass("listbtn")[0].style.display = 'flex';

  checklevel();
  var elementfood = "";
  for (i = 0; i < foodlength; i++) {
    elementfood += "<div class='asfood'> </div>";
  }
  getClass("applist")[0].innerHTML = elementfood;
  appfoodarr.length = 0;
  for (i = 0; i < foodlength; i++) {
    appfoodarr.push(arrquestion[Math.floor(Math.random() * arrquestion.length)])
  }
  for (i = 0; i < foodlength; i++) {
    getClass("asfood")[i].innerText = appfoodarr[i];
    getClass("asfood")[i].classList.add("af" + appfoodarr[i]);
  }
  resultarr.length = 0;
  canplay = true;
}

function checklevel() {
  if (scorex == 4) {
    foodlength = 4;
  }
  else if (scorex == 7) {
    foodlength = 5;
  }
  else if (scorex == 10) {
    foodlength = 6;
  } else if (scorex >= 14) {
    foodlength = 7;
  }
}

function checkfood() {
  if (canplay == true) {
    if (JSON.stringify(resultarr) === JSON.stringify(appfoodarr)) {
      canplay = true;
      checkgame()
    } else {
      canplay = false;
      checkgame()
    }
  }
}

function runtime() {
  var tim = setInterval(function () {

    if (canplay == true) {
      seconds -= 1;
    }
    if (seconds <= 0) {
      seconds = 0;
    }
    if (seconds === 0) {

      clearInterval(tim);
      canplay = false;
      checkgame();

    }
    getId("seconds").innerText = seconds;
  }, 1000);
}

function checkf() {
  for (k = 1; k <= resultarr.length; k++) {
    if (resultarr.length == k)
      if (resultarr[k - 1] !== appfoodarr[k - 1]) {
        canplay = false;
        checkgame();
      }
  }
}
for (k = 0; k < 3; k++) {
  getClass("sbtn")[k].onclick = function () {
    if (canplay == true) {
      if (resultarr.length < foodlength) {
        resultarr.push(Number(this.innerHTML));
      }
      var elementfood = "";
      for (i = 0; i < resultarr.length; i++) {
        elementfood += "<div class='msfood'> </div>";
      }
      getClass("mylist")[0].innerHTML = elementfood;
      for (i = 0; i < resultarr.length; i++) {
        getClass("msfood")[i].innerText = resultarr[i];
        getClass("msfood")[i].classList.add("af" + resultarr[i]);
        getClass("msfood")[getClass("msfood").length - 1].classList.add("jump");
      }
      if (resultarr.length < foodlength) {
        checkf();
      }
      if (resultarr.length == foodlength) {
        checkfood();
      }
      audio_click.play();
    }
  }
}

function checkgame() {
  if (canplay == false) {
    setTimeout(function () {
      clearInterval(tim);
      savehighscore();
      getClass("gover")[0].classList.add("active");
      getClass("score")[0].innerText = scorex;
      getClass("highscore")[0].innerText = highscorex;
      seconds = 0;
      audio_lose.play();
    }, 10);
  } else if (canplay == true) {
    {
      setTimeout(function () {
        scorex += 1;
        getId("scorex").innerText = scorex;
        canplay = false;
      }, 10);

      setTimeout(function () {
        playg();
        var elementfood = "";
        getClass("mylist")[0].innerHTML = elementfood;
        audio_win.play();
        canplay = true;
      }, 500)

    }
  }

}

function replayg() {
  getClass("gover")[0].classList.remove("active");
  clearInterval(tim);
  seconds = 60;
  scorex = 0;
  getId("scorex").innerText = scorex;
  foodlength = 3;
  playg();
  runtime();
  var elementfood = "";
  getClass("mylist")[0].innerHTML = elementfood;

}
getClass("replay")[0].onclick = function () {
  replayg();

}
getClass("returnmainmenu")[0].onclick = function () {
  location.reload();
}

function savehighscore() {
  if (scorex > highscorex) {
    highscorex = scorex;
    localStorage.setItem("highscorex", JSON.stringify(highscorex));
  }
}