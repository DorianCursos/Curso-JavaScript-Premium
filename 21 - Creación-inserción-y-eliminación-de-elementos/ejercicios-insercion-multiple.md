# Ejercicios

## Inserción múltiple

- Crea una función que sea capaz de generar 25 números aleatorios y los devuelva, después crea una función que obtenga los 25 números aleatorios de la otra función e inserte en el DOM una lista con los números pares y otra con los números impares.

<br>

- Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

Pista: Para vaciar el contenido de un contenedor se puede usar contenedor.textContent = ""

```html
<label>Introduce un número</label>
<input type="number" />
<button disabled>Imprimir tabla de multiplicar</button>
<ul></ul>
```

- Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

```js
const USERS = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];
```

- Con esta estructura Y SIN MODIFICARLA, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:

  - El texto tiene X caracteres.
  - El texto tiene X vocales.
  - El texto tiene X consonantes.
  - El texto tiene X espacios
  - El texto tiene X caracteres especiales

Pista: Para vaciar el contenido de un contenedor se puede usar contenedor.textContent = ""

```html
<div>
  <input id="text" type="text" />
  <ul id="list"></ul>
</div>
```
