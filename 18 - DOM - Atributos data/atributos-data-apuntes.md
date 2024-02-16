# DOM - ATRIBUTOS DATA

## ¿Qué son los atributos data?

Los atributos data son atributos personalizados de HTML que nos van a servir para pasar información a JavaScript sin tener que depender de su ID, textContent o de cualquier otro valor que podría cambiar.

Para usarlos simplemente pondremos en el elemento HTML al que se lo queramos añadir
data-value, value puede ser cualquier nombre que nos sirva para identificar el valor que enviamos, data-name; data-color; data-number; data-loQueSea...

No existe límite de atributos data para un elemento, podemos poner todos los que necesitemos pero es importante que no se repitan los nombres, en distintos elementos SI podemos repetir el nombre, lo que nos da una ventaja sobre los ids

```html
<button data-color="red">Rojo</button>
<button data-color="blue">Azul</button>
<button data-color="green">Verde</button>

<button data-languaje="es">Esplañol</button>
<button data-languaje="en">Inglés</button>
```

Para leer ese valor desde JavaScript lo haremos leyendo sus propiedades y usaremos la propiedad dataset, ésta propiedad nos dará un objeto con todos los valores que hayamos añadido a nuestro elemento.
