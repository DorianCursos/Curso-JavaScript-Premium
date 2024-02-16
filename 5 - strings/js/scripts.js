/*
Crea una función que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else.
*/
const wordUpperLower = word => {
  if (typeof word !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};

// wordUpperLower('Hola y adios');

/*
Repite el ejercicio anterior pero con un operador ternario.
*/

const wordUpperLowerWithTernary = word => {
  if (typeof word !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  let finalWord = '';

  word.length > 5 ? (finalWord = word.toUpperCase()) : (finalWord = word.toLowerCase());

  console.log(finalWord);
};

// wordUpperLowerWithTernary('hola y adios');

/*
Crea una función que reciba una palabra e imprima por consola una letra aleatoria de esa palabra.
*/

const getRandomLetter = word => {
  if (typeof word !== 'string') {
    console.log('Datos no válidos');
    return;
  }
  const randomNumber = Math.floor(Math.random() * word.length);

  console.log(word.charAt(randomNumber));
};

// getRandomLetter(9);

/*
Crea una función que reciba un string y verifique si comienza con una letra mayúscula.
*/

const firstLetterUpper = word => {
  if (typeof word !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  // if (word.charAt(0) > 'A' && word.charAt(0) < 'Z') {
  //   console.log('La primera letra es mayúscula');
  // } else {
  //   console.log('La primera letra no es mayúscula');
  // }

  if (word.charAt(0).toUpperCase() === word.charAt(0)) {
    console.log('La primera letra es mayúscula');
  } else {
    console.log('La primera letra no es mayúscula');
  }
};

// firstLetterUpper('hola');

/*
Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".
*/

const getConjugation = verb => {
  if (verb.endsWith('ar')) {
    return `El verbo ${verb} es de la primera conjugación.`;
  } else if (verb.endsWith('er')) {
    return `El verbo ${verb} es de la segunda conjugación.`;
  } else if (verb.endsWith('ir')) {
    return `El verbo ${verb} es de la tercera conjugación.`;
  }
  return `El verbo ${verb} no es un verbo válido.`;
};

const verbs = (verb1, verb2, verb3) => {
  if (typeof verb1 !== 'string' || typeof verb2 !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  const verb1Data = getConjugation(verb1);
  const verb2Data = getConjugation(verb2);
  const verb3Data = getConjugation(verb3);

  console.log(`${verb1Data} ${verb2Data} ${verb3Data}`);
};

// verbs('correr', 'andar', 'freir');

/*
Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".
*/

const getTwoRandomLetters = word => {
  const randomNumber1 = Math.floor(Math.random() * word.length);
  const randomNumber2 = Math.floor(Math.random() * word.length);

  return word.charAt(randomNumber1) + word.charAt(randomNumber2);
};

const generateWord = (word1, word2, word3) => {
  if (typeof word1 !== 'string' || typeof word2 !== 'string' || typeof word3 !== 'string') {
    console.log('Datos no válidos');
    return;
  }
  const newWord =
    getTwoRandomLetters(word1) + getTwoRandomLetters(word2) + getTwoRandomLetters(word3);

  console.log(newWord);
};

// generateWord('hola', 'adios', 'mano');

/*
Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".
*/

const getUserAndDomain = email => {
  if (typeof email !== 'string') {
    console.log('Datos no válidos');
    return;
  }
  const index = email.indexOf('@');
  const name = email.substring(0, index);
  const domain = email.substring(index + 1);

  console.log(`El usuario es ${name} y el dominio es ${domain}.`);
};

// getUserAndDomain('dorian@gmail.com');

/*
Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs.
*/

const intercalateLetters = word => {
  if (typeof word !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  const newWord =
    word.charAt(0).toUpperCase() +
    word.charAt(1).toLowerCase() +
    word.charAt(2).toUpperCase() +
    word.charAt(3).toLowerCase() +
    word.charAt(4).toUpperCase();

  console.log(newWord);
};

// intercalateLetters('adios');

/*
Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".
*/

const generateUsername = (name, surname) => {
  if (typeof name !== 'string' || typeof surname !== 'string') {
    console.log('Datos no válidos');
    return;
  }
  const firstLetter = name.charAt(0).toUpperCase();
  const formatSurname = surname.charAt(0).toUpperCase() + surname.substring(1);
  const randomNumber = Math.floor(Math.random() * 101);

  console.log(firstLetter + formatSurname + randomNumber);
};

// generateUsername('dorian', 'desings');

/*
Crea una función que reciba una palabra y la imprima con la primera y la última letra en mayúsculas.
*/

const firstAndLastLetter = word => {
  if (typeof word !== 'string') {
    console.log('Datos no válidos');
    return;
  }
  const firstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.substring(1, word.length - 1);
  const lastLetter = word.charAt(word.length - 1).toUpperCase();

  console.log(firstLetter + restOfWord + lastLetter);
};

// firstAndLastLetter('Dorian');

/*
Crea una función que reciba una frase con las palabras separadas por guiones y devuelva la cadena en formato "kebab-case" (todas las letras en minúscula y los espacios reemplazados por guiones).
*/

const formatKebab = phrase => {
  if (typeof phrase !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  let formatPhrase = phrase.toLowerCase();
  formatPhrase = formatPhrase.replaceAll(' ', '-');
  console.log(formatPhrase);
};

// formatKebab('Ya he terminado el ejercicio.');

/*
Crea una función que reciba una frase y cambie cada vocal por una letra aleatoria del alfabeto.
*/

const vowelToRandomLetter = phrase => {
  if (typeof phrase !== 'string') {
    console.log('Datos no válidos');
    return;
  }

  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  const randomNumber = Math.floor(Math.random() * alphabet.length);
  const randomLetter = alphabet.charAt(randomNumber);
  let newPhrase = phrase.toLowerCase().replaceAll('a', randomLetter);
  newPhrase = newPhrase.replaceAll('á', randomLetter);
  newPhrase = newPhrase.replaceAll('é', randomLetter);
  newPhrase = newPhrase.replaceAll('í', randomLetter);
  newPhrase = newPhrase.replaceAll('ó', randomLetter);
  newPhrase = newPhrase.replaceAll('ú', randomLetter);
  newPhrase = newPhrase.replaceAll('e', randomLetter);
  newPhrase = newPhrase.replaceAll('i', randomLetter);
  newPhrase = newPhrase.replaceAll('o', randomLetter);
  newPhrase = newPhrase.replaceAll('u', randomLetter);

  console.log(newPhrase);
};

vowelToRandomLetter('Éste es el último ejercicio de los strings');
