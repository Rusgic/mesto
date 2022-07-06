
// Кнопка добавления карточки
const buttonAddCard = document.querySelector('.profile__add-button');
// Кнопка добавления информации о авторе
const buttonEditProfile = document.querySelector('.profile__edit-button');
// Начальный массив карточек из "Коробки"
// Вынос в отдельный JS файл не делал, т.к насколько я понимаю, это будет в дальнейшем спринте. В этом этого не требуют.
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

// Перестановка элементов массива
initialCards.reverse();
// Popup c информацией о авторе
const popupProfile = document.querySelector('.popup');
// Popup с информацией о карточке
const popupCard = document.querySelector('.popup-card');
// Popup с отображением увеличенной фотографии
const popupPhoto = document.querySelector('.popup-photo');
// Кнопка закрытия Popup c информацией о авторе
const buttonClosePopupProfile = document.querySelector('.button_type_close');
// Кнопка закрытия Popup c информацией о карточке
const buttonClosePopupCard = document.querySelector('.buttonCard_type_close');
// Кнопка закрытия Popup c увеличенной фотографией
const buttonClosePopupImage = document.querySelector('.buttonImage_type_close');
// Форма PopupProfile c кнопками и полями ввода
const formElement = document.querySelector('.popup__form');
// Форма PopupCard c кнопками и полями ввода
const formElementCard = document.querySelector('.popup-card__form');
// Поле ввода имени автора
const nameInput = document.querySelector('.popup__input_type_name');
// Поле ввода професии автора
const professionInput = document.querySelector('.popup__input_type_description');
// Поле ввода названия карточки
const titleInput = document.querySelector('.popup-card__input_type_title');
// Поле ввода ссылки на расположение карточки
const linkInput = document.querySelector('.popup-card__input_type_link');
// Имя человека
const nameHuman = document.querySelector('.profile__title');
// Профессия человека
const professionHuman = document.querySelector('.profile__subtitle');
// Переменная с клонированным содержимым карточки
const cardTemplate = document.querySelector('#element__card').content;
// Контейнер карточек
const cardsContainer = document.querySelector('.elements');
// Переменная с изображением карточки
const popupPhotoImg = document.querySelector('.popup-photo__pic');
// Переменная с текстом карточки
const popupPhotoTextInput = document.querySelector('.popup-photo__text');

// Рендер начальных карточек
function renderInitialCards() {
	initialCards.forEach(addCard);
}

//Функция добавления карточки
function addCard(el) {
	const newCard = cardTemplate.cloneNode(true);
	newCard.querySelector('.element__text').textContent = el.name;
	const elementImage = newCard.querySelector('.element__image');
	elementImage.src = el.link;
	elementImage.alt = el.name;
	setEventListeners(newCard);
	cardsContainer.append(newCard);
}

renderInitialCards();

function createCard() {
	
}

function htmlCard() {
	
}


/*
function renderInitialCards() {
	initialCards.forEach(renderCard);
}

function renderCard(el) {
	const newCard = cardTemplate.cloneNode(true);
	newCard.querySelector('.element__text').textContent = el.name;
	const elementImage = newCard.querySelector('.element__image');
	elementImage.src = el.link;
	elementImage.alt = el.name;
	setEventListeners(newCard);
	cardsContainer.append(newCard);
}

renderInitialCards();

function addCard() {
	const newCard = cardTemplate.cloneNode(true);
	newCard.querySelector('.element__text').textContent = titleInput.value;
	const elementImage = newCard.querySelector('.element__image');
	elementImage.src = linkInput.value;
	elementImage.alt = titleInput.value;
	setEventListeners(newCard);
	cardsContainer.prepend(newCard);
}

*/

// Функция удаления карточки
function deleteCard(evt) {
	evt.target.closest('.element').remove();
}

// Функция лайка
function likeCard(evt) {
	evt.target.classList.toggle('element__like-button_active');
}

// Функция проставления ивент-листенеров карточки, такие как лайк, удаление, открытия картинки
function setEventListeners(NewCard) {
	// Кнопка удаления карточки
	const deleteButton = NewCard.querySelector('.element__delete-button');
	deleteButton.addEventListener('click', deleteCard);
	// Кнопка лайка
	const likeButton = NewCard.querySelector('.element__like-button');
	likeButton.addEventListener('click', likeCard);
	// Формально это картинка и в то же время кнопка
	const image = NewCard.querySelector('.element__image');
	image.addEventListener('click', () =>
		openPopupImage(image));
}

// Функция открытия попапа с картинкой
function openPopupImage(image) {
	popupPhoto.classList.add('popup-photo__oppened');
	popupPhotoImg.src = image.src;
	popupPhotoTextInput.textContent = image.alt;
	popupPhotoImg.alt = image.alt;
}

// Функция открытия попапа с информацией о авторе
function openPopup() {
	popupProfile.classList.add('popup__oppened');
	nameInput.value = nameHuman.textContent;
	professionInput.value = professionHuman.textContent;
}

// Функция закрытия попапа с картинкой
function closePopupImage() {
	popupPhoto.classList.remove('popup-photo__oppened');
}

// Функция открытия попапа с карточкой
function openPopupCard() {
	popupCard.classList.add('popup-card__oppened');
}

// Функция закрытия попапа с инф. о авторе
function closePopup() {
	popupProfile.classList.remove('popup__oppened');
}

// Функция закрытия попапа карточки
function closePopupCard() {
	popupCard.classList.remove('popup-card__oppened');
}

// Отправка данных о авторе
function submitFormHandlerProfile(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	professionHuman.textContent = professionInput.value;
	nameHuman.textContent = nameInput.value;
	closePopup();
}

// Отправка данных карточки
function submitFormHandlerPopupCard(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	evt.target.reset(); // Эта строчка очищает поля формы.
	addCard()
	console.log(addCard);
	closePopupCard();
}

buttonAddCard.addEventListener('click', openPopupCard);
buttonClosePopupProfile.addEventListener('click', closePopup);
buttonEditProfile.addEventListener('click', openPopup);
buttonClosePopupCard.addEventListener('click', closePopupCard);
buttonClosePopupImage.addEventListener('click', closePopupImage);

formElementCard.addEventListener('submit', submitFormHandlerPopupCard);
formElement.addEventListener('submit', submitFormHandlerProfile);

