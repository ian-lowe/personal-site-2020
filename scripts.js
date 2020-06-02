const moon = document.querySelector(".moon-container");
const body = document.querySelector("body");

document.documentElement.setAttribute("data-theme", "light");

moon.addEventListener("click", function () {
  let attribute = document.documentElement.getAttribute("data-theme");
  console.log(attribute);
  if (attribute === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
