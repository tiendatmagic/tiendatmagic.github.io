var text = document.getElementById("img");
var text2 = document.getElementById("obj");
var dataanno = JSON.parse(localStorage.getItem("dataa"));
var arranno = JSON.parse(localStorage.getItem("arranno"));
if (arranno === null) {
  arranno = [];
}

document.getElementById("content-notifications").innerHTML = JSON.parse(localStorage.getItem("dataa"));

function write() {
  dataanno = document.getElementById("content-notifications").innerHTML += "<li>" + "Số ảnh:" + text.value + "," + " " + "Số obj:" + text2.value + "</li>";
  arranno.push(text.value);
  localStorage.setItem("dataa", JSON.stringify(dataanno));
  localStorage.setItem("arranno", JSON.stringify(arranno));
}
// if (dataanno !== null) {
//   for (i = 0; i < arranno.length; i++) {
//     document.getElementsByClassName("btnxoa")[i].addEventListener("click", function () {
//       localStorage.removeItem("dataa");
//       localStorage.removeItem("arranno");
//     });
//   }
// }
document.getElementsByClassName("deletehistory")[0].addEventListener("click", () => {
  localStorage.removeItem("dataa");
  localStorage.removeItem("arranno");
  document.getElementById("content-notifications").innerHTML = "";
});