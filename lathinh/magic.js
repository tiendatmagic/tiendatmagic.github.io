var check1 = "";
var check2 = "";
var c = 0;
var d = 0;
var a1 = 0;
var s1 = "";
var s2 = "";
var score = 0;
var time = 0;
var timeplay;
var bac = document.getElementsByClassName("back");
var fron = document.getElementsByClassName("front");
var boxx = document.getElementsByClassName("box")

var fasttime = JSON.parse(localStorage.getItem("fasttime"));
if (fasttime === null) {
    fasttime = 99999;
}

document.getElementsByClassName("time")[0].innerText = "Thời gian chơi: " + time;
document.getElementsByClassName("fasttime")[0].innerText = "Thời gian nhanh nhất: " + fasttime;
document.getElementsByClassName("btn-start")[0].addEventListener("click", function () {
    document.getElementById("maingame").style.display = "flex";
    this.style.display = "none";
    arrayy();
});
document.getElementsByClassName("btn-end")[0].addEventListener("click", function () {
    location.reload();
});
document.getElementsByClassName("btn-reload")[0].addEventListener("click", function () {
    location.reload();
});
for (var aaa = [], i = 0; i < 20; ++i) aaa[i] = i;

function shuffle(array) {
    var tmp,
        current,
        top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
}
arrr = shuffle(aaa);

