import './index.scss';
import axios from 'axios';

const loadBtn = document.querySelector('.js-load');
const resultsContainer = document.querySelector('.js-results');
const searchInput = document.querySelector('.js-input');
const resultsContainerUsers = document.querySelector('.js-results-users');
const inputForm = document.querySelector('.input-form-js');
const validateInputTelText = document.querySelector('.validate-input-tel-js');
const form = document.querySelector('.form');

loadBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(
      (data) =>
        (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
    )
    .catch(
      (error) =>
        (resultsContainer.innerHTML = `<div class="response-container">
          <p> Такого пользователя не существует ${error}<p>
      </div>`)
    );
});

axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    res.data.map((user) =>
      resultsContainerUsers.insertAdjacentHTML(
        'beforeend',
        `<div class="response-container">

          <p> Имя: <span>${user.name}</span><p>
          <p> Телефон: <span>${user.phone}</span><p>
          <p> Cайт: <span>${user.website}</span><p>
      </div>`
      )
    );
  })
  .catch(
    (error) =>
      (resultsContainerUsers.innerHTML = `<div class="response-container">
        <p>Не удалось загрузить данные: ${error.message}<p>
    </div>`)
  );

const validate = (evt) => {
  const value = evt.target.value.replace(/\s*/g, '');

  try {
    if (value.trim() === '') throw new Error('поле не должно быть пустым');

    if (!Number(value))
      throw new Error('В поле должны быть введены только цифры');

    if (value.trim().length < 5 || value.trim().length > 10)
      throw new Error('Кол-во символов поля от 5 до 10 символов');

    validateInputTelText.classList.remove('form__span_active');
  } catch (err) {
    validateInputTelText.classList.add('form__span_active');
    validateInputTelText.textContent = err.message;
  }
};

inputForm.addEventListener('input', validate);
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

async function lottery() {
  console.log('Вы начали игру');
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve() : reject();
    }, 1000);
  });

  try {
    await promise;
    console.log('Вы выиграли');
    console.log('Вы заплатили');
  } catch {
    console.log('Вы проиграли');
  } finally {
    console.log('Игра закончена');
  }
}

lottery();
