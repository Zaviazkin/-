//DOM - Document Object Model

const switchButton = document.getElementById("switch-btn");
const header = document.querySelector("header");
const content = document.querySelector(".content");
const buttonLight = document.querySelector("button");
const body = document.querySelector("body");

switchButton.addEventListener("click", () => {
  header.classList.toggle("darkHeader");
  content.classList.toggle("dark");
  body.classList.toggle("darkBody");
  switchButton.classList.toggle("darkButton");
  switchButton.classList.toggle("switchButton");
});
