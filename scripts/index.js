const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button_close');

function OpenPopup() {
	popup.classList.add('popup__oppened');
}

function ClosePopup() {
	popup.classList.remove('popup__oppened');
}

editButton.addEventListener('click', OpenPopup);
closeButton.addEventListener('click', ClosePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__firstname')
let profInput = document.querySelector('.popup__prof')
let nameHuman = document.querySelector('.profile__title')
let profHuman = document.querySelector('.profile__subtitle')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	// Так мы можем определить свою логику отправки.
	// О том, как это делать, расскажем позже.

	nameInput.value;    // Получите значение полей profInput и nameInput из свойства value
	profInput.value;

	   // Выберите элементы, куда должны быть вставлены значения полей
	profHuman.textContent = profInput.value;
	nameHuman.textContent = nameInput.value;
	return;
	// Вставьте новые значения с помощью textContent
}

//console.log(nameInput.value);
//console.log(profInput.value);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', ClosePopup);