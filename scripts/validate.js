const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(config.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(config.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(config.inputErrorClass);
	errorElement.classList.remove(config.errorClass);
	errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage);
	} else {
		hideInputError(formElement, inputElement);
	}
};

// Поиск полей формы и добавление им
const setEventInputListeners = (formElement) => {
	const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
	const buttonElement = formElement.querySelector(config.submitButtonSelector);
	toggleButtonState(inputList, buttonElement);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			isValid(formElement, inputElement);
			toggleButtonState(inputList, buttonElement);
		});
	});
};

// Валидация
const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll(config.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		setEventInputListeners(formElement);
	});
};

// Проверка валидности всех кнопок
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	})
};

// функция блокировки кнопки сабмита
const toggleButtonState = (inputList, buttonElement) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(config.inactiveButtonClass);
		buttonElement.setAttribute('disabled', true);
	} else {
		buttonElement.classList.remove(config.inactiveButtonClass);
		buttonElement.removeAttribute('disabled');
	}
};

enableValidation();