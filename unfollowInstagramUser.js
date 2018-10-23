var people = prompt("Number of User you are following?") / 16 * 1000, scroll = document.getElementsByClassName("j6cq2"), sdown = setInterval(() => {scroll[0].scrollBy(0, scroll[0].scrollHeight);}, 500);
setTimeout(function() {
	clearInterval(sdown);
	let loop = setInterval(function() {
        let userBtn = document.getElementsByClassName("_5f5mN jIbKX KUBKM yZn4P");
        (userBtn.length !== 0) ? (userBtn[0].click(), console.log("Unfollow: " + userBtn[0].parentElement.parentElement.parentElement.getElementsByClassName("FPmhX notranslate zsYNt")[0].getAttribute("href").replace(/\//g, ""))) : (clearInterval(loop), console.log("%cDone!", "font-size: 40px;color: #1f74c1"));
    }, 500);
}, people);
