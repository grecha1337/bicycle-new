const switchers = document.querySelectorAll(".switch__checkbox");
const header = document.querySelector(".header");
const headerLink = document.querySelectorAll(".header-menu__item-link");
const aboutBicycle = document.querySelector(".about-bicycle");
const aboutBicycleTitle = document.querySelector(".about-bicycle__title");
const aboutBicycleParagraph = document.querySelector(".about-bicycle__paragraph");
const aboutBicycleBrand = document.querySelector(".about-bicycle__brand");
const eddyMerckx = document.querySelector(".eddy-merckx");
const eddyMerckxQuote = document.querySelector(".eddy-merckx__quote");
const eddyMerckxAuthor = document.querySelector(".eddy-merckx__author");
const eddyMerckxProfession = document.querySelector(".eddy-merckx__profession");
const road = document.querySelector(".road");
const roadTitle = document.querySelector(".road__title");
const roadTitleMobile = document.querySelector(".road__title-mobile");
const roadParagraph = document.querySelector(".road__paragraph");
const sliderButton = document.querySelectorAll(".slider__button");
const bicycle = document.querySelector(".bicycle");
const bicycleTitle = document.querySelector(".bicycle__title");
const bicycleTypeItem = document.querySelectorAll(".bicycle__type-item");
const cardsItemLink = document.querySelectorAll(".cards__item-link");
const workout = document.querySelector(".workout");
const workoutTitle = document.querySelector(".workout__title");
const workoutAboutTraining = document.querySelector(".workout__about-training");
const workoutAppLink = document.querySelectorAll(".workout__app-link");
const footer = document.querySelector(".footer");
const footerTitle = document.querySelector(".footer__title");
const input = document.querySelector(".input");
const footerCopyright = document.querySelector(".footer__copyright");
const switchRound = document.querySelector(".switch__round");
const bicycleSelect = document.querySelector(".bicycle__select");

switchers.forEach(function(switcher) {
  // Вешаем событие клик
  switcher.addEventListener("click", function () {
    switchTheme(header, "header_theme_dark");
    switchTheme(aboutBicycle, "about-bicycle_theme_dark");
    switchTheme(aboutBicycleTitle, "about-bicycle__title_theme_dark");
    switchTheme(aboutBicycleParagraph, "about-bicycle__paragraph_theme_dark");
    switchTheme(aboutBicycleBrand, "about-bicycle__brand_theme_dark");
    switchTheme(eddyMerckx, "eddy-merckx_theme_dark");
    switchTheme(eddyMerckxQuote, "eddy-merckx__quote_theme_dark");
    switchTheme(eddyMerckxAuthor, "eddy-merckx__author_theme_dark");
    switchTheme(eddyMerckxProfession, "eddy-merckx__profession_theme_dark");
    switchTheme(road, "road_theme_dark");
    switchTheme(roadTitle, "road__title_theme_dark");
    switchTheme(roadTitleMobile, "road__title-mobile_theme_dark");
    switchTheme(roadParagraph, "road__paragraph_theme_dark");
    sliderButton.forEach(function (elemet) {
      switchTheme(elemet, "slider__button_theme_dark");
    });
    switchTheme(bicycle, "bicycle_theme_dark");
    switchTheme(bicycleTitle, "bicycle__title_theme_dark");
    bicycleTypeItem.forEach(function (elemet) {
      switchTheme(elemet, "bicycle__type-item_theme_dark");
    });
    cardsItemLink.forEach(function (elemet) {
      switchTheme(elemet, "cards__item-link_theme_dark");
    });
    switchTheme(workout, "workout_theme_dark");
    switchTheme(workoutTitle, "workout__title_theme_dark");
    switchTheme(workoutAboutTraining, "workout__about-training_theme_dark");
    workoutAppLink.forEach(function (elemet) {
      switchTheme(elemet, "workout__app-link_theme_dark");
    });
    switchTheme(footer, "footer_theme_dark");
    switchTheme(footerTitle, "footer__title_theme_dark");
    switchTheme(input, "input_theme_dark");
    switchTheme(footerCopyright, "footer__copyright_theme_dark");
    switchTheme(switchRound, "switch__round_theme_dark");
    headerLink.forEach(function (elemet) {
      switchTheme(elemet, "header-menu__item-link_theme_dark");
    });

    switchTheme(bicycleSelect, "bicycle__select_theme_dark");
  });
})



function switchTheme(element, themeName) {
  element.classList.toggle(themeName);
}
