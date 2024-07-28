// setItem
// getItem
// clear

// JSON.stringify
// JSON.parse

const LS = window.localStorage;

// GETTER -> Obtener datos
const getValueFromLocalStorage = key => {
  const item = LS.getItem(key);

  if (!item) return `Not found data with key: ${key}`;

  const value = JSON.parse(item);
  return value;
};

// SETTER -> Asignar datos
const setItemInLocalStorage = (key, value) => {
  const jsonValue = JSON.stringify(value);
  LS.setItem(key, jsonValue);
};

setItemInLocalStorage('user', { name: 'Dorian' });
console.log(getValueFromLocalStorage('user'));
