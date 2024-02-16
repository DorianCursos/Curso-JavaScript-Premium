/* Crea un botón en tu página HTML con el texto que quieras, añadele un evento de click que muestre en la consola su texto al hacer click. */

const buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', event => {
  console.log('Elemento -', `El botón tiene el texto ${buttonElement.textContent}`);
  console.log('Evento -', `El botón tiene el texto ${event.target.textContent}`);
});

/* Crea un h1 con el texto "Soy un título ", al ponerte encima con el ratón, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título" */

const titleElement = document.getElementById('title');

// titleElement.addEventListener('mouseover', () => {
//   titleElement.textContent = 'Quita de encima!!';
// });

// titleElement.addEventListener('mouseout', () => {
//   titleElement.textContent = 'Soy un título';
// });

titleElement.addEventListener('mouseover', event => {
  event.target.textContent = 'Quita de encima!!';
});

titleElement.addEventListener('mouseout', event => {
  event.target.textContent = 'Soy un título';
});

/* Agrega un evento que escuche el cambio de tamaño de ventana y haz que un h1 muestre el mensaje "La ventana tiene un ancho de ...px y un alto de ...px. */
const resizeMessageElement = document.getElementById('resize-message');
// window.addEventListener('resize', event => {
//   console.dir(event);
//   const windowWidth = event.target.innerWidth;
//   const windowHeight = event.target.innerHeight;

//   resizeMessageElement.textContent = `La ventana tiene un ancho de ${windowWidth}px y un alto de ${windowHeight}px.`;
// });

/* Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner "Has pulsado la tecla ...", como extra puedes poner si ha pulsado alguna combinación de teclas, alt + r, control + g, etc. */

const keyboardMessageElement = document.getElementById('keyboard-message');

const getFinalMessage = event => {
  let finalMessage = event.key;
  if (event.altKey && event.key !== 'Alt') {
    finalMessage = `Alt + ${event.key}`;
  } else if (event.ctrlKey && event.key !== 'Control') {
    finalMessage = `Ctrl + ${event.key}`;
  } else if (event.shiftKey && event.key !== 'Shift') {
    finalMessage = `Shift + ${event.key}`;
  }

  return finalMessage;
};

const updateKeyboardMessage = event => {
  const finalMessage = getFinalMessage(event);

  keyboardMessageElement.textContent = `Has pulsado la tecla ${finalMessage}`;
};

// window.addEventListener('keydown', updateKeyboardMessage);

/* Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range. Recuerda poner un mínimo y un máximo al input range. https://developer.mozilla.org/es/docs/Web/HTML/Element/input/range */

const labelRangeElement = document.getElementById('label-range');
const inputRangeElement = document.getElementById('range');

inputRangeElement.addEventListener('input', () => {
  labelRangeElement.textContent = inputRangeElement.value;
});

/* Crea un select con 4 opciones (la opción por defecto y otras 3) y añade un p con el texto "Seleccione una opción". Al seleccionar una opción el texto del p cambiará a "Ha seleccionado ...", si la opción selecionada es la de por defecto, el texto volverá a ser "Seleccione una opción" */

const selectMessageElement = document.getElementById('select-message');
const selectElement = document.getElementById('select');

const getSelectMessage = event => {
  const index = event.target.selectedIndex;
  let message = '';
  if (index === 0) {
    message = 'Seleccione una opción';
  } else {
    message = event.target[index].textContent;
  }

  return message;
};

selectElement.addEventListener('change', event => {
  const message = getSelectMessage(event);
  selectMessageElement.textContent = message;
});

/* Crea un input de tipo date y un p que diga "Selecciona una fecha", al seleccionar una fecha el p dirá la fecha en texto. Si seleccionas el 26/07/2023 el texto deberá ser "Has seleccionado el 26 de Julio de 2023" */

