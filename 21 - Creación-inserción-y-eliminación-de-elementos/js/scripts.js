/*
Crea una función que permita añadir elementos a la lista con la misma estructura que te doy en el ejemplo, además cada vez que pulses el botón de la X debe eliminar el elemento de la lista que has pulsado.
*/

const buttonElement = document.getElementById('button');
const listElement = document.getElementById('list');

const removeElementList = event => {
  event.target.removeEventListener('click', removeElementList);
  event.target.parentElement.remove();
};

const createElementList = () => {
  const newListElement = document.createElement('li');
  newListElement.textContent = `Elemento ${listElement.children.length + 1}`;
  const newButtonElement = document.createElement('button');
  newButtonElement.textContent = 'X';

  newButtonElement.addEventListener('click', removeElementList);
  newListElement.append(newButtonElement);

  listElement.append(newListElement);
};

buttonElement.addEventListener('click', createElementList);
