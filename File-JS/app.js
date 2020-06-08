var menuNav = document.querySelector(".list-links");
var body = document.querySelector("body");
var seeker = document.querySelector(".container-seeker-mobil");


document.querySelector(".hamburguer-icon").addEventListener("click", function () {
  menuNav.classList.add("active");
  body.style.overflow = "hidden";
});
document.querySelector(".icon-exit").addEventListener("click" , function () {
  menuNav.classList.remove("active");
  body.removeAttribute("style");
});
document.querySelector(".list-links").addEventListener("click" , function () {
  menuNav.classList.remove("active");
  body.removeAttribute("style");
});

document.querySelector(".search-icon").addEventListener("click", function () {
  seeker.classList.add("active");
  body.style.overflow = "hidden";
});
document.querySelector(".exit-seeker").addEventListener("click", function() {
  seeker.classList.remove("active");
  body.removeAttribute("style");
});


$(".carousel").carousel({
  interval: 3000,
  keyboard: true,
  pauser: true,
  ride: true,
  wrap: true,
  touch: true,
});
