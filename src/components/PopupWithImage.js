import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
    constructor(popup)
    {
        super(popup)
        this._popupSelectorImage = this._popup.querySelector('.popup-card__image');
        this._popupSelectorCaption = this._popup.querySelector('.popup-card__caption');

    }
    
    open(name, link)
    {
       this._popupSelectorImage.src = link;
       this._popupSelectorImage.alt = name;
       this._popupSelectorCaption.textContent = name;
        super.open();
    }

}