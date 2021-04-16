var say = "";
var ans = "";
var num = 0;
var date = new Date();
var btnok = document.getElementById("ok");
var btndel = document.getElementById("delete");
var btnreset = document.getElementById("reset");
var btnaccept = document.getElementById("acceptname");

var ins = 1;
var uname = JSON.parse(localStorage.getItem("uname"));
if (uname === null) {
  uname = "";
}
var profile = JSON.parse(localStorage.getItem("profile"));
if (profile === null) {
  profile = 0;
}
var notans = 0;
var message = document.getElementsByClassName("message")[0];
function loadapp() {
  if (profile === 1) {
    document.getElementsByClassName("inputname")[0].style.display = "none";
    document.getElementsByClassName("app")[0].style.display = "block";
    if (date.getDay() === 1 && date.getDay() === 6) {
      ans += "Hôm nay cuối tuần có muốn nói chuyện với chị không em " + uname;
    }

    if (date.getHours() >= 5 && date.getHours() < 11) {
      ans += "Chào buổi sáng nha em " + uname;
      ans += "Hôm nay thế nào có chuyện gì vui hông nè";
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
  say = document.getElementById("say").value.toLowerCase();

  if (say === "") {
    alert("Không được bỏ trống nha");
  } else if (say.indexOf("<") !== -1 || say.indexOf(">") !== -1) {
    alert("Ký tự không hợp lệ");
  } else {
    message.innerHTML += "<li class='que'>" + say + "</li>";

    setTimeout(answer, 1000);

    document.getElementById("say").value = "";
    write = 0;
  }
};

btndel.onclick = () => {
  message.innerHTML = "";
};

btnreset.onclick = () => {
  profile = 0;
  localStorage.setItem("profile", JSON.stringify(profile));
  location.reload();
};
