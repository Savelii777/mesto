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


//показывать ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};
//спрятать ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

//проверка вводных данных на валидность
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    console.log(inputElement.validationMessage)
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//создание слушателей для полей
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//включение валидации
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
    fieldsetList.forEach((fieldSet) => {
  setEventListeners(fieldSet);
}); 
  });
};
function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}
//активация и деактивация кнопки
function toggleButtonState(inputList, buttonElement){
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('popup__save-button_type_inactive');
  buttonElement.disabled = true;
} else {
  buttonElement.classList.remove('popup__save-button_type_inactive');
  buttonElement.disabled = false;
} 
}

enableValidation();

editButton.addEventListener('click',() => {
  showPopup(popupProfile);
  EventPopupListeners (); 
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});


addImageButton.addEventListener('click',() => {showPopup(popupImage)
  EventPopupListeners ();
}
);

//добавляет слушатель попапам
function EventPopupListeners () {
  Array.from(document.querySelectorAll('.popup')).forEach((popup)=>{
    popup.addEventListener('click', (evt)=>{
      if(evt.target.classList.contains('popup'))
      { 
        closePopup(popup);
      }
    });
   document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
       closePopup(popup);
          }
      });
  });
 }



closeProfileButton.addEventListener('click', ()=> {closePopup(popupProfile)});
closeImageButton.addEventListener('click', () => {
  inputImageName.value = "";
  inputImageLink.value = "";
  closePopup(popupImage)});
closeCardButton.addEventListener('click', () => {closePopup(popupCard)});
popupInputForm.addEventListener('submit', saveInfo);
popupImageInputForm.addEventListener('submit', addImage);

//Добавление шести карточек на страницу через template
function initialiseCards () {
  for(let i = initialCards.length-1; i >= 0; i--){
    const element = initialiseCard (initialCards[i].link,initialCards[i].name);
    addCard(element);
  }
    
};
//Добавление карточки
function addCard(element){
  elementSection.prepend(element);
}
//Создание карточки
function initialiseCard (link, name) {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = link;
    element.querySelector('.element__title').textContent = name;
    element.querySelector('.element__image').alt = name;//alt заполнен
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
    popupCard.querySelector('.popup-card__image').alt = openCardImge.alt;
    popupCard.querySelector('.popup-card__caption').textContent = openCardImge.alt;
});
return element;
};

//сохранение информации профиля
function saveInfo(evt) {

  evt.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(popupProfile);
  }
//Добавление новой карточки на стнаницу
  function addImage(evt) {
      evt.preventDefault();
      const element = initialiseCard(inputImageLink.value,inputImageName.value);
      addCard(element);
      inputImageName.value = '';
      inputImageLink.value = '';
      closePopup(popupImage);
      
    }
//открытие попапа
function showPopup(popup) {
      popup.classList.add('popup_opened');
  }
  
  //закрытие попапа
  function closePopup(popup) {
      popup.classList.remove('popup_opened');
    }
  
  

  initialiseCards();


 