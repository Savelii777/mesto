const archizImage = new URL('../images/element__image_2.png', import.meta.url);
const cheliabaImage = new URL('../images/element__image_2.png', import.meta.url);
const ivanovoImage = new URL('../images/element__image_2.png', import.meta.url)
const kamchatkaImage = new URL('../images/element__image_2.png', import.meta.url)
const holmogorskiyImage = new URL('../images/element__image_2.png', import.meta.url)
const baikalImage = new URL('../images/element__image_2.png', import.meta.url)

const initialCards = [
  { name: 'Архыз', link: archizImage },
  { name: 'Челябинская область', link: cheliabaImage },
  { name: 'Иваново', link: ivanovoImage },
  { name: 'Камчатка', link: kamchatkaImage },
  { name: 'Холмогорский район', link: holmogorskiyImage },
  { name: 'Байкал', link: baikalImage },
]; 
const validationConfig = {
  submitButtonSelector: '.popup__save-button',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__save-button_type_inactive',
  popupCarsSelector: 'popup-card',
  popupProfileClass: 'popup-profile',
  inputError: '.popup__input-error'
}
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
  export {initialCards, popupCard, validationConfig, buttonEdit, popupProfile, popupImage, popupInputForm, popupImageInputForm, nameInput, jobInput, imageNameInput, imageLinkInput, profileButtonClose, imageButtonClose, cardButtonClose, profileName, profileJob, imageButtonAdd, popupTitle, elementSection, imageButtonSave}
  