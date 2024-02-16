# DOM Manipulación de CSS

Desde JavaScript tenemos tres formas distintas de manipular el CSS.

## Propiedad style

Ésta forma nos va a permitir añadir CSS en linea a cualquier elemento, ésta era la forma más utilizada antes de que existieran las variables CSS, a día de hoy no se recomienda porque es muy fácil generar conflictos entre los estilos CSS y los estilos en línea.

## Modificación variables CSS

Ésta es la forma recomendada para hacer ese tipo de cambios en un elemento, en lugar de atacar al elemento directamente, lo que hacemos es cambiar el valor de la variable que nos interese modificar. Para acceder a todas las variables que tenemos en :root utilizaremos siempre la misma línea de código:

```js
const rootStyles = document.documentElement.style;
```

Una vez que tenemos el acceso a las variables, podremos modificar su valor con el método `setProperty()`, éste método recibe dos parámetros, el primero, la variable a modificar, y el segundo el nuevo valor.

```js
rootStyles.setProperty('--variableCSS', 'nuevo-valor');
```

Si quisieramos obtener el valor de una variable CSS tenemos otro método para ello, getComputedStyle() y getPropertyValue(), normalmente cuando nuestro programa necesita saber el valor de una variable, se crea una función que retorne ese valor.

```js
const getValueOfCSSVariable = variableName => {
  const computedStyles = getComputedStyle(document.documentElement);
  return computedStyles.getPropertyValue(variableName);
};
```

## Manipulación de clases CSS

Desde JavaScript podemos manipular las clases CSS de un elemento a través de la propiedad classList. Esta propiedad tiene cinco métodos que podremos utilizar para trabajar con clases CSS.

- add(class): Éste método nos permite añadir clases a un elemento, podemos añadir todas las que necesitemos separadas por comas.

```js
element.classList.add(classA, classB,...)
```

- remove(class): Éste método nos permite quitar una clase al elemento selccionado.

```js
element.classList.remove(class)
```

- toggle(class): Éste método funciona como un interruptor, si el elemento tiene la clase, se la quita, si no la tiene se la pone.

```js
element.classList.toggle(class)
```

- replace(classA, classB): Éste método nos sirve para reemplazar clases, reemplazamos la classA por la classB.

```js
element.classList.replace(classA, classB);
```

- contains(class): Éste método nos sirve para preguntar si un elemento tiene o no una clase, el método devuelve true o false.

```js
element.classList.contains(class)
```
