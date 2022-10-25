const form = document.querySelector('.consultation__form');
const userName = document.querySelector('.user-name-js');
const userPhone = document.querySelector('.user-phone-js');

//очистить форму после отправки данных
const clearForm = () => {
  userName.value = '';
  userPhone.value = '';
};

//вывести в консоль данные пользователя из формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  console.log({
    name: userName.value,
    phone: userPhone.value,
  });

  clearForm();
});

//запрещает ввод в поле телеофона любых символов кроме цифр
userPhone.addEventListener('input', (e) => {
  const value = e.target.value;
  e.target.value = value.replace(/[^\d]/g, '');
});
