# Ejercicios

## Objetos

- Dado este objeto, rellénalo con los datos que te pido usando el array de numbers.

```javascript
const numbersData = {
  numbers: [10, 32, 31, 68, 91, 24, 51, 47],
  firstFloor: {
    firstRoom: {
      // número + 2
      numbersPlus2: []
    },
    secondRoom: {
      // número - 2
      numbersMinus2: []
    }
  },
  secondFloor: {
    firstRoom: {
      // número * 2
      numbersDouble: []
    },
    secondRoom: {
      // número / 2
      numbersDivided2: []
    }
  },
  thirdFloor: {
    // sólo pares
    onlyEven: [],
    // sólo impares
    onlyOdd: []
  },
  fourthFloor: {
    // número al cuadrado
    squareNumbers: [],
    // número al cubo
    cubeNumbers: []
  },
  fifthFloor: {
    // número aleatorio entre 0 y number
    randomNumbers: []
  },
  sixthFloor: {
    // Array de numbers al revés
    reversedNumbers: []
  }
};
```

- Dado este objeto, rellénalo con los valores que te pido sacando los datos de la propiedad "phrase".

```javascript
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
```
