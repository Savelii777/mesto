export default class Popup {
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClickClose = this._handleClickClose.bind(this);
    }
    open(){
        this._popupSelector.classList.add('popup_opened')
    }
    close(){
        this._popupSelector.classList.remove('popup_opened')
    }
    _handleEscClose(evt)
    {
        if (evt.key === 'Escape') {
            document.removeEventListener("keydown", this._handleEscClose);
            this.close()
          }

    }
    _handleClickClose(evt)
    {
        if (evt.target.classList.contains('popup_opened')) {
            document.removeEventListener("click", this._handleCickClose);
            this.close();
          }
    }

    setEventListeners()
    {
        //Клик по оверлею и по крестику
        document.addEventListener("keydown", this._handleEscClose);
        this._popupSelector.addEventListener("click",this._handleClickClose);
        this._popupSelector
        .querySelector(`.${this._popupSelector.classList[1]}__close-button`)
        .addEventListener('click', ()=>{this.close()})

    }
}