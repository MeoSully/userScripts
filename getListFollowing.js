var people = prompt("Number of User you are following?") / 16 * 1000, scroll = document.getElementsByClassName("j6cq2"), height = scroll[0].scrollHeight, sdown = setInterval(function() {scroll[0].scrollBy(0, height);}, 500);
setTimeout(function() {clearInterval(sdown);document.write(Array.from(document.querySelectorAll(".FPmhX.notranslate.zsYNt")).map((id) => id.href).join("<br>"));}, people);
