// CONSTANTES DEL DOM
// CONSTANTES DE JAVASCRIPT
// VARIABLES DE JAVASCRIPT
// FUNCIONES
// ACCIONES (llamadas a funciones)
// EVENTOS

/*
Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es... mi hermano es ... No puedes seleccionar ningún elemento más, sólo el h3.

<header id="header" class="header">
  <h1 id="main-title" class="title">Soy un título</h1>
  <h2 id="main-subtitle" class="subtitle">Soy un subtítulo</h2>
  <h3 id="start-point" class="start"></h3>
</header>
*/

const h3Element = document.getElementById('start-point');
const bigBrother = h3Element.previousElementSibling.previousElementSibling;
const smallBrother = h3Element.previousElementSibling;
const parent = h3Element.parentElement;

// console.log(`Soy un h3 con el id ${h3Element.id} y la clase ${h3Element.classList[0]}.`);
// console.log(
//   `Mi hermano mayor es un h1 con el id ${bigBrother.id} y la clase ${bigBrother.classList[0]}`
// );
// console.log(
//   `Mi hermano menor es un h2 con el id ${smallBrother.id} y la clase ${smallBrother.classList[0]}`
// );

// console.log(`Mi padre es un header con el id ${parent.id} y la clase ${parent.classList[0]}`);

/*
Añadiendo este fragmento de código a tu HTML, invierte el contenido de las etiquetas utilizando la propiedad textContent a través de JavaScript, el <p> deberá tener el contenido del <span> y el <span> el contenido del <p>. La única modificación que puedes hacer al HTML es añadir id a las etiquetas

<p>Soy un párrafo</p>
<span>Soy un span</span>
*/

const paragraphElement = document.getElementById('paragraph');
const spanElement = document.getElementById('span');

const oldText = paragraphElement.textContent;
paragraphElement.textContent = spanElement.textContent;
spanElement.textContent = oldText;

/*
Añadiendo este HTML al que ya tienes, muestra por consola el número de etiquetas que hay de cada elemento.
Hay 1 header
Hay 1 h1
......
<section>
  <h2>Sección principal</h2>
  <article>
    <h3>Artículo 1</h3>
    <p>Contenido del artículo 1.</p>
    <ul>
      <li><span>Elemento 1</span></li>
      <li><span>Elemento 2</span></li>
      <li><span>Elemento 3</span></li>
    </ul>
  </article>
  <article>
    <h3>Artículo 2</h3>
    <p>Contenido del artículo 2.</p>
    <ul>
      <li><span>Elemento 4</span></li>
      <li><span>Elemento 5</span></li>
      <li><span>Elemento 6</span></li>
    </ul>
  </article>
</section>
*/

const h1Elements = document.querySelectorAll('h1');
const h2Elements = document.querySelectorAll('h2');
const h3Elements = document.querySelectorAll('h3');
const paragraphElements = document.querySelectorAll('p');
const spanElements = document.querySelectorAll('span');
const sectionElements = document.querySelectorAll('section');
const articleElements = document.querySelectorAll('article');
const ulElements = document.querySelectorAll('ul');
const liElements = document.querySelectorAll('li');

console.log(`Hay ${h1Elements.length} etiquetas h1.`);
console.log(`Hay ${h2Elements.length} etiquetas h2.`);
console.log(`Hay ${h3Elements.length} etiquetas h3.`);
console.log(`Hay ${paragraphElements.length} etiquetas párrafo.`);
console.log(`Hay ${spanElements.length} etiquetas span.`);
console.log(`Hay ${sectionElements.length} etiquetas section.`);
console.log(`Hay ${articleElements.length} etiquetas article.`);
console.log(`Hay ${ulElements.length} etiquetas ul.`);
console.log(`Hay ${liElements.length} etiquetas li.`);
