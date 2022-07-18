const config = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.button_type_save',
	inactiveButtonClass: 'button__submit_inactive',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_active'
};

// Функция, которая показывает класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(inputErrorClass);
	errorElement.classList.remove(errorClass);
	errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, rest) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, rest);
	} else {
		hideInputError(formElement, inputElement, rest);
	}
};

// Поиск полей формы и добавление им
const setEventInputListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
	const inputList = Array.from(formElement.querySelectorAll(inputSelector));
	const buttonElement = formElement.querySelector(submitButtonSelector);
	toggleButtonState(inputList, buttonElement, rest);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			isValid(formElement, inputElement, rest);
			toggleButtonState(inputList, buttonElement, rest);
		});
	});
};

// Валидация
const enableValidation = ({ formSelector, ...rest }) => {
	const formList = Array.from(document.querySelectorAll(formSelector));
	formList.forEach((formElement) => {
		setEventInputListeners(formElement, rest);
	});
};

// Проверка валидности всех кнопок
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	})
};

// функция блокировки кнопки сабмита
const toggleButtonState = (inputList, buttonElement, { ...rest }) => {
	if (hasInvalidInput(inputList)) {
		disabledButton(buttonElement, rest);
	} else {
		activeButton(buttonElement, rest);
	}
};

// Функция деактивации кнопки сабмита
function disabledButton(evt, { inactiveButtonClass }) {
	evt.classList.add(inactiveButtonClass);
	evt.setAttribute('disabled', true);
}

// Функция активации кнопки сабмита
function activeButton(evt, { inactiveButtonClass }) {
	evt.classList.remove(inactiveButtonClass);
	evt.removeAttribute('disabled', true);
}

enableValidation(config);
