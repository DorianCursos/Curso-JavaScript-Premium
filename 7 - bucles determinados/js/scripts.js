/*
Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
"Número: 2 - Cuadrado: 4 - Cubo: 8".
*/

const numbersSquareAndCube = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  if (numbers.length !== 10) {
    console.log('El array no tiene 10 valores.');
    return;
  }

  for (const number of numbers) {
    console.log(
      `Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo ${Math.pow(number, 3)}`
    );
  }
};

// numbersSquareAndCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const numbersSquareAndCube2 = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  if (numbers.length !== 10) {
    console.log('El array no tiene 10 valores.');
    return;
  }

  for (let index = 0; index < numbers.length; index++) {
    console.log(
      `Número: ${numbers[index]} - Cuadrado: ${Math.pow(numbers[index], 2)} - Cubo ${Math.pow(
        numbers[index],
        3
      )}`
    );
  }
};

// numbersSquareAndCube2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
*/

const vowelsToUppercase = word => {
  if (typeof word !== 'string') {
    console.log('Los datos no son válidos.');
    return;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

  let newWord = '';

  for (const letter of word.toLowerCase()) {
    if (vowels.includes(letter)) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter;
    }
  }

  console.log(newWord);
};

// vowelsToUppercase('Murciélago');

const vowelsToUppercase2 = word => {
  if (typeof word !== 'string') {
    console.log('Los datos no son válidos.');
    return;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

  let newWord = '';

  for (let index = 0; index < word.length; index++) {
    if (vowels.includes(word[index])) {
      newWord += word[index].toUpperCase();
    } else {
      newWord += word[index];
    }
  }

  console.log(newWord);
};

// vowelsToUppercase2('Murciélago');

/* 
Crea una función que reciba un array con 5 números del 1 al 10. recorrelo y en el bucle genera un número aleatorio entre 0 y el número del array que esté recorriendo en esa vuelta, la función debe decirte si el número que has generado está en el array y en qué posición ó si no está en el array.
*/

const randomNumberInArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  if (numbers.length !== 5) {
    console.log('El array no tiene 5 valores.');
    return;
  }

  for (const number of numbers) {
    const randomNumber = Math.floor(Math.random() * number);
    const indexNumber = numbers.indexOf(randomNumber);
    if (numbers.includes(randomNumber)) {
      console.log(`El número ${randomNumber} está en el array en la posición ${indexNumber}`);
    } else {
      console.log(`El número ${randomNumber} no está en el array`);
    }
  }
};

// randomNumberInArray([2, 4, 6, 7, 9]);

const randomNumberInArray2 = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  if (numbers.length !== 5) {
    console.log('El array no tiene 5 valores.');
    return;
  }

  for (let index = 0; index < numbers.length; index++) {
    const randomNumber = Math.floor(Math.random() * numbers[index]);
    const indexNumber = numbers.indexOf(randomNumber);
    if (numbers.includes(randomNumber)) {
      console.log(`El número ${randomNumber} está en el array en la posición ${indexNumber}`);
    } else {
      console.log(`El número ${randomNumber} no está en el array`);
    }
  }
};

randomNumberInArray2([2, 4, 6, 7, 9]);

/*
Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Estoy haciendo los ejercicios de bucles en éste momento", el resultado por consola debe ser:
La vocal "a" se repite 1 vez.
La vocal "e" se repite 9 veces.
La vocal "i" se repite 3 veces.
La vocal "o" se repite 6 veces.
La vocal "u" se repite 1 vez.
*/

const vowelsMessage = counter => {
  switch (counter) {
    case 0:
      return 'no aparece en la frase.';
    case 1:
      return 'sólo aparece una vez.';
    default:
      return `se repite ${counter} veces`;
  }
};

const countVowels = phrase => {
  if (typeof phrase !== 'string') {
    console.log('Los datos no son válidos.');
    return;
  }

  let counterA = 0;
  let counterE = 0;
  let counterI = 0;
  let counterO = 0;
  let counterU = 0;

  for (const letter of phrase.toLowerCase()) {
    if (letter === 'a' || letter === 'á') {
      counterA++;
    } else if (letter === 'e' || letter === 'é') {
      counterE++;
    } else if (letter === 'i' || letter === 'í') {
      counterI++;
    } else if (letter === 'o' || letter === 'ó') {
      counterO++;
    } else if (letter === 'u' || letter === 'ú') {
      counterU++;
    }
  }

  console.log(`La vocal "a" ${vowelsMessage(counterA)}`);
  console.log(`La vocal "e" ${vowelsMessage(counterE)}`);
  console.log(`La vocal "i" ${vowelsMessage(counterI)}`);
  console.log(`La vocal "o" ${vowelsMessage(counterO)}`);
  console.log(`La vocal "u" ${vowelsMessage(counterU)}`);
};

