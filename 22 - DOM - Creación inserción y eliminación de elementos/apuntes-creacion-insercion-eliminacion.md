# Creación de elementos

En muchas ocasiones necesitamos crear elementos dinámicamente en función de lo que suceda en nuestra aplicación, para ello tenemos un método "createElement" que pertenece a "document". Éste método recibe un único parámetro que será el nombre de la etiqueta que queremos crear en formato String.

```js
document.createElement(etiquetaHTML);
```

Es MUY IMPORTANTE que guardemos el elemento que hemos creado en una variable/constante, es la única forma de poder acceder a él después de crearlo.

```js
const newElement = document.createElement(etiquetaHTML);
```

Al crear este elemento tenemos disponibles LAS MISMAS opciones que si lo tuviéramos en el HTML, es el mismo objeto, pero creado desde JavaScript en lugar de escribirlo en el HTML y obtenerlo a través de getElementById o querySelector.

# Inserción de elementos

Una vez que tenemos un elemento creado, necesitamos insertarlo en nuestro DOM para poder visualizarlo en la web. Para hacerlo tendremos que situarnos en el punto del DOM donde queremos insertarlo y una vez ahí, tenemos varios métodos disponibles.

prepend(element1, element2, ...): Inserta el elemento como PRIMER hijo del elemento en el que te hayas situado.

append(element1, element2, ...): Inserta el elemento como ÚLTIMO hijo del elemento en el que te hayas situado.

Estos dos son los métodos más utilizados, pero existe otro, insertAdjacentElement(position, element)

Éste método recibe 2 parámetros, el primero es DÓNDE debe insertar, y el segundo es QUÉ elemento debo insertar.

Para el dónde tenemos 4 valores disponibles:

- afterbegin: Inserta el nuevo elemento como primer hijo del elemento. (equivalente a prepend)

- beforeend: Inserta el nuevo elemento como último hijo del elemento. (equivalente a append)

- beforebegin: Inserta el nuevo elemento como hermano anterior del elemento seleccionado.

- afterend: Inserta el nuevo elemento como hermano siguiente del elemento seleccionado.

# Inserción múltiple

Hacer inserciones el DOM es algo que consume bastantes recursos en el navegador.

Éste código funciona perfectamente, pero consume demasiados recursos del navegador porque estamos haciendo 5 inserciones en el DOM.

```js
const numbers = [1, 2, 3, 4, 5];

const createParagraphNumbers = () => {
  numbers.forEach(number => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = number;
    document.body.append(newParagraph);
  });
};

createParagraphNumbers();
```

Para evitar tener que hacer inserciones múltiples en el DOM tenemos a nuestra disposición un objeto que nos da JavaScript de forma nativa, Fragment.

Un fragmento es simplemente un objeto donde guardaremos todo lo que queremos insertar en el DOM y después haremos una ÚNICA inserción en el DOM.

```js
const numbers = [1, 2, 3, 4, 5];

const createParagraphNumbers = () => {
  const fragment = document.createDocumentFragment();
  numbers.forEach(number => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = number;
    fragment.append(newParagraph);
  });
  document.body.append(fragment);
};

createParagraphNumbers();
```

# Elminación de elementos

Para eliminar elementos del DOM tenemos a nuestra disposicón el método remove(). Éste método lo tienen TODOS los elementos de nuestro DOM

```js
const element = document.getElementById('title');
element.remove();
```
