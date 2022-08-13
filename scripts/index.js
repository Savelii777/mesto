let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupInputs = document.querySelector('.popup__inputs');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
// let like_button = document.querySelectorAll('.element__like-button');


editButton.addEventListener('click', showPopup);

// like_button.forEach(like => {
//   like.addEventListener('click', (event) => {
//     event.target.classList.toggle('element__like-button_active'); //решил для разнообразия сделать через цикл форич и стрелочную функцию
//   })
// })

function saveInfo(evt) {

  evt.preventDefault();

    profileName.textContent = inputName.value
    profileJob.textContent = inputJob.value
    popup.classList.remove('popup_opened');
    
  }

function showPopup() {
    popup.classList.add('popup_opened');
    popupInputs.addEventListener('submit', saveInfo);
    closeButton.addEventListener('click', closePopup);
  }
  function closePopup() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popup.classList.remove('popup_opened');
  }


 