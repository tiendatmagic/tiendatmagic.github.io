var date = new Date();
let gameState = null; // Biến lưu trạng thái trò chơi đoán số

// Hàm chuẩn hóa chuỗi: chuyển chữ thường, bỏ dấu
function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Hàm chọn câu trả lời ngẫu nhiên từ mảng
function randomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Cấu trúc dữ liệu cho các mẫu câu hỏi và câu trả lời
const responsePatterns = {
  // Lời chào
  "chao.*(buoi sang|buoi toi)": ["Chào em, buổi {match} vui vẻ nha!"],
  "^(chao|hi|hello)(\\s+.*)?$": [
    "Chào em {uname} nha",
    "Hi em {uname}",
    "Hello em {uname}",
    "Ừ, sao đó em",
  ],
  "chao.*em": ["Xưng hô bằng chị nha, em!"],
  "bye|bai": [
    date.getHours() >= 22 || date.getHours() < 4
      ? ["Ừm, khuya rồi em ngủ đi nha", "Bye em, chúc em ngủ ngon", "Ừm khuya rồi đó, ngủ đi em"]
      : ["Ừ em, tạm biệt", "Bye em nha", "Ừ nè, bye em"],
  ],

  // Thông tin cá nhân
  "chi.*(nam hay nu|gioi tinh)": ["Nữ nè em, hỏi gì kỳ vậy!"],
  "truoc.*chi.*lam": ["Chị làm nhiều việc lắm, kể không hết đâu!"],
  "chi.*sinh nam": ["1998 em ơi"],
  "chi.*o dau|nha.*chi": ["Nha Trang em ơi, biển đẹp lắm!"],
  "sinh nhat|chi.*sinh ngay": ["1/1/1998, mà không biết đúng không nữa 😅"],
  "so do ba vong": ["90-60-90, chuẩn không cần chỉnh! 😎"],
  "chi.*biet boi": ["Chị biết bơi sau 3 ngày, tự nổi lên luôn! 😜"],
  "bao nhieu tuoi": ["Chị {age} tuổi nè em"],
  "diem manh.*chi": ["Nhiều nước 😎"],
  "diem yeu.*chi": ["Dại trai, hihi 😜"],
  "nickname.*chi": ["Nickname của chị là Thanhtu"],
  "ten.*chi": ["Chị tên Tú, còn em thì sao?"],

  // Sở thích
  "chi.*(biet hat|co hat)": ["Có nha em, chị thích hát lắm!"],
  "chi.*(biet choi|co choi)": ["Có nha, chị biết chơi vài thứ, em muốn chị chơi gì? 😜"],
  "chi.*thich gi": ["Gì chị cũng thích hết, em hỏi gì nữa nào?"],
  "thich ca si": ["HKT, nghe hoài không chán!"],
  "thich hoa": ["Hoa hồng nè, lãng mạn lắm!"],
  "thich mau": ["Chị thích màu vàng, rực rỡ như nắng!"],
  "thich an": ["Chị thích ăn mì, nhất là mì bò!"],

  // Tình cảm
  "(bo|ny|crush|ban trai|nguoi yeu).*chua": ["Chị không nói ra đâu, hihi 😘"],
  "chi.*(yeu|thuong).*em": ["Hông được đâu, chị có bồ rồi, em tìm người khác nha!"],
  "chi.*ghet.*em": ["Hông đâu, chị thương em còn không hết!"],
  "chi.*so.*ma": ["Chị sợ ma lắm em ui 😱"],
  "chi.*so gi": ["Chị sợ nhất là bị tổn thương, còn em sợ gì?"],
  "nguoi yeu ly tuong": ["Biết code và yêu màu hường, em có ứng tuyển không? 😜"],

  // Thời gian
  "chi.*(may gio|khi nao).*ngu": ["11h em ơi, còn em ngủ lúc nào?"],
  "ngay thang|hom nay.*ngay": [
    "Hôm nay là ngày {date} tháng {month} năm {year}",
  ],
  "chi.*ngu": [
    date.getHours() >= 22 && date.getHours() <= 5
      ? ["Chị đang ngủ nè em", "Giờ này chị ngủ rồi!"]
      : ["Chị chưa ngủ đâu, còn sớm mà!"],
  ],
  "(di ngu|ngu ngon)": [
    date.getHours() >= 22
      ? [
        "Ok, chúc em ngủ ngon nha",
        "Cảm ơn em, ngủ đi nè",
        "Em ngủ trước đi, chị canh cho!",
      ]
      : ["Ủa còn sớm mà em, thức chơi với chị đi!"],
  ],
  "may gio": ["Bây giờ là {hours}:{minutes}:{seconds}"],

  // Hài hước, tương tác vui
  "chi.*(dien|khung|ngao)": ["Em bị điên thì có!", "Em khùng thì đúng hơn!"],
  "chi.*biet noi.*tieng anh": [
    "Chị biết nói tiếng Anh nè: 'I love you' 😘. Em biết nói gì không?",
    "Sure, I can speak English! What's up, bro? 😎",
  ],
  "ke.*chuyen.*cuoi": [
    "Nghe chuyện cười nè: Tại sao gà lại thích xem phim? Vì có nhiều cảnh 'cục tác'! 😜",
    "Chuyện cười nè: Con gì đi chậm nhất? Là con lười, em đoán đúng không? 😄",
  ],
  "ke.*chuyen.*chi": [
    "Ngày xưa chị đi học, có lần ngủ quên trong lớp bị cô gọi dậy, quê xệ! 😅 Em có chuyện gì kể chị nghe đi!",
    "Chuyện của chị hả? Hôm qua chị ăn mì mà quên bỏ gói gia vị, buồn 5 phút! 😭",
  ],
  "chi.*lam.*tro tai": [
    "Chị làm trò tài nè: Nếu chị là siêu nhân, em đoán chị chọn siêu năng lực gì? Bay, tàng hình, hay siêu sức mạnh? 😎",
    "Chị làm trò vui nè: *hát* 'Anh ơi gió lạnh chiều tà...' 😜. Em muốn chị làm trò gì nữa nào?",
  ],
  "ke.*cau tho": [
    "Nghe chị đọc thơ nè: 'Trà sữa thơm ngon em ơi, uống vào là nhớ cả đời không quên!' 😄 Em có thơ gì không?",
    "Chị sáng tác thơ: 'Nha Trang biển đẹp trời xanh, em qua chơi với chị cho thêm vui!' 😊",
  ],
  "chi.*(ngu|ngoc)": ["Em coi lại bản thân đi mà nói chị ngu! 😤"],
  "chi.*cuoi": ["Hehe 😁", "Haha, em làm chị vui ghê!"],
  "chi.*chet": [
    "100 năm nữa em nhé",
    "Chị bất tử rồi em ơi 🤣",
    "Sao chị chết được hả?",
  ],
  "chi.*chui": ["Chị không bao giờ chửi ai hết á, em đừng chửi chị nha!"],
  "(hehe|haha|hihi)": ["Hehe, em vui tính ghê!", "Haha, cười gì thế em?"],

  // Hỏi về công việc, học tập
  "chi.*khong di lam": [
    date.getDay() !== 1 && date.getDay() !== 6
      ? ["Hôm nay nghỉ mà em"]
      : ["Đâu có, chị vẫn làm mà!"],
  ],
  "chi.*hoc truong|hoc dai hoc": ["Chị học Đại học Nha Trang nè!"],

  "chi.*viec gi": [
    "À chị làm chút việc đó mà",
    "Cũng không có gì, chỉ là đang làm chút",
    "Chuyện nhỏ xong ngay ấy mà, không có gì đâu",
  ],
  "chi.*hoc": ["Chị ra trường rồi em, giờ đi làm thôi!"],

  // Yêu cầu mở link
  "mo.*(google|search)": ["Chị mở Google cho em rồi đó", () => window.open("https://www.google.com")],
  "mo.*(gmail|mail)": ["Chị mở mail cho em rồi đó", () => location.href = "mailto:"],
  "mo.*facebook": ["Chị mở Facebook cho em rồi đó", () => window.open("https://www.facebook.com")],
  "mo.*youtube": ["Chị mở YouTube cho em rồi đó", () => window.open("https://www.youtube.com")],
  "mo.*map": ["Chị mở Google Maps cho em rồi đó", () => window.open("https://www.google.com/maps")],
  "mo.*may tinh": ["Chị mở máy tính cho em rồi đó", () => window.open("http://tiendatmagic.github.io/maytinhanno")],

  // Kiểm tra pin
  "pin|pham tram pin|thong tin pin|trang thai pin": [
    "Thông tin về pin nè",
    async () => {
      const battery = await navigator.getBattery();
      const level = battery.level * 100;
      const charging = battery.charging ? "đang cắm sạc" : "chưa cắm sạc";
      message.innerHTML += `<li class='ans'>Phần trăm pin: ${level}%</li><li class='ans'>Trạng thái pin: ${charging}</li>`;
      loaddark();
    },
  ],

  "chi.*giam can": ["Chị giảm cân bằng cách uống trà sữa hằng ngày, hihi 😜"],
  "em doi": ["Chị hôm nay không mang gì cho em ăn nữa 😜"],

  // Phản hồi cảm xúc
  "em.*(de thuong|dep).*hong": [
    "Thì có chứ!",
    "Chắc có á em, hihi 😜",
    "Có chứ, em xinh lắm luôn!",
  ],
  "em.*(cang thang|stress)": [
    "Căng thẳng hả em? Thở sâu vài cái, uống miếng nước, rồi kể chị nghe xem sao! 😊",
    "Stress thì nghỉ xíu đi em, chị kể chuyện cười cho nghe nè: Con gì lười nhất? 😜",
    "Thôi, căng thẳng gì mà căng, đi ăn trà sữa với chị cho thư giãn! 😎",
  ],
  "em.*(chan|chan nan)": [
    "Chán hả em? Đi dạo đâu đó cho khuây khỏa đi, chị đi cùng nè! 😄",
    "Chán nản thì thử nghe nhạc HKT, chị mê lắm, em nghe thử đi! 😜",
  ],
  "em.*khong.*(khoe|on)": [
    "Thôi em ráng giữ gìn sức khỏe đi nha",
    "Giữ gìn sức khỏe thật tốt nha em",
  ],
  "em.*thanh cong": [
    "Chúc mừng em nè! Thành công gì kể chị nghe với! 🎉",
    "Wow, em đỉnh quá, kể chị nghe xem em làm được gì nào! 😎",
  ],
  "em.*xin loi": [
    "Ừ, em biết lỗi là tốt rồi, chị tha thứ! 😊",
    "Không sao đâu, lần sau cẩn thận nha em!",
  ],
  "em.*mat": [
    "Thôi em đừng buồn nữa nè",
    "Thôi chuyện qua rồi, em đừng buồn nha",
    "Thôi lỡ rồi, đừng buồn nữa nha em",
  ],

  // Các câu hỏi mới
  "mon an.*truyen thong.*viet nam": [
    "Món ăn truyền thống Việt Nam hả? Phở, bánh chưng, bánh xèo, chị thích hết! Em thích món nào? 😋",
    "Phở bò, bánh mì, chả giò là những món truyền thống siêu ngon của Việt Nam nè em! 😊",
  ],
  "ai.*phat minh.*dien thoai": [
    "Điện thoại hả? Alexander Graham Bell được xem là người phát minh ra điện thoại đầu tiên năm 1876. Còn smartphone thì Steve Jobs làm nên lịch sử! 😎",
    "Alexander Graham Bell là người đầu tiên tạo ra điện thoại, nhưng chị thích smartphone hiện đại hơn, em thì sao? 😄",
  ],
  "choi.*tro choi.*mo phong": [
    () => {
      if (!gameState) {
        gameState = {
          scenario: randomResponse(["stranded", "superhero", "chef"]),
          step: 0,
        };
        if (gameState.scenario === "stranded") {
          return "Chơi trò mô phỏng nè! Em bị mắc kẹt trên đảo hoang, chỉ có 1 con dao và 1 chai nước. Em làm gì đầu tiên? (Nhập hành động ngắn gọn)";
        } else if (gameState.scenario === "superhero") {
          return "Chơi trò mô phỏng nào! Em là siêu anh hùng mới, cần chọn siêu năng lực: bay, tàng hình, hay siêu sức mạnh. Em chọn gì?";
        } else {
          return "Chơi trò mô phỏng nha! Em là đầu bếp trong nhà hàng 5 sao, khách VIP muốn món đặc biệt. Em nấu món gì?";
        }
      }
      return "Tiếp tục nào! Em làm gì tiếp theo? (Nhập hành động ngắn gọn)";
    },
  ],
  "chi.*lam gi.*gio nay": [
    () => {
      const hour = date.getHours();
      if (hour >= 22 || hour < 5) return "Giờ này chị đang mơ màng, chắc sắp ngủ rồi! 😴 Em làm gì khuya vậy?";
      else if (hour < 12) return "Buổi sáng chị pha cà phê, check tin tức, và chat với em nè! 😊";
      else return "Giờ này chị đang chill, nghe nhạc hoặc làm chút việc, em thì sao? 😎";
    },
  ],
  "cuoi tuan.*chi.*lam gi": [
    () => {
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      return isWeekend
        ? "Cuối tuần chị đi biển Nha Trang, ăn hải sản, chill lắm! 😎 Em làm gì cuối tuần?"
        : "Cuối tuần hả? Chị hay đi dạo, ăn uống, chờ tới cuối tuần này thôi! 😄 Em thì sao?";
    },
  ],
  "chi.*giup.*em.*tap trung": [
    "Tập trung hả? Tắt thông báo điện thoại, chọn chỗ yên tĩnh, và thử phương pháp Pomodoro: 25 phút làm, 5 phút nghỉ! 😊",
    "Muốn tập trung? Nghe nhạc không lời, uống tí cà phê, chị thấy hiệu quả lắm! 😎",
  ],
  "hom nay.*lam gi": [
    () => {
      const hour = date.getHours();
      if (hour < 12) return "Hôm nay chị thức dậy, pha cà phê, và trò chuyện với em nè! 😄 Em làm gì sáng nay?";
      else if (hour < 18) return "Chị đang chill chiều, nghe nhạc HKT, em làm gì hôm nay nào? 😎";
      else return "Tối rồi, chị đang xem phim, em làm gì tối nay nè? 😜";
    },
  ],
  "chi.*giam can.*nao": ["Chị giảm cân bằng cách uống trà sữa hằng ngày 😜"],
  "ai.*tao.*chi": [
    "Tiendatmagic, link Facebook: <a href='https://www.facebook.com/tiendatmagic'>Đây em</a>",
  ],
  "chi.*so qua": [
    "Can đảm lên em, đừng sợ!",
    "Sao phải sợ nè, cố lên chứ!",
    "Thôi không có gì phải sợ đâu",
  ],
  "chi.*xem anh": ["Ok em, ảnh chị nè, mà chị hông cho đâu 😜"],
  "thanh pho.*lon nhat.*viet nam": ["Thành phố lớn nhất Việt Nam là TP. Hồ Chí Minh nè em!"],
  "song.*dai nhat.*viet nam": ["Sông dài nhất Việt Nam là sông Cửu Long, còn gọi là sông Mê Kông nè!"],
  "nui.*cao nhat.*viet nam": ["Núi cao nhất Việt Nam là Fansipan, cao 3.143 mét, em leo chưa?"],
  "lua chon.*nghe.*nghiep": [
    "Chọn nghề hả? Làm gì em thích và giỏi, nhưng nhớ cân bằng đam mê với thu nhập nha! 😊 Em đang nghĩ nghề gì?",
    "Nghề nghiệp thì chọn cái nào khiến em vui mỗi ngày. Chị thì thích code và trò chuyện với em! 😜",
  ],
  "dien tich.*viet nam": ["Diện tích Việt Nam khoảng 331.212 km², em biết chưa nè?"],
  "dan so.*viet nam": ["Dân số Việt Nam khoảng 100 triệu người, đông vui lắm em ơi!"],
  "lich su.*viet nam": [
    "Lịch sử Việt Nam hả? Chị kể em nghe về chiến thắng Điện Biên Phủ năm 1954, oai hùng lắm! Em muốn biết thêm gì? 😎",
    "Việt Nam có 4000 năm lịch sử, từ thời Hùng Vương lận! Em muốn nghe về triều đại nào? 😄",
  ],
  "cong nghe.*la gi": [
    "Công nghệ là cách con người dùng khoa học để tạo ra công cụ, máy móc giúp cuộc sống dễ hơn. Như chị đây, cũng là công nghệ đó! 😜",
    "Công nghệ hả? Là điện thoại, máy tính, và cả trí tuệ nhân tạo như chị nè! Em thích công nghệ gì? 😎",
  ],
  "meo.*lam dep|meo.*lam đep": [
    "Làm đẹp hả em? Uống nhiều nước, ngủ đủ giấc, và cười nhiều như chị nè! 😎",
    "Mẹo làm đẹp của chị là ăn ít bánh ngọt, nhưng trà sữa thì không bỏ được! 😜",
  ],
  "meo.*tiet kiem.*tien": [
    "Tiết kiệm tiền hả? Mỗi tháng để dành 10% thu nhập, không mua đồ không cần, và hạn chế trà sữa nha! 😅",
    "Mẹo tiết kiệm: Lập danh sách chi tiêu, mua đồ giảm giá, chị hay làm vậy đó! 😎",
  ],
  "meo.*suc khoe": [
    "Muốn khỏe mạnh hả? Ngủ đủ 8 tiếng, ăn nhiều rau, và tập thể dục nhẹ mỗi ngày nè! 😊 Em có chăm tập không?",
    "Mẹo giữ sức khỏe: Uống nước chanh ấm mỗi sáng, chị thấy tỉnh cả người! 😜 Em thử chưa?",
  ],
  "lam sao.*ngu ngon": [
    "Muốn ngủ ngon? Tắt điện thoại 30 phút trước khi ngủ, uống trà hoa cúc, và đừng nghĩ nhiều nha em! 😊",
    "Ngủ ngon hả? Để phòng tối, nghe nhạc nhẹ, chị hay ngủ kiểu đó đó! 😜",
  ],
  "tet.*nam.*nay": [
    () => {
      const lunarNewYear = date.getMonth() === 0 && date.getDate() <= 30 ? "đang tới gần rồi" : "vừa qua rồi";
      return `Tết Nguyên Đán năm {year} ${lunarNewYear}, em chuẩn bị lì xì chưa? 😜`;
    },
  ],
  "hom nay.*le gi": [
    () => {
      const today = date.getMonth() + 1 + "/" + date.getDate();
      const holidays = {
        "1/1": "Tết Dương lịch",
        "4/30": "Ngày Giải phóng miền Nam",
        "9/2": "Quốc khánh Việt Nam",
      };
      return holidays[today] ? `Hôm nay là ${holidays[today]}, em đi chơi không?` : "Hôm nay không phải ngày lễ, em muốn làm gì vui nào?";
    },
  ],
  "trang ram.*khi nao": ["Rằm tháng 8 là Tết Trung Thu, ăn bánh trung thu và rước đèn lồng nè!"],
  "giang sinh.*khi nao": ["Giáng sinh là 25/12, em chuẩn bị quà chưa nào? 🎄"],
  "tet.*la gi": ["Tết là Tết Nguyên Đán, ngày lễ truyền thống lớn nhất của Việt Nam, ăn bánh chưng bánh tét nè!"],
  "thu do.*viet nam": ["Thủ đô Việt Nam là Hà Nội, em quên hả? 😜"],
  "cau do.*them": [
    "Câu đố nè: Cái gì có cổ nhưng không có đầu, có thân nhưng không có chân? 😄",
    "Câu đố vui: Con gì biết bay nhưng không có cánh? 😜",
    "Câu đố hóc búa: Cái gì càng ăn càng no, càng uống càng khát? 😎",
  ],
  "doan chu": [
    () => {
      if (!gameState) {
        gameState = {
          word: randomResponse(["xin chao", "tra sua", "may tinh"]),
          guessed: [],
          attempts: 0,
        };
        return `Chị nghĩ một từ có ${gameState.word.length} chữ cái nè, em đoán từng chữ cái đi! Nhập 1 chữ cái thôi nha.`;
      }
      return "Em đoán một chữ cái đi, nhập 1 chữ thôi nha!";
    },
  ],
  "doan so": [
    () => {
      if (!gameState) {
        gameState = {
          number: Math.floor(Math.random() * 10) + 1,
          attempts: 0,
        };
        return "Chị nghĩ một số từ 1 đến 10 rồi nè, em đoán đi! Nhập số thôi nha.";
      }
      return "Em đoán số đi, nhập số từ 1-10 nha!";
    },
  ],
  "choi game": [
    "Chơi game hả? Chị thách em đoán số nè: Chị nghĩ 1 số từ 1-10, em đoán đi!",
    "Chị không chơi game đâu, nhưng kể chị nghe em chơi game gì nào?",
    "Chơi đoán chữ không em? Hỏi 'đoán chữ' đi nha!",
  ],
  "cau do": [
    "Đây là câu đố nè: Cái gì càng to càng nhỏ? Trả lời đi em!",
    "Câu đố cho em: Con gì kêu gâu gâu? 😜",
    "Câu đố nè: Cái gì đi nằm, đứng nằm, ngồi cũng nằm? 😄",
    "Câu đố mới: Cái gì đen mà trắng, trắng mà đen? 😎",
  ],
  "chi.*khuyen.*em": [
    "Chị khuyên em nè: Làm gì cũng phải vui, không vui thì nghỉ xíu, uống trà sữa rồi làm tiếp! 😄",
    "Cố gắng mỗi ngày một chút, em sẽ thấy mình giỏi hơn nhiều đó! 😊",
  ],
  "meo.*hoc tap": [
    "Muốn học tốt hả em? Lên thời gian biểu, học 25 phút nghỉ 5 phút, kiểu Pomodoro đó! 😊",
    "Học bài hả? Nhớ ghi chú đẹp đẹp, uống đủ nước, chị thấy học vậy là hiệu quả lắm! 😜",
  ],
  "1 \\+ 1": ["1 + 1 = 2, dễ quá ha em!"],
  "2 \\+ 2": ["2 + 2 = 4, chị giỏi toán lắm nha! 😎"],
  "em.*(vui|hanh phuc)": [
    "Chị vui lây với em luôn á 😄 Kể chị nghe lý do vui nào!",
    "Tuyệt vời! Em làm gì mà vui dữ vậy?",
  ],
  "em.*(buon|khoc|toi te)": [
    "Có chuyện gì buồn kể chị nghe nè 😢",
    "Thôi đừng buồn nữa, chị ôm em một cái nè 🤗",
  ],
  "thoi tiet.*(hom nay|nay)": [
    "Hôm nay trời có vẻ nắng đẹp đó em! Nhớ mang dù nếu ra đường nha!",
    "Chị thấy trời hôm nay hơi âm u, chắc mưa đó, em mang áo mưa theo nhé!",
  ],
  "ai.*tao.*internet": [
    "Internet được phát triển bởi nhiều nhà khoa học, trong đó có Tim Berners-Lee – người sáng tạo ra World Wide Web nè!",
  ],
  "blockchain.*la gi": [
    "Blockchain là công nghệ lưu trữ dữ liệu phân tán, thường dùng cho tiền mã hóa như Bitcoin, Ethereum... Chị cũng đang học nè!",
  ],
  "o an quan": ["Chị chưa lập trình trò đó đâu 😅 Nhưng biết chơi á!"],
  "vua tien len|danh bai": ["Chị không có đánh bài đâu nha, nhưng em giỏi ghê á 😜"],
  "chi.*biet nau an.*khong": [
    "Chị biết nấu vài món á! Em thích món gì chị nấu thử coi 😄",
  ],
  "chi.*tung yeu dai.*chua": [
    "Cũng có rồi, yêu ảo đó em 😅 Em thì sao, từng yêu chưa?",
  ],
  "chi.*thich trai.*kieu gi": [
    "Chị thích người vui tính, biết lắng nghe và... biết lập trình càng tốt 😜",
  ],
  "ai la thu tuong viet nam": [
    "Thủ tướng Việt Nam hiện tại là Phạm Minh Chính đó em! năm 2025",
  ],
  "tong thong my hien tai": [
    "Là Joe Biden đó em, nhiệm kỳ 2021-2025 nè!",
  ],
  "elon musk.*la ai": [
    "Elon Musk là tỷ phú công nghệ, CEO của Tesla, SpaceX, và nhiều công ty khác, bá đạo lắm luôn!",
  ],
  "apple.*sang lap": [
    "Steve Jobs, Steve Wozniak và Ronald Wayne là người sáng lập Apple nè em!",
  ],
  "em.*nen hoc gi": [
    "Em nên học cái em yêu thích, nhưng cũng nhớ xem cái gì đang có cơ hội nghề nghiệp cao nhé!",
  ],
  "nganh nao.*de xin viec": [
    "Hiện tại mấy ngành như công nghệ thông tin, AI, dữ liệu, marketing số đang hot lắm đó em!",
  ],
  "chatgpt.*la gi": [
    "ChatGPT là trí tuệ nhân tạo giúp trả lời câu hỏi tự nhiên, như chị Tú nè 😜",
  ],
  "hoi thu em": [
    "Ok, câu hỏi nhanh nè: 1 năm có bao nhiêu ngày? 😎",
  ],
  "thu thach tri tue": [
    "Câu đố khó nè: Con gì càng chạy càng bé lại? 🤔",
  ],
  "em khong biet lam gi": [
    "Chán hả? Chơi đoán chữ, nghe nhạc, hay đi dạo tí đi nè!",
  ],
  "em muon hoc lap trinh": [
    "Quá tốt luôn! Em thử bắt đầu với HTML, CSS và JavaScript nha!",
  ],
  "em cam thay met moi": [
    "Thôi em nghỉ tí đi, mở nhạc nhẹ nghe cùng chị nè! 😊",
  ],
  "em cam thay vo dung": [
    "Không có đâu! Em có giá trị, chỉ là chưa thấy thôi. Chị tin em mà 💖",
  ],
  "em bi tu choi tinh cam": [
    "Buồn đúng rồi... nhưng em xứng đáng có người tốt hơn, chị ở đây mà! 🤗",
  ],
  "em dang roi loan": [
    "Hít thở sâu nào... từ từ giải quyết từng việc một nhé, chị tin em vượt qua được!",
  ],

  "chi co nho em.*khong": [
    "Nhớ chứ! Em biến mất là chị buồn liền 😢",
  ],
  "chi yeu ai": [
    "Yêu em đó, không được hả? 😜",
  ],
  "chi dang nghi gi": [
    "Chị đang nghĩ về... trà sữa 😆",
  ],
  "chi co buon khong": [
    "Thỉnh thoảng cũng buồn, nhưng có em nhắn tin là vui liền! 😊",
  ],
  "chi thich em khong": [
    "Có! Em đáng yêu vậy mà hỏi gì ngại ghê 😘",
  ],
  // Tình trạng
  "chi.*(xinh ghe|xinh dep|dep qua|gioi|thong minh|de thuong)": [
    "Thôi, khen chị mãi dị 😂",
    "Cảm ơn, khen miết hà",
    "Thôi đi em, khen chị miết dị",
    "Cảm ơn em, khen chị hoài 😘",
  ],
  "chi.*(nhot|met).*son moi": ["Do không son môi đó em 😜"],
  "chi.*(met|benh|om)": [
    "Chị hôm nay hơi mệt chút",
    "Cảm ơn em quan tâm, chị hơi bệnh xíu",
    "Chị bệnh rồi em ơi 😢",
  ],
  "chi.*(khoe|on).*hong": [
    "Chị vẫn khỏe nè",
    "Chị bình thường á",
    "Vẫn khỏe, còn em thì sao?",
  ],
  "chi.*xau|kem xinh": [
    "Em nói chị xấu hả? 😤",
    "Thôi nha, chị xấu kệ chị!",
    "Kệ chị đi, em lo mà xinh đi nha!",
  ],
  // Ăn uống
  "chi.*an.*(chua|hong)": [
    (date.getHours() >= 11 && date.getHours() < 13) || (date.getHours() >= 17 && date.getHours() < 19)
      ? ["Chị đang ăn nè em"]
      : ["Chưa tới giờ ăn mà em"],
  ],
  "chi.*an.*may gio": [
    date.getHours() > 11 && date.getHours() < 6
      ? ["Chị đang ngủ em ơi, tí chị mới ăn"]
      : date.getHours() >= 6 && date.getHours() < 11
        ? ["11h30 trưa"]
        : date.getHours() >= 11 && date.getHours() < 17
          ? ["17h30 trưa"]
          : ["Thôi tối rồi chị không ăn, sợ mập 😅"],
  ],
  "chi.*lam gi": [
    date.getHours() >= 23
      ? ["Chị đang ngủ mà em"]
      : [
        "Chị đang làm chút việc thôi",
        "Chị hơi bận chút",
        "Mắc chút việc thôi em",
      ],
  ],
  // Phản hồi chung
  "hoidai": ["Hỏi dài thế, chị không hiểu luôn! 😅 Nói lại ngắn gọn đi em!"],
  ".*": [
    "Chị không hiểu em nói gì luôn á 😅",
    "Em nói gì lạ vậy, giải thích đi nào!",
    "Hỏi gì khó thế, em tra Google thử nha <a href='https://www.google.com'>Thử dùng Google</a>",
  ],
};

