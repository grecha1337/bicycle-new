const btnCloseMenu = document.querySelector(".header-menu__button-close");
const hamburgerMenu = document.querySelector(".header-menu__button-hamburger");
const headerMenu = document.querySelector(".header-menu");
const headerList = document.querySelector(".header-menu__list");
const headerTheme = document.querySelector(".header__theme");

const headerMenuContainer = document.querySelectorAll(".header-menu");
btnCloseMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu_opened");
  btnCloseMenu.style.display = "none";
  headerList.style.display = "none";
  headerTheme.style.display = "none";
  hamburgerMenu.style.display = "block";

});

hamburgerMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu_opened");
  hamburgerMenu.style.display = "none";
  btnCloseMenu.style.display = "block";
  headerList.style.display = "flex";
  headerTheme.style.display = "flex";
});

