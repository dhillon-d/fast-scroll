document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
window.addEventListener("focus", resetAlt);
let allElements = document.querySelectorAll("*");
allElements.forEach((element) => {
  if (element.scrollHeight > element.clientHeight) {
    element.addEventListener("wheel", (event) => {
      fastScroll(element, event);
    });
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

function fastScroll(element, event) {
  let increatedDeltaY = event.deltaY * 3;
  if (map["AltLeft"]) {
    element.scrollTop += increatedDeltaY;
  }
}

// When user switches back to window, refresh alt key
function resetAlt(e) {
  if (map["AltLeft"]) {
    map["AltLeft"] = false;
  }
}
