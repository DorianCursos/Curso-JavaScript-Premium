const stringsData = {
  phrase: 'El conocimiento es poder, pero la práctica es la clave para desbloquearlo.',
  firstFloor: {
    //Sólo vocales
    vowels: []
  },
  secondFloor: {
    //Sólo consonantes (sin espacios, sin puntos y sin comas)
    consonants: []
  },

  thirdFloor: {
    //El valor asciicode de cada letra
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    asciiCode: []
  },
  fourthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  fifthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y así sucesivamente
    // Si el caracter es un espacio u otro caracter que no sea una letra lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const regexVowels = /[aeiouáéíóú]/i;
const regexLetters = /[a-z]/i;
const consonants = 'bcdfghjklmnñpqrstvwxyz';
const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
const phraseOnlyLetters = stringsData.phrase.replaceAll(/[,.]/g, '');
const phraseToArray = phraseOnlyLetters.split(' ');

for (const letter of stringsData.phrase) {
  if (regexVowels.test(letter)) {
    stringsData.firstFloor.vowels.push(letter);
  } else if (regexLetters.test(letter) && !regexVowels.test(letter)) {
    stringsData.secondFloor.consonants.push(letter);
  }

  stringsData.thirdFloor.asciiCode.push(letter.charCodeAt());
}

for (const word of phraseToArray) {
  stringsData.fourthFloor.wordsInLowercase.push(word.toLowerCase());
  stringsData.fourthFloor.wordsInUppercase.push(word.toUpperCase());
}

let newSecretCode = stringsData.phrase.replaceAll(/[aá]/gi, 1);
newSecretCode = newSecretCode.replaceAll(/[eé]/gi, 2);
newSecretCode = newSecretCode.replaceAll(/[ií]/gi, 3);
newSecretCode = newSecretCode.replaceAll(/[oó]/gi, 4);
newSecretCode = newSecretCode.replaceAll(/[uú]/gi, 5);

let auxSecretCode = '';
for (const letter of newSecretCode) {
  if (consonants.includes(letter)) {
    let previousLetterPosition = consonants.indexOf(letter) - 1;
    if (previousLetterPosition === -1) {
      previousLetterPosition = consonants.length - 1;
    }
    auxSecretCode += consonants[previousLetterPosition];
  } else {
    auxSecretCode += letter;
  }
}

newSecretCode = auxSecretCode;

const randomNumber = Math.floor(Math.random() * alphabet.length);
const randomCharacter = alphabet.charAt(randomNumber);

newSecretCode = newSecretCode.replaceAll(/[^a-z0-9]/gi, randomCharacter);

console.log(newSecretCode);
