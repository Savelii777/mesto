import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popup, callbackSubmitForm){
        super(popup)
        this._saveButton = this._popup.querySelector('.popup__save-button')
        this._callbackSubmitForm = callbackSubmitForm;
        this._formInputs = Array.from(this._popup.querySelectorAll(".popup__input"));
        this._form = this._popup.querySelector(".popup__inputs");
    }
    isLoading()
    {   
      if(this._popup.classList.contains('popup-image')){
      this._saveButton.textContent = 'Создание...';
      console.log(this._saveButton.textContent)

      }
      if(this._popup.classList.contains('popup-profile')||this._popup.classList.contains('popup-profile')){
        this._saveButton.textContent = 'Сохнанение...';
        console.log(this._saveButton.textContent)
      }
        
    }
    _getInputValues(){
      this._formInputsValuesArr = {};
        this._formInputs.forEach((input) => {
          this._formInputsValuesArr[input.name] = input.value;
        });
        return this._formInputsValuesArr;
    }
    setEventListeners()
    {   
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._callbackSubmitForm(this._getInputValues());
        });
      }
    
    close(){
        this._form.reset();
        super.close()
    }
}