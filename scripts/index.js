
import {Card, initialCards} from "./Card.js";
import {validationConfig, FormValidator} from "./FormValidator.js"

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

initialCards.forEach((item) => {
  const cardElement = createCard(item, '.element-template')
  elementSection.append(cardElement);
}); 
const profileValidation = new FormValidator(validationConfig, '.popup-profile')
profileValidation.enableValidation()
const imageValidation = new FormValidator(validationConfig, '.popup-image')
imageValidation.enableValidation()
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened'); 
    hidePopup(popup);
  }
}
function closeByClick (evt){
  if (evt.target.classList.contains('popup_opened')) {
    hidePopup(evt.target);
  }
};

buttonEdit.addEventListener('click', (evt) => {
    profileValidation.removeFormErrors(popupProfile)
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    showPopup(popupProfile);
});
profileButtonClose.addEventListener('click', () => {
    hidePopup(popupProfile)
});
cardButtonClose.addEventListener('click', () => {
  hidePopup(popupCard);
});

imageButtonAdd.addEventListener('click', (evt) => {
  imageValidation.removeFormErrors(popupImage)
  showPopup(popupImage)
});

imageButtonClose.addEventListener('click', () => {
    hidePopup(popupImage);
    imageNameInput.value = "";
    imageLinkInput.value = "";
})

popupInputForm.addEventListener('submit', saveInfo);
popupImageInputForm.addEventListener('submit', submitAddCardForm);



//сохранение информации профиля
function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  hidePopup(popupProfile);
}
function createCard(element, template) {
  const card = new Card(element, template);
    return card.generateCard();
}
function submitAddCardForm(evt) {
  evt.preventDefault();
  const data = { link:imageLinkInput.value, name:imageNameInput.value};
  const card = createCard(data, '.element-template');
  elementSection.prepend(card);
  imageValidation.submitButtonDisable(imageButtonSave)
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




