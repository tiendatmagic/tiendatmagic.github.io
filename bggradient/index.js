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
    // getClass("box")[i].innerText = 'background-image:' + getClass("box")[i].style.backgroundImage
  }

  clickbox();
}
function clickbox() {
  for (i = 0; i < getClass("box").length; i++) {
    getClass("box")[i].onclick = function () {
      console.log(
        this.style.backgroundImage
      )
    }
  }
}
