var people = prompt("Number of User you are following?") / 16 * 1000;
var scroll = document.getElementsByClassName("_gs38e");
var height = scroll[0].scrollHeight;
var sdown  = setInterval(function() {scroll[0].scrollBy(0, height);}, 500);
setTimeout(function() {clearInterval(sdown);document.write(Array.from(document.querySelectorAll("._2g7d5.notranslate._o5iw8")).map(id => {return id.href;}).join("<br>"));}, people);