const dateMessageElement = document.getElementById('date-message');
const dateElement = document.getElementById('date');

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const generateDateMessage = date => {
  const monthIndex = Number(date.substring(5, 7)) - 1;
  const day = Number(date.substring(8));
  const month = months[monthIndex];
  const year = date.substring(0, 4);
  return `Has seleccionado el ${day} de ${month} de ${year}`;
};

dateElement.addEventListener('change', event => {
  dateMessageElement.textContent = generateDateMessage(event.target.value);
});

/* Crea un formulario para calcular descuentos, pon dos inputs de tipo number, uno para el precio y otro para el descuento, añade un botón con el texto "Calcular". Al hacer click en el botón muestra un texto que diga "El precio original es ..., aplicando un descuento del ...% el precio final es de ..." */

const formDiscountElement = document.getElementById('form-discount');
const discountMessageElement = document.getElementById('discount-message');

const calculateDiscount = (price, discount) => {
  const finalPrice = price - price * (discount / 100);
  return finalPrice;
};

const printDiscountMessage = event => {
  const price = event.target.price.value;
  const discount = event.target.discount.value;

  if (!price || !discount) {
    discountMessageElement.textContent = 'Rellene los datos para calcular el descuento';
    return;
  }

  const finalPrice = calculateDiscount(price, discount);

  discountMessageElement.textContent = `El precio original es ${price}, aplicando un descuento del ${discount}% el precio final es de ${finalPrice}`;
};

formDiscountElement.addEventListener('submit', event => {
  event.preventDefault();
  printDiscountMessage(event);
});

/* Crea dos inputs de texto que estén sincronizados, cuando escribas o borres en cualquiera de ellos en el otro también se escribirá y se borrará. */

const originalInputElement = document.getElementById('original-input');
const copyInputElement = document.getElementById('copy-input');

originalInputElement.addEventListener('input', () => {
  copyInputElement.value = originalInputElement.value;
});

copyInputElement.addEventListener('input', () => {
  originalInputElement.value = copyInputElement.value;
});

/* Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.
 */

const wordsArray = ['Nala', 'Anubis', 'Dorian', 'Monitor', 'Teclado'];

const previusButtonElement = document.getElementById('previus-button');
const slideTextElement = document.getElementById('slide-text');
const nextButtonElement = document.getElementById('next-button');

let slideCounter = 0;

const printText = () => {
  slideTextElement.textContent = wordsArray[slideCounter];
};

const previousSlide = () => {
  if (slideCounter === 0) {
    slideCounter = wordsArray.length - 1;
  } else {
    slideCounter--;
  }

  printText();
};

const nextSlide = () => {
  if (slideCounter === wordsArray.length - 1) {
    slideCounter = 0;
  } else {
    slideCounter++;
  }

  printText();
};

printText();

previusButtonElement.addEventListener('click', previousSlide);

nextButtonElement.addEventListener('click', nextSlide);

/* Crea un formulario con dos inputs para username y password. Añade otro input de tipo checkbox que diga "Acepto los términos y condiciones." Pon un botón al formulario que permita enviarlo. El botón estará desactivado hasta que hayas escrito un nombre de más de tres caracteres, un password de más de 4 caracteres y el checkbox esté activado. La propiedad que permite activar o desactivar un elemento de formulario es "disabled" y es un boolean. Al enviar el formulario deberás mostrar por consola el mensaje "El usuario ... ha iniciado sesión". */

const formElement = document.getElementById('form');
const formButtonElement = document.getElementById('form-button');

const login = () => {
  console.log(`El usuario ${formElement.name.value} ha iniciado sesión.`);
};

const validateForm = () => {
  const nameValue = formElement.name.value;
  const passwordValue = formElement.password.value;
  const termsChecked = formElement.terms.checked;

  if (nameValue.length <= 3 || passwordValue <= 4 || !termsChecked) {
    formButtonElement.disabled = true;
    return;
  }

  formButtonElement.disabled = false;
};

formElement.addEventListener('submit', event => {
  event.preventDefault();
  login();
});

formElement.addEventListener('input', validateForm);
