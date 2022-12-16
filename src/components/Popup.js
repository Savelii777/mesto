export default class Popup {
    constructor(popup){
        this._popup = document.querySelector(popup);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClickClose = this._handleClickClose.bind(this);
    }
    open(){
        document.addEventListener("keydown", this._handleEscClose);
        this._popup.addEventListener("click",this._handleClickClose);
        this._popup.classList.add('popup_opened')
    }
    close(){
        document.removeEventListener("keydown", this._handleEscClose);
        document.removeEventListener("click", this._handleCickClose);
        this._popup.classList.remove('popup_opened')
    }
    _handleEscClose(evt)
    {
        if (evt.key === 'Escape') {
            this.close()
          }

    }
    _handleClickClose(evt)
    {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
          }
    }

    setEventListeners()
    { 
         this._popup
        .querySelector(`.${this._popup.classList[1]}__close-button`)
        .addEventListener('click', ()=>{this.close()})
    }
}