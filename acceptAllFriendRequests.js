Array.from(document.querySelectorAll(".friendRequestItem")).map((e) => e.getAttribute("data-id")).reduce((cPromise, id) => {
	return cPromise.then((e) => {
		let f = new FormData(),
			dtsg = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value,
			yourId = require("CurrentUserInitialData").USER_ID || document.cookie.match(/c_user=([0-9]+)/)[1];

		f.append("action", "confirm");
		f.append("id", id);
		f.append("__user", yourId);
		f.append("__a", 1);
		f.append("fb_dtsg", dtsg);

		return new Promise((resolve, reject) => {
			fetch("https://www.facebook.com/requests/friends/ajax/?dpr=1", {method: "POST", body: f, credentials: "include"}).then((e) => {
				if (String(e.status).match(/^2/g)) {
					console.log(`Rejected Friend Request From: ${id}`);
					resolve();
				}
			});
		});
	});
}, Promise.resolve()).then((e) => {console.log("Done!");});

// How to use
// Open URL: https://www.facebook.com/friends/requests/
// Press F12 -> Open Tab "Console"
// Paste this script and run
