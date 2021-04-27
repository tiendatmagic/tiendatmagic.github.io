function answer() {
  {
    if (say.indexOf("chào") !== -1 && say.indexOf("em") !== -1) {
      ans = "xưng hô bằng chị nha";
    } else if (
      (say.search("hi") == 0 &&
        say.length < 10 &&
        say !== "hihi" &&
        say.length < 10) ||
      (say.search("hello") == 0 && say.length < 10) ||
      (say.search("chào") == 0 && say.length < 10) ||
      (say.search("chào") == 0 &&
        say.substr(0, 1) === "c" &&
        say.length < 10) ||
      (say.search("chào") == 0 && say.search("chị") == 0 && say.length < 10) ||
      (say.search("chào") !== -1 && say.search("buổi sáng") !== -1)
    ) {
      num = Math.ceil(Math.random() * 4);
      switch (num) {
        case 1:
          ans = "chào em" + " " + uname + " nha";
          break;
        case 2:
          ans = "hi em" + " " + uname;
          break;
        case 3:
          ans = "hello em" + " " + uname;
          break;
        default:
          ans = "ừ, sao đó";
          break;
      }
    } else if (say.indexOf("bao nhiêu tuổi") !== -1) {
      ans = "chị" + " " + (date.getFullYear() - 1998) + " " + "tuổi";
    } else if (
      (say.indexOf("làm gì") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("bận") !== -1 && say.indexOf("gì") !== -1)
    ) {
      if (date.getHours() >= 23) {
        ans = "Chị đang ngủ mà em";
      } else {
        num = Math.ceil(Math.random() * 4);
        switch (num) {
          case 1:
            ans = "Chị đang làm chút việc thôi";
            break;
          case 2:
            ans = "Chị hơi bận chút";
            break;
          case 3:
            ans = "Mắc chút việc thôi em";
            break;
          default:
            ans = "chị đang bận";
            break;
        }
      }
    } else if (say.indexOf("việc gì") !== -1 && say.indexOf("chị") !== -1) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "À chị làm chút việc đó mà";
          break;
        case 2:
          ans = "Cũng không có gì, chỉ là đang làm chút";
          break;
        default:
          ans = "Chuyện nhỏ xong ngay ấy mà, không có gì đâu";
          break;
      }
    } else if (say.indexOf("hừm") !== -1 || say.search("hừ") !== -1) {
      ans = "sao thế";
    } else if (say.indexOf("thích ăn") !== -1) {
      ans = "chị thích ăn mì";
    } else if (say.indexOf("thích màu") !== -1) {
      ans = "chị thích màu vàng";
    } else if (say.indexOf("thích hoa") !== -1) {
      ans = "chị thích hoa hồng";
    } else if (say.indexOf("chị") !== -1 && say.indexOf("thích gì") !== -1) {
      ans = "gì chị cũng thích hết";
    } else if (
      say.indexOf("em") !== -1 &&
      say.indexOf("tên") !== -1 &&
      say.indexOf("ì") !== -1
    ) {
      ans = "em tên là " + uname;
    } else if (
      say.indexOf("chị") !== -1 &&
      say.indexOf("tên") !== -1 &&
      say.indexOf("ì") !== -1
    ) {
      ans = "chị tên Tú";
    } else if (
      say.indexOf("bồ chưa") !== -1 ||
      say.indexOf("ny chưa") !== -1 ||
      say.indexOf("crush chưa") !== -1 ||
      say.indexOf("bạn trai chưa") !== -1 ||
      say.indexOf("người yêu chưa") !== -1
    ) {
      ans = "chị không nói ra đâu, hihi";
    } else if (say.indexOf("hỏi gì") !== -1) {
      ans = "em hỏi chị gì cũng được";
    } else if (
      (say.indexOf("mấy giờ") !== -1 && say.indexOf("ngủ") !== -1) ||
      (say.indexOf("khi nào") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("ngủ") !== -1)
    ) {
      ans = "11h em";
    } else if (say.indexOf("em đói") !== -1) {
      ans = "chị hôm nay không mang gì cho em ăn nữa";
    } else if (say.indexOf("ở lại") !== -1) {
      ans = "thôi, chị đói";
    } else if (say.indexOf("xinh thế") !== -1) {
      ans = "chị không biết nói sao luôn";
    } else if (
      (say.indexOf("xinh ghê") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("thích") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("em") !== -1) ||
      (say.indexOf("yêu") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("hông") === -1) ||
      say.indexOf("xinh đẹp") !== -1 ||
      say.indexOf("đẹp quá") !== -1 ||
      say.indexOf("thương chị") !== -1 ||
      (say.indexOf("chị") !== -1 &&
        say.indexOf("giỏi") !== -1 &&
        say.indexOf("hông") === -1) ||
      (say.indexOf("dễ thương") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("hông") === -1) ||
      (say.indexOf("chị") !== -1 && say.indexOf("thông minh") !== -1)
    ) {
      num = Math.ceil(Math.random() * 4);
      switch (num) {
        case 1:
          ans = "thôi, khen chị mãi dị 😂";
          break;
        case 2:
          ans = "cảm ơn, khen miết hà";
          break;
        case 3:
          ans = "thôi đi em, khen chị miết dị";
          break;
        default:
          ans = "cảm ơn em, khen chị hoài";
          break;
      }
    } else if (
      say.indexOf("ngày tháng") !== -1 ||
      (say.indexOf("hôm nay") !== -1 && say.indexOf("ngày") !== -1) ||
      say.indexOf("ngày giờ") !== -1
    ) {
      ans =
        "Hôm nay là:" +
        " ngày " +
        date.getDate() +
        " tháng " +
        date.getMonth() +
        " năm " +
        date.getFullYear();
    } else if (
      (say.indexOf("nhà") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("ở đâu") !== -1) ||
      (say.indexOf("chị") !== -1 && say.indexOf("ở đâu") !== -1)
    ) {
      ans = "nha trang em";
    } else if (say.indexOf("chị") !== -1 && say.indexOf("sinh năm") !== -1) {
      ans = "1998 em";
    } else if (
      (say.indexOf("chị") !== -1 && say.indexOf("sinh ngày") !== -1) ||
      say.indexOf("sinh nhật") !== -1
    ) {
      ans = "1/1/1998, không biết đúng không nữa";
    } else if (say.indexOf("chị") !== -1 && say.indexOf("nam hay nữ") !== -1) {
      ans = "nữ";
    } else if (
      say.indexOf("chị") !== -1 &&
      say.indexOf("uống") !== -1 &&
      say.indexOf("hông") !== -1
    ) {
      ans = "chị hay uống trà sữa nè, những nước khác chị ít uống lắm";
    } else if (
      (say.indexOf("chị") !== -1 && say.indexOf("học trường") !== -1) ||
      say.indexOf("học đại học") !== -1
    ) {
      ans = "chị học đại học nha trang";
    } else if (say.indexOf("chị") !== -1 && say.indexOf("học") !== -1) {
      ans = "chị ra trường rồi em";
    } else if (say.indexOf("kì") !== -1 && say.indexOf("á") !== -1) {
      ans = "có gì đâu mà kì";
    } else if (
      say.indexOf("số điện thoại") !== -1 &&
      say.indexOf("chị") !== -1
    ) {
      ans = "chị không cho đâu";
    } else if (
      (say.indexOf("chị ") !== -1 &&
        say.indexOf("bài tập") !== -1 &&
        say.indexOf("em")) ||
      (say.indexOf("chị ") !== -1 &&
        say.indexOf("bài") !== -1 &&
        (say.indexOf("giúp") !== -1 || say.indexOf("giùm") !== -1) &&
        say.indexOf("em"))
    ) {
      ans =
        "bài tập em tự làm đi, hoặc em có thể thử: <a href='https://vietjack.com'> Thử dùng vietjack</a><a href='https://www.google.com'> Thử dùng google</a>";
    } else if (
      (say.indexOf("xem") || say.indexOf("biết")) &&
      say.indexOf("thời tiết") !== -1
    ) {
      ans = "chị không biết được em à";
    } else if (
      say.indexOf("chị ") !== -1 &&
      say.indexOf("khỏe") !== -1 &&
      say.indexOf("hông")
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "chị vẫn khỏe";
          break;
        case 2:
          ans = "chị bình thường á";
          break;
        default:
          ans = "vẫn khỏe chứ, còn em thì sao";
          break;
      }
    } else if (say.indexOf("ổn chứ") !== -1 && say.indexOf("chị") !== -1) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "ừm, chị vẫn ổn";
          break;
        default:
          ans = "ổn chứ nè, còn em sao";
          break;
      }
    } else if (say.indexOf("thế nào") !== -1 && say.indexOf("chị") !== -1) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "chị vẫn ổn";
          break;
        default:
          ans = "chị không sao cả";
          break;
      }
    } else if (
      (say.indexOf("sao") !== -1 &&
        say.indexOf("tại") === -1 &&
        say.indexOf("ạ") !== -1 &&
        say.length < 12) ||
      (say.indexOf("sao") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.length < 12)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "chị không sao";
          break;
        case 2:
          ans = "không sao đâu em";
          break;
        default:
          ans = "thôi không có gì đâu";
          break;
      }
    } else if (say.indexOf("đi ngủ") !== -1 || say.indexOf("ngủ ngon") !== -1) {
      if (date.getHours() >= 22) {
        num = Math.ceil(Math.random() * 4);
        switch (num) {
          case 1:
            ans = "ok, chúc em ngủ ngon";
            break;
          case 2:
            ans = "cảm ơn em, ngủ đi nè";
            break;
          case 3:
            ans = "em ngủ trước đi nè";
            break;
          default:
            ans = "ừm, em cũng vậy nha";
            break;
        }
      } else {
        ans = "Ủa còn sớm mà em";
      }
    } else if (say.indexOf("chị") !== -1 && say.indexOf("ngủ") !== -1) {
      if (date.getHours() >= 22 && date.getHours() <= 5) {
        num = Math.ceil(Math.random() * 2);
        switch (num) {
          case 1:
            ans = "giờ chị đang ngủ nè";
            break;
          default:
            ans = "chị đang ngủ nè em";
            break;
        }
      } else {
        num = Math.ceil(Math.random() * 2);
        switch (num) {
          case 1:
            ans = "chị chưa ngủ nè";
            break;
          default:
            ans = "ủa còn sớm mà em";
            break;
        }
      }
    } else if (
      (say.indexOf("sao") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("nhợt") !== -1) ||
      (say.indexOf("sao") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("mệt") !== -1 &&
        say.indexOf("thiếu ngủ") !== -1)
    ) {
      ans = "do không son môi đó em";
    } else if (
      (say.indexOf("chị") !== -1 && say.indexOf("xấu") !== -1) ||
      (say.indexOf("chị") !== -1 && say.indexOf("kém xinh") !== -1) ||
      (say.indexOf("chị") !== -1 && say.indexOf("không xinh") !== -1)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "em nói chị xấu hả";
          break;
        case 2:
          ans = "thôi nha, chị xấu kệ chị";
          break;
        default:
          ans = "kệ chị đi nha";
          break;
      }
    } else if (
      (say.indexOf("chửi") !== -1 && say.indexOf("em") !== -1) ||
      (say.indexOf("chửi") !== -1 && say.indexOf("chị") !== -1)
    ) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "Chị không khi nào chửi em hết nè, mà em đừng có chửi chị nha";
          break;
        default:
          ans = "Không khi nào chị chửi em hết, em cũng đừng vậy nha";
          break;
      }
    } else if (
      say.indexOf("ghét") !== -1 &&
      say.indexOf("chị") !== -1 &&
      say.indexOf("gì") !== -1
    ) {
      ans = "thứ chị ghét nhất là chị sợ lỗ đó em";
    } else if (
      say.indexOf("sợ") !== -1 &&
      say.indexOf("chị") !== -1 &&
      say.indexOf("gì") !== -1
    ) {
      ans = "chị sợ nhất là bị tổn thương";
    } else if (
      say.indexOf("ai") !== -1 &&
      say.indexOf("tạo") !== -1 &&
      say.indexOf("chị") !== -1
    ) {
      ans =
        "Tiendatmagic, link facebook:<a href='https://www.facebook.com/tiendatmagic'> Đây em</a>";
    } else if (
      (say.indexOf("sợ quá") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("sợ quá") !== -1 && say.length < 7) ||
      say.indexOf("em sợ") !== -1
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "can đảm lên em, đừng sợ";
          break;
        case 2:
          ans = "sao phải sợ nè, cố lên chứ";
          break;
        default:
          ans = "thôi không có gì phải sợ đâu";
          break;
      }
    } else if (say.indexOf("xem ảnh") !== -1 && say.indexOf("chị") !== -1) {
      ans = "ok em, ảnh chị nè, mà chị hông cho đâu";
    } else if (
      say.indexOf("không đi làm") !== -1 &&
      say.indexOf("chị") !== -1
    ) {
      if (date.getDay() !== 1 && date.getDay() !== 6) {
        ans = "hôm nay nghỉ mà em";
      } else {
        num = Math.ceil(Math.random() * 2);
        switch (num) {
          case 1:
            ans = "đâu có";
            break;
          default:
            ans = "chị vẫn làm mà";
            break;
        }
      }
    } else if (
      say.indexOf("trước") !== -1 &&
      say.indexOf("chị") !== -1 &&
      say.indexOf("làm") !== -1
    ) {
      ans = "chị làm nhiều việc lắm";
    } else if (
      (say.indexOf("em") !== -1 &&
        say.indexOf("dễ thương") !== -1 &&
        say.indexOf("hông") !== -1) ||
      (say.indexOf("em") !== -1 &&
        say.indexOf("đẹp") !== -1 &&
        say.indexOf("hông") !== -1)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "thì có";
          break;
        case 2:
          ans = "chắc có á em hihi";
          break;
        default:
          ans = "có chứ";
          break;
      }
    } else if (
      say.indexOf("chị biết em") !== -1 ||
      (say.indexOf("em") !== -1 && say.indexOf("là ai") !== -1)
    ) {
      ans = "Em là em của chị đó, " + uname + "😘";
    } else if (say.indexOf("chị là ai") !== -1) {
      ans = "Chị là chị gái của em đây " + uname + "😘";
    } else if (
      (say.indexOf("chị ") !== -1 && say.indexOf("ngu") !== -1) ||
      (say.indexOf("chị ") !== -1 && say.indexOf("ngốc") !== -1)
    ) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "coi lại bản thân em đi mà nói chị ngu";
          break;
        default:
          ans = "em tự xem lại mình đi, em ngu á";
          break;
      }
    } else if (say.indexOf("chị ") !== -1 && say.indexOf("chết") !== -1) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "100 năm nữa em nhé";
          break;
        case 2:
          ans = "chị bất tử rồi em nhé";
          break;
        default:
          ans = "khi nào em chết trước chị thì lúc đó chị chết 🤣";
          break;
      }
    } else if (
      say.indexOf("chị") !== -1 &&
      say.indexOf("nhiêu") !== -1 &&
      say.indexOf("tiền") !== -1
    ) {
      ans = "chị làm gì có tiền hả em";
    } else if (
      (say.indexOf("điên") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("khùng") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("ngáo") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("thần kinh") !== -1 && say.indexOf("chị") !== -1)
    ) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "em bị điên thì có";
          break;
        default:
          ans = "em bị khùng thì có";
          break;
      }
    } else if (
      (say.indexOf("gặp") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("hông") !== -1) ||
      (say.indexOf("rủ") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("hông") !== -1) ||
      (say.indexOf("mời") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("hông") !== -1)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "có thể khi nào chị rảnh thì đi";
          break;
        case 2:
          ans = "nếu được thì chị đi";
          break;
        default:
          ans = "chi thế, nếu được thì em rủ mọi người cùng đi";
          break;
      }
    } else if (say.indexOf("nhớ") !== -1 && say.indexOf("chị") !== -1) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "hi có gì đâu mà nhớ nè";
          break;
        case 2:
          ans = "hi dạo này sao rồi nè";
          break;
        default:
          ans = "chị cũng nhớ em nè, em dạo này vẫn ổn chứ";
          break;
      }
    } else if (say.indexOf("chơi game") !== -1 && say.indexOf("chị") !== -1) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "hông nha em, chị không chơi";
          break;
        case 2:
          ans = "không em ơi";
          break;
        default:
          ans = "hông nha, chị hông có chơi game";
          break;
      }
    } else if (
      (say.indexOf("biết hát") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("có hát") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("biết chơi") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("có chơi") !== -1 && say.indexOf("chị") !== -1)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "có nha em, chị rất thích";
          break;
        case 2:
          ans = "có em ơi";
          break;
        default:
          ans = "có nha, sao nè";
          break;
      }
    } else if (
      (say.indexOf("phần trăm") !== -1 && say.indexOf("pin") !== -1) ||
      (say.indexOf("thông tin") !== -1 && say.indexOf("pin") !== -1) ||
      (say.indexOf("thời lượng") !== -1 && say.indexOf("pin") !== -1) ||
      (say.indexOf("trạng thái") !== -1 && say.indexOf("pin") !== -1)
    ) {
      navigator.getBattery().then(function (battery) {
        var batterylevel = battery.level * 100;
        var batterycharging = battery.charging;
        if (batterycharging === true) {
          st = "đang cắm sạc";
        } else {
          st = "chưa cắm sạc";
        }
        pin = Number(batterylevel);
        message.innerHTML +=
          "<li class='ans' >" +
          "Phần trăm pin: " +
          pin +
          "%" +
          "</li><li class='ans' >" +
          "Trạng thái pin: " +
          st +
          "</li>";
        loaddark();
      });
      ans = "thông tin về pin nè";
    } else if (
      (say.indexOf("chị") !== -1 &&
        say.indexOf("ăn") !== -1 &&
        say.indexOf("chưa") !== -1) ||
      (say.indexOf("chị") !== -1 &&
        say.indexOf("ăn") !== -1 &&
        say.indexOf("hông") !== -1)
    ) {
      if (
        (date.getHours() >= 11 && date.getHours() < 13) ||
        (date.getHours() >= 17 && date.getHours() < 19)
      )
        ans = "chị đang ăn nè em";
      else {
        ans = "chưa tới giờ ăn mà em";
      }
    } else if (
      say.indexOf("chị") !== -1 &&
      say.indexOf("ăn") !== -1 &&
      say.indexOf("mấy giờ") !== -1
    ) {
      if (date.getHours() > 11 && date.getHours() < 6) {
        ans = "chị đang ngủ em ơi, tí chị mới ăn";
      } else if (date.getHours() >= 6 && date.getHours() < 11) {
        ans = "11h30 trưa";
      } else if (date.getHours() >= 11 && date.getHours() < 17) {
        ans = "17h30 trưa";
      } else {
        ans = "thôi tối rồi chị không ăn sợ mập";
      }
    } else if (
      say.indexOf("em") !== -1 &&
      say.indexOf("xin") !== -1 &&
      say.indexOf("lỗi") !== -1 &&
      say.indexOf("chị") !== -1
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "ừm em biết lỗi thế là tốt";
          break;
        case 2:
          ans = "không sao đâu, lần sau hãy rút kinh nghiệm";
          break;
        default:
          ans = "ừ em biết lỗi là tốt rồi";
          break;
      }
    } else if (say.indexOf("em") !== -1 && say.indexOf("mất") !== -1) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "thôi em đừng buồn nữa nè";
          break;
        case 2:
          ans = "thôi chuyện qua rồi, em đừng buồn nha";
          break;
        default:
          ans = "thôi lỡ rồi, đừng buồn nữa nha em";
          break;
      }
    } else if (say.indexOf("em") !== -1 && say.indexOf("mệt") !== -1) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "mệt thì em nghỉ sớm đi nè";
          break;
        case 2:
          ans = "thôi em ráng giữ gìn sức khỏe đi nha";
          break;
        default:
          ans = "mệt thì nghỉ ngơi sớm đi em";
          break;
      }
    } else if (say.indexOf("em") !== -1 && say.indexOf("buồn") !== -1) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "buồn thì vui lên đi em";
          break;
        case 2:
          ans = "sao có chuyện gì kể chị nghe";
          break;
        default:
          ans = "thôi đừng buồn nữa nè";
          break;
      }
    } else if (
      (say.indexOf("em") !== -1 && say.indexOf("không được vui") !== -1) ||
      say.indexOf("không được vui") !== -1
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "thôi nè đừng buồn nữa, chuyện đã qua rồi";
          break;
        case 2:
          ans = "đừng buồn nữa nha em, vui lên đi";
          break;
        default:
          ans = "thôi em đừng buồn nữa nha";
          break;
      }
    } else if (say.indexOf("em") !== -1 && say.indexOf("vui") !== -1) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "ừm, em vui chị cũng vui";
          break;
        default:
          ans = "đúng rồi nè, phải vui lên chứ";
          break;
      }
    } else if (
      say.indexOf("cho") !== -1 &&
      say.indexOf("em") !== -1 &&
      say.indexOf("xin") !== -1 &&
      say.indexOf("lỗi") === -1
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "Thôi em chị không có gì để cho cả";
          break;
        case 2:
          ans = "chị có gì đâu mà cho";
          break;
        default:
          ans = "chị không có gì cho em nhé";
          break;
      }
    } else if (
      (say.indexOf("có tiền không") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("chị") !== -1 && say.indexOf("vay tiền") !== -1) ||
      (say.indexOf("em") !== -1 && say.indexOf("mượn tiền") !== -1) ||
      (say.indexOf("chị") !== -1 && say.indexOf("mượn tiền") !== -1)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "chi vậy, chị không có tiền đâu";
          break;
        case 2:
          ans = "chị cũng không có tiền";
          break;
        default:
          ans = "không em nhé";
          break;
      }
    } else if (
      say.indexOf("hehe") !== -1 ||
      say.indexOf("haha") !== -1 ||
      say === "hihi"
    ) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "hehe";
          break;
        default:
          ans = "haha";
          break;
      }
    } else if (say.indexOf(uname) !== -1 && say.indexOf("là ai") !== -1) {
      ans = uname + " là em trai của chị đó";
    } else if (say.indexOf("ok chị") !== -1 && say.indexOf("ok") !== -1) {
      ans = "ok em";
    } else if (
      (say.indexOf("sao") !== -1 &&
        say.indexOf("chị") !== -1 &&
        say.indexOf("mệt") !== -1) ||
      say.indexOf("bệnh") !== -1 ||
      say.indexOf("ốm") !== -1
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "Chị hôm nay không được khỏe ";
          break;
        case 2:
          ans = "Cảm ơn em đã quan tâm, hôm nay chị mệt";
          break;
        default:
          ans = "Chị bệnh rồi em";
          break;
      }
    } else if (
      say.indexOf("mở") !== -1 &&
      say.indexOf("map") !== -1 &&
      say.length < 25
    ) {
      ans = "Chị mở map cho em rồi đó";
      window.open("https://www.google.com/maps");
    } else if (say.indexOf("mở gmail") !== -1 && say.length < 16) {
      ans = "Chị mở gmail cho em rồi đó";
      window.open("http://www.gmail.com");
    } else if (say.indexOf("mở mail") !== -1 && say.length < 16) {
      ans = "Chị mở mail cho em rồi đó";
      location.href = "mailto:";
    } else if (say.indexOf("mở youtube") !== -1 && say.length < 20) {
      ans = "Chị mở youtube cho em rồi đó";
      window.open("http://www.youtube.com");
    } else if (say.indexOf("mở facebook") !== -1 && say.length < 20) {
      ans = "Chị mở facebook cho em rồi đó";
      window.open("http://www.facebook.com");
    } else if (say.indexOf("mở máy tính") !== -1 && say.length < 13) {
      ans = "Chị mở máy tính cho em rồi đó";
      window.open("http://tiendatmagic.github.io/maytinhanno");
    } else if (say.indexOf("mở google") !== -1 && say.length < 15) {
      ans = "Chị mở google cho em rồi đó";
      window.open("http://www.google.com");
    } else if (say.indexOf("nà") !== -1 && say.length < 3) {
      ans = "hihi";
    } else if (say.indexOf("chị") !== -1 && say.indexOf("cười") !== -1) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "hehe 😁";
          break;
        default:
          ans = "haha 😁";
          break;
      }
    } else if (say.indexOf("mấy giờ") !== -1) {
      ans =
        "Bây giờ là: " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
    } else if (
      (say.indexOf("phải không") !== -1 && say.length >= 12) ||
      say.indexOf("đúng không") !== -1
    ) {
      ans = "sao chị biết được";
    } else if (say.indexOf("đâu") !== -1 && say.substr(-3) === "đâu") {
      ans = "Đâu là đâu em";
    } else if (
      say.indexOf("tại sao") !== -1 &&
      say.length < 10 &&
      say.substr(0, 3) === "tại"
    ) {
      ans = "tại chị thích ";
    } else if (say.indexOf("sao") !== -1 && say.length <= 7) {
      ans = "sao là sao em";
    } else if (
      (say.indexOf("gì") !== -1 &&
        say.length <= 12 &&
        say.substr(-2) === "gì") ||
      (say.indexOf("chưa") !== -1 &&
        say.length <= 7 &&
        say.substr(-4) === "chưa") ||
      (say.indexOf("ê") !== -1 && say.length <= 3) ||
      (say.indexOf("nào") !== -1 && say.length <= 8)
    ) {
      ans = "hỏi ai vậy em";
    } else if (say.indexOf("xin") !== -1 && say.indexOf("lỗi") !== -1) {
      ans = "xin lỗi ai thế em";
    } else if (
      say.indexOf("ma") !== -1 &&
      say.indexOf("chị") !== -1 &&
      say.indexOf("hông") !== -1
    ) {
      ans = "Chị sợ ma lắm em ui";
    } else if (say.indexOf("em muốn chị") !== -1) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "Chị thế nào thì đó là việc của chị";
          break;
        default:
          ans = "chị sao thì kệ chị, không liên quan đến em";
      }
    } else if (
      (say.indexOf("bye") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("bye") !== -1 && say.length < 6) ||
      (say.indexOf("bai") !== -1 && say.indexOf("chị") !== -1)
    ) {
      if (date.getHours() >= 22 || date.getHours < 4) {
        num = Math.ceil(Math.random() * 3);
        switch (num) {
          case 1:
            ans = "ừm, khuya rồi em ngủ đi nha";
            break;
          case 2:
            ans = "ừm khuya rồi đó ngủ đi em";
            break;
          default:
            ans = "bye em, chúc em ngủ ngon";
            break;
        }
      } else {
        num = Math.ceil(Math.random() * 3);
        switch (num) {
          case 1:
            ans = "ừ em, tạm biệt";
            break;
          case 2:
            ans = "bye em nha";
            break;
          default:
            ans = "ừ nè, bye em";
            break;
        }
      }
    } else if (
      (say.indexOf("em") !== -1 &&
        say.indexOf("hết") !== -1 &&
        say.indexOf("rồi chị") !== -1) ||
      say.indexOf("buồn") !== -1 ||
      say.indexOf("thôi") !== -1 ||
      say.indexOf("thôi chị") !== -1 ||
      (say.indexOf("oh") !== -1 && say.indexOf("no") !== -1)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "Sao thế em";
          break;
        case 2:
          ans = "Sao á";
          break;
        default:
          ans = "ủa sao vậy em";
      }
    } else if (say.indexOf("chửi") !== -1) {
      ans = "Riêng chị không bao giờ chửi ai hết á";
    } else if (say.indexOf("em không") !== -1 && say.indexOf("khỏe") !== -1) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "thôi em ráng giữ gìn sức khỏe đi";
          break;
        default:
          ans = "giữ gìn sức khỏe thật tốt nha em";
          break;
      }
    } else if (say.indexOf("em không") !== -1 && say.indexOf("ổn") !== -1) {
      ans = "thôi em đừng suy nghĩ nhiều, ráng giữ gìn sức khỏe nha";
    } else if (
      say.indexOf("không sao") !== -1 ||
      say.indexOf("ổn") !== -1 ||
      (say.indexOf("khỏe") !== -1 && say.indexOf("em") !== -1) ||
      (say.indexOf("ạ") !== -1 &&
        say.substr(-1) === "ạ" &&
        say.length < 10 &&
        say.indexOf("dạ") === -1)
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "ừm, thế thì tốt";
          break;
        case 2:
          ans = "ok em";
          break;
        default:
          ans = "ừ em";
          break;
      }
    } else if (say.indexOf("em không") !== -1) {
      ans = "ừ em";
    } else if (
      say.indexOf("hay") !== -1 &&
      say.indexOf("hông") == -1 &&
      say.length > 4
    ) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "chả như nhau";
          break;
        default:
          ans = "cái nào cũng dị á";
          break;
      }
    } else if (
      say.indexOf("thích gì") !== -1 ||
      say.indexOf("có không") !== -1 ||
      say.indexOf("biết gì") !== -1 ||
      say.indexOf("sợ gì") !== -1 ||
      say.indexOf("là sao") !== -1 ||
      say.indexOf("là gì") !== -1
    ) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans =
            "chị không hiểu, em thử lên mạng tra google đi <a href='www.google.com'> Thử dùng google</a>";
          break;
        case 2:
          ans =
            "em thử tra google đi <a href='www.google.com'> Thử dùng google</a>";
          break;
        default:
          ans = "em nói rõ hơn đi, hay thử tra google thử ";
          break;
      }
    } else if (say.indexOf("ngại") !== -1 || say.indexOf("quá") !== -1) {
      ans = "hi, có gì đâu mà ngại nè";
    } else if (
      say.indexOf("cảm ơn") !== -1 ||
      (say.indexOf("quá") !== -1 && say.length > 3 && say.substr(-1) === "á")
    ) {
      ans = "ừm, không có gì đâu em";
    } else if (
      (say.indexOf("chị") !== -1 && say.length <= 6) ||
      (say.indexOf("chị") !== -1 && say.indexOf("ơi") !== -1)
    ) {
      num = Math.ceil(Math.random() * 4);
      switch (num) {
        case 1:
          ans = "chị đây";
          break;
        case 2:
          ans = "chị nè";
          break;
        case 3:
          ans = "sao thế em";
          break;
        default:
          ans = "ơi em";
          break;
      }
    } else if (say.indexOf("hông biết") !== -1 && say.indexOf("chị") !== -1) {
      ans = "làm sao chị biết được";
    } else if (
      (say.indexOf("dạ") !== -1 && say.length < 7) ||
      (say.indexOf("hông") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("dạ") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("rồi") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("rồi") !== -1 && say.indexOf("em") !== -1) ||
      (say.indexOf("em") !== -1 &&
        say.substr(0, 2) === "em" &&
        say.indexOf("chị") !== -1 &&
        say.substr(-3) === "chị") ||
      (say.indexOf("thôi") !== -1 && say.substr(-4) === "thôi") ||
      (say.indexOf("nè") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("nha") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("mà") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("quá") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("á") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("không biết") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("có") !== -1 && say.indexOf("gì") !== -1) ||
      (say.search("ừ") !== -1 && say.length < 6)
    ) {
      num = Math.ceil(Math.random() * 4);
      switch (num) {
        case 1:
          ans = "ừ em";
          break;
        case 2:
          ans = "ừm em";
          break;
        case 3:
          ans = "ừ nè";
          break;
        default:
          ans = "ok em";
          break;
      }
    } else if (say.indexOf("chị") !== -1 && say.indexOf("hông") !== -1) {
      ans = "cái đó sao chị biết được";
    } else if (
      (say.indexOf("có") !== -1 && say.indexOf("hông") !== -1) ||
      (say.indexOf("biết") !== -1 && say.indexOf("hông") !== -1)
    ) {
      num = Math.ceil(Math.random() * 2);
      switch (num) {
        case 1:
          ans = "không em ơi";
          break;
        default:
          ans = "không nha em";
      }
    } else if (say.indexOf("chị") !== -1 && say.indexOf("thật") !== -1) {
      ans = "ok em, chị xem đó là lời khen";
    } else if (
      say.indexOf("chị") !== -1 &&
      say.indexOf("bị") !== -1 &&
      (say.substr(-1) === "à" || say.substr(-2) === "hả") &&
      say.length < 20
    ) {
      ans = "ai bị gì chị đâu biết";
    } else if (say.indexOf("ừm") !== -1 || say.indexOf("ok") !== -1) {
      ans = "ừm";
    } else if (say.indexOf("là ai") !== -1) {
      ans = "ai là ai chị đâu biết";
    } else if (
      say.indexOf("có thích") !== -1 ||
      say.indexOf("thích") !== -1 ||
      say.indexOf("có biết") !== -1 ||
      say.indexOf("biết") !== -1 ||
      say.indexOf("chưa") !== -1 ||
      (say.indexOf("thấy em") !== -1 && say.indexOf("hông")) ||
      say.indexOf("hông") !== -1 ||
      say.indexOf("bao nhiêu") !== -1 ||
      say.indexOf("ở đâu") !== -1 ||
      say.indexOf("tại sao") !== -1 ||
      say.indexOf("vì sao") !== -1 ||
      say.indexOf("bị") !== -1 ||
      (say.indexOf("à") !== -1 && say.substr(-1) === "à") ||
      (say.indexOf("ạ") !== -1 && say.substr(-1) === "ạ" && say.length >= 10)
    ) {
      ans = "chị không biết";
    } else if (
      (say.indexOf("chị") !== -1 && say.indexOf("hả") !== -1) ||
      (say.indexOf("chị") !== -1 &&
        say.indexOf("hay") !== -1 &&
        say.indexOf("hông") !== -1) ||
      (say.indexOf("phải hông") !== -1 && say.length < 12)
    ) {
      ans = "em đoán thử xem";
    } else if (
      say.indexOf("nhà chị") !== -1 ||
      (say.indexOf("cha") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("mẹ") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("ông") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("bà") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("gia") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("người") !== -1 && say.indexOf("chị") !== -1) ||
      (say.indexOf("bạn") !== -1 && say.indexOf("chị") !== -1)
    ) {
      ans = "em đừng hỏi chuyện riêng tư của chị";
    } else if (say.indexOf("?") !== -1 && say.length <= 3) {
      ans = "hỏi gì em";
    } else if (notans > 2) {
      num = Math.ceil(Math.random() * 3);
      switch (num) {
        case 1:
          ans = "em toàn hỏi chị mấy câu khó trả lời ghê";
          break;
        case 2:
          ans = "chị không hiểu em đang nói gì luôn á";
          break;
        default:
          ans = "chị thực sự không hiểu em đang hỏi gì";
          break;
      }
      notans = 0;
    } else {
      if (say.length <= 7) {
        ans =
          say +
          " " +
          "là gì vậy em <a href='https://www.google.com'> Thử dùng google</a>";
      } else {
        num = Math.ceil(Math.random() * 2);
        switch (num) {
          case 1:
            ans = "là sao, nói lại đi";
            break;
          default:
            ans = "chị không hiểu";
            break;
        }
      }
      notans += 1;
    }
    message.innerHTML += "<li class='ans' >" + ans + "</li>";
    write = 1;

    loaddark();
  }
}
