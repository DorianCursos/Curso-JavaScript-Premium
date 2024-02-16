/*
Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array
*/

const multiplyByIndex = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

// multiplyByIndex([1, 2, 3, 4, 5, 6]);

/*
Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2
*/

const divideByIndexPlusTwo = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  const newArray = numbers.map((number, index) => {
    return number / (index + 2);
  });

  return newArray;
};

const resultDividedByIndex = divideByIndexPlusTwo([1, 2, 3, 45, 6]);

// console.log(resultDividedByIndex);

/*
Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.
*/

const wordsToUppercase = words => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array');
    return;
  }
  const wordsUppercase = words.map(word => word.toUpperCase());
  return wordsUppercase;
};

const wordsUppercase = wordsToUppercase(['Nala', 'Anubis', 'Dorian']);

// console.log(wordsUppercase);

/*
Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.
*/

const filterWordsByLetter = (words, letter) => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array');
    return;
  }
  if (typeof letter !== 'string') {
    console.log('La letra no es correcta');
    return;
  }

  const wordsExists = words.some(word => word.toLowerCase().startsWith(letter.toLowerCase()));

  if (!wordsExists) {
    console.log(`No hay palabras que empiecen por ${letter}`);
    return;
  }

  const filteredWords = words.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()));
  return filteredWords;
};

// const filteredWords = filterWordsByLetter(['Nala', 'Anubis', 'Dorian'], 'a');

// console.log(filteredWords);

/*
Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
*/

const sumNumbersArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }
  if (numbers.length !== 10) {
    console.log('El array no contiene 10 números');
    return;
  }

  // let result = 0;
  // numbers.forEach(number => (result = result + number));
  // console.log(result);

  const result = numbers.reduce((acc, number) => (acc = number + acc));
  console.log(result);
};

// sumNumbersArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
*/

const numbersToSquareAndCube = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }
  if (numbers.length !== 10) {
    console.log('El array no contiene 10 números');
    return;
  }

  numbers.forEach(number => {
    const numberSquare = Math.pow(number, 2);
    const numberCube = Math.pow(number, 3);
    console.log(`Número: ${number} - Cuadrado: ${numberSquare} - Cubo:  ${numberCube}`);
  });
};

// numbersToSquareAndCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
*/

const vowelsToUpperCase = word => {
  if (typeof word !== 'string') {
    console.log('Los datos no son correctos');
    return;
  }

  // Método 1
  // const regexVowels = /[aeiouáéíóú]/i;

  // const wordToArray = word.split('');
  // let newWord = '';
  // wordToArray.forEach(letter => {
  //   if (regexVowels.test(letter)) {
  //     newWord += letter.toUpperCase();
  //   } else {
  //     newWord += letter;
  //   }
  // });

  // console.log(newWord);

  // Método 2
  // const regexVowels = /[aeiouáéíóú]/i;

  // const wordToArray = word.split('');
  // const newWord = wordToArray
  //   .map(letter => {
  //     if (regexVowels.test(letter)) {
  //       return letter.toUpperCase();
  //     } else {
  //       return letter;
  //     }
  //   })
  //   .join('');

  // console.log(newWord);

  // Método 3
  const regexVowels = /[aeiouáéíóú]/gi;

  const newWord = word.replace(regexVowels, vowel => vowel.toUpperCase());

  console.log(newWord);
};

// vowelsToUpperCase('Anubis');

/*
Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola. 
*/

const evenAndOddArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }
  if (numbers.length !== 10) {
    console.log('El array no contiene 10 números');
    return;
  }

  const even = [];
  const odd = [];

  numbers.forEach(number => {
    const randomNumber = Math.floor(Math.random() * 11);
    const result = randomNumber * number;
    if (result % 2 === 0) even.push(result);
    else odd.push(result);
  });

  console.log('Original: ', numbers);
  console.log('Pares: ', even);
  console.log('Impares: ', odd);
};

// evenAndOddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']
*/

const firstAndLastLetterWords = words => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array');
    return;
  }
  if (words.length !== 5) {
    console.log('El array no contiene 5 palabras');
    return;
  }

  // const newArray = [];
  // words.forEach(word => {
  //   const firstLetter = word.charAt(0).toUpperCase();
  //   const lastLetter = word.charAt(word.length - 1).toUpperCase();
  //   newArray.push(firstLetter, lastLetter);
  // });

  // console.log(newArray);

  const newArray = words.flatMap(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const lastLetter = word.charAt(word.length - 1).toUpperCase();
    return [firstLetter, lastLetter];
  });

  console.log(newArray);
};

