import Todo from './todo';

export default class Project {
  #todosArr = [];

  #currentBool = false;

  constructor(title) {
    this.title = title;
  }

  get todos() {
    return this.#todosArr;
  }

  get current() {
    return this.#currentBool;
  }

  set current(bool) {
    this.#currentBool = bool;
  }

  getTodo(index) {
    return this.#todosArr.at(index);
  }

  addTodo(title, desc, date) {
    this.#todosArr.push(new Todo(title, desc, date));
  }

  deleteTodo(index) {
    this.#todosArr.splice(index, 1);
  }
}
