var list_item = [{
  name: 'Web UI',
  link: './ui/index.html',
},
{
  name: 'Game dọn dẹp',
  link: './dondepahihi/index.html',
},
{
  name: 'Trang web đọc suy nghĩ với con số qua màn hình',
  link: './magicnumber/index.html',
},
{
  name: 'Game Freaking Math',
  link: './freakingmath/index.html',
},
{
  name: 'Game ai là triệu phú',
  link: './ailatrieuphu/index.html',
},
{
  name: 'Game đánh bài online',
  link: './danhbaionline/index.html',
},
{
  name: 'Đếm ngày cô đơn',
  link: './demngaycodon/index.html',
},
{
  name: 'Xếp đồ ăn',
  link: './xepdoan/index.html',
},
]

var list_item_map = list_item.map(function (x) {

  // sử dụng cho IE 11 :((
  return '<div class="main-item"><h4 class="text-name"><a href="' + x.link + '">' + x.name + '</a></h4><a href="' + x.link + '"><input type="button" value="Xem" class="btn btn-success" /></a></div>';

  //   return `
  //   <div class="main-item">
  //   <h4 class="text-name"><a href="${x.link}">${x.name}</a></h4>
  //   <a href="${x.link}"><input type="button" value="Xem" class="btn btn-success" /></a>

  // </div>
  // `;
});

document.getElementById("main").innerHTML = list_item_map.join("");