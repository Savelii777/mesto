const buttonEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupImage = document.querySelector('.popup-image');
const popupCard = document.querySelector('.popup-card');
const popupInputForm = document.querySelector('.popup__inputs_profile');
const popupImageInputForm = document.querySelector('.popup-image__inputs');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const imageNameInput = document.querySelector('.popup__input_type_name-image');
const imageLinkInput = document.querySelector('.popup__input_type_link-image');
const profileButtonClose = popupProfile.querySelector('.popup-profile__close-button');
const imageButtonClose = popupImage.querySelector('.popup-image__close-button');
const cardButtonClose = popupCard.querySelector('.popup-card__close-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const imageButtonAdd = document.querySelector('.profile__add-button');
const popupTitle = document.querySelector('.popup__title');
const elementSection = document.querySelector('.elements');
const imageButtonSave = popupImage.querySelector('.popup__save-button')

function closeByEsc(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    hidePopup(popup);
  }
}
function closeByClick (evt){
  if (evt.target.classList.contains('popup_opened')) {
    const popup = document.querySelector('.popup_opened');
    hidePopup(popup);
  }
};



function createPopupProfile(){
 
  function openPopup () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    showPopup(popupProfile);
  }  
  function closePopup () {
    hidePopup(popupProfile)
    removeFormErrors(popupProfile);
  }
  buttonEdit.addEventListener('click', openPopup);
  profileButtonClose.addEventListener('click', closePopup);

}

function createPopupImage(){
  function openPopup () {
    showPopup(popupImage)
  }  
  function closePopup () {
    hidePopup(popupImage);
    imageNameInput.value = "";
    imageLinkInput.value = "";
    removeFormErrors(popupImage);
  }
  imageButtonAdd.addEventListener('click', openPopup);
  imageButtonClose.addEventListener('click', closePopup);

}


popupInputForm.addEventListener('submit', saveInfo);
popupImageInputForm.addEventListener('submit', addImage);

//Добавление шести карточек на страницу через template
function initialiseCards() {
  for (let i = initialCards.length - 1; i >= 0; i--) {
    const element = initialiseCard(initialCards[i].link, initialCards[i].name);
    addCard(element);
  }

};
//Добавление карточки
function addCard(element) {
  elementSection.prepend(element);
}
//Создание карточки
function initialiseCard(link, name) {
  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__title').textContent = name;
  element.querySelector('.element__image').alt = name;//alt заполнен
  //лайки для карточек
  const buttonLike = element.querySelector('.element__like-button');
  buttonLike.addEventListener('click', (event) => {
    buttonLike.classList.toggle('element__like-button_active');
  });
  //удаление карточек
  const buttonDelete = element.querySelector('.element__delete-button')
  buttonDelete.addEventListener('click', (event) => {
    buttonDelete.parentNode.remove();
  });
  //открытие карточки
  const cardImageOpen = element.querySelector('.element__image')

  function createPopupCard(){
   function openPopup () {
      showPopup(popupCard);
      popupCard.querySelector('.popup-card__image').src = cardImageOpen.src;
      popupCard.querySelector('.popup-card__image').alt = cardImageOpen.alt;
      popupCard.querySelector('.popup-card__caption').textContent = cardImageOpen.alt;
    }  
    function closePopup () {
      hidePopup(popupCard);
    }
    cardImageOpen.addEventListener('click', openPopup)
    cardButtonClose.addEventListener('click', closePopup);
  } 
  createPopupCard();
  return element;
};

//сохранение информации профиля
function saveInfo(evt) {

  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  hidePopup(popupProfile);
}
//Добавление новой карточки на стнаницу
function addImage(evt) {
  evt.preventDefault();
  const element = initialiseCard(imageLinkInput.value, imageNameInput.value);
  addCard(element);
  imageButtonSave.disabled = true;
  imageButtonSave.classList.add('popup__save-button_type_inactive')
  imageNameInput.value = '';
  imageLinkInput.value = '';
  hidePopup(popupImage);
}
//открытие попапа
function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closeByEsc);
  popup.addEventListener("mousedown", closeByClick);
}

//закрытие попапа
function hidePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", closeByEsc);
  popup.removeEventListener("mousedown", closeByClick);
}



initialiseCards();
createPopupProfile();
createPopupImage();

