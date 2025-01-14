let box = document.getElementById("box");
let moveBox = 10;

window.addEventListener("load", () => {
  box.style.position = "absolute";
  box.style.left = 0;
  box.style.top = 0;
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      box.style.left = parseInt(box.style.left) - moveBox + "px";
      break;
    case "ArrowRight":
      box.style.left = parseInt(box.style.left) + moveBox + "px";
      break;
    case "ArrowUp":
      box.style.top = parseInt(box.style.top) - moveBox + "px";
      break;
    case "ArrowDown":
      box.style.top = parseInt(box.style.top) + moveBox + "px";
      break;
  }
});
