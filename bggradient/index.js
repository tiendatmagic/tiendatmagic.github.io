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

var number = 0;
getId("apply").onclick = function () {
  var regex = /^[0-9]+$/;
  if (getId("inumber").value.match(regex)) {
    number = Number(getId("inumber").value);
  }
  else {
    alert("Không phải số, nhập lại đê");
  }
  createbox();
}

function createbox() {
  var listbox = ""


  for (i = 0; i < number; i++) {
    listbox += "<div class='box'></div>";

  }
  getId("displaybox").innerHTML = listbox;
  creategradient();

}
var arrcc = [];
function creategradient() {
  var arrc = [];
  arrcc = [];
  var arraycolor = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (j = 0; j < number * 2; j++) {
    for (i = 0; i < 6; i++) {
      arrc.push(arraycolor[Math.floor(Math.random() * arraycolor.length)]);
    }
    var arrj = arrc.join("");
    arrcc.push(arrj);
    arrc = [];

  }




  changecolorbox()
}
function changecolorbox() {
  for (i = 0; i < getClass("box").length; i++) {
    getClass("box")[i].style.backgroundImage = 'linear-gradient' + '(' + Math.floor(Math.random() * 180) + 'deg,' + '#' + arrcc[i] + ',' + '#' + arrcc[i + 1] + ')';
  }

  clickbox();
}
function clickbox() {
  for (i = 0; i < getClass("box").length; i++) {
    getClass("box")[i].onclick = function () {
      copyCode(this.style.cssText);
    }
  }
}

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "2000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
function copyCode(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  toastr.success('Sao chép thành công');
}

window.onload = function () {
  number = 100;
  createbox();
};
