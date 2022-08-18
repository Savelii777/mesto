const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup_image');
const popupInputs = document.querySelector('.popup__inputs');
const popupImageInputs = document.querySelector('.popup_image__inputs');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const inputImageName = document.querySelector('.popup__input_type_nameOfImage');
const inputImageLink = document.querySelector('.popup__input_type_linkOfImage');
const closeButton = document.querySelector('.popup__close-button');
const closeImageButton = document.querySelector('.popup_image__close-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addImageButton = document.querySelector('.profile__add-button');
const popupTitle = document.querySelector('.popup__title');
const elements = document.querySelector('.elements');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

editButton.addEventListener('click', showPopup);
addImageButton.addEventListener('click', showImagePopup);



function initialiseCards () {
  initialCards.forEach(elmnt => {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = elmnt.link;
    element.querySelector('.element__title').textContent = elmnt.name;
    elements.append(element);
    console.log('Добавлено успешно');
  }); 
};
function initialiseCard () {

    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = initialCards[initialCards.length-1].link;
    element.querySelector('.element__title').textContent = initialCards[initialCards.length-1].name;
    elements.append(element);
    console.log('Добавлено успешно');
 
};


function saveInfo(evt) {

  evt.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popup.classList.remove('popup_opened');
    
  }
  function addImage(evt) {

     evt.preventDefault();
      initialCards.push({name:inputImageName.value, link:inputImageLink.value });
      initialiseCard();
      inputImageName.value = '';
      inputImageLink.value = '';
      popupImage.classList.remove('popup_opened');
      
    }

function showPopup() {
    popup.classList.add('popup_opened');
    popupInputs.addEventListener('submit', saveInfo);
    closeButton.addEventListener('click', closePopup);
  }
  function showImagePopup() {
    popupImage.classList.add('popup_opened');
    popupImageInputs.addEventListener('submit', addImage);
    closeImageButton.addEventListener('click', closePopupImage);
  }
  function closePopup() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popup.classList.remove('popup_opened');
  }
  function closePopupImage() {
    inputImageName.value = '';
    inputImageLink.value = '';
    popupImage.classList.remove('popup_opened');
  }

  initialiseCards();


 