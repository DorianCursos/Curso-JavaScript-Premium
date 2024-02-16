# DOM

## ¿Qué es el DOM?

Para que JavaScript pueda interpretar y manipular el HTML necesita convertir cada etiqueta a una serie de NODOS que él pueda entender y gestionar, ese grupo de NODOS son objetos y el conjunto de todos los objetos de nuestro documento forman el DOM (Document Object Model, Modelo de Objetos del Documento)

## El objeto element

Todas nuestras etiquetas de HTML son objetos que JavaScript puede leer y manipular.

```html
<h1 id="title">Soy un título</h1>
```

De forma abreviada podemos ver esta etiqueta como un objeto.

```javascript
myTitle: {
    id:'title',
    tagName:'H1',
    textContent:'Soy un título'
}
```

La propiedad id, tagName y textContent son propiedades reales que podemos encontrar en nuestro título, pero aparte de esas tres, existen decenas de propiedades y métodos que tienen todos nuestros elementos, lo importante no es que memoriceis todas, porque eso no tendría ningún sentido, lo importante es que entendais, que como objetos que son, podemos acceder a cualquier propiedad o método que necesitemos con un punto, myTitle.id, myTitle.tagName o myTitle.textContent, y así con todas las propiedades y métodos que tiene "myTitle"

## Selección de elementos

Para poder guardar los elementos de nuestro DOM, JavaScript pone a nuestra disposición varios métodos que pertenecen al objeto "document" el cual es, en esencia, nuestro archivo HTML

- getElementById(id): Este método sirve para acceder a UN ÚNICO elemento a través de su id, recibe como parámetro un string que será el id del elemento que queremos seleccionar, este es el método que más veces vais a utilizar para seleccionar elementos que tienen un id.

- querySelectorAll(selectorCSS): Este método nos permite seleccionar TODOS los elementos que coincidan con el selector CSS que le pasemos como parámetro, este método es el que se recomienda utilizar para selecionar varios elementos con algún valor en comun (etiqueta, clase, etc.)

- querySelector(selectorCSS): Este método nos permite seleccionar el PRIMER elemento que coincida con el selector CSS que le pasemos como parámetro, se suele utilizar cuando tenemos que realizar una selección a través de un atributo o de ciertas propiedades que no podríamos hacer de forma cómoda con un id, suele ser bastante útil cuando los elementos que queremos seleccionar se han generado desde JavaScript de manera dinámica.

Existen más métodos para acceder a los elementos, pero por temas de rendimiento y optimización se recomienda utilizar únicamente estos dos.

```javascript
//Esto seleccionaría TODOS los elementos que tuvieran la clase "red"
const allRedElements = document.querySelectorAll('.red');
```

## DOM traversing

JavaScript también nos da una serie de propiedades para poder "navegar" a través de los elementos partiendo de un elemento concreto.

- parentElement: Nos permite seleccionar al padre del elemento en el que nos encontramos.

- children[n]: Nos permite seleccionar al hijo número [n]

- nextElementSibling: Nos permite seleccionar a la etiqueta hermana siguiente.

- previousElementSibling: Nos permite seleccionar a la etiqueta hermana anterior.

Para las etiquetas que son obligatorias en nuestro HTML tenemos acceso directo a ellas partiendo desde el elemento document, que ya hemos visto que es nuestro documento HTML.

- document.head: Nos permite seleccionar la etiqueta <head> de nuestro HTML

- document.title: Nos permite seleccionar la etiqueta <title> de nuestro HTML

- document.body: Nos permite seleccionar la etiqueta <body> de nuestro HTML
