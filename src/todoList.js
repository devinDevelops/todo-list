import Project from './project';

class TodoList {
  constructor() {
    this.projects = [];
  }

  addProject = title => this.projects.push(new Project(title));

  deleteProject = index => this.projects.splice(index, 1);

  getProject = index => this.projects.at(index);

  getCurrentProject = () => this.projects.find(obj => obj.isCurrent === true);

  setCurrentProject = index => (this.getProject(index).isCurrent = true);

  removeCurrentProject = () => (this.getCurrentProject().isCurrent = false);

  createDefaultProjects = () => {
    this.addProject('Personal');
    this.addProject('Work');

    this.setCurrentProject(0);
  };

  createDefaultTodos = () => {
    const personalProj = this.getProject(0);
    personalProj.addTodo(
      'Take Fifi to the groomer',
      'Appointment @3:30p',
      '06/18/2023'
    );

    const workProj = this.getProject(1);
    workProj.addTodo(
      'Submit design proposal',
      'Get the design to Steven for approval',
      '6/24/2023'
    );
  };
}

const todoList = new TodoList();

export default todoList;
