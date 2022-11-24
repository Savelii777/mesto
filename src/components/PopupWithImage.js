import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
    constructor(popupSelector)
    {
        super(popupSelector)
        this._popupSelectorImage = this._popupSelector.querySelector('.popup-card__image');
        this._popupSelectorCaption = this._popupSelector.querySelector('.popup-card__caption');

    }
    
    open(name, link)
    {
       this._popupSelectorImage.src = link;
       this._popupSelectorImage.alt = name;
       this._popupSelectorCaption.textContent = name;
        super.setEventListeners()
        super.open();
    }

}