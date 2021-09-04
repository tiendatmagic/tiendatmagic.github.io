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
getId("btn-start").onclick = () => {
  playg();
  runtime();
}
getId("btn-rate").onclick = () => {
  cordova.plugins.market.open('com.tiendatmagic.xepdoan');
}

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

function playg() {
  getClass("version")[0].style.display = 'none';
  getClass("nametitle")[0].style.display = 'none';
  document.getElementsByTagName("body")[0].style.backgroundColor = '#FFC7C7';
  getId("mainstart").style.display = 'none';
  getId("maingame").style.display = 'block';

  checklevel();
  var elementfood = ``;
  for (i = 0; i < foodlength; i++) {
    elementfood += `<div class='asfood'> </div>`
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
      var elementfood = ``;
      for (i = 0; i < resultarr.length; i++) {
        elementfood += `<div class='msfood'> </div>`
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
    setTimeout(() => {
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
      setTimeout(() => {
        scorex += 1;
        getId("scorex").innerText = scorex;
        playg();
        var elementfood = ``;
        getClass("mylist")[0].innerHTML = elementfood;
        audio_win.play();
        canplay = false;
      }, 10);

      setTimeout(() => {
        canplay = true;
      }, 600)

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
  var elementfood = ``;
  getClass("mylist")[0].innerHTML = elementfood;

}
getClass("replay")[0].onclick = () => {
  replayg();

}
getClass("returnmainmenu")[0].onclick = () => {
  location.reload();
}

function savehighscore() {
  if (scorex > highscorex) {
    highscorex = scorex;
    localStorage.setItem("highscorex", JSON.stringify(highscorex));
  }
}