// firstAndLastLetterWords(['hola', 'adios', 'gato', 'perro', 'casa']);

/*
Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.
*/

const greaterThanFive = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }
  if (numbers.length !== 10) {
    console.log('El array no contiene 10 números');
    return;
  }

  const existNumbers = numbers.some(number => number > 5);

  if (!existNumbers) {
    console.log('No hay números mayores de 5');
    return;
  }

  const numbersGreaterThanFive = numbers.filter(number => number > 5);

  console.log(`Los números del array mayores de 5 son ${numbersGreaterThanFive.join(', ')}`);
};

// greaterThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']
*/

const filterWordsByLength = (words, number) => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array');
    return;
  }
  if (words.length !== 5) {
    console.log('El array no contiene 5 palabras');
    return;
  }

  if (typeof number !== 'number') {
    console.log('La longitud no es válida');
    return;
  }

  const filteredWords = words.filter(word => word.length === number);
  return filteredWords;
};

const filteredWords = filterWordsByLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

// console.log(filteredWords);

/*
Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número
*/

const getDivisors = (numbers, number) => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  if (typeof number !== 'number') {
    console.log('El divisor no es válido');
    return;
  }

  const divisors = numbers.filter(numberArray => number % numberArray === 0);
  return divisors;
};

const divisors = getDivisors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20);
// console.log(divisors);

/*
Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
  const array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
  ];
*/

const onlyYoungPeople = users => {
  if (!Array.isArray(users)) {
    console.log('El parámetro no es un array');
  }

  const youngPeople = users.filter(user => user.age < 30);

  return youngPeople;
};

const youngPeople = onlyYoungPeople([
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
]);

// console.log(youngPeople);

/*
Crea una función que reciba un array relleno con números y te diga si todos son pares o no.
*/

const onlyEvenNumbers = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
  }
  const onlyEven = numbers.every(number => number % 2 === 0);

  if (onlyEven) {
    return 'Todos los números son pares.';
  }

  return 'Hay números impares.';
};

const onlyEven = onlyEvenNumbers([4, 7, 6, 4, 8]);
// console.log(onlyEven);
/*
Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
*/

const orderByLength = words => {
  if (!Array.isArray(words)) {
    console.log('El parámetro no es un array');
  }

  const sortedWords = [...words].sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });

  return sortedWords;
};

const sortedWords = orderByLength(['Hola', 'Anubis', 'Nala', 'Dorian']);
// console.log(sortedWords);

/*
Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)
*/

const reversedWord = word => {
  if (typeof word !== 'string') {
    console.log('La palabra no es válida');
    return;
  }

  const wordToArray = word.split('');

  const newWord = wordToArray.reduceRight((acc, letter) => acc + letter);
  console.log(newWord);
};

// reversedWord('Mariposas')

// ## Retos!!

/*
Crea una función que reciba un array de números desordenados, de forma aleatoria, unos se multiplicarán por 2 y otros se dividirán por 2, mezcla ese array de forma aleatoria y después ordénalo de menor a mayor
*/

const orderRandomArray = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  const result = numbers.map(number => {
    const randomNumber = Math.random();
    return randomNumber < 0.5 ? number * 2 : number / 2;
  });
  console.log(result);

  const randomSort = result.sort(() => Math.random() - 0.5);

  const sortArray = randomSort.sort((a, b) => a - b);

  console.log(sortArray);
};

// orderRandomArray([6, 3, 89, 2, 5, 8, 1, 23]);

/*
Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]
*/

const sumDigits = numbers => {
  if (!Array.isArray(numbers)) {
    console.log('El parámetro no es un array');
    return;
  }

  const areTwoDigits = numbers.every(number => String(number).length === 2);

  if (!areTwoDigits) {
    console.log('No todos los números tienen dos dígitos');
  }

  const separateDigits = numbers.map(number => {
    const firstDigit = Number(String(number).charAt(0));
    const secondDigit = Number(String(number).charAt(1));

    return firstDigit + secondDigit;
  });

  console.log(separateDigits);
};

sumDigits([21, 34, 87, 10, 28]);
