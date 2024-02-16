const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('password-length');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const allowedCharacters =
  'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-.,!"·$%&/()=?{}';

let passwordLength = rangeElement.value;
lengthTextElement.textContent = passwordLength;

const setPasswordLenght = event => {
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};

const printPassword = password => {
  passwordElement.value = password;
};

const generatePassword = () => {
  let newPassword = '';
  for (let index = 0; index < passwordLength; index++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    newPassword += randomCharacter;
  }
  printPassword(newPassword);
};

rangeElement.addEventListener('input', setPasswordLenght);

buttonGenerateElement.addEventListener('click', generatePassword);
