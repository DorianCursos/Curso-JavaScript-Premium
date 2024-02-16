# Ejercicios

## Arrays métodos callback

- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

- Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

- Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.

- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".

- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

- Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

- Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

- Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

- Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

- Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

- Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
  const array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
  ];

- Crea una función que reciba un array relleno con números y te diga si todos son pares o no.

- Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)

## Retos!!

- Crea una función que reciba un array de números desordenados, de forma aleatoria, unos se multiplicarán por 2 y otros se dividirán por 2, mezcla ese array de forma aleatoria y después ordenalo de menor a mayor

- Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]
