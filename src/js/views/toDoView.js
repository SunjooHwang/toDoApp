import View from "./View.js";
import listView from "./listView.js";

class toDoView extends View {
  _parentElement = document.querySelector(".list--to_do");

  _resetBtn = document.querySelector(".todo-reset--btn");

  _window = document.querySelector(".edit-task-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen;
  _btnClose = document.querySelector(".edit-task-form-close-btn");

  // constructor() {
  //   super();
  //   this.addHandlerEdit();
  // }

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

  addHandlerEdit() {
    window.addEventListener("load", function (e) {
      this._btnOpen = document.querySelectorAll(".edit--btn");
      console.log(this._btnOpen);

      this._btnOpen.forEach((btn) =>
        btn.addEventListener("click", function (e) {
          console.log(e);
          document.querySelector(".overlay").classList.toggle("hidden");
          document
            .querySelector(".edit-task-window")
            .classList.toggle("hidden");
        })
      );

      document
        .querySelector(".edit-task-form-close-btn")
        .addEventListener("click", function () {
          console.log(e);
          document.querySelector(".overlay").classList.toggle("hidden");
          document
            .querySelector(".edit-task-window")
            .classList.toggle("hidden");
        });

      document.querySelector(".overlay").addEventListener("click", function () {
        document.querySelector(".overlay").classList.toggle("hidden");
        document.querySelector(".edit-task-window").classList.toggle("hidden");
      });
    });
  }
  _generateMarkup() {
    return this._data.map((el) => listView.render(el, false)).join("");
  }
}

export default new toDoView();
