Array.from(document.querySelectorAll(".friendRequestItem")).map((e) => e.getAttribute("data-id")).reduce((cPromise, id) => {
	return cPromise.then((e) => {
		let f = new FormData(), dtsg = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value, yourId = require("CurrentUserInitialData").USER_ID || document.cookie.match(/c_user=([0-9]+)/)[1], obj = {"action": "confirm", "id": id, "__user": yourId, "__a": 1, "fb_dtsg": dtsg};

		Object.keys(obj).forEach((key) => {f.append(key, obj[key]);});

		return new Promise((resolve, reject) => {
			fetch("https://www.facebook.com/requests/friends/ajax/?dpr=1", {method: "POST", body: f, credentials: "include"}).then((e) => (String(e.status).match(/^2/g)) ? (console.log(`Accepted Friend Request From: ${id}`), resolve()) : (console.log("Something went wrong :("), reject()));
		});
	});
}, Promise.resolve()).then((e) => {console.log("Done!");});

// How to use
// Open URL: https://www.facebook.com/friends/requests/
// Press F12 -> Open Tab "Console"
// Paste this script and run
