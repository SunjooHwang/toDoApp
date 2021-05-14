import View from "./View.js";

class EditTaskview extends View {
  _parentElement = document.querySelector(".edit-task-form");

  _window = document.querySelector(".edit-task-window");
  _overlay = document.querySelector(".overlay");
  _btnClose = document.querySelector(".edit-task-form-close-btn");
  _btnEdit;

  constructor() {
    super();
    this._addHandlerHideWindow();
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerEdit() {
    // 1) toDoView 가 render 되고 나면 btnEdit select
    this._btnEdit = document.querySelectorAll(".edit--btn");
    // 2) btnEdit을 loop 해서 edit window redner 하는 event listener 부착
    this._addHandlerShowWindow();
  }

  test() {
    console.log(this._btnEdit);
  }

  addHandlerSubmit(handler) {
    this._btnEdit = document.querySelectorAll(".edit--btn");

    this._btnEdit.forEach((btn) =>
      btn.addEventListener("click", function (e) {
        console.log("clicked");
        const { id } = btn.dataset;
        this._addHandlerUpload();
      })
    );
  }

  _addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnEdit.forEach((btn) =>
      btn.addEventListener("click", this.toggleWindow.bind(this))
    );
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  _generateMarkup() {}
}

export default new EditTaskview();
