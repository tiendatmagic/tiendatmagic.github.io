const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector("img");

var result = JSON.parse(localStorage.getItem("result"));
if (result === null) {
  result = "";
}

let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive() {
  defaultBtn.click();
}
document
  .getElementsByClassName("image")[0]
  .addEventListener("click", function () {
    document.getElementsByTagName("button")[0].click();
  });
defaultBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      result = reader.result;
      img.src = result;
      localStorage.setItem("result", JSON.stringify(result));
      wrapper.classList.add("active");
      simg = 1;
    };

    reader.readAsDataURL(file);
  }

  if (this.value) {
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
  }
});

var ten = document.getElementById("ten");
var gioitinh = document.getElementsByName("gender");

var ngaysinh = document.getElementById("ngaysinh");
var dngaysinh = JSON.parse(localStorage.getItem("dngaysinh"));
if (dngaysinh === null) {
  dngaysinh = "";
}

var ngaybatdau = document.getElementById("ngaybatdau");
var trangthai = document.getElementById("statuss");
var simg = 0;
var sten = JSON.parse(localStorage.getItem("sten"));
if (sten === null) {
  sten = "";
}
var sgt = JSON.parse(localStorage.getItem("sgt"));
if (sgt === null) {
  sgt = "";
}

var sngaysinh = JSON.parse(localStorage.getItem("sngaysinh"));
if (sngaysinh === null) {
  sngaysinh = "";
}

var sngaybatdau = JSON.parse(localStorage.getItem("sngaybatdau"));
if (sngaybatdau === null) {
  sngaybatdau = "";
}

var strangthai = JSON.parse(localStorage.getItem("strangthai"));
if (strangthai === null) {
  strangthai = "";
}
var dmhns = JSON.parse(localStorage.getItem("dmhns"));
if (dmhns === null) {
  dmhns = "pink";
}


var dmhts = JSON.parse(localStorage.getItem("dmhts"));
if (dmhts === null) {
  dmhts = "pink";
}

var dmngs = JSON.parse(localStorage.getItem("dmngs"));
if (dmngs === null) {
  dmngs = "pink";
}

var dmtts = JSON.parse(localStorage.getItem("dmtts"));
if (dmtts === null) {
  dmtts = "blue";
}

var info1 = JSON.parse(localStorage.getItem("info1"));
if (info1 === null || info1 === "") {
  info1 = "Đã cô đơn";
}
var info2 = JSON.parse(localStorage.getItem("info2"));
if (info2 === null || info2 === "") {
  info2 = "Ngày";
}
var text = document.getElementById("contentevent");
var data = JSON.parse(localStorage.getItem("dataa"));
var arr = JSON.parse(localStorage.getItem("arr"));
if (arr === null) {
  arr = [];
}
var i;
var d = new Date();

var profile = JSON.parse(localStorage.getItem("profile"));
if (profile === null) {
  profile = 0;
}
window.addEventListener("load", displayprofile);

document.getElementById("submit").addEventListener("click", () => {
  sten = ten.value;
  localStorage.setItem("sten", JSON.stringify(sten));

  for (i = 0; i <= 2; i++) {
    if (gioitinh[i].checked) {
      sgt = gioitinh[i].value;
      localStorage.setItem("sgt", JSON.stringify(sgt));
    }
  }

  sngaysinh = Date.parse(ngaysinh.value);
  dngaysinh =
    new Date(ngaysinh.value).getDate() +
    "/" +
    (new Date(ngaysinh.value).getMonth() + 1) +
    "/" +
    new Date(ngaysinh.value).getFullYear();
  localStorage.setItem("sngaysinh", JSON.stringify(sngaysinh));
  sngaybatdau = Date.parse(ngaybatdau.value) - 25200000;
  localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
  strangthai = trangthai.value;
  localStorage.setItem("strangthai", JSON.stringify(strangthai));

  if (
    !sngaybatdau ||
    !sngaysinh ||
    sten == "" ||
    sgt == "" ||
    strangthai == "" ||
    simg == 0
  ) {
    alert("Không được bỏ trống nha 😑");
  } else {
    if (sngaysinh >= Date.parse(new Date())) {
      sngaysinh = Date.parse(new Date());
      localStorage.setItem("sngaysinh", JSON.stringify(sngaysinh));
    }
    if (sngaybatdau >= Date.parse(new Date())) {
      sngaybatdau = Date.parse(new Date());
      localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
    }
    profile = 1;
    localStorage.setItem("profile", JSON.stringify(profile));
    displayprofile();
  }
});

