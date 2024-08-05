// Script 1: Email Validation
const emailInput = document.forms.formOne.elements.firstEmail;
const errorMessage = document.getElementById('errorMessage');
const mailValidation = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailInput.addEventListener('input', () => {
    if (!regex.test(emailInput.value)) {
      emailInput.style.border = '2px solid red';
      errorMessage.textContent = 'Некорректный email';
    } else {
      errorMessage.textContent = '';
      emailInput.style.border = '';
    }
  });
}
mailValidation();

// Script 2: Form Submit Validation
const formSubmit = () => {
  const nameInput = document.forms.formThree.elements.thirdName;
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
      document.getElementById('practicum').textContent = 'Введите имя!';
    } else {
      document.getElementById('practicum').textContent = 'Проверка пройдена';
    }
  });
}
formSubmit();

// Script 3: Radio Button Check
const formRadioCheck = () => {
  const btn = document.forms.formFour.elements.fourthButton;
  const radioBtn = document.forms.formFour.elements.fourthName;
  
  radioBtn.addEventListener('change', () => {
    btn.disabled = !radioBtn.checked;
  });
}
formRadioCheck();

// Script 4: Set Placeholder
const setPlaceholder = () => {
  const inputFields = document.querySelectorAll('.form__input');
  
  inputFields.forEach(function(input) {
    input.setAttribute('placeholder', 'Введите данные');
  });
}
setPlaceholder();