bac[arrr.indexOf(1)].style.backgroundImage = "url('./img/css.png')";
bac[arrr.indexOf(1)].classList.add("css");
fron[arrr.indexOf(1)].classList.add("css");
boxx[arrr.indexOf(1)].classList.add("css");
bac[arrr.indexOf(2)].style.backgroundImage = "url('./img/css.png')";
bac[arrr.indexOf(2)].classList.add("css");
fron[arrr.indexOf(2)].classList.add("css");
boxx[arrr.indexOf(2)].classList.add("css");
bac[arrr.indexOf(3)].style.backgroundImage = "url('./img/jquery.png')";
bac[arrr.indexOf(3)].classList.add("jquery");
fron[arrr.indexOf(3)].classList.add("jquery");
boxx[arrr.indexOf(3)].classList.add("jquery");
bac[arrr.indexOf(4)].style.backgroundImage = "url('./img/jquery.png')";
bac[arrr.indexOf(4)].classList.add("jquery");
fron[arrr.indexOf(4)].classList.add("jquery");
boxx[arrr.indexOf(4)].classList.add("jquery");
bac[arrr.indexOf(5)].style.backgroundImage = "url('./img/nodejs.png')";
bac[arrr.indexOf(5)].classList.add("nodejs");
fron[arrr.indexOf(5)].classList.add("nodejs");
boxx[arrr.indexOf(5)].classList.add("nodejs");
bac[arrr.indexOf(6)].style.backgroundImage = "url('./img/nodejs.png')";
bac[arrr.indexOf(6)].classList.add("nodejs");
fron[arrr.indexOf(6)].classList.add("nodejs");
boxx[arrr.indexOf(6)].classList.add("nodejs");
bac[arrr.indexOf(7)].style.backgroundImage = "url('./img/js.png')";
bac[arrr.indexOf(7)].classList.add("js");
fron[arrr.indexOf(7)].classList.add("js");
boxx[arrr.indexOf(7)].classList.add("js");
bac[arrr.indexOf(8)].style.backgroundImage = "url('./img/js.png')";
bac[arrr.indexOf(8)].classList.add("js");
fron[arrr.indexOf(8)].classList.add("js");
boxx[arrr.indexOf(8)].classList.add("js");
bac[arrr.indexOf(9)].style.backgroundImage = "url('./img/angular.png')";
bac[arrr.indexOf(9)].classList.add("angular");
fron[arrr.indexOf(9)].classList.add("angular");
boxx[arrr.indexOf(9)].classList.add("angular");
bac[arrr.indexOf(10)].style.backgroundImage = "url('./img/angular.png')";
bac[arrr.indexOf(10)].classList.add("angular");
fron[arrr.indexOf(10)].classList.add("angular");
boxx[arrr.indexOf(10)].classList.add("angular");
bac[arrr.indexOf(11)].style.backgroundImage = "url('./img/php.png')";
bac[arrr.indexOf(11)].classList.add("php");
fron[arrr.indexOf(11)].classList.add("php");
boxx[arrr.indexOf(11)].classList.add("php");
bac[arrr.indexOf(12)].style.backgroundImage = "url('./img/php.png')";
bac[arrr.indexOf(12)].classList.add("php");
fron[arrr.indexOf(12)].classList.add("php");
boxx[arrr.indexOf(12)].classList.add("php");
bac[arrr.indexOf(13)].style.backgroundImage = "url('./img/python.png')";
bac[arrr.indexOf(13)].classList.add("python");
fron[arrr.indexOf(13)].classList.add("python");
boxx[arrr.indexOf(13)].classList.add("python");
bac[arrr.indexOf(14)].style.backgroundImage = "url('./img/python.png')";
bac[arrr.indexOf(14)].classList.add("python");
fron[arrr.indexOf(14)].classList.add("python");
boxx[arrr.indexOf(14)].classList.add("python");
bac[arrr.indexOf(15)].style.backgroundImage = "url('./img/sass.png')";
bac[arrr.indexOf(15)].classList.add("sass");
fron[arrr.indexOf(15)].classList.add("sass");
boxx[arrr.indexOf(15)].classList.add("sass");
bac[arrr.indexOf(16)].style.backgroundImage = "url('./img/sass.png')";
bac[arrr.indexOf(16)].classList.add("sass");
fron[arrr.indexOf(16)].classList.add("sass");
boxx[arrr.indexOf(16)].classList.add("sass");
bac[arrr.indexOf(17)].style.backgroundImage = "url('./img/html.png')";
bac[arrr.indexOf(17)].classList.add("html");
fron[arrr.indexOf(17)].classList.add("html");
boxx[arrr.indexOf(17)].classList.add("html");
bac[arrr.indexOf(18)].style.backgroundImage = "url('./img/html.png')";
bac[arrr.indexOf(18)].classList.add("html");
fron[arrr.indexOf(18)].classList.add("html");
boxx[arrr.indexOf(18)].classList.add("html");
bac[arrr.indexOf(19)].style.backgroundImage = "url('./img/reactjs.png')";
bac[arrr.indexOf(19)].classList.add("reactjs");
fron[arrr.indexOf(19)].classList.add("reactjs");
boxx[arrr.indexOf(19)].classList.add("reactjs");
bac[arrr.indexOf(0)].style.backgroundImage = "url('./img/reactjs.png')";
bac[arrr.indexOf(0)].classList.add("reactjs");
fron[arrr.indexOf(0)].classList.add("reactjs");
boxx[arrr.indexOf(0)].classList.add("reactjs");
function arrayy() {
    timeplay = setInterval(function () {
        document.getElementsByClassName("time")[0].innerText = "Thời gian chơi: " + time;
        time += 1;
    }, 1000);
}
boxx[0].addEventListener("click", function () {
    c += 1;
    d += 2 * 1;
    if (c === 1) {
        check1 = bac[0].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[0].style.backgroundImage;
    }
    if (d === 2 * 1 * 2) {
        c = 0;
        d = 0;
    }
    fron[0].style.display = "none";
    bac[0].style.display = "block";
    setTimeout(function () {
        fron[0].style.display = "block";
        bac[0].style.display = "none";
    }, 1000);
    checkk();
});
boxx[10].addEventListener("click", function () {
    c += 1;
    d += 2 * 11;
    if (c === 1) {
        check1 = bac[10].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[10].style.backgroundImage;
    }
    if (d === 2 * 11 * 2) {
        c = 0;
        d = 0;
    }
    fron[10].style.display = "none";
    bac[10].style.display = "block";
    setTimeout(function () {
        fron[10].style.display = "block";
        bac[10].style.display = "none";
    }, 1000);
    checkk();
});
boxx[1].addEventListener("click", function () {
    c += 1;
    d += 2 * 2;
    if (c === 1) {
        check1 = bac[1].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[1].style.backgroundImage;
    }
    if (d === 2 * 2 * 2) {
        c = 0;
        d = 0;
    }
    fron[1].style.display = "none";
    bac[1].style.display = "block";
    setTimeout(function () {
        fron[1].style.display = "block";
        bac[1].style.display = "none";
    }, 1000);
    checkk();
});
boxx[2].addEventListener("click", function () {
    c += 1;
    d += 2 * 3;
    if (c === 1) {
        check1 = bac[2].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[2].style.backgroundImage;
    }
    if (d === 2 * 3 * 2) {
        c = 0;
        d = 0;
    }
    fron[2].style.display = "none";
    bac[2].style.display = "block";
    setTimeout(function () {
        fron[2].style.display = "block";
        bac[2].style.display = "none";
    }, 1000);
    checkk();
});
boxx[3].addEventListener("click", function () {
    c += 1;
    d += 2 * 4;
    if (c === 1) {
        check1 = bac[3].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[3].style.backgroundImage;
    }
    if (d === 2 * 4 * 2) {
        c = 0;
        d = 0;
    }
    fron[3].style.display = "none";
    bac[3].style.display = "block";
    setTimeout(function () {
        fron[3].style.display = "block";
        bac[3].style.display = "none";
    }, 1000);
    checkk();
});
boxx[4].addEventListener("click", function () {
    c += 1;
    d += 2 * 5;
    if (c === 1) {
        check1 = bac[4].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[4].style.backgroundImage;
    }
    if (d === 2 * 5 * 2) {
        c = 0;
        d = 0;
    }
    fron[4].style.display = "none";
    bac[4].style.display = "block";
    setTimeout(function () {
        fron[4].style.display = "block";
        bac[4].style.display = "none";
    }, 1000);
    checkk();
});
boxx[5].addEventListener("click", function () {
    c += 1;
    d += 2 * 6;
    if (c === 1) {
        check1 = bac[5].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[5].style.backgroundImage;
    }
    if (d === 2 * 6 * 2) {
        c = 0;
        d = 0;
    }
    fron[5].style.display = "none";
    bac[5].style.display = "block";
    setTimeout(function () {
        fron[5].style.display = "block";
        bac[5].style.display = "none";
    }, 1000);
    checkk();
});
boxx[6].addEventListener("click", function () {
    c += 1;
    d += 2 * 7;
    if (c === 1) {
        check1 = bac[6].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[6].style.backgroundImage;
    }
    if (d === 2 * 7 * 2) {
        c = 0;
        d = 0;
    }
    fron[6].style.display = "none";
    bac[6].style.display = "block";
    setTimeout(function () {
        fron[6].style.display = "block";
        bac[6].style.display = "none";
    }, 1000);
    checkk();
});
boxx[7].addEventListener("click", function () {
    c += 1;
    d += 2 * 8;
    if (c === 1) {
        check1 = bac[7].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[7].style.backgroundImage;
    }
    if (d === 2 * 8 * 2) {
        c = 0;
        d = 0;
    }
    fron[7].style.display = "none";
    bac[7].style.display = "block";
    setTimeout(function () {
        fron[7].style.display = "block";
        bac[7].style.display = "none";
    }, 1000);
    checkk();
});
boxx[8].addEventListener("click", function () {
    c += 1;
    d += 2 * 9;
    if (c === 1) {
        check1 = bac[8].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[8].style.backgroundImage;
    }
    if (d === 2 * 9 * 2) {
        c = 0;
        d = 0;
    }
    fron[8].style.display = "none";
    bac[8].style.display = "block";
    setTimeout(function () {
        fron[8].style.display = "block";
        bac[8].style.display = "none";
    }, 1000);
    checkk();
});
boxx[9].addEventListener("click", function () {
    c += 1;
    d += 2 * 10;
    if (c === 1) {
        check1 = bac[9].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[9].style.backgroundImage;
    }
    if (d === 2 * 10 * 2) {
        c = 0;
        d = 0;
    }
    fron[9].style.display = "none";
    bac[9].style.display = "block";
    setTimeout(function () {
        fron[9].style.display = "block";
        bac[9].style.display = "none";
    }, 1000);
    checkk();
});
boxx[11].addEventListener("click", function () {
    c += 1;
    d += 2 * 12;
    if (c === 1) {
        check1 = bac[11].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[11].style.backgroundImage;
    }
    if (d === 2 * 12 * 2) {
        c = 0;
        d = 0;
    }
    fron[11].style.display = "none";
    bac[11].style.display = "block";
    setTimeout(function () {
        fron[11].style.display = "block";
        bac[11].style.display = "none";
    }, 1000);
    checkk();
});
boxx[12].addEventListener("click", function () {
    c += 1;
    d += 2 * 13;
    if (c === 1) {
        check1 = bac[12].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[12].style.backgroundImage;
    }
    if (d === 2 * 13 * 2) {
        c = 0;
        d = 0;
    }
    fron[12].style.display = "none";
    bac[12].style.display = "block";
    setTimeout(function () {
        fron[12].style.display = "block";
        bac[12].style.display = "none";
    }, 1000);
    checkk();
});
boxx[13].addEventListener("click", function () {
    c += 1;
    d += 2 * 14;
    if (c === 1) {
        check1 = bac[13].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[13].style.backgroundImage;
    }
    if (d === 2 * 14 * 2) {
        c = 0;
        d = 0;
    }
    fron[13].style.display = "none";
    bac[13].style.display = "block";
    setTimeout(function () {
        fron[13].style.display = "block";
        bac[13].style.display = "none";
    }, 1000);
    checkk();
});
boxx[14].addEventListener("click", function () {
    c += 1;
    d += 2 * 15;
    if (c === 1) {
        check1 = bac[14].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[14].style.backgroundImage;
    }
    if (d === 2 * 15 * 2) {
        c = 0;
        d = 0;
    }
    fron[14].style.display = "none";
    bac[14].style.display = "block";
    setTimeout(function () {
        fron[14].style.display = "block";
        bac[14].style.display = "none";
    }, 1000);
    checkk();
});
boxx[15].addEventListener("click", function () {
    c += 1;
    d += 2 * 16;
    if (c === 1) {
        check1 = bac[15].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[15].style.backgroundImage;
    }
    if (d === 2 * 16 * 2) {
        c = 0;
        d = 0;
    }
    fron[15].style.display = "none";
    bac[15].style.display = "block";
    setTimeout(function () {
        fron[15].style.display = "block";
        bac[15].style.display = "none";
    }, 1000);
    checkk();
});
boxx[16].addEventListener("click", function () {
    c += 1;
    d += 2 * 17;
    if (c === 1) {
        check1 = bac[16].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[16].style.backgroundImage;
    }
    if (d === 2 * 17 * 2) {
        c = 0;
        d = 0;
    }
    fron[16].style.display = "none";
    bac[16].style.display = "block";
    setTimeout(function () {
        fron[16].style.display = "block";
        bac[16].style.display = "none";
    }, 1000);
    checkk();
});
boxx[17].addEventListener("click", function () {
    c += 1;
    d += 2 * 18;
    if (c === 1) {
        check1 = bac[17].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[17].style.backgroundImage;
    }
    if (d === 2 * 18 * 2) {
        c = 0;
        d = 0;
    }
    fron[17].style.display = "none";
    bac[17].style.display = "block";
    setTimeout(function () {
        fron[17].style.display = "block";
        bac[17].style.display = "none";
    }, 1000);
    checkk();
});
boxx[18].addEventListener("click", function () {
    c += 1;
    d += 2 * 19;
    if (c === 1) {
        check1 = bac[18].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[18].style.backgroundImage;
    }
    if (d === 2 * 19 * 2) {
        c = 0;
        d = 0;
    }
    fron[18].style.display = "none";
    bac[18].style.display = "block";
    setTimeout(function () {
        fron[18].style.display = "block";
        bac[18].style.display = "none";
    }, 1000);
    checkk();
});
boxx[19].addEventListener("click", function () {
    c += 1;
    d += 2 * 20;
    if (c === 1) {
        check1 = bac[19].style.backgroundImage;
    }
    if (c === 2) {
        check2 = bac[19].style.backgroundImage;
    }
    if (d === 2 * 20 * 2) {
        c = 0;
        d = 0;
    }
    fron[19].style.display = "none";
    bac[19].style.display = "block";
    setTimeout(function () {
        fron[19].style.display = "block";
        bac[19].style.display = "none";
    }, 1000);
    checkk();
});
document.getElementsByClassName("front css")[0].addEventListener("click", function () {
    s1 = "css";
});
document.getElementsByClassName("front css")[1].addEventListener("click", function () {
    s2 = "css";
});
document.getElementsByClassName("front jquery")[0].addEventListener("click", function () {
    s1 = "jquery";
});
document.getElementsByClassName("front jquery")[1].addEventListener("click", function () {
    s2 = "jquery";
});
document.getElementsByClassName("front js")[0].addEventListener("click", function () {
    s1 = "js";
});
document.getElementsByClassName("front js")[1].addEventListener("click", function () {
    s2 = "js";
});
document.getElementsByClassName("front nodejs")[0].addEventListener("click", function () {
    s1 = "nodejs";
});
document.getElementsByClassName("front nodejs")[1].addEventListener("click", function () {
    s2 = "nodejs";
});
document.getElementsByClassName("front angular")[0].addEventListener("click", function () {
    s1 = "angular";
});
document.getElementsByClassName("front angular")[1].addEventListener("click", function () {
    s2 = "angular";
});
document.getElementsByClassName("front php")[0].addEventListener("click", function () {
    s1 = "php";
});
document.getElementsByClassName("front php")[1].addEventListener("click", function () {
    s2 = "php";
});
document.getElementsByClassName("front python")[0].addEventListener("click", function () {
    s1 = "python";
});
document.getElementsByClassName("front python")[1].addEventListener("click", function () {
    s2 = "python";
});
document.getElementsByClassName("front sass")[0].addEventListener("click", function () {
    s1 = "sass";
});
document.getElementsByClassName("front sass")[1].addEventListener("click", function () {
    s2 = "sass";
});
document.getElementsByClassName("front html")[0].addEventListener("click", function () {
    s1 = "html";
});
document.getElementsByClassName("front html")[1].addEventListener("click", function () {
    s2 = "html";
});
document.getElementsByClassName("front reactjs")[0].addEventListener("click", function () {
    s1 = "reactjs";
});
document.getElementsByClassName("front reactjs")[1].addEventListener("click", function () {
    s2 = "reactjs";
});

