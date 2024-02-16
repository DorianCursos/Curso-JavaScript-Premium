/*
Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
*/

const getRandomPosition = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  } else if (numbers.length !== 5) {
    console.log('El array no contiene 5 valores');
    return;
  }

  const randomNumber = Math.floor(Math.random() * numbers.length);

  console.log(numbers[randomNumber]);
};

// getRandomPosition([1, 2, 3, 4, 5]);

/*
Crea una función que reciba un array con 3 números. La función deberá imprimir por consola:
"La suma de todos los números es: [suma]"
"La media de todos los números es: [media]"
"El mayor es [mayor] y el menor es [menor]"
(Para el máximo y el mínimo revisa la documentación de Math https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)
*/

const mathArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  } else if (numbers.length !== 3) {
    console.log('El array no contiene 5 valores');
    return;
  }

  const sum = numbers[0] + numbers[1] + numbers[2];
  const average = sum / numbers.length;
  const greatest = Math.max(numbers[0], numbers[1], numbers[2]);
  const smallest = Math.min(numbers[0], numbers[1], numbers[2]);

  console.log(
    `La suma de todos los números es: ${sum}.\nLa media de todos los números es: ${average}.\nEl mayor es ${greatest} y el menor es ${smallest}`
  );
};

// mathArray([1, 2, 3]);

/*
Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función, genera un número aleatorio entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está, o si no lo contiene.
*/

const numberExistsInArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  } else if (numbers.length !== 5) {
    console.log('El array no contiene 5 valores');
    return;
  }

  const randomNumber = Math.floor(Math.random() * 11);
  console.log(randomNumber);
  if (numbers.includes(randomNumber)) {
    const indexOfNumber = numbers.indexOf(randomNumber);
    console.log(`El número está en la posición ${indexOfNumber}`);
  } else {
    console.log('El número no está');
  }
};

// numberExistsInArray([1, 2, 3, 4, 5]);

/*
Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.
*/

const fillArrayWithRandomNumbers = array => {
  if (!Array.isArray(array)) {
    console.log('El parámetro no es un array');
    return;
  } else if (array.length !== 0) {
    console.log('El array no está vacío');
    return;
  }

  const randomNumber1 = Math.floor(Math.random() * 101);
  const randomNumber2 = Math.floor(Math.random() * 101);
  const randomNumber3 = Math.floor(Math.random() * 101);

  array.unshift(randomNumber1, randomNumber2, randomNumber3);
  return array;
};

const resultFillArray = fillArrayWithRandomNumbers([]);
// console.log(resultFillArray);

/*
Crea una función que reciba un array de 3 números. Dentro de esa función, crea dos arrays vacíos llamados 'even' (pares) y 'odd' (impares). Después, multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10. Si el resultado es par, guárdalo en el array 'even'; si es impar, guárdalo en el array 'odd'. Al final, imprime el array original, el array 'even' y el array 'odd' por consola.
*/

const evenAndOddArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  } else if (numbers.length !== 3) {
    console.log('El array no tiene 3 valores');
    return;
  }

  const even = [];
  const odd = [];
  const randomNumber1 = Math.floor(Math.random() * 11);
  const randomNumber2 = Math.floor(Math.random() * 11);
  const randomNumber3 = Math.floor(Math.random() * 11);
  const multiply1 = randomNumber1 * numbers[0];
  const multiply2 = randomNumber2 * numbers[1];
  const multiply3 = randomNumber3 * numbers[2];

  if (multiply1 % 2 === 0) {
    even.push(multiply1);
  } else {
    odd.push(multiply1);
  }

  if (multiply2 % 2 === 0) {
    even.push(multiply2);
  } else {
    odd.push(multiply2);
  }

  if (multiply3 % 2 === 0) {
    even.push(multiply3);
  } else {
    odd.push(multiply3);
  }

  console.log(numbers);
  console.log(even);
  console.log(odd);
};

// evenAndOddArray([4, 54, 23]);

/*
Crea una función llamada 'dniLetter' que recibirá un número de DNI sin la letra. Dentro de esa función, pon este array: ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23. Ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

Puedes generar DNIs de prueba aquí https://testingdatagenerator.com/doi.html
*/

const dniLetter = dni => {
  if (typeof dni !== 'number' || String(dni).length !== 8) {
    console.log('El dni no es válido');
    return;
  }
  const lettersArray = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];

  const letterPosition = dni % 23;
  console.log(dni + lettersArray[letterPosition]);
};

// dniLetter(79523599);

/*
Crea una función que reciba un array con 3 palabras. Debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas. Es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'], deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O'].
*/

