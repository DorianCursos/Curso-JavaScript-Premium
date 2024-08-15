// setInterval(callback, timeToRepeat)
// clearInterval(interval)

const countDownElement = document.getElementById('countdown');
let intervalId;
let counter = 10;

const countdown = () => {
  countDownElement.textContent = counter;
  if (counter <= 0) {
    clearInterval(intervalId);
  }
  counter--;
};
intervalId = setInterval(countdown, 1000);

countdown();
