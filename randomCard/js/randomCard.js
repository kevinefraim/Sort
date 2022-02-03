const cards = [];

//funcion que crea el mazo de cartas
const createDeck = () => {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const palos = ["Hearts", "Spades", "Diamonds", "Clubs"];

  for (let v = 0; v < values.length; v++) {
    for (let p = 0; p < palos.length; p++) {
      const valor = values[v];
      const palo = palos[p];

      cards.push({ valor, palo });
    }
  }

  return cards;
};

createDeck();

//funcion que elige carta del mazo aleatoriamente
const randomCard = () => {
  const random = Math.floor(Math.random() * 51);

  const cardValor = cards[random].valor;
  const cardPalo = cards[random].palo;

  let entity;
  cardPalo === "Diamonds"
    ? (entity = "&diams;")
    : (entity = `&${cardPalo.toLowerCase()};`);

  const cardContainer = document.querySelector("#card");
  cardContainer.classList.add("card", cardPalo.toLowerCase());
  cardContainer.innerHTML = `
    <span>${entity} </span>
    <p class="text-center">
    ${cardValor}
    </p>
    <div class="d-flex justify-content-end"><span>
    ${entity}
   </span></div>`;
};

randomCard();

//funcion para generar otra random card con boton
const addRandom = () => {
  randomCard();
};

//ejecuta la funcion randomCard cada 10 seg
setInterval(randomCard, 10000);
