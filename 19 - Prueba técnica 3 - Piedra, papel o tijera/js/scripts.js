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
const resultElement = document.getElementById('result');
const pointsUserElement = document.getElementById('points-user');
const pointsPcElement = document.getElementById('points-pc');

const gameRules = {
  paper: {
    rock: true,
    scissors: false
  },
  scissors: {
    paper: true,
    rock: false
  },
  rock: {
    scissors: true,
    paper: false
  }
};

const gameOptions = ['rock', 'paper', 'scissors'];
let userSelection = null;
let pcSelection = null;
let userPoints = 0;
let pcPoints = 0;

const updateScore = () => {
  pointsUserElement.textContent = userPoints;
  pointsPcElement.textContent = pcPoints;
};

const printChoices = () => {
  userPickedElement.textContent = userSelection.toUpperCase();
  pcPickedElement.textContent = pcSelection.toUpperCase();
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
  printChoices();
};

const setUserSelection = item => {
  userSelection = item;
  generateRandomPlay();
};

gameItemsElement.addEventListener('click', ev => {
  if (!ev.target.classList.contains('game-item')) return;
  setUserSelection(ev.target.dataset.item);
});
