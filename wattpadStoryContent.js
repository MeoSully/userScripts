function scroll() {
	return new Promise((resolve, reject) => {
		let interval = setInterval(function() {
			(document.querySelector(".last-page > div") !== null) ? (clearInterval(interval), resolve(document.body.scrollHeight)) : window.scrollBy(0, 2000);
        }, 1000);
    });
}

scroll().then((e) => {
	console.log(`Document Height: ${e}`);
	let textArea = document.createElement("textarea");
	textArea.setAttribute("style", "width: 100%;height: -webkit-fill-available;");
	textArea.value = Array.from(document.querySelectorAll("pre > p")).map((element) => element.innerHTML.split("<span")[0]).join("\n");
	document.querySelector(".last-page > div").appendChild(textArea);
});
