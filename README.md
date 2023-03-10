# Game landing page

Esta é uma solução para o desafio [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw).

## :books:Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)

## Visão geral

### O desafio

Usuários poderão:

- Visualizar de maneira otimizada o site conforme o tamanho da tela do dispositivo
- Ver os estados diferentes dos elementos interativos na página

### Screenshot

#### Mobile (375px)

![Screenshot 2023-03-10 at 19-17-22 Loopstudios](https://user-images.githubusercontent.com/115735167/224438947-0ed6696e-5d27-4119-8186-fd5af6e0ed3e.png)![Screenshot 2023-03-10 at 19-17-54 Loopstudios](https://user-images.githubusercontent.com/115735167/224438994-9ffa2b72-74d7-4619-900d-133dc7e44168.png)![Screenshot 2023-03-10 at 19-18-19 Loopstudios](https://user-images.githubusercontent.com/115735167/224439010-7163f872-d059-457b-bf94-d354941a5ef1.png)

#### Desktop (1440px)
![Screenshot 2023-03-10 at 19-18-48 Loopstudios](https://user-images.githubusercontent.com/115735167/224439118-39e040c6-5954-4b41-8b1d-2041816dbbd7.png)
![Screenshot 2023-03-10 at 19-19-14 Loopstudios](https://user-images.githubusercontent.com/115735167/224439126-9c01185f-b2aa-41a7-82a5-7eb0a062af55.png)

### Links

- Solução URL: [Loopstudios](https://luc4sleite.github.io/game-landing-page/)
- Live Site URL: [Loopstudios on Vercel](https://game-landing-page-seven.vercel.app)

## Meu processo

### Construído com

- Tags HTML5 semânticas
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### O que eu aprendi

Aprendi a sobrepor um texto em uma imagem utilizando propriedades do CSS como Flexbox

A criar uma array contendo as imagens e os títulos através do JS 

```js
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
```

E a invocar uma função dependendo do tamanho da tela 
```js
function ajustarTela() {
  var larguraTela = window.innerWidth;
  
  if(larguraTela < 1440) {
    mostraAlgo();
  } else {
  mostraOutraCoisa();
  }
}
```

### Desenvolvimento contínuo

Este projeto demandou muito conhecimento em responsividade e manipulação do DOM, por isso estou focado em aprimorar meus conhecimentos em CSS Flexbox e Grid e também em JavaScript para que eu consiga dar mais dinamismo a página
