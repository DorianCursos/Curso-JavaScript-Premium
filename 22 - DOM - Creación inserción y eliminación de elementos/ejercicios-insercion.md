# Ejercicios

## Inserción de elementos en el DOM

- Usando éste HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto correspondiente, es importante que los números sean consecutivos independientemente de que modifiquemos la lista en el HTML. Si elimináramos los "li" el primer item será "Item 1", si añadiéramos dos "li" el siguiente sería "Item 3" y así sucesivamente.

```html
<button>Añadir Elementos</button>
<ul>
  <li>Item 1</li>
</ul>
```

- Usando el input range que te doy haz un generador de encabezados.
  El input te permite seleccionar un número del 1 al 6, en función de cual elijas, la etiqueta label mostrará el número elegido (igual que hicimos en el generador de passwords), además al hacer click en el botón se generará un encabezado con el número que hayas elegido y se insertará en el div para encabezados. Si, por ejemplo, eliges el número 3, al hacer click se generará un h3 con el texto "Soy un h3", si eliges un 5, se generará un h5 con el texto "Soy un h5" y así para todos los números.

```html
<div>
  <label>1</label>
  <input type="range" id="range" min="1" max="6" step="1" value="1" />
  <button>Generar Encabezado</button>
</div>
<!-- Div para encabezados -->
<div></div>
```

- Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

```html
<h1>Posts</h1>
<!-- Contenedor de posts -->
<div>
  <div>
    <h2>Post de ejemplo</h2>
    <span>Author: Dorian</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
<!-- Fin del contenedor de posts -->
<form>
  <div>
    <label>Title</label>
    <input type="text" />
  </div>
  <div>
    <label>Author</label>
    <input type="text" />
  </div>
  <div>
    <label>Message:</label>
    <textarea></textarea>
  </div>
  <button>Send Post</button>
</form>
```

- Crea una función que genere un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.
