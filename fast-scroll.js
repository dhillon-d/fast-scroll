document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
window.addEventListener("focus", resetAlt);
// document.addEventListener("wheel", fastScroll);
let allElements = document.querySelectorAll("*");
allElements.forEach((element) => {
  if (element.scrollHeight > element.clientHeight) {
    element.addEventListener("wheel", fastScroll);
  }
});

let map = {};

function onKeyDown(e) {
  if (e.altKey) {
    map[e.code] = true;
  }
}

function onKeyUp(e) {
  if (!e.altKey) {
    map[e.code] = false;
  }
}

function fastScroll(e) {
  if (map["AltLeft"]) {
    e.scrollBy(0, e.deltaY * 3);
  }
}

// When user switches back to window, refresh alt key
function resetAlt(e) {
  if (map["AltLeft"]) {
    map["AltLeft"] = false;
  }
}
