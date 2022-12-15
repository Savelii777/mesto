
export default class Card{
    constructor(data, userId, templateSelector, cardHandler) {
        this._title = data.name;
        this._image = data.link;
        this._cardId = data._id;
        this._owner = data.owner;
        this._likes = data.likes;
        this._userId = userId;
        this._templateSelector = templateSelector
        this._element = this._getTemplate();
        this._likeCounter = this._element.querySelector('.element__like-counter')
        this._elementImage = this._element.querySelector('.element__image')
        this._likeButton = this._element.querySelector('.element__like-button')
        this._deleteButton = this._element.querySelector('.element__delete-button')
        this._handleCardClick = cardHandler.handleCardClick;
        this._handleCardDelete = cardHandler.handleCardDelete;
        this._handleCardLike = cardHandler.handleCardLike;
        this._handleCardUnlike = cardHandler.handleCardUnlike;
    }

      _getTemplate() {
        const cardElement =  document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement;
      }

    generateCard(user){
    this._setEventListeners(); 
    this._setCountOfLikes();
    this._elementImage.src = `${this._image}`;
    this._elementImage.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
    if(this._userId != this._owner._id){
      this._deleteButton.setAttribute('style', 'display:none')
    }
    this._likes.forEach(like => {
      if(this._userId === like._id){
        this._likeButton.classList.add('element__like-button_active');
      }
    });
    return this._element; 
      }

deleteCard() {
  this._element.closest('.element').remove();
  this._element = null
} 
_likingCard(res){
  this._likes = res.likes;
  this._setCountOfLikes();
  this._likeButton.classList.toggle('element__like-button_active');
}

_setCountOfLikes()
{
  this._likeCounter.textContent = this._likes.length;
}

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {this._handleCardClick(this._title, this._image
    )});
    this._deleteButton.addEventListener('click', () => {this._handleCardDelete(this._cardId)});
this._likeButton.addEventListener('click', (event) => {
  if(this._likeButton.classList.contains('element__like-button_active')){
   this._handleCardUnlike(this._cardId)
    console.log('unlike')
  }else{ 
     this._handleCardLike(this._cardId)
     console.log('like')
  }
  });
}
     
}
