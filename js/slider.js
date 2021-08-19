const swiper = new Swiper(".road__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 40,
});

const cardsMobile = new Swiper(".bicycle__cards-mobile", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  centeredSlides: true,
  observer: true,
  observeParents: true,
});

const sliderMobile = new Swiper(".slider-mobile", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-mobile__button-next",
    prevEl: ".slider-mobile__button-prev",
  },
  slidesPerView: 1,
});
