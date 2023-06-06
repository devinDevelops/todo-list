import Project from './project';
import { todoList, renderProjectEls } from './ui';

export const initiateLS = () =>
  localStorage.setItem('projects', JSON.stringify(todoList.projects));

export function renderLS() {
  const projectsLS = JSON.parse(localStorage.getItem('projects'));

  projectsLS.forEach(project => Object.setPrototypeOf(project, new Project()));

  todoList.projects = projectsLS;

  renderProjectEls();
}

export const updateLS = () =>
  localStorage.setItem('projects', JSON.stringify(todoList.projects));
