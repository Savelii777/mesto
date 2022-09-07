//Объясните, пожалйста, что от меня хотят? Как это должно в теории работать

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }); 












//показывать ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };
  //спрятать ошибку
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };
  
  //проверка вводных данных на валидность
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      console.log(inputElement.validationMessage)
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  //создание слушателей для полей
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  //включение валидации
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
      fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  }); 
    });
  };
  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }
  //активация и деактивация кнопки
  function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_type_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__save-button_type_inactive');
    buttonElement.disabled = false;
  } 
  }
  
  enableValidation();
  