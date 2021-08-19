function getId(id) {
  return document.getElementById(id);
}

function getClass(clss) {
  return document.getElementsByClassName(clss);
}

function getQuery(query) {
  return document.querySelector(query);
}

function getQueryAll(query) {
  return document.querySelectorAll(query);
}
const wrapper = getQuery(".wrapper");
const defaultBtn = getQuery("#default-btn");
const customBtn = getQuery("#custom-btn");
const cancelBtn = getQuery("#cancel-btn i");
const img = getQuery("img");
var result = JSON.parse(localStorage.getItem("result"));
if (result === null) {
  result = "";
}
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive() {
  defaultBtn.click();
}
getClass("image")[0].addEventListener("click", defaultBtnActive);
defaultBtn.addEventListener("change", insertimage);

function insertimage() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      result = reader.result;
      img.src = result;
      getId("imgavatar").src = result;
      localStorage.setItem("result", JSON.stringify(result));
      wrapper.classList.add("active");
      simg = 1;
    };
    reader.readAsDataURL(file);
  }
}
var ten = getId("ten");
var gioitinh = document.getElementsByName("gender");
var dtieude = JSON.parse(localStorage.getItem("dtieude"));
if (dtieude === null) {
  dtieude = "Đếm Ngày Cô Đơn";
}
var ngaysinh = getId("ngaysinh");
var dngaysinh = JSON.parse(localStorage.getItem("dngaysinh"));
if (dngaysinh === null) {
  dngaysinh = "";
}
var ngaybatdau = getId("ngaybatdau");
var dngaybatdau = JSON.parse(localStorage.getItem("dngaybatdau"));
if (dngaybatdau === null) {
  dngaybatdau = "";
}
var trangthai = getId("statuss");
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
  dmngs = "red";
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
var hiddentitle = JSON.parse(localStorage.getItem("hiddentitle"));
if (hiddentitle === null || hiddentitle === "") {
  hiddentitle = true;
}
var text = getId("contentevent");
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
var status_apps = ["Đau khổ nhất là khi yêu ai đó, thương ai đó mà không thể ở bên, không thể nói ra nỗi lòng của mình với người ấy", "Bây giờ tôi mới đau khổ nhận ra một sự thật là có những người chỉ có thể ở trong tim ta chứ không bao giờ có thể bước cùng ta đi đến cuối cuộc đời", "Đêm nay, đêm mai, đêm sau nữa ….. Tôi nhớ 1 người chưa từng nhớ tôi", "Nỗi buồn lớn nhất khi lúc nào cũng phải tỏ ra mình là người đang hạnh phúc. Nỗi đau lớn nhất là luốn phải cố gắng mỉm cười", "Khi yêu … sợ nhất là người ta vẫn nhận lời yêu nhưng trong trái tim của họ chưa bao giờ xuất hiện hình bóng của mình", "Thật đáng sợ nếu bỗng dưng một ngày mình thức dậy và nhận ra rằng mình không có ai và không còn điều gì để chờ đợi", "Tình yêu của anh nhẹ nhàng như gió, mong manh như nắng và để lại trong tim em “cay đắng ngút ngàn”", "Cố gắng để quên người mình yêu cũng giống như cách mà mình cố gắng nhớ một người chưa từng gặp", "Đôi khi chỉ một khoảng trống của anh để lại, mà cả thế giới ngoài kia cũng không thể lấp đầy khoảng trống đó trong tim em", "Cảm ơn ai đó đã vô tâm hời hợt để rồi tôi biết mình nên dừng lại ở đâu", "Lần cuối cùng em khóc vì anh. Em sẽ ngừng khóc và ngừng cả sự yêu thương", "Hạnh phúc thì chẳng được bao lâu mà nỗi đau thì in sâu không thể xóa", "Cái lạnh nhất không phải là khi mùa đông sang, mà là sự vô tâm hời hợt từ người mà bạn đã từng xem là tất cả", "Có những người mình yêu mà không thể gần được. Và cũng có những người yêu mình nhưng không thể ừ được", "Quá khó để bắt buộc ai đó phải yêu mình. Và càng khó hơn khi ép bản thân mình phải ngừng yêu ai đó", "Yêu một người không yêu mình giống như ôm một cây xương rồng, càng ôm chặt càng làm bản thân mình đau hơn", "Chỉ cần khoảng cách đủ xa, thời gian đủ lâu thì dù có quen thuộc đến thế nào cũng sẽ trở lên xa lạ", "Đôi khi ngủ rồi, nhưng tay vẫn nắm chặt điện thoại để chờ tin nhắn của ai đó, Và vội nhận ra… mình là gì của người ta đâu mà đợi", "Hãy nhớ rằng, đôi khi sự im lặng là câu trả lời hay nhất.", "Với thế giới, bạn chỉ là một hạt cát nhỏ – nhưng với một người nào đó, bạn là cả thế giới của họ.", "Người ta có thể quên đi điều bạn nói, nhưng những gì bạn để lại trong lòng họ thì không bao giờ nhạt phai", "Con người trở nên cô đơn vì trong cuộc đời, thay vì xây những chiếc cầu người ta lại xây những bức tường.", "Con người sinh ra không phải để tan biến đi như một hạt cát vô danh. Họ sinh ra để in dấu lại trên mặt đất, in dấu lại trong trái tim người khác.", "Đừng nói mà hãy làm. Đừng huyên thuyên mà hãy hành động. Đừng hứa mà hãy chứng minh.", "Độc thân không phải là ế mà là đang chờ người tử tế để yêu", "Đừng bao giờ quyết định những vấn đề lâu dài trong lúc cảm xúc đang ngắn hạn.", "Hạnh phúc không có sẵn. Hạnh phúc xuất phát từ chính hành động của bạn.", "Hãy nhớ rằng mối quan hệ đẹp nhất là khi tình yêu thương bạn dành cho nhau vượt trên những nhu cầu đòi hỏi từ nhau.", "Độc thân không đáng sợ … đáng sợ là đang yêu mà cảm giác như chỉ có một mình", "Thà sống một mình còn hơn là khi có ai đó bên cạnh mà vẫn cảm thấy cô đơn", "Nếu bạn thật sự quan trọng với một người, thì người đó sẽ luôn có thời gian dành cho bạn: không lý do, không dối trá và không thất hứa.", "Cảm ơn ai đó đã vô tâm hời hợt để rồi tôi biết mình nên dừng lại ở đâu.", "Lần cuối cùng em khóc vì anh. Em sẽ ngừng khóc và ngừng  cả sự yêu thương.",];

