const gameStateEl = document.querySelector(".game-state");
const sumEl = document.querySelector("#sum");
const newCardBtn = document.querySelector("#new-card");
const newGameBtn = document.querySelector("#new-game");
const cardsContainer = document.querySelector(".cards-wrapper");
const aceValueContainer = document.querySelector(".ace-value-wrapper");
const aceBtnValue1 = document.querySelector("#ace-value1");
const aceBtnValue11 = document.querySelector("#ace-value11");

const cards = [
	{ name: "2_of_clubs", url: "img/2_of_clubs.png", value: 2 },
	{ name: "2_of_diamonds", url: "img/2_of_diamonds.png", value: 2 },
	{ name: "2_of_hearts", url: "img/2_of_hearts.png", value: 2 },
	{ name: "2_of_spades", url: "img/2_of_spades.png", value: 2 },

	{ name: "3_of_clubs", url: "img/3_of_clubs.png", value: 3 },
	{ name: "3_of_diamonds", url: "img/3_of_diamonds.png", value: 3 },
	{ name: "3_of_hearts", url: "img/3_of_hearts.png", value: 3 },
	{ name: "3_of_spades", url: "img/3_of_spades.png", value: 3 },

	{ name: "4_of_clubs", url: "img/4_of_clubs.png", value: 4 },
	{ name: "4_of_diamonds", url: "img/4_of_diamonds.png", value: 4 },
	{ name: "4_of_hearts", url: "img/4_of_hearts.png", value: 4 },
	{ name: "4_of_spades", url: "img/4_of_spades.png", value: 4 },

	{ name: "5_of_clubs", url: "img/5_of_clubs.png", value: 5 },
	{ name: "5_of_diamonds", url: "img/5_of_diamonds.png", value: 5 },
	{ name: "5_of_hearts", url: "img/5_of_hearts.png", value: 5 },
	{ name: "5_of_spades", url: "img/5_of_spades.png", value: 5 },

	{ name: "6_of_clubs", url: "img/6_of_clubs.png", value: 6 },
	{ name: "6_of_diamonds", url: "img/6_of_diamonds.png", value: 6 },
	{ name: "6_of_hearts", url: "img/6_of_hearts.png", value: 6 },
	{ name: "6_of_spades", url: "img/6_of_spades.png", value: 6 },

	{ name: "7_of_clubs", url: "img/7_of_clubs.png", value: 7 },
	{ name: "7_of_diamonds", url: "img/7_of_diamonds.png", value: 7 },
	{ name: "7_of_hearts", url: "img/7_of_hearts.png", value: 7 },
	{ name: "7_of_spades", url: "img/7_of_spades.png", value: 7 },

	{ name: "8_of_clubs", url: "img/8_of_clubs.png", value: 8 },
	{ name: "8_of_diamonds", url: "img/8_of_diamonds.png", value: 8 },
	{ name: "8_of_hearts", url: "img/8_of_hearts.png", value: 8 },
	{ name: "8_of_spades", url: "img/8_of_spades.png", value: 8 },

	{ name: "9_of_clubs", url: "img/9_of_clubs.png", value: 9 },
	{ name: "9_of_diamonds", url: "img/9_of_diamonds.png", value: 9 },
	{ name: "9_of_hearts", url: "img/9_of_hearts.png", value: 9 },
	{ name: "9_of_spades", url: "img/9_of_spades.png", value: 9 },

	{ name: "10_of_clubs", url: "img/10_of_clubs.png", value: 10 },
	{ name: "10_of_diamonds", url: "img/10_of_diamonds.png", value: 10 },
	{ name: "10_of_hearts", url: "img/10_of_hearts.png", value: 10 },
	{ name: "10_of_spades", url: "img/10_of_spades.png", value: 10 },

	{ name: "ace_of_clubs", url: "img/ace_of_clubs.png", value: 1, alternativeValue: 11 },
	{ name: "ace_of_diamonds", url: "img/ace_of_diamonds.png", value: 1, alternativeValue: 11 },
	{ name: "ace_of_hearts", url: "img/ace_of_hearts.png", value: 1, alternativeValue: 11 },
	{ name: "ace_of_spades", url: "img/ace_of_spades.png", value: 1, alternativeValue: 11 },

	{ name: "jack_of_clubs", url: "img/jack_of_clubs2.png", value: 10 },
	{ name: "jack_of_diamonds", url: "img/jack_of_diamonds2.png", value: 10 },
	{ name: "jack_of_hearts", url: "img/jack_of_hearts2.png", value: 10 },
	{ name: "jack_of_spades", url: "img/jack_of_spades2.png", value: 10 },

	{ name: "queen_of_clubs", url: "img/queen_of_clubs2.png", value: 10 },
	{ name: "queen_of_diamonds", url: "img/queen_of_diamonds2.png", value: 10 },
	{ name: "queen_of_hearts", url: "img/queen_of_hearts2.png", value: 10 },
	{ name: "queen_of_spades", url: "img/queen_of_spades2.png", value: 10 },

	{ name: "king_of_clubs", url: "img/king_of_clubs2.png", value: 10 },
	{ name: "king_of_diamonds", url: "img/king_of_diamonds2.png", value: 10 },
	{ name: "king_of_hearts", url: "img/king_of_hearts2.png", value: 10 },
	{ name: "king_of_spades", url: "img/king_of_spades2.png", value: 10 },
];

