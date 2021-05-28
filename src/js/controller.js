import * as model from "./model.js";
import indexView from "./views/indexView.js";
import ratioView from "./views/ratioView.js";
import addTaskView from "./views/addTaskView.js";
import toDoView from "./views/toDoView.js";
import doneView from "./views/doneView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const controlRatioView = function () {
  ratioView.render(model.state);
};

const controlToDoList = function () {
  toDoView.render(model.state.todo);
};

const controlToDoItemDelete = function () {
  model.deleteTodoItem(model.state.todo.id);
  toDoView.render(model.state.todo);
};

const controlToDoItemCheck = function (id) {
  model.checkOutToDoItem(id);

  toDoView.render(model.state.todo);
  doneView.render(model.state.done);
};

const controlDoneItemCheck = function (id) {
  model.checkOutDoneItem(id);

  toDoView.render(model.state.todo);
  doneView.render(model.state.done);
};

const controlDoneList = function () {
  doneView.render(model.state.done);
};

const controlToDoReset = function () {
  model.clearStorage("todo");
  toDoView.render(model.state.todo);
};

const controlAllReset = function () {
  model.clearStorage("todo");
  model.clearStorage("done");
  toDoView.render(model.state.todo);
  doneView.render(model.state.done);
};

const controlAddTask = function (data) {
  // 1) Add task to todo list
  model.createTaskObject(data);
  // 2) Update todo list view
  toDoView.render(model.state.todo);
  console.log(data);
};

const init = function () {
  indexView.addHandlerReset(controlAllReset);

  ratioView.addHandlerRender(controlRatioView);

  toDoView.addHandlerRender(controlToDoList);
  toDoView.addHandlerReset(controlToDoReset);
  toDoView.addHandlerDelete(controlToDoItemDelete);
  toDoView.addHandlerCheck(controlToDoItemCheck);

  doneView.addHandlerRender(controlDoneList);
  doneView.addHandlerCheck(controlDoneItemCheck);

  addTaskView.addHandlerUpload(controlAddTask);
};
init();
