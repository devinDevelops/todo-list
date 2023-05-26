export default class Todo {
  isCompleted = false;

  constructor(title, desc, date, isImportant = false) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.isImportant = isImportant;
  }

  editTodo(key, value) {
    this[key] = value;
  }
}