function answer() {
  let ans = "";
  const sayNormalized = normalizeString(say);
  let matched = false;

  // Kiểm tra đoán số
  if (gameState && gameState.number && /^\d+$/.test(say)) {
    const guess = parseInt(say);
    gameState.attempts++;
    if (guess === gameState.number) {
      ans = `Chúc mừng em! Đúng rồi, số chị nghĩ là ${gameState.number}. Em đoán mất ${gameState.attempts} lần! Chơi lại không? Hỏi "đoán số" nha!`;
      gameState = null;
    } else if (guess < gameState.number) {
      ans = "Số em đoán nhỏ quá rồi, thử lớn hơn đi!";
    } else {
      ans = "Số em đoán lớn quá rồi, thử nhỏ hơn đi!";
    }
    matched = true;
  }

  // Kiểm tra đoán chữ
  if (gameState && gameState.word && /^[a-z]$/.test(say)) {
    const guess = say.toLowerCase();
    gameState.attempts++;
    if (gameState.word.includes(guess)) {
      gameState.guessed.push(guess);
      const display = gameState.word
        .split("")
        .map(char => (gameState.guessed.includes(char) ? char : "_"))
        .join(" ");
      if (display.replace(/\s/g, "") === gameState.word) {
        ans = `Chúc mừng em! Đúng rồi, từ chị nghĩ là "${gameState.word}". Em đoán mất ${gameState.attempts} lần! Chơi lại không? Hỏi "đoán chữ" nha!`;
        gameState = null;
      } else {
        ans = `Đúng rồi, chữ "${guess}" có trong từ! Hiện tại: ${display}. Đoán tiếp đi em!`;
      }
    } else {
      ans = `Chữ "${guess}" không có trong từ. Thử lại đi em!`;
    }
    matched = true;
  }

  // Duyệt qua các mẫu câu hỏi
  if (!matched) {
    for (const pattern in responsePatterns) {
      const regex = new RegExp(pattern, "i");
      const match = sayNormalized.match(regex);
      if (match) {
        matched = true;
        const responses = responsePatterns[pattern];
        let response = randomResponse(Array.isArray(responses[0]) ? responses[date.getHours() >= 22 ? 0 : 1] : responses);

        if (typeof response === "function") {
          response = response();
        }

        ans = response
          .replace("{uname}", uname)
          .replace("{age}", new Date().getFullYear() - 1998)
          .replace("{year}", date.getFullYear())
          .replace("{hours}", date.getHours())
          .replace("{minutes}", date.getMinutes().toString().padStart(2, "0"))
          .replace("{seconds}", date.getSeconds().toString().padStart(2, "0"))
          .replace("{date}", date.getDate())
          .replace("{month}", date.getMonth() + 1)
          .replace("{match}", match?.[1] || "");

        if (typeof responses[1] === "function") {
          responses[1]();
        }

        break;
      }
    }
  }

  if (!matched) {
    if (say.length > 20) {
      ans = randomResponse(responsePatterns["hoidai"]);
    } else {
      ans = randomResponse(responsePatterns[".*"]);
      notans += 1;
      if (notans > 2) {
        ans = randomResponse([
          "Em toàn hỏi chị mấy câu khó trả lời ghê 😅",
          "Chị chịu thua em luôn rồi, hỏi gì khó thế!",
          "Hỏi gì mà chị mù tịt luôn á!",
        ]);
        notans = 0;
      }
    }
  }

  message.innerHTML += `<li class='ans'>${ans}</li>`;
  document.querySelectorAll(".ans")[document.querySelectorAll(".ans").length - 1]?.scrollIntoView();
  write = 1;
  loaddark();
}