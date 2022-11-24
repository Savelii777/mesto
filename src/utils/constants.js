const popupCard = document.querySelector('.popup-card');
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
// const initialCards = [
//     {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//       name: 'Байкал',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
//   ];
  export {initialCards, popupCard}
  