document.getElementsByClassName("addnotes")[0].addEventListener("click", () => {
  document.getElementsByClassName("event")[0].style.display = 'block';
});

document.getElementsByClassName("cstt")[0].addEventListener("click", () => {
  profile = 0;
  localStorage.setItem("profile", JSON.stringify(profile));
  displayprofile();
  location.reload();
});
document.getElementsByClassName("tdtd")[0].addEventListener("click", () => {
  document.getElementsByClassName("options-2")[0].style.display = "none";
  document.getElementsByClassName("options-3")[0].style.display = "block";
});

document.getElementsByClassName("tcms")[0].addEventListener("click", () => {
  document.getElementsByClassName("options-2")[0].style.display = "block";
  document.getElementsByClassName("options-3")[0].style.display = "none";
});
document.getElementsByClassName("dmhn")[0].addEventListener("click", () => {
  document.getElementById("dmhn").click();
});

document.getElementsByClassName("dmht")[0].addEventListener("click", () => {
  document.getElementById("dmht").click();
});

document.getElementsByClassName("dmng")[0].addEventListener("click", () => {
  document.getElementById("dmng").click();
});

document.getElementsByClassName("dmtt")[0].addEventListener("click", () => {
  document.getElementById("dmtt").click();
});
document.getElementsByClassName("huy")[0].addEventListener("click", () => {
  document.getElementsByClassName("options-2")[0].style.display = "none";
});
document.getElementById("xacnhan").addEventListener("click", () => {
  document.getElementsByClassName(
    "info1"
  )[0].innerText = document.getElementById("ndt").value;
  document.getElementsByClassName(
    "info2"
  )[0].innerText = document.getElementById("ndd").value;
  info1 = document.getElementById("ndt").value;
  localStorage.setItem("info1", JSON.stringify(info1));
  info2 = document.getElementById("ndd").value;
  localStorage.setItem("info2", JSON.stringify(info2));
  document.getElementsByClassName("options-3")[0].style.display = "none";
});
document.getElementById("huy").addEventListener("click", () => {
  document.getElementsByClassName("options-3")[0].style.display = "none";
});
document.getElementById("dmhn").addEventListener("change", () => {
  dmhns = document.getElementById("dmhn").value;
  document.getElementsByClassName("container")[0].style.backgroundColor = dmhns;
  document.getElementsByClassName("event")[0].style.backgroundColor = dmhns;
  localStorage.setItem("dmhns", JSON.stringify(dmhns));
});



document.getElementById("dmht").addEventListener("change", () => {
  dmhts = document.getElementById("dmht").value;
  document.getElementsByClassName("circle")[0].style.backgroundColor = dmhts;
  localStorage.setItem("dmhts", JSON.stringify(dmhts));
});

document.getElementById("dmng").addEventListener("change", () => {
  dmngs = document.getElementById("dmng").value;
  for (var j = 0; j <= 3; j++) {
    document.getElementsByClassName("heart")[j].style.backgroundColor = dmngs;
  }
  localStorage.setItem("dmngs", JSON.stringify(dmngs));
});

document.getElementById("dmtt").addEventListener("change", () => {
  dmtts = document.getElementById("dmtt").value;
  document.getElementsByClassName(
    "contentstatus"
  )[0].style.backgroundColor = dmtts;
  localStorage.setItem("dmtts", JSON.stringify(dmtts));
});

document.getElementById("huyevent").addEventListener("click", () => {
  document.getElementsByClassName("options-event")[0].style.display = "none";
});

document.getElementsByClassName("addevent")[0].addEventListener("click", () => {
  document.getElementsByClassName("options-event")[0].style.display = "block";
});
document.getElementById("xacnhanevent").addEventListener("click", () => {
  data = document.getElementsByClassName("listevent")[0].innerHTML +=
    "<li>" + text.value + "</li>";
  arr.push(text.value);
  document.getElementById("contentevent").value = "";
  localStorage.setItem("dataa", JSON.stringify(data));
  localStorage.setItem("arr", JSON.stringify(arr));

});

