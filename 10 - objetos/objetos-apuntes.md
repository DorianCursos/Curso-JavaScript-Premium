# Objetos

## ¿Qué es un objeto?

En JavaScript todo es un objeto, y ya es hora de que hablemos de ellos.

Un objeto es una estructura de datos que permite agrupar valores relacionados y sus correspondientes funciones en una única entidad. Los objetos se componen de propiedades y métodos.

Una propiedad es una asociación entre un nombre (también llamado clave) y un valor. El valor puede ser cualquier tipo de dato válido en JavaScript, números, cadenas de texto, booleanos, otros objetos e incluso funciones. Las propiedades de un objeto se definen utilizando la sintaxis clave:valor y se separan por comas.

Un método es una función que está asociada a un objeto en particular. Los métodos son propiedades que contienen una función como valor. Pueden realizar acciones o cálculos basados en los datos del objeto al que pertenecen.

Para crear un objeto en JavaScript, puedes utilizar la sintaxis de objetos literales, que consiste en encerrar las propiedades y métodos entre llaves {}. Aquí tienes un ejemplo de un objeto "user" con algunas propiedades:

```javascript
const user = {
  name: 'John',
  surname: 'Doe',
  age: 25
};
```

## Acceso a los valores

Para acceder a los valores del objeto lo más habitual es acceder a través de punto "." y la secuencia es el equivalente a “bajar” en la estructura, pondremos el nombre del objeto e iremos bajando niveles a través del punto "."

```javascript
user.name; // John
user.surname; // Doe
user.age; // 25
```

También existe la opción de acceder a los valores a través de [], a esto se le denomina acceso indexado.

```javascript
user['name']; // John
user['surname']; // Doe
user['age']; // 25
```
