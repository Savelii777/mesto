
//показывать ошибку
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};
//спрятать ошибку
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

//проверка вводных данных на валидность
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    console.log(inputElement.validationMessage)
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

//создание слушателей для полей
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

//включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    if (!formElement.classList.contains(config.popupCarsSelector)) {
      setEventListeners(formElement, config);
    }
  });
};
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
//активация и деактивация кнопки
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

const validationConfig = {
  formSelector: '.popup',
  submitButtonSelector: '.popup__save-button',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__save-button_type_inactive',
  popupCarsSelector: 'popup-card'
}
//bugfix: сброс ошибок
function removeFormErrors(popup) {
  if (popup.classList.contains('popup-profile')) {
    const nameError = popupProfile.querySelector(`.${nameInput.id}-error`);
    const jobError = popupProfile.querySelector(`.${jobInput.id}-error`);
    nameInput.classList.remove('popup__input_type_error')
    nameError.textContent = '';
    jobInput.classList.remove('popup__input_type_error')
    jobError.textContent = '';
  } else {
    const imageNameError = popupImage.querySelector(`.${imageNameInput.id}-error`);
    const imageLinkError = popupImage.querySelector(`.${imageLinkInput.id}-error`);
    imageNameInput.classList.remove('popup__input_type_error')
    imageNameError.textContent = '';
    imageLinkInput.classList.remove('popup__input_type_error')
    imageLinkError.textContent = '';
  }
}
enableValidation(validationConfig);


