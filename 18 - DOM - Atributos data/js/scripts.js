const titleElement = document.getElementById('title');
const languageElement = document.getElementById('language');

const languages = {
  es: 'Soy un título',
  en: "I'm a title",
  fr: 'Je suis un titre'
};

const changeLanguage = event => {
  const language = event.target.dataset.language;
  titleElement.textContent = languages[language];
};

languageElement.addEventListener('click', changeLanguage);
