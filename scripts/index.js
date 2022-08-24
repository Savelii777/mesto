const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupImage = document.querySelector('.popup-image');
const popupCard = document.querySelector('.popup-card');
const popupInputForm = document.querySelector('.popup__inputs_profile');
const popupImageInputForm = document.querySelector('.popup-image__inputs');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const inputImageName = document.querySelector('.popup__input_type_name-image');
const inputImageLink = document.querySelector('.popup__input_type_link-image');
const closeProfileButton = popupProfile.querySelector('.popup-profile__close-button');
const closeImageButton = popupImage.querySelector('.popup-image__close-button');
const closeCardButton = popupCard.querySelector('.popup-card__close-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addImageButton = document.querySelector('.profile__add-button');
const popupTitle = document.querySelector('.popup__title');
const elementSection = document.querySelector('.elements');

editButton.addEventListener('click',() => {showPopup(popupProfile)});
addImageButton.addEventListener('click',() => {showPopup(popupImage)});
closeProfileButton.addEventListener('click', ()=> {closePopup(popupProfile)});
closeImageButton.addEventListener('click', () => {closePopup(popupImage)});
closeCardButton.addEventListener('click', () => {closePopup(popupCard)});
popupInputForm.addEventListener('submit', saveInfo);
popupImageInputForm.addEventListener('submit', addImage);

//Добавление карточек на страницу через template
function initialiseCards () {
  for(let i = initialCards.length-1; i >= 0; i--){
    initialiseCard (initialCards[i].link,initialCards[i].name);
  }
    
};
//Добавление карточки в начало через template
function initialiseCard (link, name) {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = link;
    element.querySelector('.element__title').textContent = name;
    element.querySelector('.element__image').alt = name;//alt заполнен
    elementSection.prepend(element);
    //лайки для карточек
    const likeButton = element.querySelector('.element__like-button');
    likeButton.addEventListener('click', (event) => {
        likeButton.classList.toggle('element__like-button_active');
    });
     //удаление карточек
     const deleteButton = element.querySelector('.element__delete-button')
     deleteButton.addEventListener('click', (event) => {
     deleteButton.parentNode.remove();
 });
 //открытие карточки
const openCardImge = element.querySelector('.element__image')
openCardImge.addEventListener('click', (event) => {
    showPopup(popupCard);
    popupCard.querySelector('.popup-card__image').src = openCardImge.src;
    popupCard.querySelector('.popup-card__caption').textContent = openCardImge.alt;//alt заполнен
});
};

//сохранение информации профиля
function saveInfo(evt) {

  evt.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupProfile.classList.remove('popup_opened');
    
  }

  function addImage(evt) {
      evt.preventDefault();
      initialiseCard(inputImageLink.value,inputImageName.value);
      inputImageName.value = '';
      inputImageLink.value = '';
      popupImage.classList.remove('popup_opened');
      
    }
//открытие попапа
function showPopup(popup) {
    if(popup.classList.value.includes('popup-profile')){
      popupProfile.classList.add('popup_opened');
    }
    else{
      if(popup.classList.value.includes('popup-image')){
        popupImage.classList.add('popup_opened');
      }
      else{
        if(popup.classList.value.includes('popup-card')){
          popupCard.classList.add('popup_opened');
        }
      }
    }
  }
  
  //закрытие попапа
  function closePopup(popup) {
    if(popup.classList.value.includes('popup-profile')){
      inputName.value = profileName.textContent;
      inputJob.value = profileJob.textContent;
      popupProfile.classList.remove('popup_opened');
    }
    else{
      if(popup.classList.value.includes('popup-image')){
        inputImageName.value = "";
        inputImageLink.value = "";
        popupImage.classList.remove('popup_opened');
      }
      else{
        if(popup.classList.value.includes('popup-card')){
          popupCard.classList.remove('popup_opened');
        }
      }
    }
  }

  initialiseCards();


 