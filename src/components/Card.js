
export default class Card{
    constructor(data, templateSelector, handleCardClick) {
        this._title = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image')
        this._likeButton = this._element.querySelector('.element__like-button')
        this._deleteButton = this._element.querySelector('.element__delete-button')
        this._handleCardClick = handleCardClick;
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
    this._setEventListeners(); 
    this._elementImage.src = `${this._image}`;
    this._elementImage.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
    
    return this._element; 
      }

_deleteCard() {
  this._element.closest('.element').remove();
  this._element = null
} 
_likingCard(){
  this._likeButton.classList.toggle('element__like-button_active');
}

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {this._handleCardClick(this._title, this._image
    )});
  this._deleteButton.addEventListener('click', () => {
    this._deleteCard()
});
this._likeButton.addEventListener('click', (event) => {
    this._likingCard()
  });
}
     
}
