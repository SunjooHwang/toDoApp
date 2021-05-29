export const state = {
  todo: [],
  done: [],
};

export const createTaskObject = function (data) {
  state.todo.push({
    task: data.task,
    date: data.date,
    place: data.place,
    importance: data.importance,
    id: (Date.now() + "").slice(-10),
    done: false,
  });

  persistTasks();
};

const persistTasks = function () {
  localStorage.setItem("todo", JSON.stringify(state.todo));
  localStorage.setItem("done", JSON.stringify(state.done));
};

export const init = function () {
  const toDoStorage = JSON.parse(localStorage.getItem("todo"));
  const doneStorage = JSON.parse(localStorage.getItem("done"));
  if (toDoStorage) state.todo = toDoStorage;
  if (doneStorage) state.done = doneStorage;
};

init();

export const clearStorage = function (list) {
  localStorage.clear(`${list}`);
};

export const deleteTodoItem = function (id) {
  const index = state.todo.findIndex((el) => el.id === id);

  state.todo.splice(index, 1);
  persistTasks();
};

export const editTodoItem = function (id) {
  const index = state.todo.findIndex((el) => el.id === id);
  console.log(index);
};

export const checkOutToDoItem = function (id) {
  // 1) Find the selected item in todo by id
  const index = state.todo.findIndex((el) => el.id === id);

  // // 2) Set done = true
  state.todo[index].done = true;
  state.done.push(state.todo.splice(index, 1)[0]);
  // // 3) Store state in local storage
  persistTasks();
};

export const checkOutDoneItem = function (id) {
  // 1) Find the selected item in todo by id
  const index = state.done.findIndex((el) => el.id === id);
  // // 2) Set done = true
  state.done[index].done = false;
  state.todo.push(state.done.splice(index, 1)[0]);
  // // 3) Store state in local storage
  persistTasks();
};

export const sortByImportance = function (list) {
  list === "todo"
    ? state.todo.sort((a, b) => b.importance - a.importance)
    : state.done.sort((a, b) => b.importance - a.importance);
};

export const sortByDate = function (list) {
  list === "todo"
    ? state.todo.sort((a, b) => new Date(a.date) - new Date(b.date))
    : state.done.sort((a, b) => new Date(a.date) - new Date(b.date));
};
