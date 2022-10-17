const validationConfig = {
    submitButtonSelector: '.popup__save-button',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    inactiveButtonClass: 'popup__save-button_type_inactive',
    popupCarsSelector: 'popup-card',
    popupProfileClass: 'popup-profile'
  }

class FormValidator{
 constructor(config, formElement){
    this._submitButtonSelector = config.submitButtonSelector
    this._inputSelector = config.inputSelector
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._inactiveButtonClass = config.inactiveButtonClass
    this._popupCarsSelector = config.popupCarsSelector
    this._popupProfileClass = config.popupProfileClass
    this._formElement = formElement
 }
 enableValidation(){
  //включение валидации
    const formList = Array.from(document.querySelectorAll(this._formElement));
    formList.forEach((formElement) => {
      if (!formElement.classList.contains(this._popupCarsSelector)) {
        this._setEventListeners(formElement);
      }
    });
 }
 _checkInputValidity(formElement, inputElement){
    //проверка вводных данных на валидность
  if (!inputElement.validity.valid) {
    console.log(inputElement.validationMessage)
    this._showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
   this._hideInputError(formElement, inputElement);
  }
}
 _setEventListeners(formElement){
      //создание слушателей для полей
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',  () => {
        this._toggleButtonState(inputList, buttonElement);
        this._checkInputValidity(formElement, inputElement);
      });
    });
 }

 _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
 _toggleButtonState(inputList, buttonElement){
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
 }
 _showInputError(formElement, inputElement, errorMessage){
    // const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
//   };
 }
 _hideInputError(formElement, inputElement)
{
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
}
  _removeFormErrors(firstInput, secondInput, popup) {

    if (popup.classList.contains('.popup-profile')) {
      const nameError = popup.querySelector(`.${firstInput.id}-error`);
      const jobError = popup.querySelector(`.${secondInput.id}-error`);
      firstInput.classList.remove(this._inputErrorClass)
      nameError.textContent = '';
      secondInput.classList.remove(this._inputErrorClass)
      jobError.textContent = '';
    } 
    else {
      const imageNameError = popup.querySelector(`.${firstInput.id}-error`);
      const imageLinkError = popup.querySelector(`.${secondInput.id}-error`);
      firstInput.classList.remove(this._inputErrorClass)
      imageNameError.textContent = '';
      secondInput.classList.remove(this._inputErrorClass)
      imageLinkError.textContent = '';
    }
  }
}

  export {validationConfig, FormValidator}
  