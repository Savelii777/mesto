import './index.css';
import { initialCards, buttonEdit, popupProfile, popupImage, nameInput, jobInput, imageButtonAdd, elementSection, avatarEditButton, popupAvatar } from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Popup from "../components/Popup.js";
import Api from "../components/Api.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { validationConfig, FormValidator } from "../components/FormValidator.js"
import Section from "../components/Section.js"


//Создание экземпляров объектов popup
const popupWithImage = new PopupWithImage(".popup-card")
const popupWithProfileForm = new PopupWithForm(".popup-profile", submitPopupProfile)
const popupWithImageForm = new PopupWithForm(".popup-image", submitPopupImage)
const popupWithAvatarForm = new PopupWithForm(".popup-avatar", submitPopupAvatar)
const popupWithConfirmation = new PopupWithConfirmation(".popup-confirmation")

//подключение к сереру
const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: '3870d2ad-f528-4c2b-9e76-5a8a9ac5c376'
  }
});
let userId
Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
  .then(([user, cards]) => {
    userId = user._id;
    informationAboutUser.setUserAvatar(user.avatar);
    informationAboutUser.setUserInfo(user.name, user.about);
    defaultCardSection.renderElements(cards);
  })
  .catch(err => {
    console.log(err);
  });
//Создание секции с карточками
const defaultCardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    defaultCardSection.addItem(createCard(item));
  }
},
  elementSection
);


//создание кароточки
function createCard(item) {
  const card = new Card(item, userId, '.element-template', 
  {
    handleCardClick: handleCardClicker,
    handleCardDelete:(cardId)=>{
      console.log(cardId)
      popupWithConfirmation.open()
      popupWithConfirmation.doConfirmation(
        ()=>{
          api.deleteCardFromServer(cardId)
        .then(() => {
          console.log('fetch')
          card.deleteCard()
          popupWithConfirmation.close();
        })
        .catch((err) => {
          console.log(err);
        });
        }
      )        
    }, 
    handleCardLike: (cardId)=>{
      api.addLikeToServer(cardId)
      .then((res) => {
        card.likingCard(res)
      })
      .catch((err) => {
        console.log(err);
      });
    },
    handleCardUnlike: (cardId)=>{
      api.deleteLikeFromServer(cardId)
      .then((res) => {
        card.likingCard(res)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  });
  return card.generateCard(informationAboutUser.getUserInfo());
}




//создание объекта информации о пользователе
const informationAboutUser = new UserInfo({
  nameSelector: ".profile__name",
  infoSelector: ".profile__job",
  avatarSelector: ".profile__avatar"
});




//открытие карточки на весь экран
function handleCardClicker(name, link) {
  popupWithImage.open(name, link);
}



//Функции сабмита форм
function submitPopupProfile(info) {
  popupWithProfileForm.isLoading(true)
  api.sendUserInfoToServer(info.name, info.job)
    .then(user => {
      informationAboutUser.setUserInfo(user.name, user.about);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      popupWithProfileForm.isLoading(false)
      popupWithProfileForm.close()
    }
    )   
}

function submitPopupAvatar(info) {
  popupWithAvatarForm.isLoading(true)
  api.sendUserAvatarToServer(info.avatar)
    .then(user => {
      informationAboutUser.setUserAvatar(user.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      popupWithAvatarForm.isLoading(false)
      popupWithAvatarForm.close()
    }
    )
}

function submitPopupImage(info) {
  popupWithImageForm.isLoading(true, 'Создание...')
  api.addNewCardToServer(info.cardName, info.cardLink)
    .then((card) => {
      defaultCardSection.addNewItem(createCard(card));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      popupWithImageForm.isLoading(false)
      popupWithImageForm.close()
    }
    )
}




//Валидация popup
const profileValidation = new FormValidator(validationConfig, '.popup-profile')
profileValidation.enableValidation()
const imageValidation = new FormValidator(validationConfig, '.popup-image')
imageValidation.enableValidation()
const avatarValidation = new FormValidator(validationConfig, '.popup-avatar')
avatarValidation.enableValidation()




//вешаем слушатели
avatarEditButton.addEventListener('click', (evt) => {
  avatarValidation.removeFormErrors(popupAvatar)
  avatarValidation.submitButtonDisable()
  popupWithAvatarForm.open()
})

buttonEdit.addEventListener('click', (evt) => {
  profileValidation.removeFormErrors(popupProfile)
  profileValidation.submitButtonDisable()
  const userData = informationAboutUser.getUserInfo();
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
popupWithAvatarForm.setEventListeners()
popupWithConfirmation.setEventListeners()













