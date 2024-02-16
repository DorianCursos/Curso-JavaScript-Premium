# Arrays métodos de callback

## ¿Qué es un callback?

Es una función que se pasa como argumento a otra función y se llama en un momento posterior o en respuesta a un evento específico.

```javascript
const add = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

const printResult = result => {
  console.log('The result is:', result);
};

const saveResult = result => {
  // Esta función guarda el dato en una base de datos
  console.log('The result is saved');
};

add(5, 3, printResult);
add(5, 3, saveResult);
```

# Métodos de Callback (arrays)

Todos los métodos que veremos a continuación reciben un callback como único parametro (menos el último)

```javascript
array.callback((item, index, array) => {});
```

Los nombres de los parámetros, como en cualquier función pueden recibir el nombre que queramos.

item: Es cada elemento del array. Es obligatorio.

index: Es su posición en el array. Es opcional

array: El array que estamos recorriendo. Es opcional. No se usa casi nunca.

## forEach

forEach(cb): Recorre cada uno de los elementos del array y aplica la función de callback.

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((number, index) => {
  console.log(number); // 1 2 3 4
  console.log(index); // 0 1 2 3
});
```

Este método no devuelve nada al ejecutarse, sólo ejecuta el código que le digamos.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.forEach(number => {
  return number * 2;
});

console.log(result); // undefined
```

## map

Recorre cada uno de los elementos del array y aplica la función de callback.

Este método devuelve un nuevo array con el resultado de la operación que le hayamos pedido

```javascript
const numbers = [1, 2, 3, 4];

const resultNumbers = numbers.map(number => {
  return number * 2;
});

console.log(resultNumbers); // [2, 4, 6, 8]

const letters = ['a', 'b', 'c', 'd'];

const resultLetters = numbers.map(letter => {
  return letter.toUpperCase();
});

console.log(resultLetters); // ['A', 'B', 'C', 'D']
```

## filter

Recorre cada uno de los elementos del array y filtra los valores que cumplan la condición del filtro.

Este método devuelve un nuevo array con los elementos que cumplan la condición de filtrado

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const filteredNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(filteredNumbers); // [2, 4, 6]
```

## every

Recorre cada uno de los elementos del array y devuelve true o false en función de si TODOS los elementos cumplen la condición.

```javascript
const numbersA = [1, 2, 3, 4];
const numbersB = [2, 4, 6, 8];

const areAllNumbersEven = numbersA.every(number => {
  return number % 2 === 0;
});

console.log(areAllNumbersEven); // false

const areAllNumbersEven = numbersB.every(number => {
  return number % 2 === 0;
});

console.log(areAllNumbersEven); // true
```

## some

Recorre cada uno de los elementos del array y devuelve true o false en función de si ALGUNO de los elementos cumple la condición.

```javascript
const numbersA = [1, 2, 3, 4];
const numbersB = [1, 3, 5, 7];

const isSomeNumberEven = numbersA.some(number => {
  return number % 2 === 0;
});

console.log(isSomeNumberEven); // true

const isSomeNumberEven = numbersB.some(number => {
  return number % 2 === 0;
});

console.log(isSomeNumberEven); // false
```

## find

Recorre cada uno de los elementos del array y devuelve el primer elemento que cumpla la condición, si ninguno la cumple devuelve undefined.

```javascript
const numbersA = [1, 2, 3, 4];
const numbersB = [1, 3, 5, 7];

const firstEven = numbersA.find(number => {
  return number % 2 === 0;
});

console.log(firstEven); // 2

const firstEven = numbersB.find(number => {
  return number % 2 === 0;
});

console.log(firstEven); // undefined
```

## findIndex

Recorre cada uno de los elementos del array y devuelve el índice del primer elemento que cumpla la condición, si ninguno la cumple devuelve -1.

```javascript
const numbersA = [1, 2, 3, 4];
const numbersB = [1, 3, 5, 7];

const firstEven = numbersA.findIndex(number => {
  return number % 2 === 0;
});

console.log(firstEven); // 1

const firstEven = numbersB.findIndex(number => {
  return number % 2 === 0;
});

console.log(firstEven); // -1
```

## sort

Recorre los elementos del array de dos en dos y los va recolocando en el orden que le pidamos, ascendente o descendente en función de la condición. Este método no devuelve nada, modifica el array que recorremos.

El método sort espera como resultado del return un valor positivo, un valor negativo o un 0, y en función de esos valores determina si el elemento debe ir antes o después en el array.

```javascript
const numbersA = [5, 2, 1, 4];
const numbersB = [5, 2, 1, 4];

numbersA.sort((a, b) => {
  return a - b;
});

console.log(numbersA); // [1, 2, 4, 5]

numbersB.sort((a, b) => {
  return b - a;
});

console.log(numbersB); // [5, 4, 2, 1]
```

Si lo que queremos ordenar son strings tendremos que hacer una comparación manual en lugar de una resta.

```javascript
const words = ['casa', 'coche', 'avión', 'perro'];

words.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

console.log(words); // ['avión', 'casa', 'coche', 'perro']

words.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

console.log(words); // ['perro', 'coche', 'casa', 'avión']
```

## reduce

Recorre los elementos del array y los reduce a un sólo valor en base a la operación que le digamos.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce((acc, number) => {
  return acc + number;
});

console.log(numbers); // 21
```
