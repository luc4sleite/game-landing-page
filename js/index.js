const games = [{
    imageUrl: "./images/mobile/image-elden-ring.jpg",
    title: "Elden Ring"
  },
  {
    imageUrl: "./images/mobile/image-mwii.jpg",
    title: "Call of Duty: Modern Warfare 2"
  },
  {
    imageUrl: "./images/mobile/image-fifa.jpg",
    title: "FIFA 23"
  },
];

window.addEventListener("load", main);

function main() {
  const listGamesElement = document.querySelector(".jogos__lista");
  games.forEach(game => {
    const itemList = document.createElement("li");
    const itemContainer = document.createElement("div");
    const itemImage = document.createElement("img");
    const itemTitle = document.createElement("p");

    itemImage.src = game.imageUrl;
    itemImage.alt = game.title;
    itemImage.classList.add("jogos__imagem");

    itemTitle.innerHTML = game.title;
    itemTitle.classList.add("jogos__texto");

    itemContainer.classList.add("itens__container", "w-100");

    itemList.classList.add("jogos__itens", "w-100");


    itemContainer.appendChild(itemImage);
    // itemContainer.appendChild(itemTitle);

    itemList.appendChild(itemContainer);

    listGamesElement.appendChild(itemList);

  })
}