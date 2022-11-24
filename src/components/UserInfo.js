export default class UserInfo{
    constructor({nameSelector, infoSelector})
    {  
        this._nameSelector = document.querySelector(nameSelector);
        this._infoSelector = document.querySelector(infoSelector);
    }
    getUserInfo(){
  return {
    nameSelector: this._nameSelector.textContent,
    infoSelector: this._infoSelector.textContent,
  }
    }
    setUserInfo(nameSelector,infoSelector){
        this._nameSelector.textContent = nameSelector
        this._infoSelector.textContent = infoSelector;
    }
}