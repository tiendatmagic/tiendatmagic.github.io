
var version = 0;
var say = "";
var ans = "";
var num = 0;
var write = 1;
var date = new Date();
var btnok = document.getElementById("ok");
var btndel = document.getElementById("delete");
var btnaccept = document.getElementById("acceptname");
var notans = 0;
var uname = JSON.parse(localStorage.getItem("uname"));
if (uname === null) {
  uname = "";
}
var profile = JSON.parse(localStorage.getItem("profile"));
if (profile === null) {
  profile = 0;
}
var dark = JSON.parse(localStorage.getItem("dark"));
if (dark === null) {
  dark = 0;
}
var dmnns = JSON.parse(localStorage.getItem("dmnns"));
if (dmnns === null) {
  dmnns = "#ff41d6";
}
var dmngs = JSON.parse(localStorage.getItem("dmngs"));
if (dmngs === null) {
  dmngs = "#c853ff";
}
var message = document.getElementsByClassName("message")[0];
var copy = [];
var copynumber = 0;
window.addEventListener("load", loadapp);
function loadapp() {
  if (profile === 1) {
    document.getElementsByClassName("navigation")[0].style.display = "block";
    document.getElementsByClassName("setting-option")[0].style.display =
      "block";
    document.getElementsByClassName("inputname")[0].style.display = "none";
    document.getElementsByClassName("app")[0].style.display = "block";

    for (m = 0; m <= document.querySelectorAll(".ans").length - 1; m++) {
      document.getElementsByClassName("ans")[m].style.backgroundColor = dmnns;
    }
    chatday();
    loaddark();
  }
}
document.getElementById("name").onkeyup = (event) => {
  if (event.keyCode === 13) {
    btnaccept.click();
  }
};

document.getElementById("say").onkeyup = (event) => {
  if (event.keyCode === 13) {
    btnok.click();
  } else if (event.keyCode === 38) {
    copynumber += 1;
    if (copynumber >= 3) {
      copynumber = 3;
    }
    if (copynumber === 1) {
      if (copy[copy.length - 1] !== undefined) {
        document.getElementById("say").value = copy[copy.length - 1];
      }


    } else if (copynumber === 2) {
      if (copy[copy.length - 2] !== undefined) {
        document.getElementById("say").value = copy[copy.length - 2];
      }
    } else {
      if (copy[copy.length - 3] !== undefined) {
        document.getElementById("say").value = copy[copy.length - 3];
        copynumber = 3;
      }
    }
  } else if (event.keyCode === 40) {
    copynumber -= 1;
    if (copynumber <= 0) {
      copynumber = 0;
    }
    if (copynumber === 1) {
      if (copy[copy.length - 1] !== undefined) {
        document.getElementById("say").value = copy[copy.length - 1];
      }
    } else if (copynumber === 2) {
      if (copy[copy.length - 2] !== undefined) {
        document.getElementById("say").value = copy[copy.length - 2];
      }
    } else {
      if (copy[copy.length - 3] !== undefined) {
        document.getElementById("say").value = copy[copy.length - 3];
        copynumber = 1;
      }
    }
  }
};

