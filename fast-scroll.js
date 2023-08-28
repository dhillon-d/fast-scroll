document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
document.addEventListener("wheel", fastScroll);
window.addEventListener("focus", resetAlt);

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
    window.scrollBy(0, e.deltaY * 3);
  }
}

function resetAlt(e) {
  if (map["AltLeft"]) {
    map["AltLeft"] = false;
  }
}
