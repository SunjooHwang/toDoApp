import View from "./View.js";
import listView from "./listView.js";

class ToDoView extends View {
  _parentElement = document.querySelector(".list--to_do");

  _resetBtn = document.querySelector(".todo-reset--btn");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerReset(handler) {
    this._resetBtn.addEventListener("click", handler);
  }

  addHandlerDelete(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".delete--btn");
      if (!btn) return;
      handler();
    });
  }

  addHandlerCheck(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".done--btn");
      if (!btn) return;
      console.log(btn.dataset);
      const { id } = btn.dataset;
      handler(id);
    });
  }

  _generateMarkup() {
    return this._data.map((el) => listView.render(el, false)).join("");
  }
}

export default new ToDoView();
