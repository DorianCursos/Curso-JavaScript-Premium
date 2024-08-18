const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const buttonGenerateElement = document.getElementById('button-generate');

// const requestAdvice = () => {
//   fetch('https://api.adviceslip.com/advice')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// };

const printAdviceData = (id, advice) => {
  adviceIdElement.textContent = `ADVICE #${id}`;
  adviceTextElement.textContent = advice;
};

const requestAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const { id, advice } = data.slip;
    printAdviceData(id, advice);
  } catch (error) {
    console.log(error);
  }
};

requestAdvice();

buttonGenerateElement.addEventListener('click', requestAdvice);
