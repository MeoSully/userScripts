var people = prompt("Hãy nhập số người bạn đang theo dõi") / 16 * 1000;
var scroll = document.getElementsByClassName("_gs38e");
var sdown  = setInterval(() => {scroll[0].scrollBy(0, scroll[0].scrollHeight);}, 500);
setTimeout(function() {clearInterval(sdown);startLoop();}, people);
function startLoop() {
    var loop = setInterval(function() {
        var userBtn = document.getElementsByClassName("_qv64e    _t78yp    _4tgw8     _njrw0");
        if (userBtn.length !== 0) {
            userBtn[0].click();
            console.log("Unfollow: " + ((userBtn[0].parentElement).parentElement).parentElement.getElementsByClassName("_9irns _pg23k _jpwof _gvoze")[0].getAttribute("href").replace(/\//g, ""));
        } else {
            clearInterval(loop);
            console.log("%cDone!", "font-size: 40px;color: #1f74c1")
        }
    }, 500);
}
