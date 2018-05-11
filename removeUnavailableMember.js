var accessToken = window.prompt("Nhập Access Token của bạn: ");
var groupId = "";
var xhr = new XMLHttpRequest();
xhr.open("GET", document.URL, false);
xhr.onreadystatechange = function() {groupId = this.responseText.match(/groupID:[0-9]+/g)[0].replace("groupID:", "");setTimeout(() => {rmMember();}, 2000);}
xhr.send(null);
function rmMember() {
    Array.from(document.getElementsByClassName("_42ft _4jy0 _62qi _60rl _p _4jy3 _517h _51sy")).forEach((element) => {
        let id = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id").replace("unavailable_", "");
        var rm = new XMLHttpRequest();
        rm.open("POST", `https://graph.facebook.com/${groupId}/members?method=delete&member=${id}&access_token=${accessToken}`, false);
        rm.send(null);
        console.log(`Removed Member: ${id}`);
    });
}
console.log(`Group ID: ${groupId}`);
