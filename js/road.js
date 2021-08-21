const roadList = [
  {
    nameRoad: "Шоссе",
    roadText:
      "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
  },
  {
    nameRoad: "Грэвел",
    roadText:
      "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
  },
  {
    nameRoad: "TT",
    roadText:
      "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
  },
];

swiper.on("slideChange", function () {
  console.log(this.activeIndex);
  if (this.activeIndex === 3) {
    roadParagraph.textContent = roadList[1].roadText;
    roadTitle.textContent = roadList[1].nameRoad;
  }
  if (this.activeIndex === 4 || this.activeIndex === 1) {
    roadParagraph.textContent = roadList[2].roadText;
    roadTitle.textContent = roadList[2].nameRoad;
  }
  if (this.activeIndex === 5 || this.activeIndex === 2) {
    roadParagraph.textContent = roadList[0].roadText;
    roadTitle.textContent = roadList[0].nameRoad;
  }
});

sliderMobile.on("slideChange", function () {
  console.log(this.activeIndex);

  if (this.activeIndex === 2 ) {
    roadParagraph.textContent = roadList[1].roadText;
    roadTitleMobile.textContent = roadList[1].nameRoad;
  }

  if (this.activeIndex === 3|| this.activeIndex === 0) {
    roadParagraph.textContent = roadList[2].roadText;
    roadTitleMobile.textContent = roadList[2].nameRoad;
  }
  if (this.activeIndex === 4 || this.activeIndex === 1) {
    roadParagraph.textContent = roadList[0].roadText;
    roadTitleMobile.textContent = roadList[0].nameRoad;
  }
});
