var menuIcon = document.getElementById("menu-icon");
var leftMenu = document.getElementById("left-menu");

menuIcon.addEventListener("click", function () {
  leftMenu.classList.toggle("menu-open");
});

leftMenu.addEventListener("mouseleave", function () {
  leftMenu.classList.remove("menu-open");
});

window.addEventListener('DOMContentLoaded', function () {
  var isMobile = window.matchMedia("(max-width: 912px)").matches;

  if (isMobile) {
    menuIcon.addEventListener('click', function () {
      if (document.body.classList.contains('no-scroll')) {
        // Разрешить прокрутку страницы
        document.body.classList.remove('no-scroll');
      } else {
        // Дополнительные действия, связанные с открытием меню

        // Запретить прокрутку страницы
        document.body.classList.add('no-scroll');
      }
    });
  } else {
    // Дополнительные действия на больших экранах
  }
});

let emailInput = document.querySelector('.email-input');
let checkbox = document.querySelector('.email-checkbox');
let submitButton = document.querySelector('.email-form-button');
let emailError = document.getElementById('emailError');

// Функция для проверки формы
function checkForm() {
  const email = emailInput.value;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email !== '' && isValidEmail && checkbox.checked) {
    submitButton.classList.remove('email-form-button');
    submitButton.classList.add('email-form-button-checked');
    submitButton.removeAttribute('disabled');
    emailInput.classList.add('error-border');
    emailError.style.display = 'block';
  } else {
    submitButton.classList.remove('email-form-button-checked');
    submitButton.classList.add('email-form-button');
    submitButton.setAttribute('disabled', true);
    emailInput.classList.add('error-border');
    emailError.style.display = 'block';
  }
}

// Назначаем обработчики событий на поле ввода электронной почты и чекбокс
emailInput.addEventListener('input', checkForm);
checkbox.addEventListener('change', checkForm);