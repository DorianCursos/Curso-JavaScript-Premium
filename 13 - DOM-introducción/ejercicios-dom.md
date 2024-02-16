# Ejercicios

## DOM - Introducción

### Nota

Estos 3 ejercicios realízalos en el mismo HTML con el mismo script.

- Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es... mi hermano es ... No puedes seleccionar ningún elemento más, sólo el h3.

```html
<header id="header" class="header">
  <h1 id="main-title" class="title">Soy un título</h1>
  <h2 id="main-subtitle" class="subtitle">Soy un subtítulo</h2>
  <h3 id="start-point" class="start">
</header>
```

- Añadiendo este fragmento de código a tu HTML, invierte el contenido de las etiquetas utilizando la propiedad textContent a través de JavaScript, el <span> deberá tener el contenido del <p> y el <p> el del <span>. La única modificación que puedes hacer al HTML es añadir id a las etiquetas

```html
<p>Soy un párrafo</p>
<span>Soy un span</span>
```

El resultado final deberá ser éste pero haciendo el cambio desde JavaScript.

```html
<p>Soy un span</p>
<span>Soy un párrafo</span>
```

- Añadiendo este HTML al que ya tienes, muestra por consola el número de etiquetas que hay de cada elemento.
  - Hay 1 Header
  - Hay 1 h1
    ......

```html
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
```
