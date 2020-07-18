const moonContainer = document.querySelector(".moon-container");
const moon = document.querySelector(".moon-container div");
const body = document.querySelector("body");
const mode = document.querySelector("#mode");

document.documentElement.setAttribute("data-theme", "light");

mode.addEventListener("click", function () {
  let attribute = document.documentElement.getAttribute("data-theme");
  if (attribute === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

// moonContainer.addEventListener("click", function () {
//   let attribute = document.documentElement.getAttribute("data-theme");
//   if (attribute === "light") {
//     document.documentElement.setAttribute("data-theme", "dark");
//     moon.id = "";
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     moon.id = "sun";
//   }
// });
