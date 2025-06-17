const popupEdit = document.querySelector('#popup_edit-profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const popupFormEdit = document.querySelector('#popup__form_edit');
const popupFormAdd = document.querySelector('#popup__form_add');
const profileName= document.querySelector('.profile__name');
const popupNameInput = document.querySelector('#name-input');
const profileDescription = document.querySelector('.profile__description');
const popupDescriptionInput = document.querySelector('#description-input');
const popupNameImageInput = popupFormAdd.querySelector('#nameImage-input');
const popupLinkImageInput = popupFormAdd.querySelector('#link-input');
const popupAdd = document.querySelector('#popup_add-element');
const popupFullScreen = document.querySelector('.popup_fullscreen');
const fullScreenImage = document.querySelector('.popup__fullscreen-image');
const fullScreenCaption = document.querySelector('.popup__fullscreen-caption');
const cardTemplate = document.querySelector('#elements-template').content;
const cardList = document.querySelector('.element');
const buttonAvatar = document.querySelector('.profile__avatar-container');
const popupAvatar = document.querySelector('#popup_change-avatar');
const profileAvatar = document.querySelector('.profile__avatar');
const popupAvatarInput = document.querySelector('#avatar-input');
const popupFormAvatar = document.querySelector('#popup__form_avatar');
const buttonSubmitProfile = document.querySelector('#button-save');
const buttonSubmitAdd = document.querySelector('#button-create');
const buttonSubmitAvatar = document.querySelector('#button-save-avatar')
export {
    popupEdit,
    buttonEdit,
    buttonAdd,
    popupFormEdit,
    popupFormAdd,
    profileName,
    popupNameInput,
    profileDescription,
    popupDescriptionInput,
    popupNameImageInput,
    popupLinkImageInput,
    popupAdd,
    popupFullScreen,
    fullScreenImage,
    fullScreenCaption,
    cardTemplate,
    cardList,
    buttonAvatar,
    popupAvatar,
    profileAvatar,
    popupAvatarInput,
    popupFormAvatar,
    buttonSubmitProfile,
    buttonSubmitAdd,
    buttonSubmitAvatar,
}