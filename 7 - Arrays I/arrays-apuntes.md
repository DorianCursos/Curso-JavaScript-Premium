# Arrays

## ¿Qué es un array?

Un array es una estructura de datos separados por comas.

Para construir un array lo haremos entre llaves cuadradas “[]” y dentro podremos almacenar tantos datos como necesitemos, los datos pueden ser de cualquier tipo permitido en JavaScript.

Cada valor tendrá un índice en base a su posición, y es MUY IMPORTANTE recordar que los índices empiezan en 0.

```javascript
const lettersArray = ['A', 'B', 'C', 'D'];
const numbers = [1, 2, 3, 4];
```

lettersArray:

| Valor | Índice |
| :---: | :----: |
|   A   |   0    |
|   B   |   1    |
|   C   |   2    |
|   D   |   3    |

numbers:

| Valor | Índice |
| :---: | :----: |
|   1   |   0    |
|   2   |   1    |
|   3   |   2    |
|   4   |   3    |

Para acceder al valor de cada una de las posiciones pondremos el nombre del array seguido de las llaves cuadradas y el índice al que queremos acceder.

```javascript
const lettersArray = ['A', 'B', 'C', 'D'];

lettersArray[0]; // A
lettersArray[1]; // B
lettersArray[2]; // C
lettersArray[3]; // D
lettersArray[4]; // undefined
```

## Propiedad length

Al igual que los strings, los arrays tienen la propiedad length, que nos dará el número de valores que tiene el array.

Si queremos acceder a la última posición del array lo haremos con length - 1

## Método includes(searchValue)

Éste método nos devolverá true o false en función de si el value se encuentra en el array.

## Método indexOf(searchValue)

Éste método devuelve la posición de la primera coincidencia del value, si no lo encuentra devuelve -1.

## Método pop()

Éste método elimina el último valor del array, si necesitáramos guardar el valor, éste método devuelve el elemento eliminado.

## Método push(value[,...])

Éste método añade el elemento al final del array.

## Método shift()

Éste método elimina el primer elemento del array y nos lo devuelve, al igual que pop, si necesitáramos guardar el valor, éste método devuelve el elemento eliminado.

## Método unshift(value[,...])

Éste método añade el elemento al principio del array.

## (strings) Método split(separator)

Éste método es de los strings, y nos permite convertir un string en un array separado por el string que le establezcamos.

## Método join(separator)

Éste método convierte un array en un string uniéndolo por el string que le establezcamos.

## Método reverse()

Éste método da la vuelta al array y modifica el array original.
