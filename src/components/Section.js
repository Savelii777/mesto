export default class Section{
    constructor({items,renderer}, container)
    {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }
    renderElements(items){
        items.forEach(item => {
          this._renderer(item);
        });
    }
    
    addItem(domElement){
        this._container.append(domElement);
    }

    addNewItem(domElement){
        this._container.prepend(domElement);
    }
}