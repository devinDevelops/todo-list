import Project from './project';

class TodoList {
  projects = [];

  createDefaultProjects() {
    this.addProject('Personal');
    this.addProject('Work');
  }

  addProject(title) {
    this.projects.push(new Project(title));
  }

  deleteProject(index) {
    this.projects.splice(index, 1);
  }

  getProject(index) {
    return this.projects.at(index);
  }

  getCurrentProject() {
    return this.projects.find(obj => obj.isCurrent === true);
  }

  setCurrentProject(index) {
    this.getProject(index).isCurrent = true;
  }

  removeCurrentProject() {
    this.getCurrentProject().isCurrent = false;
  }
}

const todoList = new TodoList();

todoList.createDefaultProjects();
todoList.setCurrentProject(0);

export default todoList;
