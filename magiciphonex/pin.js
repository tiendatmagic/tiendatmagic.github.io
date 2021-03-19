let battery = document.getElementById("battery");
let pin = document.createElement('span');
let thoigian = document.createElement('span');
var statusbattery = 0;
battery.appendChild(pin);
battery.appendChild(thoigian);
setInterval(function () {
    navigator.getBattery().then(function (battery) {
        var batterylevel = battery.level * 100;
        var batterycharging = battery.charging;
        if (batterycharging === true) {

            $("#battery > span:nth-child(2)").text("Đang cắm sạc");
            $("body > div > div > div.screen > div.item-header > ul > li:nth-child(3) > div > img").show();
        } else {
            $("#battery > span:nth-child(2)").text("Chưa cắm sạc");
            $("body > div > div > div.screen > div.item-header > ul > li:nth-child(3) > div > img").hide();
        }
        //pin.innerHTML = "Pin : " + batterylevel + "%<br> ";
        $(pin).html("Pin : " + batterylevel + "%<br> ");

    });
}, 10);