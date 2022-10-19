const validationConfig = {
    submitButtonSelector: '.popup__save-button',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    inactiveButtonClass: 'popup__save-button_type_inactive',
    popupCarsSelector: 'popup-card',
    popupProfileClass: 'popup-profile',
    inputError: '.popup__input-error'
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
    this._inputError = config.inputError
    this._formElement = document.querySelector(formElement)
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
 }
 
 enableValidation(){
  //включение валидации

      if (!this._formElement.classList.contains(this._popupCarsSelector)) {
        this._setEventListeners();
      }

 }
 _checkInputValidity(inputElement){
    //проверка вводных данных на валидность
  if (!inputElement.validity.valid) {
    console.log(inputElement.validationMessage)
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
   this._hideInputError(inputElement);
  }
}
 _setEventListeners(){
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',  () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
 }

 _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
 _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
 }
 _showInputError( inputElement, errorMessage){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
//   };
 }
 _hideInputError(inputElement)
{
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
}
  removeFormErrors(popup) {
    const popupInputErrors = popup.querySelectorAll(this._inputError)
    const popupInputs = popup.querySelectorAll(this._inputSelector)
    popupInputs.forEach(input => {
      input.classList.remove(this._inputErrorClass)
    });
    popupInputErrors.forEach(error => {
      error.textContent = '';
    });
  }
  submitButtonDisable(imageButtonSave){
    imageButtonSave.disabled = true;
    imageButtonSave.classList.add('popup__save-button_type_inactive')
  }
}

  export {validationConfig, FormValidator}
  