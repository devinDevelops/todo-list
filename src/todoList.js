import Project from './project';

class TodoList {
  #projectsArr = [];

  get projects() {
    return this.#projectsArr;
  }

  createDefaultProjects() {
    this.addProject('Personal');
    this.addProject('Work');
  }

  addProject(title) {
    this.#projectsArr.push(new Project(title));
  }

  deleteProject(index) {
    this.#projectsArr.splice(index, 1);
  }

  getProject(index) {
    return this.#projectsArr.at(index);
  }

  getCurrentProject() {
    return this.#projectsArr.find(obj => obj.current === true);
  }

  setCurrentProject(index) {
    this.getProject(index).current = true;
  }

  removeCurrentProject() {
    this.getCurrentProject().current = false;
  }
}

const todoList = new TodoList();

todoList.createDefaultProjects();
todoList.setCurrentProject(0);

export default todoList;
