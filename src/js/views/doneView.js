import View from "./View.js";
import listView from "./listView.js";

class DoneView extends View {
  _parentElement = document.querySelector(".list--done");
  _sortImportanceBtn = document.querySelector(".done-sort_importance--btn");
  _sortDateBtn = document.querySelector(".done-sort_date--btn");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerSortByImportance(handler) {
    this._sortImportanceBtn.addEventListener("click", handler);
    console.log("hello");
  }

  addHandlerSortByDate(handler) {
    this._sortDateBtn.addEventListener("click", handler);
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

export default new DoneView();
