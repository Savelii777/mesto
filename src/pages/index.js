import './index.css';
import {initialCards} from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {validationConfig, FormValidator} from "../components/FormValidator.js"
import Section from "../components/Section.js"
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

//Создание экземпляров объектов popup

const popupWithImage = new PopupWithImage(".popup-card")
const popupWithProfileForm  = new PopupWithForm(".popup-profile", submitPopupProfile)
const popupWithImageForm  = new PopupWithForm(".popup-image", submitPopupImage)

//Создание секции с карточками
const defaultCardSection = new Section({
  items: initialCards,
  renderer:(item) => {
      const card = new Card(item, '.element-template', handleCardClicker);
      const cardElementNode = card.generateCard();
      defaultCardSection.addItem(cardElementNode);   
  }
},
elementSection
);
defaultCardSection.renderElements(); 

//создание объекта информации о пользователе
const informationAboutUser = new UserInfo({
  nameSelector: ".profile__name",
  infoSelector: ".profile__job",
});


//открытие карточки на весь экран
function handleCardClicker(name, link) {
  popupWithImage.open(name, link);
}

//Функции сабмита форм
function submitPopupProfile(info) {
  informationAboutUser.setUserInfo(info.name, info.job);
  popupWithProfileForm.close();
}

function submitPopupImage(info) {
  const cardInfo = {
    name: info.cardName,
    link: info.cardLink,
  };
  const card = new Card(cardInfo, '.element-template', handleCardClicker);
  const cardElementNode = card.generateCard();
  defaultCardSection.addNewItem(cardElementNode);   
  popupWithImageForm.close();
}


//Валидация popup
const profileValidation = new FormValidator(validationConfig, '.popup-profile')
profileValidation.enableValidation()
const imageValidation = new FormValidator(validationConfig, '.popup-image')
imageValidation.enableValidation()

//вешаем слушатели
buttonEdit.addEventListener('click', (evt) => {
  profileValidation.removeFormErrors(popupProfile)
  nameInput.value = informationAboutUser.getUserInfo().nameSelector;
  jobInput.value = informationAboutUser.getUserInfo().infoSelector;
  popupWithProfileForm.open();
});

imageButtonAdd.addEventListener('click', (evt) => {
imageValidation.removeFormErrors(popupImage)
popupWithImageForm.open()
});

popupWithImage.setEventListeners()
popupWithProfileForm.setEventListeners()
popupWithImageForm.setEventListeners()


