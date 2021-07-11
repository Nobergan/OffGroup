const nameInputRef = document.querySelector('[type="text"]');
const telInputRef = document.querySelector('[type="tel"]');
const emailInputRef = document.querySelector('[type="email"]');
const btnRef = document.querySelector('.callback__form-btn');
const allInputsRef = document.querySelectorAll('.callback__form-input');

btnRef.addEventListener('click', validate);

function validate() {
  // Валидация имени
  if (nameInputRef.value == '') {
    nameInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Введите свое имя!',
    });
    // return false;
  } else {
    nameInputRef.classList.remove('invalid');
    nameInputRef.classList.add('valid');
  }

  // Валидация номера телефона
  const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  if (telInputRef.value == '') {
    telInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Неверный формат номера!',
    });
  } else if (!phoneRegex.test(telInputRef.value)) {
    telInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Неверный формат номера!',
    });
  } else {
    telInputRef.classList.remove('invalid');
    telInputRef.classList.add('valid');
  }

  // Валидация имейла
  const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if (emailInputRef.value == '') {
    emailInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Неверный E-mail!',
    });
    // return false;
  } else if (!emailRegex.test(emailInputRef.value)) {
    emailInputRef.classList.add('invalid');
    iziToast.error({
      timeout: '2000',
      message: 'Неверный E-mail!',
    });
  } else {
    emailInputRef.classList.remove('invalid');
    emailInputRef.classList.add('valid');
  }
}
