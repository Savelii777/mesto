export default class Api {
    constructor(options)
    {
        this._baseUrl = options.baseUrl;
        this._authorization = options.headers.authorization;

    }
    _checkResponseFromServer(res){
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    getUserInfoFromServer(){
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }

        })
        .then(this._checkResponseFromServer);   
    }

    getCardsFromServer(){
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponseFromServer);   
    }

    sendUserInfoToServer(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        .then(this._checkResponseFromServer);   
      }



      sendUserAvatarToServer(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then(this._checkResponseFromServer);   
      }

      addNewCardToServer(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._checkResponseFromServer);   
      }

    deleteCardFromServer(cardID){
        return fetch(`${this._baseUrl}/cards/`+cardID, {
            method: 'DELETE',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponseFromServer);   
    }

    addLikeToServer(cardID){
        return fetch(`${this._baseUrl}/cards/`+cardID+'/likes', {
            method: 'PUT',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponseFromServer);   
    }

    deleteLikeFromServer(cardID){
        return fetch(`${this._baseUrl}/cards/`+cardID+'/likes', {
            method: 'DELETE',
            headers:{
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponseFromServer);   
    }

}