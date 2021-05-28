import View from "./View.js";

class ListView extends View {
  _parentElement = "";

  _generateMarkup() {
    return `
          <li class="list--item">
          <div class="list--item--desc">
            <h3 class="list--item__task">${this._data.task}</h3>
            <h3 class="list--item__date">기한 : ${this._data.date}</h3>
            <h3 class="list--item__place">장소 : ${this._data.place}</h3>
            <h3 class="list--item__importance">${this._data.importance}</h3>
          </div>
          <div class="list--item--menu ">
            <button class="btn edit--btn" data-id="${this._data.id}">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn delete--btn">
              <i class="fas fa-trash-alt"></i>
            </button>
            <button class="btn done--btn" data-id="${this._data.id}">
              <i class="fas fa-check"></i>
            </button>
          </div>
        </li>
          `;
  }
}

export default new ListView();
