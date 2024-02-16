# Strings

## ¿Qué son los strings?

Los strings son un tipo de dato que nos permite guardar cadenas de caracteres, eso incluye desde cadenas vacías hasta textos enteros.

Los strings SIEMPRE deben ir entre comillas, y por convención se utilizan comillas simples ('')

```
const name = 'Dorian'
```

Si nos olvidamos las comillas, javascript no entenderá que se trata de un string y lo que hará será buscar el valor Dorian.

## Propiedades y métodos

En JavaScript TODO se puede categorizar como objeto, y los objetos tienen dos características principales, tienen propiedades propias del objeto, ¿Cómo son? y una serie de funcionalidades, ¿Qué pueden hacer?.

Si trasladamos esto al mundo real, un perro tendría una serie de propiedades como, raza, color, nombre... y una serie de acciones que puede realizar, ladrar, correr, sentarse...

En términos de programación una propiedad es una característica del objeto, por ejemplo, un string tiene una longitud en función del número de caracteres que lo formen, y también tendrá una serie de métodos que son las funciones que pueden realizar.
Para acceder a esas propiedades y métodos usaremos la sintaxis de punto.

```
string.propiedad
string.método()
```

## Propiedad length

Esta propiedad nos da la longitud del string basada en el número de caracteres que tiene.

```
const username = 'Dorian'
console.log(username.length) // 6
```

## Método charAt(index)

Éste método recibe como parámetro un número (n) y nos dará el caracter en esa posición. charAt, viene de character at (caracter en)
Es impotante recordar que charAt tiene lo que se denomina zero-based index, eso significa que su índice empieza en 0, por lo que la primera posición es la 0, no la 1

```
const username = 'Dorian'
console.log(username.charAt(0)) // D
console.log(username.charAt(4)) // a
```

## Método indexOf(searchString)

Éste método devuelve la posición del string que recibe como parámetro o -1 si no lo encuentra.

```
const username = 'Dorian'
console.log(username.indexOf('o')) // 1
console.log(username.indexOf('x')) // -1
```

## Método lastIndexOf(searchString)

Éste método devuelve la posición del string que recibe como parámetro o -1 si no lo encuentra. Éste método empieza a buscar desde el final.

```
const username = 'Dorian';
console.log(username.indexOf('a')); // 4
console.log(username.indexOf('x')); // -1
```

## Método includes(searchString)

Éste método devuelve true o false en función de si encuentra el string que recibe como parámetro true si lo encuentra, false si no lo encuentra.

```
const username = 'Dorian'
console.log(username.includes('o')) // true
console.log(username.indexOf('x')) // false
```

## Método slice(start, [,end])

Éste método extrae una parte del string. Recibe como parámetro el inicio desde donde queremos empezar a extraer y de forma opcional hasta dónde queremos extraer, si no le pasamos final, extrae desde el inicio que le digamos hasta el final. Admite valores negativos como valor final.

## Método substring(start, [,end])

Éste método extrae una parte del string. Recibe como parámetro el inicio desde donde queremos empezar a extraer y de forma opcional hasta dónde queremos extraer, si no le pasamos final, extrae desde el inicio que le digamos hasta el final. No admite valores negativos como valor final, es la única diferencia con slice.

## Método trim()

Éste método elimina todos los espacios al principio y al final de un string.

## Método trimStart()

Éste método elimina todos los espacios al principio de un string.

## Método trimEnd()

Éste método elimina todos los espacios al final de un string.

## Método startsWith(searchString)

Éste método devuelve true o false en función de si el string empieza con el string de búsqueda que le pasamos como parámetro

```
const username = 'Dorian'
console.log(username.startsWith('Do')) // true
console.log(username.startsWith('x')) // false
```

## Método endsWith(searchString)

Éste método devuelve true o false en función de si el string termina con el string de búsqueda que le pasamos como parámetro

```
const username = 'Dorian'
console.log(username.endsWith('n')) // true
console.log(username.endsWith('x')) // false
```

## Método replace(searchString, replaceString)

Éste método devuelve un nuevo string reemplazando la primera coincidencia del string de búsqueda con el string que le digamos como segundo parámetro.

```
const word = 'Cazar'
console.log(word.replace('a', 'o')) // Cozar
```

## Método replaceAll(searchString, replaceString)

Éste método devuelve un nuevo reemplazando todas las coincidencias del string de búsqueda con el string que le digamos como segundo parámetro.

```
const word = 'Cazar'
console.log(word.replaceAll('a', 'o')) // Cozor
```

## Método toLowerCase()

Éste método devuelve un nuevo string con el string convertido a minúsculas.

```
const username = 'Dorian'
console.log(username.toLowerCase()) // dorian
```

## Método toUpperCase()

Éste método devuelve un nuevo string con el string convertido a mayúsculas.

```
const username = 'Dorian'
console.log(username.toUpperCase()) // DORIAN
```

## Template Strings

Cuando necesitamos concatenar strings con variables podemos utilizar el método tradicional sumando con + los strings y las variables o podemos usar los template strings que nos permiten hacerlo de una forma más cómoda.

Un template string funciona exactamente igual que un string normal, pero con la diferencia de que, en lugar de usar comillas, usaremos "back ticks" o el símbolo del acento agudo (`), el que está a la derecha de la tecla "p". Cada vez que queramos usar una variable la escribiremos entre ${variable}

```
const name = 'Dorian'
const job = 'profesor'

// Método tradicional
console.log('Hola, me llamo ' + name + '. Soy ' + job + '.')

// Template Strings
console.log(`Hola, me llamo ${name}. Soy ${job}.`)

```
