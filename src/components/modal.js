import {
    popupNameInput,
    popupDescriptionInput,
    profileName,
    profileDescription,
    popupNameImageInput,
    popupLinkImageInput,
    popupEdit,
    popupAdd,
    cardList, popupAvatarInput, profileAvatar, popupAvatar, buttonSubmitProfile, buttonSubmitAdd, buttonSubmitAvatar
} from "./constants.js"
import {createCard} from "./card";
import {patchAvatar, patchProfileInfo, postCard} from "./api";


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscape);
    document.addEventListener('mousedown', handlePopupClose);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscape);
    document.removeEventListener('mousedown', handlePopupClose);
}

function closePopupEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}

function handlePopupClose(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
        closePopup(evt.target.closest('.popup_opened'))
    }
}


export {openPopup, closePopup}