//Há uma lista de cartas e outra de valores para facilitar a diferenciação do valor optativo do Ás.

let cardsDrawn = [];
let cardsDrawnValue = [];
let sum = 0;
let isAlive = true;
let waitingForAce = false;
let randomCard;

function renderGameState(message) {
	gameStateEl.innerHTML = message;
}

function newGame() {
	cardsDrawn = [];
	cardsDrawnValue = [];
	sum = 0;
	isAlive = true;
	renderGameState("Draw your cards!");
	cardsContainer.innerHTML = "";
	sumEl.textContent = "";
	if (waitingForAce === true) {
		aceValueContainer.classList.toggle("invisible");
		waitingForAce = false;
	}
}

function getRandomCard() {
	let randomNum = Math.floor(Math.random() * cards.length);

	randomCard = cards[randomNum];

	if (cardsDrawn.includes(randomCard)) {
		getRandomCard();
	} else if (
		randomCard.name === "ace_of_clubs" ||
		randomCard.name === "ace_of_spades" ||
		randomCard.name === "ace_of_hearts" ||
		randomCard.name === "ace_of_diamonds"
	) {
		cardsDrawn.push(randomCard);
		waitingForAce = true;
		askAceValue();
		renderGame();
	} else {
		cardsDrawn.push(randomCard);
		cardsDrawnValue.push(randomCard.value);

		renderGame();
		if (cardsDrawn.length < 2) {
			getRandomCard();
		}
	}
}

function askAceValue() {
	renderGameState(`Choose your <span
	class="text-highlight">Ace</span> value!`);
	aceValueContainer.classList.toggle("invisible");
}

function sumCards() {
	sum = 0;

	for (let i = 0; i < cardsDrawnValue.length; i++) {
		sum += cardsDrawnValue[i];
	}
}

function renderGame() {
	let cardsDrawnContent = "";
	for (let i = 0; i < cardsDrawn.length; i++) {
		cardsDrawnContent += `<img src=${cardsDrawn[i].url}>`;
	}

	cardsContainer.innerHTML = cardsDrawnContent;

	if (cardsDrawnValue.length < 2 && waitingForAce === false) {
		getRandomCard();
	} else {
		sumCards();

		sumEl.textContent = sum;

		if (sum === 21) {
			renderGameState("You've got BlackJack!");
			isAlive = false;
		} else if (sum < 21) {
			renderGameState("Do you want to draw another card?");
		} else {
			renderGameState(`<span style="color:red">You lost!</span> Start a new game.`);
			isAlive = false;
		}
	}
}

newCardBtn.addEventListener("click", function () {
	if (isAlive === true && waitingForAce === false) {
		getRandomCard();
	} else if (waitingForAce === true) {
		renderGameState(`You need to choose the <span
		class="text-highlight">Ace</span> value!`);
	} else {
		renderGameState(
			`You can't draw another card. Start a <span style="color:green">new game.</span>`
		);
	}
});

newGameBtn.addEventListener("click", function () {
	newGame();
});

aceBtnValue1.addEventListener("click", function () {
	aceValueContainer.classList.toggle("invisible");
	waitingForAce = false;
	cardsDrawnValue.push(randomCard.value);
	renderGame();
});

aceBtnValue11.addEventListener("click", function () {
	aceValueContainer.classList.toggle("invisible");
	waitingForAce = false;
	cardsDrawnValue.push(randomCard.alternativeValue);
	renderGame();
});

///////////////// Flecha para seção sobre

const arrow = document.querySelector(".arrow");
const aboutSection = document.querySelector(".about");
arrow.addEventListener("click", function () {
	aboutSection.classList.toggle("invisible");
	arrow.classList.toggle("arrow-rotation");
});
