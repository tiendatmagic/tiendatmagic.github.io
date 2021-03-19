var inputt = document.getElementById("inputs");
var mang;
var an = 0;
var array = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var charArr;
document.getElementById("result").addEventListener("click", () => {
  if (inputt.value === "") {
    document.getElementById("img").value = "Không được bỏ trống nha 😁😁😁";
    document.getElementById("obj").value = "Không được bỏ trống nha 😁😁😁";
  } else {
    mang = inputt.value;
    charArr = mang.split(",");
    run();
  }
  if (document.getElementById("obj").value === "NaN") {
    document.getElementById("img").value = "Nhập tào lao, không hiểu kiểu gì";
    document.getElementById("obj").value = "Nhập tào lao, không hiểu kiểu gì";
  }
});

function run() {
  for (i = 0; i < charArr.length; i++) {
    array.push(Number(charArr[i]));
    if (array[i] === 0) {
      an += 1;
    }
    document.getElementById("img").value = array.length - an;
    document.getElementById("obj").value = array.reduce(reducer);
  }
  array = [];
  write();
  an = 0;
}
document.getElementById("img").addEventListener("click", () => {
  if (document.getElementById("obj").value !== "NaN" && inputt.value !== "") {
    var copyText = document.getElementById("img");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
});
document.getElementById("obj").addEventListener("click", () => {
  if (document.getElementById("obj").value !== "NaN" && inputt.value !== "") {
    var copyText = document.getElementById("obj");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
});
document.getElementById("history").addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = 'flex';
});
document.getElementsByClassName("close-notifications")[0].addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = 'none';
});