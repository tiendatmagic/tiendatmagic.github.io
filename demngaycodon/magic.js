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
var dtieude = JSON.parse(localStorage.getItem("dtieude"));
if (dtieude === null) {
  dtieude = "Đếm Ngày Cô Đơn";
}
var ngaysinh = document.getElementById("ngaysinh");
var dngaysinh = JSON.parse(localStorage.getItem("dngaysinh"));
if (dngaysinh === null) {
  dngaysinh = "";
}
var ngaybatdau = document.getElementById("ngaybatdau");
var dngaybatdau = JSON.parse(localStorage.getItem("dngaybatdau"));
if (dngaybatdau === null) {
  dngaybatdau = "";
}
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
var dmhns = "";
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
  dmtts = "pink";
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
var data = JSON.parse(localStorage.getItem("datadncd"));
var arrdncd = JSON.parse(localStorage.getItem("arrdncd"));
if (arrdncd === null) {
  arrdncd = [];
}
var i;
var d = new Date();
var profile = JSON.parse(localStorage.getItem("profile"));
if (profile === null) {
  profile = 0;
}
var dark = JSON.parse(localStorage.getItem("dark"));
if (dark === null) {
  dark = 0;
}
var orderstatus = JSON.parse(localStorage.getItem("orderstatus"));
if (orderstatus === null) {
  orderstatus = new Date().getDate();
}
var status_apps = [
  "Đau khổ nhất là khi yêu ai đó, thương ai đó mà không thể ở bên, không thể nói ra nỗi lòng của mình với người ấy",
  "Bây giờ tôi mới đau khổ nhận ra một sự thật là có những người chỉ có thể ở trong tim ta chứ không bao giờ có thể bước cùng ta đi đến cuối cuộc đời",
  "Đêm nay, đêm mai, đêm sau nữa ….. Tôi nhớ 1 người chưa từng nhớ tôi",
  "Nỗi buồn lớn nhất khi lúc nào cũng phải tỏ ra mình là người đang hạnh phúc. Nỗi đau lớn nhất là luốn phải cố gắng mỉm cười",
  "Khi yêu … sợ nhất là người ta vẫn nhận lời yêu nhưng trong trái tim của họ chưa bao giờ xuất hiện hình bóng của mình",
  "Thật đáng sợ nếu bỗng dưng một ngày mình thức dậy và nhận ra rằng mình không có ai và không còn điều gì để chờ đợi",
  "Tình yêu của anh nhẹ nhàng như gió, mong manh như nắng và để lại trong tim em “cay đắng ngút ngàn”",
  "Cố gắng để quên người mình yêu cũng giống như cách mà mình cố gắng nhớ một người chưa từng gặp",
  "Đôi khi chỉ một khoảng trống của anh để lại, mà cả thế giới ngoài kia cũng không thể lấp đầy khoảng trống đó trong tim em",
  "Cảm ơn ai đó đã vô tâm hời hợt để rồi tôi biết mình nên dừng lại ở đâu",
  "Lần cuối cùng em khóc vì anh. Em sẽ ngừng khóc và ngừng cả sự yêu thương",
  "Hạnh phúc thì chẳng được bao lâu mà nỗi đau thì in sâu không thể xóa",
  "Cái lạnh nhất không phải là khi mùa đông sang, mà là sự vô tâm hời hợt từ người mà bạn đã từng xem là tất cả",
  "Có những người mình yêu mà không thể gần được. Và cũng có những người yêu mình nhưng không thể ừ được",
  "Quá khó để bắt buộc ai đó phải yêu mình. Và càng khó hơn khi ép bản thân mình phải ngừng yêu ai đó",
  "Yêu một người không yêu mình giống như ôm một cây xương rồng, càng ôm chặt càng làm bản thân mình đau hơn",
  "Chỉ cần khoảng cách đủ xa, thời gian đủ lâu thì dù có quen thuộc đến thế nào cũng sẽ trở lên xa lạ",
  "Đôi khi ngủ rồi, nhưng tay vẫn nắm chặt điện thoại để chờ tin nhắn của ai đó, Và vội nhận ra… mình là gì của người ta đâu mà đợi",
  "Hãy nhớ rằng, đôi khi sự im lặng là câu trả lời hay nhất.",
  "Với thế giới, bạn chỉ là một hạt cát nhỏ – nhưng với một người nào đó, bạn là cả thế giới của họ.",
  "Người ta có thể quên đi điều bạn nói, nhưng những gì bạn để lại trong lòng họ thì không bao giờ nhạt phai",
  "Con người trở nên cô đơn vì trong cuộc đời, thay vì xây những chiếc cầu người ta lại xây những bức tường.",
  "Con người sinh ra không phải để tan biến đi như một hạt cát vô danh. Họ sinh ra để in dấu lại trên mặt đất, in dấu lại trong trái tim người khác.",
  "Đừng che dấu tình yêu và sự dịu dàng của mình cho đến khi bạn lìa đời. Hãy làm cuộc đời bạn tràn đầy sự ngọt ngào. Hãy nói những lời thân thương khi bạn còn nghe được và tim bạn còn rung động.",
  "Đừng nói mà hãy làm. Đừng huyên thuyên mà hãy hành động. Đừng hứa mà hãy chứng minh.",
  "Đừng bao giờ quyết định những vấn đề lâu dài trong lúc cảm xúc đang ngắn hạn.",
  "Hạnh phúc không có sẵn. Hạnh phúc xuất phát từ chính hành động của bạn.",
  "Hãy nhớ rằng mối quan hệ đẹp nhất là khi tình yêu thương bạn dành cho nhau vượt trên những nhu cầu đòi hỏi từ nhau.",
  "Thời gian là miễn phí nhưng nó vô giá. Bạn không thể sở hữu nó, nhưng bạn có thể sử dụng nó. Bạn có thể dùng nó, nhưng bạn không thể giữ nó. Một khi bạn làm mất nó, bạn sẽ không thể nào có lại được nó.",
  "Tuổi 18. Cái tuổi đã đủ để nhận thức về bản thân. Đủ để chịu trách nhiệm về những việc mình làm, đánh dấu sự trưởng thành trong tư tưởng lẫn nhân cách, là cả một tương lai đang chờ tôi bước đến.",
  "Nếu bạn thật sự quan trọng với một người, thì người đó sẽ luôn có thời gian dành cho bạn: không lý do, không dối trá và không thất hứa.",
  "Cảm ơn ai đó đã vô tâm hời hợt để rồi tôi biết mình nên dừng lại ở đâu.",
  "Lần cuối cùng em khóc vì anh. Em sẽ ngừng khóc và ngừng  cả sự yêu thương.",
];
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
  dngaybatdau = ngaybatdau.value;
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
document.getElementsByClassName("sli7")[0].addEventListener("click", () => {
  document.getElementsByClassName("event")[0].style.display = "block";
});
document.getElementsByClassName("sli5")[0].addEventListener("click", () => {
  profile = 0;
  localStorage.setItem("profile", JSON.stringify(profile));
  displayprofile();
  location.reload();
});
document.getElementsByClassName("sli6")[0].addEventListener("click", () => {
  document.getElementsByClassName("options-2")[0].style.display = "block";
  document.getElementsByClassName("options-3")[0].style.display = "none";
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
document.getElementById("huyevent2").addEventListener("click", () => {
  document
    .getElementsByClassName("options2-event")[0]
    .classList.toggle("active");
});
document.getElementById("huyevent3").addEventListener("click", () => {
  document
    .getElementsByClassName("options3-event")[0]
    .classList.toggle("active");
});
document.getElementsByClassName("addevent")[0].addEventListener("click", () => {
  document.getElementsByClassName("options-event")[0].style.display = "block";
});
document.getElementById("xacnhanevent").addEventListener("click", () => {
  if (document.getElementById("contentevent").value === "") {
    alert("không được bỏ trống nha");
  } else {
    data = document.getElementsByClassName("listevent")[0].innerHTML +=
      "<li>" + text.value + "</li>";
    arrdncd.push(text.value);
    document.getElementById("contentevent").value = "";
    localStorage.setItem("datadncd", JSON.stringify(data));
    localStorage.setItem("arrdncd", JSON.stringify(arrdncd));
  }
});
document.getElementById("xacnhanevent2").addEventListener("click", () => {
  if (document.getElementById("ngaybatdau2").value === "") {
    alert("không được bỏ trống nha");
  } else {
    dngaybatdau = document.getElementById("ngaybatdau2").value;
    document.getElementsByClassName("snbdcd")[0].innerText =
      new Date(ngaybatdau2.value).getDate() +
      "/" +
      (new Date(ngaybatdau2.value).getMonth() + 1) +
      "/" +
      new Date(ngaybatdau2.value).getFullYear();
    sngaybatdau = Date.parse(dngaybatdau) - 25200000;
    localStorage.setItem("dngaybatdau", JSON.stringify(dngaybatdau));
    localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
    document.getElementById("ngaybatdau2").value = "";
    displayprofile();
  }
});
document.getElementById("xacnhanevent3").addEventListener("click", () => {
  if (document.getElementById("stieude").value === "") {
    alert("không được bỏ trống nha");
  } else {
    dtieude = document.getElementById("stieude").value;
    document.getElementsByClassName("stitle")[0].innerText = dtieude;
    localStorage.setItem("dtieude", JSON.stringify(dtieude));
    displayprofile();
    document.getElementById("stieude").innerText === "";
  }
});
document
  .getElementsByClassName("clearevent")[0]
  .addEventListener("click", () => {
    data = document.getElementsByClassName("listevent")[0].innerHTML = "";
    document.getElementById("contentevent").value = "";
    localStorage.setItem("datadncd", JSON.stringify(data));
    localStorage.setItem("arrdncd", JSON.stringify(arrdncd));
  });
document
  .getElementsByClassName("exitevent")[0]
  .addEventListener("click", () => {
    document.getElementsByClassName("event")[0].style.display = "none";
  });

function displayprofile() {
  if (profile === 1) {
    if (dark === 1) {
      document.getElementsByClassName("lightoff")[0].style.display = "block";
      document.getElementsByClassName("lighton")[0].style.display = "none";
      dmhns = "#272727";
      document.getElementsByClassName("htitle")[0].style.color = "#fff";
      document.getElementsByClassName(
        "statuseveryday"
      )[0].style.backgroundColor = dmhns;
      document.getElementsByClassName("buttonstatus")[0].style.color = "#fff";
      for (j = 0; j <= 3; j++) {
        document.querySelectorAll(".datetime span")[j].style.color = "#fff";
      }
      for (
        k = 0;
        k <= document.querySelectorAll(".setting-option li").length - 1;
        k++
      ) {
        document
          .querySelectorAll(".setting-option li")
          [k].classList.add("dark");
      }
    } else {
      document.getElementsByClassName("lightoff")[0].style.display = "none";
      document.getElementsByClassName("lighton")[0].style.display = "block";
      dmhns = "#fff";
      document.getElementsByClassName("htitle")[0].style.color = "#272727";
      document.getElementsByClassName(
        "statuseveryday"
      )[0].style.backgroundColor = dmhns;
      document.getElementsByClassName("buttonstatus")[0].style.color = "red";
      for (j = 0; j <= 3; j++) {
        document.querySelectorAll(".datetime span")[j].style.color = "#272727";
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
    document.getElementsByClassName("container")[0].style.overflow = "hidden";
    document.getElementsByClassName("navigation")[0].style.display = "block";
    document.getElementsByClassName("profile")[0].style.display = "none";
    document.getElementsByClassName("main")[0].style.display = "block";
    document.getElementsByClassName("htitle")[0].innerText = dtieude;
    document.getElementsByClassName("dname")[0].innerText = sten;
    document.getElementsByClassName("dname")[1].innerText = sten;
    document.getElementsByClassName("imgavatar")[0].src = result;
    document.getElementsByClassName("imgavatar")[1].src = result;
    document.getElementsByClassName("dgioitinh")[0].innerText = sgt;
    document.getElementsByClassName("ntns")[0].innerText = dngaysinh;
    document.getElementsByClassName("stitle")[0].innerText = dtieude;
    document.getElementsByClassName("snbdcd")[0].innerText =
      new Date(dngaybatdau).getDate() +
      "/" +
      (new Date(dngaybatdau).getMonth() + 1) +
      "/" +
      new Date(dngaybatdau).getFullYear();
    document.getElementsByClassName("dstatus")[0].innerText = strangthai;
    document.getElementsByClassName(
      "container"
    )[0].style.backgroundColor = dmhns;
    document.getElementsByClassName("event")[0].style.backgroundColor = dmhns;
    document.getElementsByClassName("circle")[0].style.backgroundColor = dmhts;
    document.getElementById("stieude").value = dtieude;
    document.getElementById("ndt").value = info1;
    document.getElementById("ndd").value = info2;
    document.getElementsByClassName(
      "info1"
    )[0].innerText = document.getElementById("ndt").value;
    document.getElementsByClassName(
      "info2"
    )[0].innerText = document.getElementById("ndd").value;
    document.getElementsByClassName("contentstatuseveryday")[0].innerText =
      status_apps[orderstatus - 1];
    for (var j = 0; j <= 3; j++) {
      document.getElementsByClassName("heart")[j].style.backgroundColor = dmngs;
    }
    document.getElementsByClassName("listevent")[0].innerHTML = JSON.parse(
      localStorage.getItem("datadncd")
    );
    document.getElementsByClassName(
      "contentstatus"
    )[0].style.backgroundColor = dmtts;
    localStorage.setItem("dngaysinh", JSON.stringify(dngaysinh));
    localStorage.setItem("dngaybatdau", JSON.stringify(dngaybatdau));
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
document.getElementById("ngaybatdau2").max = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];
document.getElementsByClassName("select1")[0].addEventListener("click", () => {
  document.getElementsByClassName("content")[1].style.display = "block";
  document.getElementsByClassName("setting")[0].style.display = "none";
  document.getElementsByClassName("ssetting")[0].classList.remove("active");
  document.getElementsByClassName("scontent")[0].style.transform =
    "translateX(0%)";
});
document.getElementsByClassName("select2")[0].addEventListener("click", () => {
  document.getElementsByClassName("content")[1].style.display = "block";
  document.getElementsByClassName("setting")[0].style.display = "none";
  document.getElementsByClassName("ssetting")[0].classList.remove("active");
  document.getElementsByClassName("scontent")[0].style.transform =
    "translateX(-50%)";
});
document.getElementsByClassName("select3")[0].addEventListener("click", () => {
  document.getElementsByClassName("content")[1].style.display = "none";
  document.getElementsByClassName("setting")[0].style.display = "block";
  document.getElementsByClassName("ssetting")[0].classList.add("active");
});
document
  .getElementsByClassName("buttonstatus")[0]
  .addEventListener("click", () => {
    document
      .getElementsByClassName("statuseveryday")[0]
      .classList.toggle("active");
    document.getElementsByClassName("circle")[0].classList.toggle("active");
  });

function checkdark() {
  if (dark === 1) {
    dark = 0;
    localStorage.setItem("dark", JSON.stringify(dark));
  } else {
    dark = 1;
    localStorage.setItem("dark", JSON.stringify(dark));
  }
  displayprofile();
}
document.getElementsByClassName("sli1")[0].addEventListener("click", checkdark);
document.getElementsByClassName("sli2")[0].addEventListener("click", () => {
  document
    .getElementsByClassName("options3-event")[0]
    .classList.toggle("active");
});
document.getElementsByClassName("sli3")[0].addEventListener("click", () => {
  document
    .getElementsByClassName("options2-event")[0]
    .classList.toggle("active");
});
document.getElementsByClassName("sli4")[0].addEventListener("click", () => {
  document.getElementsByClassName("options-2")[0].style.display = "none";
  document.getElementsByClassName("options-3")[0].style.display = "block";
});
