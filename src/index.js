import './index.scss';
import axios from 'axios';

const textArea = document.querySelector('.textarea__input');
const clearButton = document.querySelector('.clearTextArea');
const buttonDarkColor = document.querySelector('.searchThemeColor__dark');
const buttonLightColor = document.querySelector('.searchThemeColor__light');
const body = document.querySelector('.body');

const writeTextfromLocalStorage = () => {
  textArea.value = localStorage.getItem('textarea');
  if (localStorage.getItem('darkThemeColor')) {
    body.classList.add();
  }
};

const changeBodyThemeColor = () => {
  localStorage.getItem('darkThemeColor') === 'true'
    ? body.classList.add('body_dark')
    : body.classList.remove('body_dark');
};

buttonDarkColor.addEventListener('click', () => {
  localStorage.setItem('darkThemeColor', 'true');
  changeBodyThemeColor();
});

buttonLightColor.addEventListener('click', () => {
  localStorage.setItem('darkThemeColor', 'false');
  changeBodyThemeColor();
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('textarea');
  writeTextformLocalStorage();
});

textArea.addEventListener('input', (evt) => {
  localStorage.setItem('textarea', evt.target.value);
});

changeBodyThemeColor();
writeTextfromLocalStorage();
