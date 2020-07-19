const body = document.querySelector("body");
const mode = document.querySelector("#mode");
const bio = document.querySelector("#bio");

let speed = 100;
typeEffect(bio, speed);

document.documentElement.setAttribute("data-theme", "light");

mode.addEventListener("click", function () {
  let attribute = document.documentElement.getAttribute("data-theme");
  if (attribute === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}
window
  .getComputedStyle(document.querySelector(".bio"), ":after")
  .setProperty("display", "none");
