// You have to run this script in DevTools of browser, this can't use if add to browser bookmark
new Promise((resolve, reject) => {
	let url = document.URL, imgId;
	if (url.match(/photo.php/g) !== null) {
		imgId = url.match(/(?<=fbid=)\d+/g)[0];
	} else {
		imgId = window.prompt("Image ID:");
	}
	resolve({id: imgId});
}).then((data) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.facebook.com/me/", false);
		xhr.onreadystatechange = function() {
			let match = this.responseText.match(/(?<=access_token:")\w+/g);
			data.token = match[0];
			resolve(data);
		}
		xhr.send(null);
	});
}).then((data) => {
	fetch(`https://graph.facebook.com/v3.1/${data.id}?fields=images&access_token=${data.token}`).then((res) => res.json()).then((res) => {
		window.open(res.images[0].source, "_blank");
	});
});
