Array.from(document.querySelectorAll("a[ajaxify*='/ajax/groups/mall/approve/']")).forEach((btn) => {
	let cBtn = document.createElement("button"), tArea = document.createElement("textarea"), style = document.createElement("style");

	cBtn.setAttribute("class", btn.getAttribute("class"));
	cBtn.setAttribute("postid", btn.getAttribute("ajaxify").match(/(?<=message_ids=)\d+/g));
	cBtn.setAttribute("groupid", btn.getAttribute("ajaxify").match(/(?<=group_id=)\d+/g));
	cBtn.setAttribute("onclick", `approveAndCmt(this);`);
	cBtn.innerHTML = "Approve & Cmt";

	style.innerHTML = ".tArea {width: 99%;resize: none;height: 5em;}";

	tArea.setAttribute("class", "tArea");
	tArea.setAttribute("placeholder", "Cmt here...");
	tArea.id = `cmt_post_${btn.getAttribute("ajaxify").match(/(?<=message_ids=)\d+/g)}`;

	document.head.appendChild(style);
	btn.parentElement.parentElement.parentElement.querySelector("div").appendChild(tArea);
	btn.parentElement.appendChild(cBtn);
});

function convForm(obj) {
	let f = new FormData();
	Object.keys(obj).forEach((key) => f.append(key, obj[key]));
	return f;
}

function approveAndCmt(approveBtn) {
	let dtsg = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value,
	groupId = approveBtn.getAttribute("groupid"),
	postId = approveBtn.getAttribute("postid"),
	cmt = document.querySelector(`#cmt_post_${postId}`).value;
	yourId = require("CurrentUserInitialData").USER_ID || document.cookie.match(/c_user=([0-9]+)/)[1];

	fetch("https://www.facebook.com/ajax/groups/mall/approve/?dpr=1", {method: "POST", credentials: "include", body: convForm({"group_id": groupId, "message_ids": postId, "__user": yourId, "__a": 1, "fb_dtsg": dtsg, "nctr[_mod]": "pagelet_pending_queue"})}).then((e) => {
		if (String(e.status).match(/^2/g)) {
			let d = document.querySelector(`#mall_post_${postId}`);
			
			d.parentElement.removeChild(d);

			fetch("https://www.facebook.com/ufi/add/comment/?dpr=1", {method: "POST",credentials: "include", body: convForm({"ft_ent_identifier": postId, "comment_text": cmt, "av": yourId, "__user": yourId, "__a": 1, "fb_dtsg": dtsg, "source": 2, "client_id": "1489983090155:3363757627", "session_id": "84d81e4"})}).then((e) => {
				(String(e.status).match(/^2/g)) ? (alert("Done!"), window.open(`https://www.facebook.com/${postId}`, "_blank")) : alert("Something went wrong!");
			});
		} else {
			alert("Something went wrong!");
		}
	});
}

// How to use:
// Open pending page of your group (Ex: https://www.facebook.com/groups/j2team.community/pending/)
// Press F12 => Console => Paste Script => Run
// Fill in your cmt => Press btn "Approve & Cmt"
