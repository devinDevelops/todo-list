export default class Todo {
  #isImportant = false;

  constructor(title, desc, date) {
    this.title = title;
    this.desc = desc;
    this.date = date;
  }

  get isImportant() {
    return this.#isImportant;
  }

  set isImportant(bool) {
    this.#isImportant = bool;
  }

  editTodo(key, value) {
    this[key] = value;
  }
}
