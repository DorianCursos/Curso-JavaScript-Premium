const generateRandomNumber = max => {
  return Math.floor(Math.random() * (max + 1));
};

const generateRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumber = generateRandomNumberBetween(10, 13);

console.log(randomNumber);
