# Funciones

## ¿Qué es una función?

Una función es una estructura donde guardaremos un fragmento de código para ejecutarlo cuando lo necesitemos.
Dentro de una función podemos ejecutar cualquier código que necesitemos siempre y cuando sea válido.

## Sintaxis

```javascript
function nombreDeLaFuncion() {
  //Código a ejecutar
}

Cuando queramos ejecutarla, pondremos su nombre y paréntesis, esto es MUY IMPORTANTE, si no ponemos los paréntesis, NO se ejecutará.


nombreDeLaFuncion();
```

## Ámbito de una variable / constante

Las variables y las constantes tienen un ámbito de actuación, es decir, existen y pueden ser leídas, asignadas, reasignadas dentro de su ámbito.

## Parámetros de una función

Las funciones tienen la opción de ejecutar código con información que le pasemos desde fuera.

No existe un número máximo de parámetros y deben colocarse separados por comas.

```javascript
function example(a, b) {
  // Código a ejecutar
}

example(3, 5);
```

A la hora de llamar a la función le debemos pasar los parámetros en el mismo orden que los hemos
declarado en la función.

## Retorno de una función

Las funciones SIEMPRE retornan un valor al ejecutarse, si no establecemos ese retorno, el valor retornado será "undefined" y ese retorno lo podremos guardar una variable / constante para usarlo cuando lo necesitemos.

Para establecer el retorno de una función usaremos la palabra "return" y es MUY IMPORTANTE RECORDAR que usar "return" CORTA la ejecución de la función, si ponemos algo después NO SE EJECUTARÁ.

También es importante recordar que si no guardamos el valor de retorno lo perdemos y no podremos acceder a él.

## Funciones de flecha

En un programa se suelen crear bastantes funciones, por lo que se creó una forma distinta de crear funciones, las funciones de flecha.

```javascript
const example = (a, b) => {
  // Código a ejecutar
};

example(3, 5);
```

Cuando tenemos una función que sólo hace un return, podemos omitir las llaves y la palabra return, de esta forma conseguimos una sintaxis mucho más simple de escribir.

```javascript
const addNumbers = (a, b) => a + b;
```

Además, si la función recibe un sólo parámetro podemos omitir también los paréntesis.

```javascript
const double = a => a * 2;
```
