var time = prompt("Nhập thời gian giới hạn unblock (Phút):") * 60 * 1000;
var unblock = setInterval((start = document.getElementsByClassName("uiLinkButtonInput")[0]) => {start[0].click();}, 3000);
var confirm = setInterval((cfm = document.getElementsByClassName("_42ft _4jy0 layerConfirm uiOverlayButton _4jy3 _4jy1 selected _51sy")[0]) => {cfm[0].click();}, 1000);
setTimeout(function(){clearInterval(unblock);clearInterval(confirm);alert("Developed by LightingStorm");}, time);
