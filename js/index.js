function ajustarTela() {
  var larguraTela = window.innerWidth;

  if (larguraTela < 1440) {
    const games = [
      {
        imageUrl: "./images/mobile/image-elden-ring.jpg",
        title: "Elden Ring",
      },
      {
        imageUrl: "./images/mobile/image-mwii.jpg",
        title: "Call of Duty: Modern Warfare 2",
      },
      {
        imageUrl: "./images/mobile/image-fifa.jpg",
        title: "FIFA 23",
      },
      {
        imageUrl: "./images/mobile/image-gtav.jpg",
        title: "GTA V",
      },
      {
        imageUrl: "./images/mobile/image-fortnite.jpg",
        title: "Fortnite",
      },
      {
        imageUrl: "./images/mobile/image-minecraft.jpg",
        title: "Minecraft",
      },
      {
        imageUrl: "./images/mobile/image-overwatch.jpg",
        title: "Overwatch 2",
      },
      {
        imageUrl: "./images/mobile/image-valorant.jpg",
        title: "Valorant",
      },
    ];

    window.addEventListener("load", main);

    function main() {
      const listGamesElement = document.querySelector(".jogos__lista");
      games.forEach((game) => {
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
        itemContainer.appendChild(itemTitle);

        itemList.appendChild(itemContainer);

        listGamesElement.appendChild(itemList);
      });

      const itemList = document.createElement("li");
      const itemButton = document.createElement("button");

      itemButton.textContent = "Veja mais";
      itemButton.classList.add("jogos__botao");

      itemButton.addEventListener("click", onClickSeeAll);

      itemList.appendChild(itemButton);

      listGamesElement.appendChild(itemList);
    }

    function onClickSeeAll() {
      console.log("Fui clicado");
    }

    const buttonMenu = document.querySelector(".cabecalho__menu-botao");
    const buttonClose = document.querySelector(".cabecalho__menu-close");

    buttonMenu.addEventListener("click", onClickMenu);

    buttonClose.addEventListener("click", onClickClose);

    function onClickMenu() {
      const menu = document.querySelector(".menu__container");
      menu.classList.remove("menu__container-desativado");
    }

    function onClickClose() {
      const menu = document.querySelector(".menu__container");
      menu.classList.add("menu__container-desativado");
    }
  } else {
    const games = [
      {
        imageUrl: "./images/desktop/image-elden-ring.jpg",
        title: "Elden Ring",
      },
      {
        imageUrl: "./images/desktop/image-mwii.jpg",
        title: "Call of Duty: Modern Warfare 2",
      },
      {
        imageUrl: "./images/desktop/image-fifa.jpg",
        title: "FIFA 23",
      },
      {
        imageUrl: "./images/desktop/image-gtav.jpg",
        title: "GTA V",
      },
      {
        imageUrl: "./images/desktop/image-fortnite.jpg",
        title: "Fortnite",
      },
      {
        imageUrl: "./images/desktop/image-minecraft.jpg",
        title: "Minecraft",
      },
      {
        imageUrl: "./images/desktop/image-overwatch.jpg",
        title: "Overwatch 2",
      },
      {
        imageUrl: "./images/desktop/image-valorant.jpg",
        title: "Valorant",
      },
    ];

    window.addEventListener("load", main);

    function main() {
      const listGamesElement = document.querySelector(".jogos__lista");
      games.forEach((game) => {
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
        itemContainer.appendChild(itemTitle);

        itemList.appendChild(itemContainer);

        listGamesElement.appendChild(itemList);
      });
    }
  }
}

ajustarTela();

window.addEventListener("resize", ajustarTela);
window.addEventListener("load", ajustarTela);
