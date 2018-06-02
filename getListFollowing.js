var people = prompt("Number of User you are following?") / 16 * 1000;
var scroll = document.getElementsByClassName("j6cq2");
var height = scroll[0].scrollHeight;
var sdown  = setInterval(function() {scroll[0].scrollBy(0, height);}, 500);
setTimeout(function() {clearInterval(sdown);document.write(Array.from(document.querySelectorAll(".FPmhX.notranslate.zsYNt")).map((id) => id.href).join("<br>"));}, people);
