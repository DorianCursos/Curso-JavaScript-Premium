/* 
classList.add(classA, classB,...)
classList.remove(class)
classList.contains(class)
classList.toggle(class)
classList.replace(classA, classB);
*/

const boxElement = document.getElementById('box');
const buttonElement = document.getElementById('button');
const titleElement = document.getElementById('title');

buttonElement.addEventListener('click', () => {
  if (boxElement.classList.contains('red')) {
    boxElement.classList.replace('red', 'green');
  } else {
    boxElement.classList.replace('green', 'red');
  }
});
