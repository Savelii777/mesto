
import {validationConfig} from '../utils/constants.js'
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
    this._buttonElementContent = this._buttonElement.textContent;
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
 }
 _hideInputError(inputElement)
{
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
}
  removeFormErrors() {
    this._inputList.forEach(input => {
      this._hideInputError(input)
    });
  }
  submitButtonDisable(){
    this._buttonElement.disabled = true;
    this._buttonElement.textContent = this._buttonElementContent
    this._buttonElement.classList.add(this._inactiveButtonClass)
  }
}

  export {validationConfig, FormValidator}
  