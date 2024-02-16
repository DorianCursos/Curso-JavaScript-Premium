# Bucles determinados

## ¿Qué es un bucle?

Es una estructura que permite repetir un conjunto de instrucciones varias veces hasta que se cumpla una condición específica. Los bucles son utilizados cuando se necesita ejecutar un bloque de código de forma repetitiva, lo que ahorra tiempo y evita la repetición manual del código.

Cuando hablamos de bucles utilizamos el término “vuelta”, en inglés se utiliza el término “loop”, éste término se refiere a cada una de las ejecuciones que hará el bucle.

Existen 2 tipos principales de bucles:

- Determinados: Un bucle determinado es aquel en el que se conoce de antemano cuántas veces se repetirá la ejecución del bloque de código.

- Indeterminados: No sabemos cuántas “vueltas” dará. En estos bucles es muy habitual ocasionar un bucle infinito bloqueando nuestro programa, de estos bucles hablaremos más adelante.

## Bucle for

Un bucle for se compone de 3 partes:

```
for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}
```

- Inicialización: En esta parte, defines una variable y le asignas un valor inicial.

- Condición: Aquí especificas una condición que debe ser verdadera para que el bucle continúe ejecutándose.

- Actualización: En esta parte, actualizas la variable de alguna manera después de cada iteración del bucle.

Entonces, en cada iteración del bucle, se ejecuta el código que se encuentra dentro de las llaves {}. Puedes hacer cualquier acción o ejecutar cualquier instrucción dentro de ese bloque de código.

Entender cual es el orden de ejecución de un bucle for es MUY IMPORTANTE para no llevarte sorpresas.

1 - Se lee el valor de index
2 - Se comprueba la condición
3 - Si la condición es true, se ejecuta el bloque de código
4 - Una vez terminada la ejecución del bloque se realiza la actualización de index

## Bucle for of

Un bucle for of nos va a permitir recorrer cualquier estructura iterando sobre sus elementos, podemos iterar sobre strings y arrays.
Esta estructura la utilizaremos cuando necesitemos recorrer una estructura pero NO NECESITEMOS usar el índice para nada.
En cada vuelta del bucle, la constante guardará el valor de cada una de las posiciones.

```
for (constante of estructura) {
  // Código a ejecutar en cada iteración
}

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number * 2);
}

const username = 'Dorian'

for (const letter of username) {
  console.log(letter.toUpperCase());
}
```
