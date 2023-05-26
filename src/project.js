import Todo from './todo';

export default class Project {
  todos = [];

  isCurrent = false;

  constructor(title) {
    this.title = title;
  }

  getTodo(index) {
    return this.todos.at(index);
  }

  addTodo(title, desc, date) {
    this.todos.push(new Todo(title, desc, date));
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}
