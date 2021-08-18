const cardContainer = document.querySelector(".cards");
const btnHighway = document.querySelector(".bicycle__type-item-highway");
const btnGravel = document.querySelector(".bicycle__type-item-gravel");
const btnTT = document.querySelector(".bicycle__type-item-tt");
const initialCards = [
  {
    linkImg: "./images/Cervelo-Caledonia-5.png",
    name: "Cervelo Caledonia-5",
    link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
    type: "highway",
  },
  {
    linkImg: "./images/Cannondale-Systemsix-Himod.png",
    name: "Cannondale Systemsix Himod",
    link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
    type: "highway",
  },
  {
    linkImg: "./images/Trek-Domane-SL-7.png",
    name: "Trek Domane SL-7",
    link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
    type: "highway",
  },

  {
    linkImg: "./images/Cervelo Aspero-GRX-810.png",
    name: "Cervelo Aspero GRX 810",
    link: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE",
    type: "gravel",
  },
  {
    linkImg: "./images/SpecializedS-Works-Diverge.png",
    name: "Specialized S-Works Diverge",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9",
    type: "gravel",
  },
  {
    linkImg: "./images/Cannondale-Topstone-Lefty-3.png",
    name: "Cannondale Topstone Lefty 3",
    link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",
    type: "gravel",
  },

  {
    linkImg: "./images/Specialized-S-Works-Shiv.png",
    name: "Specialized S-Works Shiv",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9",
    type: "tt",
  },
  {
    linkImg: "./images/C-Timemachine-01-ONE.png",
    name: "BMC Timemachine 01 ONE",
    link: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835",
    type: "tt",
  },
  {
    linkImg: "./images/Cervelo-P-Series.png",
    name: "Cervelo P-Series",
    link: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q",
    type: "tt",
  },
];

function createCard(cardData) {
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate
    .querySelector(".cards__item")
    .cloneNode(true);
  cardElement.querySelector(".cards__item-link").textContent = cardData.name;
  cardElement.querySelector(".cards__item-link").href = cardData.link;
  cardElement.querySelector(".cards__item-img").src = cardData.linkImg;
  cardElement.querySelector(".cards__item-img").alt = cardData.type;

  return cardElement;
}

function initilTypeCards(type, cardList) {
  cardList.forEach(function (el) {
    if (el.type === type) {
      addCard(el, cardContainer, createCard);
    }
  });
}

function addCard(cardElement, cardContainer, callback) {
  const card = callback(cardElement);
  cardContainer.append(card);
}

initilTypeCards("highway", initialCards);

function clearContainer(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

btnHighway.addEventListener("click", function (e) {
  clearContainer(cardContainer);
  setActiveElement(e, "bicycle__type-item", "bicycle__type-item-active");
  initilTypeCards("highway", initialCards);
});

btnGravel.addEventListener("click", function (e) {
  clearContainer(cardContainer);
  setActiveElement(e, "bicycle__type-item", "bicycle__type-item-active");
  initilTypeCards("gravel", initialCards);
});

btnTT.addEventListener("click", function (e) {
  clearContainer(cardContainer);
  setActiveElement(e, "bicycle__type-item", "bicycle__type-item-active");
  initilTypeCards("tt", initialCards);
});

function setActiveElement(e, elemntGroup, nameActivClass) {
  const items = document.querySelectorAll(`.${elemntGroup}`);
  const target = e.target;
  for (let i = 0; i < items.length; i++) {
    if (target.classList.contains(elemntGroup)) {
      items[i].classList.remove(nameActivClass);
      target.classList.add(nameActivClass);
    }
  }
}