let edit_button = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popup_inputs = document.querySelector('.popup__inputs');
let popup_input = document.querySelectorAll('.popup__input');
let input_name = (document.querySelector('.profile__name')).textContent;
let input_job = (document.querySelector('.profile__job')).textContent;
let close_button = document.querySelector('.popup__close-button');
let like_button = document.querySelectorAll('.elements__like-button');


edit_button.addEventListener('click', showPopup);

like_button.forEach(like => {
  like.addEventListener('click', (event) => {
    event.target.classList.toggle('elements__like-button_active'); //решил для разнообразия сделать через цикл форич и стрелочную функцию
  })
})

function saveInfo(evt) {

  evt.preventDefault();
    for(let i = 0; i < popup_input.length; i++)
    {
    if(popup_input[i].name === "name")
    {
     input_name = popup_input[i].value;
     (document.querySelector('.profile__name')).textContent = input_name;
     console.log(input_name);
    }else{
        input_job = popup_input[i].value;
        (document.querySelector('.profile__job')).textContent = input_job;
     console.log(input_job);
    }
    }
    popup.classList.remove('popup_opened');
    
  }

function showPopup() {
    popup.classList.add('popup_opened');
    popup_inputs.addEventListener('submit', saveInfo);
    close_button.addEventListener('click', closePopup);
  }
  function closePopup() {
    for(let i = 0; i < popup_input.length; i++)
    {
    if(popup_input[i].name === "name")
    {
     popup_input[i].value = input_name;
     console.log(popup_input[i].value);
    }else{
     popup_input[i].value = input_job;
     console.log(popup_input[i].value);
    }
    }
    popup.classList.remove('popup_opened');
  }


 