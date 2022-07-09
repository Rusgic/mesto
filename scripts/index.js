
// Кнопка добавления карточки
const buttonAddCard = document.querySelector('.profile__add-button');
// Кнопка добавления информации о авторе
const buttonEditProfile = document.querySelector('.profile__edit-button');
// Начальный массив карточек из "Коробки"
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

// Popup c информацией о авторе
const popupProfile = document.querySelector('.popup_profile');
// Popup с информацией о карточке
const popupCard = document.querySelector('.popup_card');
// Popup с отображением увеличенной фотографии
const popupPhoto = document.querySelector('.popup_photo');
// Кнопка закрытия popup-ов c профилем
const buttonClosePopupProfile = document.querySelector('.button_type_close');
// Кнопка закрытия popup-ов c карточкой
const buttonClosePopupCard = document.querySelector('.buttonCard_type_close');
// Кнопка закрытия popup c увеличенной картинкой
const buttonClosePopupImage = document.querySelector('.buttonImage_type_close');
// Форма PopupProfile c кнопками и полями ввода
const formElement = document.querySelector('.popup__form');
// Форма PopupCard c кнопками и полями ввода
const formElementCard = document.querySelector('.popup__form_card');
// Поле ввода имени автора
const nameInput = document.querySelector('.popup__input_type_name');
// Поле ввода професии автора
const professionInput = document.querySelector('.popup__input_type_description');
// Поле ввода названия карточки
const titleInput = document.querySelector('.popup__input_type_title');
// Поле ввода ссылки на расположение карточки
const linkInput = document.querySelector('.popup__input_type_link');
// Имя человека
const nameHuman = document.querySelector('.profile__title');
// Профессия человека
const professionHuman = document.querySelector('.profile__subtitle');
// Переменная с клонированным содержимым карточки
const cardTemplate = document.querySelector('#element__card').content.firstElementChild;
// Контейнер карточек
const cardsContainer = document.querySelector('.elements');
// Переменная с изображением карточки
const popupPhotoImg = document.querySelector('.popup__big-photo');
// Переменная с текстом карточки
const popupPhotoTextInput = document.querySelector('.popup__text');

// Рендер начальных карточек
function renderInitialCards() {
	initialCards.forEach(addCard);
}

//Функция добавления карточки
function addCard(item) {
	const card = createCard(item);
	renderCard(card);
}

// Функция создания карточки
function createCard(item) {
	const newCard = cardTemplate.cloneNode(true);
	const elementImage = newCard.querySelector('.element__image');
	const elementText = newCard.querySelector('.element__text');
	elementText.textContent = item.name;
	elementImage.src = item.link;
	elementImage.alt = item.name;
	setCardEventListeners(newCard);
	return newCard;
}

// Функция добавления карточки в разметку
function renderCard(card) {
	cardsContainer.prepend(card);
}

renderInitialCards();

// Функция удаления карточки
function deleteCard(evt) {
	evt.target.closest('.element').remove();
}

// Функция лайка
function likeCard(evt) {
	evt.target.classList.toggle('element__like-button_active');
}

// Функция проставления ивент-листенеров карточки, такие как лайк, удаление, открытия картинки
function setCardEventListeners(newCard) {
	// Кнопка удаления карточки
	const buttonDeleteCard = newCard.querySelector('.element__delete-button');
	buttonDeleteCard.addEventListener('click', deleteCard);
	// Кнопка лайка
	const buttonAddLike = newCard.querySelector('.element__like-button');
	buttonAddLike.addEventListener('click', likeCard);
	// Формально это картинка и в то же время кнопка
	const image = newCard.querySelector('.element__image');
	image.addEventListener('click', () =>
		openPopupImage(image));
}


// Общая функция открытия попапа
function openPopup(popup) {
	popup.classList.add('popup__oppened');
}

// Общая функция закрытия попапа
function closePopup(popup) {
	popup.classList.remove('popup__oppened');
}

// Функция открытия попапа с картинкой
function openPopupImage(image) {
	openPopup(popupPhoto);
	popupPhotoImg.src = image.src;
	popupPhotoTextInput.textContent = image.alt;
	popupPhotoImg.alt = image.alt;
}

// Функция открытия попапа с информацией о авторе
function openPopupProfile() {
	openPopup(popupProfile);
	nameInput.value = nameHuman.textContent;
	professionInput.value = professionHuman.textContent;
}

// Функция открытия попапа с карточкой
function openPopupCard() {
	openPopup(popupCard);
}

// Функция закрытия попапа с картинкой
function closePopupImage() {
	closePopup(popupPhoto);
}

// Функция закрытия попапа карточки
function closePopupCard() {
	closePopup(popupCard);
}

// Функция закрытия попапа профиля
function closePopupProfile() {
	closePopup(popupProfile);
}

// Отправка данных о авторе
function submitFormHandlerProfile(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	professionHuman.textContent = professionInput.value;
	nameHuman.textContent = nameInput.value;
	closePopupProfile();
}

// Отправка данных карточки
function submitFormHandlerPopupCard(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	const item =
	{
		name: titleInput.value,
		link: linkInput.value
	}
	addCard(item);
	evt.target.reset(); // Эта строчка очищает поля формы.
	closePopupCard();
}

buttonAddCard.addEventListener('click', openPopupCard);
buttonClosePopupProfile.addEventListener('click', closePopupProfile);
buttonClosePopupCard.addEventListener('click', closePopupCard);
buttonClosePopupImage.addEventListener('click', closePopupImage);
buttonEditProfile.addEventListener('click', openPopupProfile);

formElementCard.addEventListener('submit', submitFormHandlerPopupCard);
formElement.addEventListener('submit', submitFormHandlerProfile);

