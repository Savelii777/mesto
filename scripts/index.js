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
const popupList = document.querySelectorAll('.popup');


function addPopupClickListener(popupList){
  popupList.forEach((popup) => {
    document.addEventListener('keydown', closeByEsc(popup));
    popup.addEventListener('click', closeByClick(popup))
  })
}


const closeByClick = (popup) => (evt) => {
  console.log('слушатель клика добавился для '+ popup.classList)
  if (evt.target.classList.contains('popup')) {
    hidePopup(popup);
  }
};

const closeByEsc = (popup) => (evt) => {
  if (evt.key === 'Escape') {
    hidePopup(popup);
  }
}






buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  showPopup(popupProfile)
});


profileButtonClose.addEventListener('click', () => {
  hidePopup(popupProfile)
  removeFormErrors(popupProfile);
});




imageButtonAdd.addEventListener('click', () => {
  showPopup(popupImage)
}
);

imageButtonClose.addEventListener('click', () => {
  hidePopup(popupImage)
  imageNameInput.value = "";
  imageLinkInput.value = "";
  removeFormErrors(popupImage);
});
cardButtonClose.addEventListener('click', () => { hidePopup(popupCard) });
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
  cardImageOpen.addEventListener('click', (event) => {
    showPopup(popupCard);
    popupCard.querySelector('.popup-card__image').src = cardImageOpen.src;
    popupCard.querySelector('.popup-card__image').alt = cardImageOpen.alt;
    popupCard.querySelector('.popup-card__caption').textContent = cardImageOpen.alt;
  });
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
}

//закрытие попапа
function hidePopup(popup) {
  popup.classList.remove('popup_opened');
}



initialiseCards();
addPopupClickListener(popupList);

