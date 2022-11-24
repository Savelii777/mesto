import './index.css';
import {initialCards, buttonEdit, popupProfile, popupImage, nameInput, jobInput, imageButtonAdd, elementSection} from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {validationConfig, FormValidator} from "../components/FormValidator.js"
import Section from "../components/Section.js"


//Создание экземпляров объектов popup

const popupWithImage = new PopupWithImage(".popup-card")
const popupWithProfileForm  = new PopupWithForm(".popup-profile", submitPopupProfile)
const popupWithImageForm  = new PopupWithForm(".popup-image", submitPopupImage)

//Создание секции с карточками
const defaultCardSection = new Section({
  items: initialCards,
  renderer:(item) => {
    defaultCardSection.addItem(createCard(item) );
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

function createCard(item){
  const card = new Card(item, '.element-template', handleCardClicker);
  return card.generateCard();
}
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
  profileValidation.submitButtonDisable()
  const userData =  informationAboutUser.getUserInfo();
  nameInput.value = userData.nameSelector;
  jobInput.value = userData.infoSelector;
  popupWithProfileForm.open();
});

imageButtonAdd.addEventListener('click', (evt) => {
imageValidation.removeFormErrors(popupImage)
imageValidation.submitButtonDisable()
popupWithImageForm.open()
});

popupWithImage.setEventListeners()
popupWithProfileForm.setEventListeners()
popupWithImageForm.setEventListeners()