function alertDismissed() { }
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementsByTagName("body")[0].style.opacity = '1';
  }, 1000)
  displayprofile();
});
getId("submit").addEventListener("click", () => {
  sten = ten.value;
  localStorage.setItem("sten", JSON.stringify(sten));
  for (i = 0; i <= 2; i++) {
    if (gioitinh[i].checked) {
      sgt = gioitinh[i].value;
      localStorage.setItem("sgt", JSON.stringify(sgt));
    }
  }
  sngaysinh = Date.parse(ngaysinh.value);
  dngaysinh = new Date(ngaysinh.value).getDate() + "/" + (new Date(ngaysinh.value).getMonth() + 1) + "/" + new Date(ngaysinh.value).getFullYear();
  localStorage.setItem("sngaysinh", JSON.stringify(sngaysinh));
  sngaybatdau = Date.parse(ngaybatdau.value) - 25200000;
  localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
  dngaybatdau = ngaybatdau.value;
  strangthai = trangthai.value;
  localStorage.setItem("strangthai", JSON.stringify(strangthai));
  if (!sngaybatdau || !sngaysinh || sten == "" || sgt == "" || strangthai == "" || simg == 0) {
    navigator.notification.alert('Không được bỏ trống nha 😑', alertDismissed, 'Thông báo', 'OK');
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
getClass("sli5")[0].addEventListener("click", () => {
  profile = 0;
  localStorage.setItem("profile", JSON.stringify(profile));
  displayprofile();
  location.reload();
});
getClass("sli6")[0].addEventListener("click", () => {
  getClass("options-2")[0].classList.toggle("active");
  getClass("options-3")[0].classList.remove("active");
  getClass("options2-event")[0].classList.remove("active");
  getClass("options3-event")[0].classList.remove("active");
});
getClass("sli7")[0].addEventListener("click", () => {
  getClass("event")[0].style.display = "block";
});
getClass("sli8")[0].addEventListener("click", () => {
  cordova.plugins.market.open('com.tiendatmagic.demngaycodon');
});
getClass("dmht")[0].addEventListener("click", () => {
  getId("dmht").click();
});
getClass("dmng")[0].addEventListener("click", () => {
  getId("dmng").click();
});
getClass("dmtt")[0].addEventListener("click", () => {
  getId("dmtt").click();
});
getClass("huy")[0].addEventListener("click", () => {
  getClass("options-2")[0].classList.remove("active");
});
getId("xacnhan").addEventListener("click", () => {
  getClass("info1")[0].innerText = getId("ndt").value;
  getClass("info2")[0].innerText = getId("ndd").value;
  info1 = getId("ndt").value;
  localStorage.setItem("info1", JSON.stringify(info1));
  info2 = getId("ndd").value;
  localStorage.setItem("info2", JSON.stringify(info2));
  getClass("options-3")[0].classList.remove("active");
});
getId("huy").addEventListener("click", () => {
  getClass("options-3")[0].classList.remove("active");
});
getId("dmht").addEventListener("change", () => {
  dmhts = getId("dmht").value;
  getClass("circle")[0].style.backgroundColor = dmhts;
  localStorage.setItem("dmhts", JSON.stringify(dmhts));
});
getId("dmng").addEventListener("change", () => {
  dmngs = getId("dmng").value;
  for (var j = 0; j <= 3; j++) {
    getClass("heart")[j].style.setProperty('--after', dmngs)
  }
  localStorage.setItem("dmngs", JSON.stringify(dmngs));
});
getId("dmtt").addEventListener("change", () => {
  dmtts = getId("dmtt").value;
  getClass("contentstatus")[0].style.backgroundColor = dmtts;
  localStorage.setItem("dmtts", JSON.stringify(dmtts));
});
getId("huyevent2").addEventListener("click", () => {
  getClass("options2-event")[0].classList.toggle("active");
});
getId("declineevent3").addEventListener("click", () => {
  getClass("options3-event")[0].classList.toggle("active");
});
getId("xacnhanevent2").addEventListener("click", () => {
  if (getId("ngaybatdau2").value === "") {
    alert("không được bỏ trống nha");
  } else {
    dngaybatdau = getId("ngaybatdau2").value;
    getClass("snbdcd")[0].innerText = new Date(ngaybatdau2.value).getDate() + "/" + (new Date(ngaybatdau2.value).getMonth() + 1) + "/" + new Date(ngaybatdau2.value).getFullYear();
    sngaybatdau = Date.parse(dngaybatdau) - 25200000;
    localStorage.setItem("dngaybatdau", JSON.stringify(dngaybatdau));
    localStorage.setItem("sngaybatdau", JSON.stringify(sngaybatdau));
    getId("ngaybatdau2").value = "";
    displayprofile();
  }
});
getId("acceptevent2").addEventListener("click", () => {
  if (getId("stieude").value === "") {
    alert("không được bỏ trống nha");
  } else {
    dtieude = getId("stieude").value;
    getClass("stitle")[0].innerText = dtieude;
    localStorage.setItem("dtieude", JSON.stringify(dtieude));
    displayprofile();
    getId("stieude").innerText === "";
  }
});
getClass("exitevent")[0].addEventListener("click", () => {
  getClass("event")[0].style.display = "none";
});

function displayprofile() {
  if (profile === 1) {
    loaddark();
    getClass("container")[0].style.overflow = "hidden";
    getClass("navigation")[0].style.display = "block";
    getClass("profile")[0].style.display = "none";
    getClass("main")[0].style.display = "block";
    getClass("htitle")[0].innerText = dtieude;
    getClass("dname")[0].innerText = sten;
    getClass("dname")[1].innerText = sten;
    getClass("imgavatar")[0].src = result;
    getClass("imgavatar")[1].src = result;
    getClass("dgioitinh")[0].innerText = sgt;
    getClass("ntns")[0].innerText = dngaysinh;
    getClass("stitle")[0].innerText = dtieude;
    getClass("snbdcd")[0].innerText = new Date(dngaybatdau).getDate() + "/" + (new Date(dngaybatdau).getMonth() + 1) + "/" + new Date(dngaybatdau).getFullYear();
    getClass("dstatus")[0].innerText = strangthai;
    getClass("container")[0].style.backgroundColor = dmhns;
    getClass("event")[0].style.backgroundColor = dmhns;
    getClass("circle")[0].style.backgroundColor = dmhts;
    getId("stieude").value = dtieude;
    getId("ndt").value = info1;
    getId("ndd").value = info2;
    getClass("info1")[0].innerText = getId("ndt").value;
    getClass("info2")[0].innerText = getId("ndd").value;
    getClass("contentstatuseveryday")[0].innerText = status_apps[orderstatus - 1];
    for (var j = 0; j <= 3; j++) {
      getClass("heart")[j].style.setProperty('--after', dmngs)
    }
    getClass("contentstatus")[0].style.backgroundColor = dmtts;
    if (hiddentitle == true) {
      getClass("header")[0].classList.add("hidden");
      getClass("ssetting")[0].classList.add("height");
      getId("switch").checked = false;
    } else {
      getClass("header")[0].classList.remove("hidden");
      getClass("ssetting")[0].classList.remove("height");
      getId("switch").checked = true;
    }
    localStorage.setItem("dngaysinh", JSON.stringify(dngaysinh));
    localStorage.setItem("dngaybatdau", JSON.stringify(dngaybatdau));
    setInterval(() => {
      getClass("countday")[0].innerText = Math.floor(
        (new Date() - sngaybatdau) / 86400000);
      getClass("dage")[0].innerText = new Date().getFullYear() - new Date(sngaysinh).getFullYear();
      getClass("dngay")[0].innerText = Math.floor(
        (new Date() - sngaybatdau) / 86400000);
      getClass("dgio")[0].innerText = new Date().getHours();
      getClass("dphut")[0].innerText = new Date().getMinutes();
      getClass("dgiay")[0].innerText = new Date().getSeconds();
    }, 1000);
    switch (sgt) {
      case "Nam":
        {
          getClass("page")[0].style.backgroundColor = "#719cfa";
          break;
        }
      case "Nữ":
        {
          getClass("page")[0].style.backgroundColor = "pink";
          break;
        }
      default:
        {
          getClass("page")[0].style.backgroundColor = "#e6e6e6";
          break;
        }
    }
  } else {
    getClass("main")[0].style.display = "none";
  }
}
getId("ngaysinh").max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
getId("ngaybatdau").max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
getId("ngaybatdau2").max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
getClass("select1")[0].addEventListener("click", () => {
  getClass("content")[1].style.display = "block";
  getClass("setting")[0].style.display = "none";
  getClass("ssetting")[0].classList.remove("active");
  getClass("scontent")[0].style.transform = "translateX(0%)";
  getClass("content2")[0].classList.remove("active");
});
getClass("select2")[0].addEventListener("click", () => {
  getClass("content")[1].style.display = "block";
  getClass("setting")[0].style.display = "none";
  getClass("ssetting")[0].classList.remove("active");
  getClass("scontent")[0].style.transform = "translateX(-50%)";
});
getClass("select3")[0].addEventListener("click", () => {
  getClass("content")[1].style.display = "none";
  getClass("setting")[0].style.display = "block";
  getClass("ssetting")[0].classList.add("active");
  getClass("content2")[0].classList.add("active");
});
getClass("buttonstatus")[0].addEventListener("click", () => {
  getClass("statuseveryday")[0].classList.toggle("active");
  getClass("circle")[0].classList.toggle("active");
});

function loaddark() {
  if (dark === 1) {
    getClass("lightoff")[0].style.display = "block";
    getClass("lighton")[0].style.display = "none";
    dmhns = "#272727";
    getClass("htitle")[0].style.color = "#fff";
    getQuery("body > div > div.event > div.mainevent").style.color = "#fff";
    getClass("statuseveryday")[0].style.backgroundColor = dmhns;
    getClass("buttonstatus")[0].style.color = "#fff";
    for (l = 0; l < listArray.length; l++) {
      getQueryAll(".todoList li")[l].style.backgroundColor = "#fff";
      getQueryAll(".todoList li")[l].style.color = "#000";
    }
    for (j = 0; j <= 3; j++) {
      getQueryAll(".ndate")[j].style.color = "#fff";
    }
    for (k = 0; k <= getQueryAll(".setting-option li").length - 1; k++) {
      document.querySelectorAll(".setting-option li")[k].classList.add("dark");
    }
  } else {
    getClass("lightoff")[0].style.display = "none";
    getClass("lighton")[0].style.display = "block";
    dmhns = "#fff";
    getClass("htitle")[0].style.color = "#272727";
    getQuery("body > div > div.event > div.mainevent").style.color = "#272727";
    getClass("statuseveryday")[0].style.backgroundColor = dmhns;
    getClass("buttonstatus")[0].style.color = "red";
    for (l = 0; l < listArray.length; l++) {
      getQueryAll(".todoList li")[l].style.backgroundColor = "#ccc";
      getQueryAll(".todoList li")[l].style.color = "#fff";
    }
    for (j = 0; j <= 3; j++) {
      getQueryAll(".ndate")[j].style.color = "#272727";
    }
    for (k = 0; k <= getQueryAll(".setting-option li").length - 1; k++) {
      document.querySelectorAll(".setting-option li")[k].classList.remove("dark");
    }
  }
}

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
getClass("sli1")[0].addEventListener("click", checkdark);
getClass("sli2")[0].addEventListener("click", () => {
  getClass("options3-event")[0].classList.toggle("active");
  getClass("options2-event")[0].classList.remove("active");
  getClass("options-3")[0].classList.remove("active");
  getClass("options-2")[0].classList.remove("active");
});
getClass("sli3")[0].addEventListener("click", () => {
  getClass("options2-event")[0].classList.toggle("active");
  getClass("options3-event")[0].classList.remove("active");
  getClass("options-3")[0].classList.remove("active");
  getClass("options-2")[0].classList.remove("active");
});
getClass("sli4")[0].addEventListener("click", () => {
  getClass("options-3")[0].classList.toggle("active");
  getClass("options-2")[0].classList.remove("active");
  getClass("options2-event")[0].classList.remove("active");
  getClass("options3-event")[0].classList.remove("active");
});
const inputBox = getQuery(".inputField input");
const addBtn = getQuery(".inputField button");
const todoList = getQuery(".todoList");
const deleteAllBtn = getQuery(".footer button");
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value;
  if (userEnteredValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};
showTasks();
addBtn.onclick = () => {
  let userEnteredValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  if (userEnteredValue === "") {
    alert("không được bỏ trống");
  } else {
    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
  }
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = getQuery(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;
  if (listArray.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
  loaddark();
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}
deleteAllBtn.onclick = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
};
getId("switch").onclick = function () {
  if (getId("switch").checked) {
    getClass("header")[0].classList.remove("hidden");
    getClass("ssetting")[0].classList.remove("height");
    hiddentitle = false;
  } else {
    getClass("header")[0].classList.add("hidden");
    getClass("ssetting")[0].classList.add("height");
    hiddentitle = true;
  }
  localStorage.setItem("hiddentitle", JSON.stringify(hiddentitle));
}
document.onkeydown = function (t) {
  if (t.which == 9) {
    return false;
  }
}