# Condicionales

## ¿Qué es un condicional?

Un condicional es una estructura de control de flujo. El flujo de un programa SIEMPRE será de arriba abajo, las estructuras de control de flujo nos permitirán cambiar este flujo para que se ejecute en el orden que nosotros queramos.

## Operadores de comparación

| Operador |    Significado    |   Se aplica a   |
| :------: | :---------------: | :-------------: |
|    >     |     mayor que     | Number / String |
|    <     |     menor que     | Number / String |
|    >=    | mayor o igual que | Number / String |
|    <=    | menor o igual que | Number / String |
|   ===    |     igual que     |      Todos      |
|   !==    |    distinto de    |      Todos      |
|    !     |     negación      |      Todos      |

IMPORTANTE: Siempre que realizamos una comparación, el resultado será true o false.

## Conversión implícita de datos

Cuando realizamos una operación matemática o de comparación entre tipos de datos distintos, javascript hará una conversión automática para que los datos sean del mismo tipo.

| Tipo operador A | Operación | Tipo operador B  |        Conversión         |  Resultado   |
| :-------------: | :-------: | :--------------: | :-----------------------: | :----------: |
|     String      |     +     |      Number      |      Number a String      |    String    |
|     String      |   -\*/%   |      Number      |      String a Number      | Number o NaN |
|     String      |   -\*/%   | null / undefined | null / undefined a Number |     NaN      |
|     Boolean     |  +-\*/%   |      Number      |     Boolean a Number      |    Number    |
|    undefined    |   -\*/%   |      Number      |    undefined a Number     |     NaN      |
|      null       |   -\*/%   |      Number      |      null a Boolean       |    Number    |

## Conversión explícita de datos

| Convertir a |    Método     | Resultado |
| :---------: | :-----------: | :-------: |
|   String    | String(dato)  |  String   |
|   Number    | Number(dato)  |  Number   |
|   Boolean   | Boolean(dato) |  Boolean  |

### Truthy values & falsy values

| Valor a evaluar | Resultado |
| :-------------: | :-------: |
|       ""        |   false   |
|    "anyone"     |   true    |
|        0        |   false   |
|  Other Number   |   true    |
|      true       |   true    |
|      false      |   false   |
|    undefined    |   false   |
|      null       |   false   |
|       []        |   true    |
|       {}        |   true    |

NOTA: con el operador typeof podéis saber de qué tipo es un dato.

```javascript
console.log(typeof dato);
```

## Condicional if

Un if SIEMPRE creará una ramificación en el flujo normal, en él haremos una pregunta que podemos traducir como “si... haz...” y cuyo resultado siempre será true o false.
La sintaxis de un if es:

```javascript
if (condición) {
  //Código a ejecutar
}
```

## Condicional if else

En algunas ocasiones necesitaremos ejecutar un código si se cumple la condición y otro si no se
cumple, para ello podemos añadir un else después del if. La traducción sería “si... haz... si no,
haz...”

```javascript
if (condición) {
  // Código a ejecutar si es true
} else {
  // Código a ejecutar si es false
}
```

## Condicional if else if

También tenemos la opción de encadenar condicionales para hacer varias comprobaciones, para
ello tenemos la expresión else if y SIEMPRE debe ir precedida de un if, se podría traducir como “si...
haz... si...haz” De forma opcional podemos añadir un else al final para que ese código se ejecute
si no entra en ninguna condición anterior.

```javascript
if (condición) {
  // Código a ejecutar si es true
} else if (condición) {
  // Código a ejecutar si es true
} else {
  // Código a ejecutar si nada es true
}
```

## Operadores lógicos

| Operador | Significado |
| :------: | :---------: |
|    &&    |  y lógico   |
|   \|\|   |  ó lógico   |

## Asignación de valores con operadores lógicos

Al crear una variable o una constante podemos usar los operadores lógicos para asignar un valor en base a una comparación lógica.

```javascript
const age = 20;
const isAdult = age >= 18;

const initialPoints = oldScore || 0;
```

## Condicional ternario

Cuando únicamente tenemos que hacer una comprobación simple de si o no y la lógica asociada a ambas respuestas es simple, podemos utilizar un operador ternario para realizar esa lógica.

La sintaxis de un operador ternario se construye con:
condición ? acción si es true : acción si es false

```javascript
const evenOrOdd = number => {
  return number % 2 === 0 ? 'par' : 'impar';
};

const isAdult = age => {
  age >= 18 ? console.log('Es mayor de edad') : console.log('Es menor de edad');
};
```

## Switch

Un switch nos sirve para mejorar la legibilidad en una estructura de if - else if - else
Su uso no es muy común pero en algunas situaciones es una muy buena opción para que el código sea más sostenible, escalable y fácil de leer.
Su estructura es:

```javascript
const getDayOfWeek = day => {
  if (typeof day !== 'number') {
    console.log('Día no válido');
    return;
  }
  switch (day) {
    case 1:
      console.log('Es lunes');
      break;
    case 2:
      console.log('Es martes');
      break;
    case 3:
      console.log('Es miercoles');
      break;
    case 4:
      console.log('Es jueves');
      break;
    case 5:
      console.log('Es viernes');
      break;
    default:
      console.log('Es fin de semana');
  }
};
```