btnaccept.onclick = () => {
  username = document.getElementById("name").value.toLowerCase();
  if (username === "") {
    alert("Không được bỏ trống nha");
  } else {
    document.getElementsByClassName("inputname")[0].style.display = "none";
    document.getElementsByClassName("app")[0].style.display = "block";
    uname = username;
    localStorage.setItem("uname", JSON.stringify(uname));
    profile = 1;
    loadapp();
    localStorage.setItem("profile", JSON.stringify(profile));
  }
};
btnok.onclick = () => {
  if (write === 1) {

    say = document.getElementById("say").value.toLowerCase();
    say = say.replace(/[&?\/\\#+()$~%.!@^()'":*<>{}]/g, "");
    if (say === "") {
      alert("Không được bỏ trống nha");
      write = 1;
    } else {
      message.innerHTML += "<li class='que'>" + say + "</li>";
      document.querySelectorAll(".ans")[document.querySelectorAll(".ans").length - 1].scrollIntoView();
      setTimeout(answer, 1000);
      document.getElementById("say").value = "";

      copy.push(say);
      write = 0;
    }

    loaddark();
  }
};
btndel.onclick = () => {
  message.innerHTML = "";
  ans = "";
  loadapp();
};
document.getElementById("select1").onclick = () => {
  document.getElementById("app").style.transform = "translateX(0%)";
};
document.getElementById("select2").onclick = () => {
  document.getElementById("app").style.transform = "translateX(-50%)";
};

function checkdark() {
  if (dark === 1) {
    dark = 0;
    localStorage.setItem("dark", JSON.stringify(dark));
  } else {
    dark = 1;
    localStorage.setItem("dark", JSON.stringify(dark));
  }
  loaddark();
}

function loaddark() {
  for (m = 0; m <= document.querySelectorAll(".ans").length - 1; m++) {
    document.getElementsByClassName("ans")[m].style.backgroundColor = dmnns;
  }
  for (n = 0; n <= document.querySelectorAll(".que").length - 1; n++) {
    document.getElementsByClassName("que")[n].style.backgroundColor = dmngs;
  }
  if (dark === 1) {
    document.getElementsByClassName("lightoff")[0].style.display = "block";
    document.getElementsByClassName("lighton")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.backgroundColor =
      "#272727";

    document.querySelector("body > div > div.inputname  span").style.color =
      "#fff";

    document.querySelector("#app > div.app1 > div > span").style.color = "#fff";

    for (
      k = 0;
      k <= document.querySelectorAll(".setting-option li").length - 1;
      k++
    ) {
      document.querySelectorAll(".setting-option li")[k].classList.add("dark");
    }
  } else {
    document.getElementsByClassName("lightoff")[0].style.display = "none";
    document.getElementsByClassName("lighton")[0].style.display = "block";
    document.getElementsByTagName("body")[0].style.backgroundColor =
      "#ffe8f6";
    document.querySelector("div.main > div.inputname > div > span").style.color = "#272727";
    document.querySelector("#app > div.app1 > div > span").style.color =
      "#272727";

    for (
      k = 0;
      k <= document.querySelectorAll(".setting-option li").length - 1;
      k++
    ) {
      document
        .querySelectorAll(".setting-option li")
      [k].classList.remove("dark");
    }
  }
}
document.getElementsByClassName("sli1")[0].addEventListener("click", checkdark);
document.getElementsByClassName("sli2")[0].onclick = () => {
  document.getElementsByClassName("options-2")[0].style.display = "block";
};
document.getElementsByClassName("sli3")[0].onclick = () => {
  profile = 0;
  localStorage.setItem("profile", JSON.stringify(profile));
  location.reload(true);
};
document.getElementsByClassName("huy")[0].onclick = () => {
  document.getElementsByClassName("options-2")[0].style.display = "none";
};
document.getElementById("dmnn").addEventListener("change", () => {
  dmnns = document.getElementById("dmnn").value;
  for (m = 0; m <= document.querySelectorAll(".ans").length - 1; m++) {
    document.getElementsByClassName("ans")[m].style.backgroundColor = dmnns;
  }
  localStorage.setItem("dmnns", JSON.stringify(dmnns));
});
document.getElementById("dmng").addEventListener("change", () => {
  dmngs = document.getElementById("dmng").value;
  for (n = 0; n <= document.querySelectorAll(".que").length - 1; n++) {
    document.getElementsByClassName("que")[n].style.backgroundColor = dmngs;
  }
  localStorage.setItem("dmngs", JSON.stringify(dmngs));
});
document.getElementsByClassName("dmht")[0].onclick = () => {
  document.getElementById("dmnn").click();
};
document.getElementsByClassName("dmng")[0].onclick = () => {
  document.getElementById("dmng").click();
};
