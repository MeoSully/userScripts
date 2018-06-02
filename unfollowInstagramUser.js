var people = prompt("Number of User you are following?") / 16 * 1000;
var scroll = document.getElementsByClassName("j6cq2");
var sdown  = setInterval(() => {scroll[0].scrollBy(0, scroll[0].scrollHeight);}, 500);
setTimeout(function() {clearInterval(sdown);startLoop();}, people);
function startLoop() {
    var loop = setInterval(function() {
        var userBtn = document.getElementsByClassName("_5f5mN jIbKX KUBKM yZn4P");
        if (userBtn.length !== 0) {
            userBtn[0].click();
            console.log("Unfollow: " + ((userBtn[0].parentElement).parentElement).parentElement.getElementsByClassName("FPmhX notranslate zsYNt")[0].getAttribute("href").replace(/\//g, ""));
        } else {
            clearInterval(loop);
            console.log("%cDone!", "font-size: 40px;color: #1f74c1")
        }
    }, 500);
}
