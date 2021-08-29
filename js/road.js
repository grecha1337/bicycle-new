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
  roadParagraph.textContent = roadList[this.realIndex].roadText;
  roadTitle.textContent = roadList[this.realIndex].nameRoad;
});

sliderMobile.on("slideChange", function () {
  console.log(this.activeIndex);
  roadParagraph.textContent = roadList[this.realIndex].roadText;
  roadTitleMobile.textContent = roadList[this.realIndex].nameRoad;
});
