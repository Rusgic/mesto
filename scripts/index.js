const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup-card');
const closeButton = document.querySelector('.button_type_close');
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
let formElement = document.querySelector('.popup__form')
let formElementCard = document.querySelector('.popup-card__form')
let nameInput = document.querySelector('.popup__input_type_name')
let profInput = document.querySelector('.popup__input_type_description')
let titleInput = document.querySelector('.popup-card__input_type_title')
let linkInput = document.querySelector('.popup-card__input_type_link')
let nameHuman = document.querySelector('.profile__title')
let profHuman = document.querySelector('.profile__subtitle')
let titleCard = document.querySelector('.element__text')
let linkCard = document.querySelector('.element__image')


const placesContainer = document.querySelector('.elements');
const placeTemplate = document.querySelector('#element').content;

const placeInfo = initialCards.map(function (item) {
	return {
		name: item.name,
		link: item.link
	};
});

function render() {
	placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
	const placeElement = placeTemplate
		.querySelector('.element')
		.cloneNode(true);
	placeElement.querySelector('.element__text').textContent = name;
	placeElement.querySelector('.element__image').src = link;
	placeElement.querySelector('.element__image').alt = name;

	placesContainer.prepend(placeElement);
}

render();

function OpenPopup() {
	popup.classList.add('popup__oppened');
	nameInput.value = nameHuman.textContent;
	profInput.value = profHuman.textContent;
}

function OpenPopupCard() {
	popupCard.classList.add('popup-card__oppened');
}


function ClosePopup() {
	popup.classList.remove('popup__oppened');
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
	//titleCard.textContent = titleInput.value;
	//linkCard.textContent = linkInput.value;
	ClosePopup();
}

addButton.addEventListener('click', OpenPopupCard);
closeButton.addEventListener('click', ClosePopup);
editButton.addEventListener('click', OpenPopup);

formElementCard.addEventListener('submit', formSubmitHandlerCard);
formElement.addEventListener('submit', formSubmitHandler);
