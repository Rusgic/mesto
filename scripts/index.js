const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button_close');
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__input_name-first')
let profInput = document.querySelector('.popup__input_name-two')
let nameHuman = document.querySelector('.profile__title')
let profHuman = document.querySelector('.profile__subtitle')

function OpenPopup() {
	popup.classList.add('popup__oppened');
}

function ClosePopup() {
	popup.classList.remove('popup__oppened');
}

function formSubmitHandler(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	profHuman.textContent = profInput.value;
	nameHuman.textContent = nameInput.value;
}

editButton.addEventListener('click', OpenPopup);
closeButton.addEventListener('click', ClosePopup);

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', ClosePopup);