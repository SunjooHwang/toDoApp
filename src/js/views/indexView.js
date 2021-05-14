import View from "./View.js";
import toDoView from "./toDoView.js";

class indexView extends View {
  _parentElement = document.querySelector(".container");
  _resetBtn = document.querySelector(".reset--btn");

  addHandlerReset(handler) {
    this._resetBtn.addEventListener("click", handler);
  }
}

export default new indexView();
