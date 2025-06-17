

const config = {
    baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
    headers: {
        authorization: "bd20a1a7-783a-4ce0-8a79-cdcaf6dff26d",
        "Content-Type": "application/json",
    },
};

function checkResponce(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "GET",
        headers: config.headers
    })
        .then(checkResponce)
};

export const getProfileInfo  = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "GET",
        headers: {
            authorization: config.headers.authorization,
        },
    })
        .then(checkResponce);
};
export const patchProfileInfo = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
        .then(checkResponce);
}
export const postCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(checkResponce)
}
export const patchAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
           avatar: link
        })
    })
        .then(checkResponce)
}
export const putLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers
    })
        .then(checkResponce)
}

export const deleteLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then(checkResponce)
}
export const deleteCard = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then(checkResponce)
}