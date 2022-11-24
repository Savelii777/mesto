export default class UserInfo{
    constructor({nameSelector, infoSelector})
    {  
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
    }
    getUserInfo(){
  return {
    nameSelector: this._name.textContent,
    infoSelector: this._info.textContent,
  }
    }
    setUserInfo(nameSelector,infoSelector){
        this._name.textContent = nameSelector
        this._info.textContent = infoSelector;
    }
}