let $ = document.querySelector.bind(document);
setInterval(() => {
	const now = new Date();
	$("#clock").innerHTML = `${`
	0 $ {
		now.getHours()
	}
	`.slice(-2)}:${`
	0 $ {
		now.getMinutes()
	}
	`.slice(-2)}`
}, 1000);