function checkk() {
    if (check1 !== check2 && c >= 2) {
        c = 0;
        d = 0;
    }
    if (check1 === check2 && c === 2) {
        check1 = "";
        check2 = "";
        c = 0;
        d = 0;
        if (s1 === s2 && s1 === "css") {
            document.getElementsByClassName("box css")[0].style.visibility = "hidden";
            document.getElementsByClassName("box css")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "jquery") {
            document.getElementsByClassName("box jquery")[0].style.visibility = "hidden";
            document.getElementsByClassName("box jquery")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "js") {
            document.getElementsByClassName("box js")[0].style.visibility = "hidden";
            document.getElementsByClassName("box js")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "nodejs") {
            document.getElementsByClassName("box nodejs")[0].style.visibility = "hidden";
            document.getElementsByClassName("box nodejs")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "php") {
            document.getElementsByClassName("box php")[0].style.visibility = "hidden";
            document.getElementsByClassName("box php")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "angular") {
            document.getElementsByClassName("box angular")[0].style.visibility = "hidden";
            document.getElementsByClassName("box angular")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "python") {
            document.getElementsByClassName("box python")[0].style.visibility = "hidden";
            document.getElementsByClassName("box python")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "sass") {
            document.getElementsByClassName("box sass")[0].style.visibility = "hidden";
            document.getElementsByClassName("box sass")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "html") {
            document.getElementsByClassName("box html")[0].style.visibility = "hidden";
            document.getElementsByClassName("box html")[1].style.visibility = "hidden";
            score += 1;
        }
        if (s1 === s2 && s1 === "reactjs") {
            document.getElementsByClassName("box reactjs")[0].style.visibility = "hidden";
            document.getElementsByClassName("box reactjs")[1].style.visibility = "hidden";
            score += 1;
        }
        if (score === 10) {
            alert("You win");
            savefasttime();
        }
    }
}

function savefasttime() {
    document.getElementsByClassName("modal")[0].style.display = "block";
    document.getElementsByClassName("time")[1].innerText = "Thời gian của bạn: " + time;
    clearInterval(timeplay);
    if (time < fasttime) {
        fasttime = time;
        document.getElementsByClassName("fasttime")[0].innerText = "Điểm: " + fasttime;
        document.getElementsByClassName("fasttime")[0].innerHTML = "Điểm cao nhất:" + fasttime;

        localStorage.setItem("fasttime", JSON.stringify(fasttime));


        document.getElementsByClassName("fasttime")[0].innerHTML = "Điểm cao nhất:" + fasttime;
    }
}