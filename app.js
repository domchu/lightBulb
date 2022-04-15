let bulb = document.querySelector(".bulb");
let firstBtn = document.querySelector(".first-btn");
let secondBtn = document.querySelector(".second-btn");

secondBtn.addEventListener("click", () => {
  bulb.src = "images/pic_bulboff.gif";
});
firstBtn.addEventListener("click", () => {
  bulb.src = "images/pic_bulbon.gif";
});
