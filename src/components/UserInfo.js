export default class UserInfo{
    constructor({nameSelector, infoSelector, avatarSelector})
    {  
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector);

    }
    getUserInfo(){
  return {
    nameSelector: this._name.textContent,
    infoSelector: this._info.textContent,
  }
    }
    setUserInfo(name ,info){
        this._name.textContent = name;
        this._info.textContent = info;
    }
    setUserAvatar(avatar){
      this._avatar.setAttribute("style", "background-image: url("+avatar+")")

  }
}