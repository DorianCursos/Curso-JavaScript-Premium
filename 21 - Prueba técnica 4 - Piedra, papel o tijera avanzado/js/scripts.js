/* 
- Localizar los elementos implicados del DOM
- Crear los datos del programa necesarios
FLUJO DEL PROGRAMA
    - Detectar dónde hemos click
    - Guardar nuestra jugada
    - Generar una jugada aleatoria para el ordenador y guardarla
    - Comparar jugadas
    - Mostrar resultado
    - Asignar puntos
*/

const gameItemsElement = document.getElementById('game-items');
const userPickedElement = document.getElementById('user-picked');
const pcPickedElement = document.getElementById('pc-picked');
const resultElement = document.getElementById('game-result');
const gameResultsElement = document.getElementById('game-results');
const pointsUserElement = document.getElementById('points-user');
const pointsPcElement = document.getElementById('points-pc');
const pickedUserImageElement = document.getElementById('picked-user-image');
const pickedPcImageElement = document.getElementById('picked-pc-image');
const playAgainElement = document.getElementById('play-again');
const modalElement = document.getElementById('modal');
const buttonRulesElement = document.getElementById('button-rules');

const gameRules = {
  rock: {
    scissors: true,
    lizard: true,
    paper: false,
    spock: false
  },
  scissors: {
    paper: true,
    lizard: true,
    rock: false,
    spock: false
  },
  paper: {
    rock: true,
    spock: true,
    lizard: false,
    scissors: false
  },
  lizard: {
    paper: true,
    spock: true,
    scissors: false,
    rock: false
  },
  spock: {
    rock: true,
    scissors: true,
    paper: false,
    lizard: false
  }
};

const gameImages = {
  rock: './assets/images/icon-rock.svg',
  paper: './assets/images/icon-paper.svg',
  scissors: './assets/images/icon-scissors.svg',
  lizard: './assets/images/icon-lizard.svg',
  spock: './assets/images/icon-spock.svg'
};

const gameOptions = ['rock', 'paper', 'scissors'];

let userSelection = null;
let pcSelection = null;
let userPoints = 0;
let pcPoints = 0;
let showResults = false;

const updateScore = () => {
  pointsUserElement.textContent = userPoints;
  pointsPcElement.textContent = pcPoints;
};

const changeScreen = () => {
  if (showResults) {
    gameItemsElement.classList.add('hide');
    gameResultsElement.classList.remove('hide');
  } else {
    gameItemsElement.classList.remove('hide');
    gameResultsElement.classList.add('hide');
  }
};

const printResultsImage = () => {
  const userOldClass = pickedUserImageElement.parentElement.classList[2];
  const pcOldClass = pickedPcImageElement.parentElement.classList[2];

  pickedUserImageElement.src = gameImages[userSelection];
  pickedPcImageElement.src = gameImages[pcSelection];

  if (userOldClass && pcOldClass) {
    pickedUserImageElement.parentElement.classList.replace(
      userOldClass,
      `game-item--${userSelection}`
    );
    pickedPcImageElement.parentElement.classList.replace(pcOldClass, `game-item--${pcSelection}`);
  } else {
    pickedUserImageElement.parentElement.classList.add(`game-item--${userSelection}`);
    pickedPcImageElement.parentElement.classList.add(`game-item--${pcSelection}`);
  }

  showResults = true;

  changeScreen();
};

const checkWinner = () => {
  if (userSelection === pcSelection) {
    resultElement.textContent = 'TIE';
    return;
  }

  if (gameRules[userSelection][pcSelection]) {
    resultElement.textContent = 'YOU WIN';
    userPoints++;
  } else {
    resultElement.textContent = 'YOU LOSE';
    pcPoints++;
  }

  updateScore();
};

const generateRandomPlay = () => {
  const randomPlay = Math.floor(Math.random() * gameOptions.length);
  const pcPlay = gameOptions[randomPlay];
  pcSelection = pcPlay;
  checkWinner();
  printResultsImage();
};

const setUserSelection = item => {
  userSelection = item;
  generateRandomPlay();
};

const showModal = () => {
  modalElement.classList.add('modal--show');
};

const hideModal = () => {
  modalElement.classList.remove('modal--show');
};

if (document.body.dataset.mode === 'advanced') {
  gameOptions.push('lizard', 'spock');
}

gameItemsElement.addEventListener('click', ev => {
  if (!ev.target.classList.contains('game-item')) return;
  setUserSelection(ev.target.dataset.item);
});

playAgainElement.addEventListener('click', () => {
  showResults = false;
  changeScreen();
});

buttonRulesElement.addEventListener('click', showModal);

modalElement.addEventListener('click', hideModal);
