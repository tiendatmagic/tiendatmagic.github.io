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
  dmnns = "#ff97e9";
}
var dmngs = JSON.parse(localStorage.getItem("dmngs"));
if (dmngs === null) {
  dmngs = "#76a1ff";
}
var message = document.getElementsByClassName("message")[0];

window.addEventListener("load", openapp);
function openapp() {
  setTimeout(() => {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
    document.getElementsByTagName("body")[0].style.opacity = "1";
  }, 1000);
}
window.addEventListener("load", loadapp);
function loadapp() {
  if (profile === 1) {
    document.getElementsByClassName("navigation")[0].style.display = "block";
    document.getElementsByClassName("setting-option")[0].style.display =
      "block";
    document.getElementsByClassName("inputname")[0].style.display = "none";
    document.getElementsByClassName("app")[0].style.display = "block";
    if (date.getDay() === 1 && date.getDay() === 6) {
      ans += "Hôm nay cuối tuần có muốn nói chuyện với chị không em " + uname;
    }
    if (date.getHours() >= 5 && date.getHours() < 11) {
      ans += "Chào buổi sáng nha em " + uname + "<br>";
      ans += "Hôm nay thế nào có chuyện gì vui hông nè";
      ("</li>");
    } else if (date.getHours() >= 11 && date.getHours() < 16) {
      ans += "Chào buổi trưa nha em " + uname;
    } else if (date.getHours() >= 16 && date.getHours() < 17) {
      ans += "Chào buổi chiều nha em " + uname;
    } else if (date.getHours() >= 17 && date.getHours() < 18) {
      ans += "Em sắp về chưa, tranh thủ về nhà còn ăn cơm tối nè em " + uname;
    } else if (date.getHours() >= 18 && date.getHours() < 20) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans += "Ủa em hôm nay không coi thời sự hả";
          break;
        default:
          ans += "Chào buổi tối nha em " + uname;
          break;
      }
    } else if (date.getHours() >= 20 && date.getHours() < 22) {
      ans += "Tối rồi, tranh thủ làm gì làm đi rồi lát ngủ sớm nha em " + uname;
    } else if (date.getHours() >= 22 && date.getHours() < 24) {
      ans += "Thôi khuya rồi đó, chuẩn bị ngủ đi nha em " + uname;
    } else {
      ans += "Khuya rồi có chuyện gì mà chưa ngủ thế em " + uname;
    }
    message.innerHTML += "<li class='ans' >" + ans + "</li>";
    for (m = 0; m <= document.querySelectorAll(".ans").length - 1; m++) {
      document.getElementsByClassName("ans")[m].style.backgroundColor = dmnns;
    }
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
    if (say === "") {
      alert("Không được bỏ trống nha");
    } else if (say.indexOf("<") !== -1 || say.indexOf(">") !== -1) {
      alert("Ký tự không hợp lệ");
    } else {
      message.innerHTML += "<li class='que'>" + say + "</li>";
      setTimeout(answer, 1000);
      document.getElementById("say").value = "";
    }

    write = 0;
    loaddark();
  }
};
btndel.onclick = () => {
  message.innerHTML = "";
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
    document.getElementsByClassName("main")[0].style.backgroundColor =
      "#272727";
    document.getElementsByClassName("navigation")[0].style.backgroundColor =
      "#272727";
    document.querySelector("body > div > div.inputname > span").style.color =
      "#fff";

    document.querySelector("#app > div.app1 > div > span").style.color = "#fff";
    document.getElementsByClassName("ans")[0].style.backgroundColor = dmnn;
    for (h = 0; h <= document.querySelectorAll(".message li").length - 1; h++) {
      document.querySelectorAll(".message li")[h].style.color = "#fff";
    }
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
    document.getElementsByClassName("main")[0].style.backgroundColor =
      "#ffe0f3";
    document.getElementsByClassName("navigation")[0].style.backgroundColor =
      "#ffe0f3";
    document.querySelector("body > div > div.inputname > span").style.color =
      "#272727";
    document.querySelector("#app > div.app1 > div > span").style.color =
      "#272727";
    document.querySelector(".message li").style.color = "#272727";
    for (h = 0; h <= document.querySelectorAll(".message li").length - 1; h++) {
      document.querySelectorAll(".message li")[h].style.color = "#272727";
    }
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
  location.reload();
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
