/**
 * Основной JavaScript файл для проекта Mesto
 * Содержит логику работы с модальными окнами, профилем и карточками
 */

// ===== Работа с модальными окнами =====
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

/**
 * Открывает модальное окно
 * @param {HTMLElement} popup - Элемент модального окна
 */
function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

/**
 * Закрывает модальное окно
 * @param {HTMLElement} popup - Элемент модального окна
 */
function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');
}

// ===== Работа с профилем =====
const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileTitleInput = profilePopup.querySelector('.popup__input_type_name');
const profileDescriptionInput = profilePopup.querySelector('.popup__input_type_description');

// Обработчик открытия попапа редактирования профиля
profileEditButton.addEventListener('click', function() {
    // Заполняем поля формы текущими значениями профиля
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(profilePopup);
});

// Обработчик закрытия попапа профиля
const profilePopup__close = profilePopup.querySelector('.popup__close');
profilePopup__close.addEventListener('click', function() {
    closeModal(profilePopup);
});

// Обработчик отправки формы профиля
const profileForm = profilePopup.querySelector('.popup__form');

/**
 * Обрабатывает отправку формы профиля
 * @param {Event} evt - Событие отправки формы
 */
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Предотвращаем стандартное поведение формы

    // Обновляем данные профиля
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

// ===== Работа с карточками =====
const placesList = document.querySelector('.places__list');

/**
 * Создает и добавляет новую карточку на страницу
 * @param {string} imageSrc - URL изображения
 * @param {string} titleContent - Заголовок карточки
 */
function addCard(imageSrc, titleContent) {
    // Клонируем шаблон карточки
    const cardTemplate = document.querySelector('#card-template').content;
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    
    // Заполняем карточку данными
    card.querySelector('.card__image').src = imageSrc;
    card.querySelector('.card__title').textContent = titleContent;
    
    // Добавляем карточку на страницу
    placesList.append(card);
}

// TODO: Добавить функционал создания карточки через форму
// TODO: Добавить функционал удаления карточки
// TODO: Добавить обработчики для лайков

// Инициализация карточек при загрузке страницы
for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].link, initialCards[i].name);
}