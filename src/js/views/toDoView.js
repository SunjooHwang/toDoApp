import View from "./View.js";
import listView from "./listView.js";

class ToDoView extends View {
  _parentElement = document.querySelector(".list--to_do");
  _sortImportanceBtn = document.querySelector(".todo-sort_importance--btn");
  _sortDateBtn = document.querySelector(".todo-sort_date--btn");
  _resetBtn = document.querySelector(".todo-reset--btn");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerSortByImportance(handler) {
    this._sortImportanceBtn.addEventListener("click", handler);
  }

  addHandlerSortByDate(handler) {
    this._sortDateBtn.addEventListener("click", handler);
  }

  addHandlerReset(handler) {
    this._resetBtn.addEventListener("click", handler);
  }

  addHandlerDelete(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".delete--btn");
      if (!btn) return;
      const { id } = btn.dataset;
      handler(id);
    });
  }

  addHandlerCheck(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".done--btn");
      if (!btn) return;
      const { id } = btn.dataset;
      handler(id);
    });
  }

  _generateMarkup() {
    return this._data.map((el) => listView.render(el, false)).join("");
  }
}

export default new ToDoView();
