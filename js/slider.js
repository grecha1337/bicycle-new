const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
  slidesPerView : 2,
  spaceBetween: 40, 
});

const cardsMobile = new Swiper('.cards-mobile', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView : 1,
  pagination : {
    el: '.swiper-pagination'
  },
  observer: true,
  observerParents: true,
  observerSliderChildren: true,
});


const sliderMobile = new Swiper('.slider-mobile', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.slider-mobile__button-next',
    prevEl: '.slider-mobile__button-prev',
  },
  slidesPerView : 1,
});