const firstAndLastLetterToUpperCase = words => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array');
    return;
  } else if (words.length !== 3) {
    console.log('El array no tiene 3 valores');
    return;
  }

  const firstWordFirstLetter = words[0].charAt(0);
  const firstWordLastLetter = words[0].charAt(words[0].length - 1);

  const secondWordFirstLetter = words[1].charAt(0);
  const secondWordLastLetter = words[1].charAt(words[1].length - 1);

  const thirdWordFirstLetter = words[2].charAt(0);
  const thirdWordLastLetter = words[2].charAt(words[2].length - 1);

  const letters =
    firstWordFirstLetter +
    firstWordLastLetter +
    secondWordFirstLetter +
    secondWordLastLetter +
    thirdWordFirstLetter +
    thirdWordLastLetter;

  console.log(letters.toUpperCase().split(''));
};

// firstAndLastLetterToUpperCase(['hola', 'adios', 'gato']);

/*
Crea una función que reciba una palabra y la imprima al revés.
*/

const getReverseWord = word => {
  if (typeof word !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  const reverseWord = word.split('').reverse().join('').toLowerCase();

  console.log(reverseWord);
};

// getReverseWord('Anubis');

/*
Crea una función que reciba un array con tres nombres y otro array con tres números. La función deberá imprimir un array con los nombres y los números fusionados. Por ejemplo, si los arrays son: ['Pepe', 'Marta', 'Javier'] y [23, 14, 50], en la consola deberá
salir: ['Pepe23', 'Marta14', 'Javier50'].
*/

const namesAndNumbersMix = (names, numbers) => {
  if (!Array.isArray(names) || !Array.isArray(numbers)) {
    console.log('Uno de los dos parámetros no es un array');
    return;
  } else if (names.length !== 3 || numbers.length !== 3) {
    console.log('Uno de los arrays no tiene 3 valores');
    return;
  }
  const wordsAndNumbers = [];
  const fusion1 = names[0] + numbers[0];
  const fusion2 = names[1] + numbers[1];
  const fusion3 = names[2] + numbers[2];
  wordsAndNumbers.push(fusion1, fusion2, fusion3);

  console.log(wordsAndNumbers);
};

// namesAndNumbersMix(['Pepe', 'Marta', 'Javier'], [23, 14, 50]);

/*
Crea una función que reciba un array con tres números. La función deberá imprimir un nuevo array que contenga los cuadrados de los números que se le han enviado.
*/

const arrayOfSquareNumbers = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  } else if (numbers.length !== 3) {
    console.log('El array no tiene 3 valores');
    return;
  }

  const squareNumbersArray = [];
  const square1 = Math.pow(numbers[0], 2);
  const square2 = Math.pow(numbers[1], 2);
  const square3 = Math.pow(numbers[2], 2);
  squareNumbersArray.push(square1, square2, square3);

  console.log(squareNumbersArray);
};

// arrayOfSquareNumbers([2, 3, 4]);

/*
Crea una función que reciba un array con tres nombres y solo imprima los que empiecen por "A".
*/

const onlyNamesStartsWithA = names => {
  if (!Array.isArray(names)) {
    console.log('El parámetro no es un array');
    return;
  } else if (names.length !== 3) {
    console.log('El array no tiene 3 valores');
    return;
  }

  const namesStartsWithA = [];
  if (names[0].toLowerCase().startsWith('a')) {
    namesStartsWithA.push(names[0]);
  }
  if (names[1].toLowerCase().startsWith('a')) {
    namesStartsWithA.push(names[1]);
  }
  if (names[2].toLowerCase().startsWith('a')) {
    namesStartsWithA.push(names[2]);
  }

  if (namesStartsWithA.length === 0) {
    console.log('No hay nombres que empiecen por A');
  } else {
    console.log(namesStartsWithA);
  }
};

// onlyNamesStartsWithA(['Nala', 'Dorian', 'Ana']);

/*
Crea una función que reciba un array de 4 números y lo imprima en orden inverso, pero SIN USAR el método reverse().
*/

const reverseArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  } else if (numbers.length !== 4) {
    console.log('El array no tiene 4 valores');
    return;
  }

  const reverseNumbers = [];
  const firstValue = numbers.shift();
  reverseNumbers.unshift(firstValue);
  const secondValue = numbers.shift();
  reverseNumbers.unshift(secondValue);
  const thirdValue = numbers.shift();
  reverseNumbers.unshift(thirdValue);
  const fourthValue = numbers.shift();
  reverseNumbers.unshift(fourthValue);

  console.log('Sin reverse ' + reverseNumbers);
};

reverseArray([1, 2, 3, 4]);
