# DOM - EVENTOS

## ¿Qué es un evento?

Un evento es cualquier acción que sucede por causa del usuario o por el funcionamiento del propio navegador.

Una de las mayores características de JavaScript es poder reaccionar a cualquiera de estos eventos. Existen decenas de eventos en función de los elementos a los que se lo apliquemos, de si tienen animaciones o transiciones, eventos de usuario, de teclado, de ratón…
Lo bueno es que TODOS funcionan igual, en lenguaje humano podríamos traducirlo en “escucha X y cuando lo oigas haz Y”

Para poder gestionar estos eventos tenemos lo que se conoce como manejadores de eventos o listeners.

## ¿Cómo se escribe un evento?

La sintaxis de un evento se divide en tres partes:
element: Elemento que escucha el evento.
event: El evento que escuchará.
callback: Qué hará cuando lo escuche, es el nombre de la función a la que llamaremos cuando suceda el evento

```javascript
element.addEventListener('event', callback);
```

Por ejemplo, si quisiéramos que cuando se haga click en el sitio web se muestre un mensaje por consola diciendo “Has hecho click” la sintaxis sería:

```javascript
document.addEventListener('click', () => console.log('Has hecho click'));
```

El callback puede ser interno o externo, interno es cuando escribimos la propia función dentro del eventListener, ésto es algo que se puede hacer y funcionará sin problema pero, como recomendación, hay que tratar de mantener toda la funcionalidad posible fuera del evento, en una función externa.

```javascript
document.addEventListener('click', event => console.log(event));

const handleClick = () => {
  console.log('Has hecho click');
};

document.addEventListener('click', handleClick);
```

La única diferencia es que si es interno, la función no necesita nombre, pero si es externo, necesita un nombre para poder referenciarla y es MUY IMPORTANTE que en la función de callback NO pongamos los paréntesis, porque no queremos que se ejecute directamente.

## Objeto evento

Cada vez que se dispara un evento, automáticamente se envía la información de ese evento como parámetro del callback. Si necesitamos información del evento lo ponemos como parámetro de la función de callback y ya tendremos acceso a él. Dentro de ese evento tenemos TODA la información de todo lo que ha sucedido, quién ha ejecutado el evento, el tipo de evento que es, duración y un largo etc, por lo que siempre que necesites información de lo sucecido o acceso a alguno de los elementos implicados en el evento, dentro de este objeto tendrás acceso a esa información.

```javascript
const handleClick = event => {
  console.log(event);
};

document.addEventListener('click', handleClick);
```

## Eventos más utilizados (Genéricos)

- click: Se dispara cuando hacemos click en el elemento

## Eventos más utilizados (Formularios)

- submit: Se dispara cuando se envía el formulario (Sólo lo puede tener el elemento form)
- input: Se dispara cuando escribimos en un campo del formulario.
- change: Se dispara cuando un elemento del formulario cambia y dejamos de hacer foco sobre él.

## Eventos más utilizados (window)

- scroll: Se dispara cuando hacemos scroll en nuestro sitio web (También se lo podemos poner a un elemento con scroll propio)
- keydown: Se dispara cuando pulsamos una tecla.
- load: Se dispara al terminar de cargar una página.
