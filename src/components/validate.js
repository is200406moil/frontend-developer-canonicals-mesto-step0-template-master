const cfg = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

const showInputError = (formElement, inputElement, errorMessage, cfg) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(cfg.inputErrorClass);
    errorElement.classList.add(cfg.errorClass);
    errorElement.textContent = errorMessage;
};
const hideInputError = (formElement, inputElement, cfg) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(cfg.inputErrorClass);
    errorElement.classList.remove(cfg.errorClass);
    errorElement.textContent ='';
};
const checkInputValidity = (formElement, inputElement, cfg) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, cfg);
    } else {
        hideInputError(formElement, inputElement, cfg);
    }
};
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};
const toggleButtonState = (inputList, buttonElement, cfg) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(cfg.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(cfg.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}
const setEventListeners = (formElement, cfg) => {
    const inputList = Array.from(formElement.querySelectorAll(cfg.inputSelector));
    const buttonElement = formElement.querySelector(cfg.submitButtonSelector);

    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputList, buttonElement, cfg);
        }, 0);
    });


    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            // кнопка не становится валидной если вводится не ссылка, ошибка пишет что нужно ввести ссылку https://disk.yandex.ru/i/zLTXpslkYhki3w
            checkInputValidity(formElement, inputElement, cfg);
            toggleButtonState(inputList, buttonElement, cfg);
        });
    });
};
export const enableValidation = (cfg) => {
    const formList = Array.from(document.querySelectorAll(cfg.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, cfg);
    });
};