// countVowels('Estoy haciendo los ejercicios de bucles en éste momento');

const countVowels2 = phrase => {
  if (typeof phrase !== 'string') {
    console.log('Los datos no son válidos.');
    return;
  }

  let counterA = 0;
  let counterE = 0;
  let counterI = 0;
  let counterO = 0;
  let counterU = 0;

  const phraseToCheck = phrase.toLowerCase();
  for (let index = 0; index < phrase.length; index++) {
    if (phraseToCheck[index] === 'a' || phraseToCheck[index] === 'á') {
      counterA++;
    } else if (phraseToCheck[index] === 'e' || phraseToCheck[index] === 'é') {
      counterE++;
    } else if (phraseToCheck[index] === 'i' || phraseToCheck[index] === 'í') {
      counterI++;
    } else if (phraseToCheck[index] === 'o' || phraseToCheck[index] === 'ó') {
      counterO++;
    } else if (phraseToCheck[index] === 'u' || phraseToCheck[index] === 'ú') {
      counterU++;
    }
  }

  console.log(`La vocal "a" ${vowelsMessage(counterA)}`);
  console.log(`La vocal "e" ${vowelsMessage(counterE)}`);
  console.log(`La vocal "i" ${vowelsMessage(counterI)}`);
  console.log(`La vocal "o" ${vowelsMessage(counterO)}`);
  console.log(`La vocal "u" ${vowelsMessage(counterU)}`);
};

// countVowels2('Estoy haciendo los ejercicios de bucles en éste momento');

/*
Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM" SIN USAR reverse() 😊
 */

const reverseWord = word => {
  if (typeof word !== 'string') {
    console.log('Los datos no son válidos');
    return;
  }

  let newWord = '';

  for (const letter of word) {
    newWord = letter + newWord;
  }

  console.log(newWord);
};

// reverseWord('Mariposas');

const reverseWord2 = word => {
  if (typeof word !== 'string') {
    console.log('Los datos no son válidos');
    return;
  }

  let newWord = '';
  let newWord2 = '';

  for (let index = word.length - 1; index >= 0; index--) {
    newWord += word[index];
  }

  for (let index = 0; index < word.length; index++) {
    newWord2 = word[index] + newWord2;
  }

  console.log(newWord);
  console.log(newWord2);
};

// reverseWord2('Mariposas');

/*
Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
 */

const evenAndOdd = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array.');
    return;
  }

  if (numbers.length !== 10) {
    console.log('El array no tiene 10 valores.');
    return;
  }

  const even = [];
  const odd = [];

  for (const number of numbers) {
    const randomNumber = Math.floor(Math.random() * 11);
    const multilplyResult = number * randomNumber;
    if (multilplyResult % 2 === 0) {
      even.push(multilplyResult);
    } else {
      odd.push(multilplyResult);
    }
  }

  console.log(numbers);
  console.log(even);
  console.log(odd);
};

// evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const evenAndOdd2 = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array.');
    return;
  }

  if (numbers.length !== 10) {
    console.log('El array no tiene 10 valores.');
    return;
  }

  const even = [];
  const odd = [];

  for (let index = 0; index < numbers.length; index++) {
    const randomNumber = Math.floor(Math.random() * 11);
    const multilplyResult = numbers[index] * randomNumber;
    if (multilplyResult % 2 === 0) {
      even.push(multilplyResult);
    } else {
      odd.push(multilplyResult);
    }
  }

  console.log(numbers);
  console.log(even);
  console.log(odd);
};

// evenAndOdd2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']
 */

const firstAndLastLetterToUppercase = words => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array.');
    return;
  }

  if (words.length !== 5) {
    console.log('El array no tiene 5 valores.');
    return;
  }

  const lettersArray = [];
  for (const word of words) {
    const firstLetter = word.charAt(0).toUpperCase();
    const lastLetter = word.charAt(word.length - 1).toUpperCase();
    lettersArray.push(firstLetter, lastLetter);
  }

  console.log(lettersArray);
};

// firstAndLastLetterToUppercase(['hola', 'nala', 'gato', 'anubis', 'casa']);

const firstAndLastLetterToUppercase2 = words => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array.');
    return;
  }

  if (words.length !== 5) {
    console.log('El array no tiene 5 valores.');
    return;
  }

  const lettersArray = [];
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    const firstLetter = word.charAt(0).toUpperCase();
    const lastLetter = word.charAt(word.length - 1).toUpperCase();
    lettersArray.push(firstLetter, lastLetter);
  }

  console.log(lettersArray);
};

// firstAndLastLetterToUppercase2(['hola', 'nala', 'gato', 'anubis', 'casa']);