document.getElementsByClassName("clearevent")[0].addEventListener("click", () => {
  data = document.getElementsByClassName("listevent")[0].innerHTML =
    "";
  document.getElementById("contentevent").value = "";
  localStorage.setItem("dataa", JSON.stringify(data));
  localStorage.setItem("arr", JSON.stringify(arr));

});
document.getElementsByClassName("exitevent")[0].addEventListener("click", () => {
  document.getElementsByClassName("event")[0].style.display = 'none';
});

document.getElementsByClassName("ellipsis")[0].addEventListener("click", () => {
  document.getElementsByClassName("options")[0].classList.toggle("active");
});

function displayprofile() {
  if (profile === 1) {
    document.getElementsByClassName("profile")[0].style.display = "none";
    document.getElementsByClassName("main")[0].style.display = "block";
    document.getElementsByClassName("dname")[0].innerText = sten;
    document.getElementsByClassName("imgavatar")[0].src = result;
    document.getElementsByClassName("ntns")[0].innerText = dngaysinh;
    document.getElementsByClassName("dstatus")[0].innerText = strangthai;
    document.getElementsByClassName("container")[0].style.backgroundColor = dmhns;
    document.getElementsByClassName("event")[0].style.backgroundColor = dmhns;
    document.getElementsByClassName("circle")[0].style.backgroundColor = dmhts;
    document.getElementById("ndt").value = info1;
    document.getElementById("ndd").value = info2;
    document.getElementsByClassName(
      "info1"
    )[0].innerText = document.getElementById("ndt").value;
    document.getElementsByClassName(
      "info2"
    )[0].innerText = document.getElementById("ndd").value;
    for (var j = 0; j <= 3; j++) {
      document.getElementsByClassName("heart")[j].style.backgroundColor = dmngs;
    }
    document.getElementsByClassName("listevent")[0].innerHTML = JSON.parse(
      localStorage.getItem("dataa")
    );

    document.getElementsByClassName(
      "contentstatus"
    )[0].style.backgroundColor = dmtts;
    localStorage.setItem("dngaysinh", JSON.stringify(dngaysinh));

    setInterval(() => {
      document.getElementsByClassName("countday")[0].innerText = Math.floor(
        (new Date() - sngaybatdau) / 86400000
      );

      document.getElementsByClassName("dage")[0].innerText =
        new Date().getFullYear() - new Date(sngaysinh).getFullYear();

      document.getElementsByClassName("dngay")[0].innerText = Math.floor(
        (new Date() - sngaybatdau) / 86400000
      );
      document.getElementsByClassName(
        "dgio"
      )[0].innerText = new Date().getHours();

      document.getElementsByClassName(
        "dphut"
      )[0].innerText = new Date().getMinutes();

      document.getElementsByClassName(
        "dgiay"
      )[0].innerText = new Date().getSeconds();
    }, 1000);

    switch (sgt) {
      case "Nam": {
        document.getElementsByClassName("page")[0].style.backgroundColor =
          "#719cfa";
        break;
      }

      case "Nữ": {
        document.getElementsByClassName("page")[0].style.backgroundColor =
          "pink";
        break;
      }

      default: {
        document.getElementsByClassName("page")[0].style.backgroundColor =
          "#e6e6e6";
        break;
      }
    }
  } else {
    document.getElementsByClassName("main")[0].style.display = "none";
  }
}

document.getElementById("ngaysinh").max = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];

document.getElementById("ngaybatdau").max = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];

document.getElementsByClassName("select1")[0].addEventListener("click", () => {
  document.getElementsByClassName("scontent")[0].style.transform =
    "translateX(0%)";
  document.getElementsByClassName("select1")[0].style.backgroundColor = "blue";
  document.getElementsByClassName("select2")[0].style.backgroundColor = "grey";
});

document.getElementsByClassName("select2")[0].addEventListener("click", () => {
  document.getElementsByClassName("scontent")[0].style.transform =
    "translateX(-50%)";
  document.getElementsByClassName("select1")[0].style.backgroundColor = "grey";
  document.getElementsByClassName("select2")[0].style.backgroundColor = "blue";
});
