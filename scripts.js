const moon = document.querySelector(".moon-container");
const body = document.querySelector("body");

moon.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});
