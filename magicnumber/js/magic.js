//Công nghê đọc suy nghĩ bằng JQuery :))
//© 2020 Copyright by Tiendatmagic - All Rights Reserved | Designed by Tiendatmagic

	var magic = 0;
	document.getElementById("result-magic").innerHTML = magic;


	document.getElementsByClassName("btn-start")[0].addEventListener("click",function() {
		document.getElementsByClassName("gt")[0].style.display='none';
		document.getElementsByClassName("list-1")[0].style.display='block';
	});

	
	document.getElementsByClassName("btn1c")[0].addEventListener("click",function() {
		magic += 1;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-1")[0].style.display='none';
		document.getElementsByClassName("list-2")[0].style.display='block';

	});
	document.getElementsByClassName("btn1k")[0].addEventListener("click",function() {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-1")[0].style.display='none';
		document.getElementsByClassName("list-2")[0].style.display='block';
	})
	document.getElementsByClassName("btn2c")[0].addEventListener("click",function() {
		magic += 2;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-2")[0].style.display='none';
		document.getElementsByClassName("list-3")[0].style.display='block';
	})
	document.getElementsByClassName("btn2k")[0].addEventListener("click",function() {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-2")[0].style.display='none';
		document.getElementsByClassName("list-3")[0].style.display='block';
	})
	document.getElementsByClassName("btn3c")[0].addEventListener("click",function() {
		magic += 4;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-3")[0].style.display='none';
		document.getElementsByClassName("list-4")[0].style.display='block';
	})
	document.getElementsByClassName("btn3k")[0].addEventListener("click",function() {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-3")[0].style.display='none';
		document.getElementsByClassName("list-4")[0].style.display='block';
	})
	document.getElementsByClassName("btn4c")[0].addEventListener("click",function() {
		magic += 8;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-4")[0].style.display='none';
		document.getElementsByClassName("list-5")[0].style.display='block';
	})
	document.getElementsByClassName("btn4k")[0].addEventListener("click",function() {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-4")[0].style.display='none';
		document.getElementsByClassName("list-5")[0].style.display='block';
	})
	document.getElementsByClassName("btn5c")[0].addEventListener("click",function() {
		magic += 16;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-5")[0].style.display='none';
		document.getElementsByClassName("list-6")[0].style.display='block';
	})
	document.getElementsByClassName("btn5k")[0].addEventListener("click",function() {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-5")[0].style.display='none';
		document.getElementsByClassName("list-6")[0].style.display='block';
	})
	document.getElementsByClassName("btn6c")[0].addEventListener("click",function() {
		magic += 32;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-6")[0].style.display='none';
		document.getElementsByClassName("list-7")[0].style.display='block';
	})
	document.getElementsByClassName("btn6k")[0].addEventListener("click",function() {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-6")[0].style.display='none';
		document.getElementsByClassName("list-7")[0].style.display='block';
	})
	document.getElementsByClassName("btn7c")[0].addEventListener("click",function() {
		magic += 64;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-7")[0].style.display='none';

		if (magic > 100) {
			document.getElementsByClassName("result-error")[0].style.display='block';
		} else {
			document.getElementsByClassName("result")[0].style.display='block';

		}
	})
	document.getElementsByClassName("btn7k")[0].addEventListener("click",function() {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		document.getElementsByClassName("list-7")[0].style.display='none';
		document.getElementsByClassName("result")[0].style.display='block';
		if (magic > 100) {
			document.getElementsByClassName("result-error")[0].style.display='block';
		} else {
			document.getElementsByClassName("result")[0].style.display='block';

		}

	})

	document.getElementsByClassName("btn-reload")[0].addEventListener("click",function() {
		location.reload();
	})



//© 2020 Copyright by Tiendatmagic - All Rights Reserved | Designed by Tiendatmagic