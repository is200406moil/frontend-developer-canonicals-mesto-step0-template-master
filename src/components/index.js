import '../pages/index.css';
import {
    popupEdit,
    popupAdd,
    popupNameInput,
    profileName,
    popupDescriptionInput,
    profileDescription,
    popupAvatar,
    profileAvatar,
    buttonAdd,
    buttonEdit,
    cardList,
    popupFormAdd,
    popupFormEdit,
    buttonAvatar,
    popupFormAvatar,
    buttonSubmitAdd,
    popupNameImageInput,
    popupLinkImageInput, buttonSubmitProfile, buttonSubmitAvatar, popupAvatarInput
} from "./constants.js";
import {
    openPopup, closePopup,
} from "./modal.js"
import {createCard} from "./card.js";
import {enableValidation} from "./validate.js";
import {getInitialCards, getProfileInfo, patchAvatar, patchProfileInfo, postCard} from "./api.js";

// Добавление нового элемента
function handleAddFormSubmit() {
    buttonSubmitAdd.textContent = buttonSubmitAdd.dataset.onload;
    postCard(popupNameImageInput.value, popupLinkImageInput.value)
        .then(item => {
            const newCard = createCard(
                item.name, item.link, item._id, item.likes, item.owner._id, userId);
            cardList.prepend(newCard);
            evt.target.reset()
            closePopup(popupAdd)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            buttonSubmitAdd.textContent = buttonSubmitAdd.dataset.default;
            reloadPage()
        })
}

// Изменение имени и описания в popup
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    buttonSubmitProfile.textContent = buttonSubmitProfile.dataset.onload;
    patchProfileInfo(popupNameInput.value, popupDescriptionInput.value)
        .then((data) => {
            profileName.textContent = data.name
            profileDescription.textContent = data.about
            closePopup(popupEdit)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            buttonSubmitProfile.textContent = buttonSubmitProfile.dataset.default;
        })
}

function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    buttonSubmitAvatar.textContent = buttonSubmitAvatar.dataset.onload;
    patchAvatar(popupAvatarInput.value)
        .then((data) => {
            profileAvatar.src = data.avatar
            evt.target.reset()
            closePopup(popupAvatar)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            buttonSubmitAvatar.textContent = buttonSubmitAvatar.dataset.default;
        })
}

Promise.all([getProfileInfo(), getInitialCards()])
    .then((data) => {
        const userId = data[0]._id;
        profileName.textContent = data[0].name
        profileDescription.textContent = data[0].about
        profileAvatar.src = data[0].avatar
        profileAvatar.alt = `User avatar: ${data[0].name}`
        data[1].forEach((item) => {
            cardList.append(createCard(item.name, item.link, item._id, item.likes, item.owner._id, userId))
        })
    })


// Модальные окна
buttonEdit.addEventListener('click', function () {
    popupNameInput.value = profileName.textContent;
    popupDescriptionInput.value = profileDescription.textContent;
    openPopup(popupEdit)
});
buttonAdd.addEventListener('click', function () {
    openPopup(popupAdd)
});
buttonAvatar.addEventListener('click', function () {
    openPopup(popupAvatar)
});


// Отправка формы

popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', handleAddFormSubmit);
popupFormAvatar.addEventListener('submit', handleAvatarFormSubmit);

// Инициализация карточек


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});
// Обновление страницы при добавлении карточки, так как кнопка удаления появлялась после обновления страницы
function reloadPage() {
    setTimeout(() => {
        window.location.reload();
    },);
}
