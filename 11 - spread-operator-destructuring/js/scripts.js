const add = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

const printResult = result => {
  console.log('The result is:', result);
};

// const saveResult = result => {
//   // Esta función guarda el dato en una base de datos
//   console.log('The result is saved');
// };

add(5, 3, printResult);
// add(5, 3, saveResult);

console.log('hola');
