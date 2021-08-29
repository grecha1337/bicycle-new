const btnCloseMenu = document.querySelector(".header-menu__button-close");
const hamburgerMenu = document.querySelector(".header__button-hamburger");
const headerMenu = document.querySelector(".header-menu");
const headerList = document.querySelector(".header-menu__list");
const headerTheme = document.querySelector(".header__theme");

const headerMenuContainer = document.querySelectorAll(".header-menu");
btnCloseMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu_opened");
});

hamburgerMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu_opened");
});

