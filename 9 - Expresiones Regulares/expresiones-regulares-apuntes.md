# Objetos

## ¿Qué es una expresión regular?

Una expresión regular, también conocida como regex o regexp, es una secuencia de caracteres que define un patrón de búsqueda. Se utiliza para realizar coincidencias y manipulaciones avanzadas en cadenas de texto.

Las expresiones regulares irán entre barras (/) /expresión/ para indicar al programa que son una expresión regular.

## Operadores comunes

- Punto (.): Actua de caracter comodín, coincide con cualquier caracter salvo con los saltos de línea.

- Circunflejo (^): Establece el inicio del patrón.

- Dólar ($): Establece el final del patrón.

- Más (+): Coincide con una o más repeticiones del elemento anterior. Por ejemplo, /a+/ coincidirá con "a", "aa", "aaa", y así sucesivamente, pero no coincidirá con una cadena vacía.

- Interrogación (?): Coincide con cero o una repetición del elemento anterior.
  Por ejemplo, /a?/ coincidirá con "a" o una cadena vacía.

- Barra vertical (|): Se utiliza para especificar alternativas.
  Por ejemplo, /casa|hogar/ coincidirá con "casa" u "hogar".

- Corchetes ([]): Define un conjunto de caracteres entre los corchetes.
  Por ejemplo, /[aeiou]/ coincidirá con cualquier vocal.

- Rangos ([desde-hasta]): Define un rango para validar. Por ejemplo, [A-Z] serían todas las letras mayúsculas desde la A hasta la Z, si queremos varios rangos los pondremos sin espacios [a-zA-Z] serán todas las letras mayúsculas y minúsculas.

- Corchetes negados ([^]): Coincide con cualquier carácter que no esté en el conjunto especificado. Por ejemplo, /[^0-9]/ coincidirá con cualquier carácter que no sea un dígito del 0 al 9.

- Llaves ({}): Especifica el número exacto de repeticiones de un elemento.
  Por ejemplo, /a{3}/ coincidirá con "aaa".

En la mayoría de las situaciones pondremos /^patrón$/ para que coincida exactamente.

También podemos utilizar las expresiones regulares en el metodo replaceAll de los strings.

## Métodos comunes

test(string): Este método recibe un string y devuelve true o false en función de si el string coincide con el patrón de la expresión regular
