import {showPopup} from "../utils/utils.js";
import {initialCards, popupCard} from "../utils/constants.js"
  class Card{
    popupCardImage = popupCard.querySelector('.popup-card__image')
    constructor(data, templateSelector) {
        this._title = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image')
        this._likeButton = this._element.querySelector('.element__like-button')
        this._deleteButton = this._element.querySelector('.element__delete-button')
    }
      _getTemplate() {
        const cardElement =  document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement;
      }
      generateCard(){
        // this._element = this._getTemplate();
        this._setEventListeners(); 
    // this._element.querySelector('.element__image').src = `${this._image}`;
    // this._element.querySelector('.element__image').alt = this._title;
    this._elementImage.src = `${this._image}`;
    this._elementImage.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
    
    return this._element; 
      }
_handleOpenPopup() {
    showPopup(popupCard);
    this.popupCardImage.src = this._image;
    this.popupCardImage.alt = this._title;
    popupCard.querySelector('.popup-card__caption').textContent = this._title;
} 
_deleteCard() {
  this._deleteButton.closest('.element').remove();
} 
_likingCard(){
  this._likeButton.classList.toggle('element__like-button_active');
}

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {
    this._handleOpenPopup()
  });
  this._deleteButton.addEventListener('click', () => {
    this._deleteCard()
});
this._likeButton.addEventListener('click', (event) => {
    this._likingCard()
  });
}
     
}
export {Card, initialCards}