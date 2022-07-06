
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup-card');
const popupPhoto = document.querySelector('.popup-photo');
const closeButton = document.querySelector('.button_type_close');
const closeButtonCard = document.querySelector('.buttonCard_type_close');
const closeButtonImage = document.querySelector('.buttonImage_type_close');
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
let formElement = document.querySelector('.popup__form');
let formElementCard = document.querySelector('.popup-card__form');
let nameInput = document.querySelector('.popup__input_type_name');
let profInput = document.querySelector('.popup__input_type_description');
let titleInput = document.querySelector('.popup-card__input_type_title');
let linkInput = document.querySelector('.popup-card__input_type_link');
let nameHuman = document.querySelector('.profile__title');
let profHuman = document.querySelector('.profile__subtitle');

const cardTemplate = document.querySelector('.element__card').content;
const cardElement = document.querySelector('.elements');

function renderCards() {
	initialCards.forEach(renderCard);
}


const popupImg = document.querySelector('.popup-photo__pic');
const popupText = document.querySelector('.popup-photo__text');

function renderCard(el) {
	const htmlElement = cardTemplate.cloneNode(true);
	htmlElement.querySelector('.element__text').textContent = el.name;
	htmlElement.querySelector('.element__image').src = el.link;
	htmlElement.querySelector('.element__image').alt = el.name;
	setEventListeners(htmlElement);
	cardElement.append(htmlElement);
}

renderCards();

function addCard() {
	const htmlElement = cardTemplate.cloneNode(true);
	htmlElement.querySelector('.element__text').textContent = titleInput.value;
	htmlElement.querySelector('.element__image').src = linkInput.value;
	htmlElement.querySelector('.element__image').alt = titleInput.value;
	setEventListeners(htmlElement);
	cardElement.prepend(htmlElement);
}

function deleteCard(evt) {
	evt.target.closest('.element').remove();
}

function likeCard(evt) {
	evt.target.classList.toggle('element__like-button_active');
}

function setEventListeners(htmlElement) {
	const deleteButton = htmlElement.querySelector('.element__delete-button');
	deleteButton.addEventListener('click', deleteCard);
	const likeButton = htmlElement.querySelector('.element__like-button');
	likeButton.addEventListener('click', likeCard);
	const imgButton = htmlElement.querySelector('.element__image');
	imgButton.addEventListener('click', () =>
		OpenPopupImage(imgButton));
}

function OpenPopupImage(imgButton) {
	popupPhoto.classList.add('popup-photo__oppened');
	popupImg.src = imgButton.src;
	popupText.textContent = imgButton.alt;
}

function OpenPopup() {
	popup.classList.add('popup__oppened');
	nameInput.value = nameHuman.textContent;
	profInput.value = profHuman.textContent;
}

function ClosePopupImage() {
	popupPhoto.classList.remove('popup-photo__oppened');
}

function OpenPopupCard() {
	popupCard.classList.add('popup-card__oppened');
}

function ClosePopup() {
	popup.classList.remove('popup__oppened');
}

function ClosePopupCard() {
	popupCard.classList.remove('popup-card__oppened');
}


function formSubmitHandler(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	profHuman.textContent = profInput.value;
	nameHuman.textContent = nameInput.value;
	ClosePopup();
}

function formSubmitHandlerCard(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	addCard();
	ClosePopupCard();
}

addButton.addEventListener('click', OpenPopupCard);
closeButton.addEventListener('click', ClosePopup);
editButton.addEventListener('click', OpenPopup);
closeButtonCard.addEventListener('click', ClosePopupCard);
closeButtonImage.addEventListener('click', ClosePopupImage);

formElementCard.addEventListener('submit', formSubmitHandlerCard);
formElement.addEventListener('submit', formSubmitHandler);

