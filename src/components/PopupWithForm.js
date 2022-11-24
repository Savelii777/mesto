import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popupSelector, callbackSubmitForm){
        super(popupSelector)
        this._callbackSubmitForm = callbackSubmitForm;
        this._formInputs = Array.from(this._popupSelector.querySelectorAll(".popup__input"));
        this._form = this._popupSelector.querySelector(".popup__inputs");
        this._formInputsValuesArr = {};
    }
    _getInputValues(){
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