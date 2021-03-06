import View from "./View.js";

class RatioView extends View {
  _parentElement = document.querySelector(".ratio");
  _btnRatio = document.querySelector(".ratio--btn");

  addHandlerRender(handler) {
    this._btnRatio.addEventListener("click", handler);
  }

  _generateMarkup() {
    return `
    <span class="ratio--text">π ${
      this._data.todo.length + this._data.done.length
    } κ° μ€ ${this._data.done.length} κ°μ μΌμ μλ£νμ΄μ !</span>
          `;
  }
}

export default new RatioView();
