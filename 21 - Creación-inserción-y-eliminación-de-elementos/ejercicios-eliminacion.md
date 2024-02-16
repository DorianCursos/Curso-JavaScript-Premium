# Ejercicios

## Eliminación de elementos

- Crea una función que sea capaz de eliminar el boton que pulsas

```html
<div>
  <button>Botón 1</button>
  <button>Botón 2</button>
  <button>Botón 3</button>
  <button>Botón 4</button>
  <button>Botón 5</button>
  <button>Botón 6</button>
  <button>Botón 7</button>
  <button>Botón 8</button>
  <button>Botón 9</button>
  <button>Botón 10</button>
</div>
```

- Crea una función que reciba un número y genere un div con tantos botones dentro como número le hayais pasado. A continuación tienes que conseguir que al hacer click en cualquiera de los botones elimine el botón siguiente al que has pulsado, si no hubiera botón siguiente, elimina el anterior, y si no hay ni anterior ni siguiente se elimina él mismo y el contenedor de los botones.

Si a la función le pasáramos un 5, éste debería ser el resultado.

```html
<div>
  <button>Botón 1</button>
  <button>Botón 2</button>
  <button>Botón 3</button>
  <button>Botón 4</button>
  <button>Botón 5</button>
</div>
```

- Crea una función que permita añadir elementos a la lista con la misma estructura que te doy en el ejemplo, además cada vez que pulses el botón de la X debe eliminar el elemento de la lista que has pulsado.

```html
<button>Añadir elemento</button>
<ul>
  <!-- Cada vez que pulses el botón deberá añadirse un li con un button dentro -->
  <li>Elemento 1 <button>X</button></li>
</ul>
```
