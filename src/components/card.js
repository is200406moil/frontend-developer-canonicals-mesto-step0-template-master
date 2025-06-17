import {fullScreenImage, fullScreenCaption, cardTemplate, popupFullScreen,} from "./constants.js"
import {openPopup} from "./modal.js";
import {putLike, deleteLike, deleteCard} from "./api";

const likeCount = (cardLikeCount, likes) => {
    cardLikeCount.textContent = likes.length
}
const toggleLike = (evt) => {
    evt.classList.toggle('element_button-like_active');
}

function closeItem(evt) {
    evt.target.closest('.element__item').remove()
}


function createCard(name, link, id, likes, ownerId, userId) {
    const cardItem = cardTemplate.querySelector('.element__item').cloneNode(true);
    const cardImage = cardItem.querySelector('.element__image');
    const cardTitle = cardItem.querySelector('.element__name');
    const cardLikeCount = cardItem.querySelector('.element__button-like-count');
    const buttonLike = cardItem.querySelector('.element__button-like');
    const buttonTrash = cardItem.querySelector('.element__button-trash');

    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    cardLikeCount.textContent = likes.length;

    cardImage.addEventListener('click', function () {
        fullScreenCaption.textContent = name;
        fullScreenImage.alt = name;
        fullScreenImage.src = link;
        openPopup(popupFullScreen);
    });
// Информация сохраняется, о том какие пролайканы карточки https://disk.yandex.ru/i/zLTXpslkYhki3w
    likes.some(card => {
        if (userId === card._id) {
            buttonLike.classList.add("element_button-like_active")
        }
    });

    buttonLike.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('element_button-like_active')) {
            deleteLike(id)
                .then(data => {
                    toggleLike(buttonLike)
                    likeCount(cardLikeCount, data.likes)
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            putLike(id)
                .then(data => {
                    toggleLike(buttonLike)
                    likeCount(cardLikeCount, data.likes)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    })
    if (userId === ownerId) {
        buttonTrash.addEventListener('click', (evt) => {
            deleteCard(id)
                .then(() => {
                    closeItem(evt)
                })
                .catch((err) => {
                    console.log(err)
                });
        })
    }
    else
        {
            buttonTrash.remove()
        }


return cardItem
}
export {createCard};