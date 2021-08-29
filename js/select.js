const selectBicycle = document.querySelector(".bicycle__select");
const cardTemplateMobile = document.querySelector("#cardMobile").content;
const cardContainerMobile = document.querySelector(".cards-mobile__inner");
selectBicycle.addEventListener("change", () => {
  clearContainer(cardContainerMobile);
  switch (selectBicycle.value) {
    case "tt":
      initilTypeCards("tt", cardList, cardContainerMobile, createCardMobile);
      console.log("tt");
      break;
    case "gravel":
      initilTypeCards(
        "gravel",
        cardList,
        cardContainerMobile,
        createCardMobile
      );
      console.log("gravel");
      break;
    case "highway":
      initilTypeCards(
        "highway",
        cardList,
        cardContainerMobile,
        createCardMobile
      );
      break;
  }
});

function createCardMobile(cardData) {
  const cardElement = cardTemplateMobile
    .querySelector(".cards-mobile__slide")
    .cloneNode(true);
  cardElement.querySelector(".cards-mobile__link").textContent = cardData.name;
  cardElement.querySelector(".cards-mobile__link").href = cardData.link;
  cardElement.querySelector(".cards-mobile__img").src = cardData.linkImg;
  cardElement.querySelector(".cards-mobile__img").alt = cardData.type;

  return cardElement;
}

initilTypeCards("highway", cardList, cardContainerMobile, createCardMobile);
