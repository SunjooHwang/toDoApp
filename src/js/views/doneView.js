import View from "./View.js";
import listView from "./listView.js";

class doneView extends View {
  _parentElement = document.querySelector(".list--done");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
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

export default new doneView();
