import Popup from "./Popup.js";

export default class popupWithConfirmation extends Popup {
    constructor(popup) {
      super(popup);
      this._popupForm = this._popup.querySelector(".popup__inputs");
    }
    doConfirmation(handleDelete){
        this._confirmation = handleDelete;
      }
  setEventListeners() { 
        super.setEventListeners();
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            console.log('submit')
            this._confirmation();
        });
      }
}