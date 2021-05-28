import View from "./View.js";

class RatioView extends View {
  _parentElement = document.querySelector(".ratio");
  _btnRatio = document.querySelector(".ratio--btn");

  addHandlerRender(handler) {
    this._btnRatio.addEventListener("click", handler);
  }

  _generateMarkup() {
    return `
    <span class="ratio--text">👍 ${
      this._data.todo.length + this._data.done.length
    } 개 중 ${this._data.done.length} 개의 일을 완료했어요 !</span>
          `;
  }
}

export default new RatioView();
