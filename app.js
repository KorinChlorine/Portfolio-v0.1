const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
});
