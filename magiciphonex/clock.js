var d = new Date();
var date = new Date();
var current_day = date.getDay();
var day_name = '';
switch(current_day) {
	case 0:
		day_name = "Chủ nhật";
		break;
	case 1:
		day_name = "Thứ hai";
		break;
	case 2:
		day_name = "Thứ ba";
		break;
	case 3:
		day_name = "Thứ tư";
		break;
	case 4:
		day_name = "Thứ năm";
		break;
	case 5:
		day_name = "Thứ sau";
		break;
	case 6:
		day_name = "Thứ bảy";
}
var thang = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
document.getElementById("date").innerHTML = "Hôm nay: " + "<br>" + day_name + " " + "<br>" + "ngày " + d.getDate() + " " + "<br>" + "tháng " + thang[d.getMonth()] + " " + "<br>" + "Năm " + d.getFullYear();