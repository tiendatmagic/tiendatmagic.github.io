function chatday() {
  if (date.getDay() === 1 && date.getDay() === 6) {
    ans += "Hôm nay cuối tuần có muốn nói chuyện với chị không em " + uname;
  }
  if (date.getHours() >= 5 && date.getHours() < 11) {
    ans += "Chào buổi sáng nha em " + uname + "<br>";
    ans += "Hôm nay thế nào có chuyện gì vui hông nè";
    ("</li>");
  } else if (date.getHours() >= 11 && date.getHours() < 16) {
    ans += "Chào buổi trưa nha em " + uname;
  } else if (date.getHours() >= 16 && date.getHours() < 17) {
    ans += "Chào buổi chiều nha em " + uname;
  } else if (date.getHours() >= 17 && date.getHours() < 18) {
    ans += "Em sắp về chưa, tranh thủ về nhà còn ăn cơm tối nè em " + uname;
  } else if (date.getHours() >= 18 && date.getHours() < 20) {
    num = Math.ceil(Math.random() * 2);
    switch (num) {
      case 1:
        ans += "Ủa em hôm nay không coi thời sự hả";
        break;
      default:
        ans += "Chào buổi tối nha em " + uname;
        break;
    }
  } else if (date.getHours() >= 20 && date.getHours() < 22) {
    ans += "Tối rồi, tranh thủ làm gì làm đi rồi lát ngủ sớm nha em " + uname;
  } else if (date.getHours() >= 22 && date.getHours() < 24) {
    ans += "Thôi khuya rồi đó, chuẩn bị ngủ đi nha em " + uname;
  } else {
    ans += "Khuya rồi có chuyện gì mà chưa ngủ thế em " + uname;
  }
  message.innerHTML += "<li class='ans' >" + ans + "</li>";
}
