import DOMPurify from 'dompurify';
import { format } from 'date-fns';

import viewIMG from './icons/view.png';
import completeIMG from './icons/complete.png';
import importantIMG from './icons/important.png';

import TodoList from './todoList';

const {
  createDefaultProjects,
  createDefaultTodos,
  getCurrentProject,
  addProject,
  deleteProject,
  removeCurrentProject,
  setCurrentProject,
  getProject,
} = TodoList;

const projectsContEl = document.querySelector('.projects-cont');
const todosContEl = document.querySelector('.todos-cont');
const submitProjectBtn = document.querySelector('form .create-project');
const submitTodoBtn = document.querySelector('form .create-todo');

export default function initiateTodoList() {
  addFormDisplayListeners('project');
  addFormDisplayListeners('todo');
  submitTodoBtn.addEventListener('click', submitTodoHandler);
  submitProjectBtn.addEventListener('click', submitProjectHandler);
  addDefaultProjects();
}

// ***** UTILITY *****

function deleteChildEls(parentContEl) {
  let child = parentContEl.lastElementChild;
  while (child) {
    parentContEl.removeChild(child);
    child = parentContEl.lastElementChild;
  }
}

// ***** TODOS *****

const getTodoBtn = nthChild => {
  // depending on n, selects all the view/complete/important/delete btns
  const btns = document.querySelectorAll(
    `.todo-btns button:nth-child(${nthChild})`
  );

  // gets the last btn in the collection
  const btn = btns[btns.length - 1];

  return btn;
};

const getTodoCard = btn => btn.parentNode.parentNode;

function addImportantBtnListener() {
  const importantBtn = getTodoBtn(3);

  importantBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(importantBtn);
    const todoIndex = todoCard.getAttribute('data-todo-index');
    setTodoBool('isImportant', todoIndex);
    importantBtn.classList.toggle('highlight');
  });
}

function addCompleteBtnListener() {
  const completeBtn = getTodoBtn(2);

  completeBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(completeBtn);
    const todoTextCont = todoCard.childNodes[1];
    const todoTitle = todoTextCont.childNodes[1];
    const todoIndex = todoCard.getAttribute('data-todo-index');
    setTodoBool('isCompleted', todoIndex);
    todoTitle.classList.toggle('complete');
    completeBtn.classList.toggle('highlight');
  });
}

function addViewBtnListener() {
  const viewBtn = getTodoBtn(1);

  viewBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(viewBtn);
    const todoTextCont = todoCard.childNodes[1];
    // non-todoTitleEls
    const todoSubTextEls = todoTextCont.querySelectorAll(
      'li:nth-last-child(-n + 2)'
    );
    todoSubTextEls.forEach(el => el.classList.toggle('hidden'));
    viewBtn.classList.toggle('highlight');
  });
}

function addDeleteTodoBtnListener() {
  const deleteTodoBtn = getTodoBtn(4);

  deleteTodoBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(deleteTodoBtn);
    const todoIndex = todoCard.getAttribute('data-todo-index');

    getCurrentProject().deleteTodo(todoIndex); // delete the todo obj
    renderTodoEls(); // re-render the remaining todo objs
  });
}

function addTodoBtnsListeners() {
  addViewBtnListener();
  addCompleteBtnListener();
  addImportantBtnListener();
  addDeleteTodoBtnListener();
}

const setTodosHeader = header =>
  (document.querySelector('.todos-header').textContent = header);

// this gets called when rendering the todos again
// to check if the todo el btns get highlighted based off their bool values
const doesTodoBtnGetHighlight = (bool, btn) => {
  if (bool) btn.classList.toggle('highlight');
};

const getTodoBool = (todo, prop) => todo[prop];

function setTodoBool(prop, todoIndex) {
  const currTodo = getCurrentProject().todos[todoIndex];
  const currBoolValue = getTodoBool(currTodo, prop);
  const newBoolValue = (currTodo[prop] = !currBoolValue);

  return newBoolValue;
}

function isImportantHighlighted(todo) {
  const importantBool = getTodoBool(todo, 'isImportant');
  const importantBtn = getTodoBtn(3);
  doesTodoBtnGetHighlight(importantBool, importantBtn);
}

function isCompletedHighlighted(todo) {
  const completedBool = getTodoBool(todo, 'isCompleted');
  const completeBtn = getTodoBtn(2);

  doesTodoBtnGetHighlight(completedBool, completeBtn);

  if (completedBool) {
    const titleEl = getTodoCard(completeBtn).childNodes[1].childNodes[1];
    titleEl.classList.toggle('complete');
  }
}

function createTodoEl(todo, i) {
  const todoEl = document.createElement('div');
  todoEl.classList.add('todo-card');
  todoEl.setAttribute('data-todo-index', i);

  // DOMPurify npm module for xss safety
  todoEl.innerHTML = DOMPurify.sanitize(`
  <ul class="todo-text">
    <li class="title">${todo.title}</li>
    <li class="desc">${todo.desc}</li>
    <li class="date">${todo.date}</li>
  </ul>
  <div class="todo-btns">
    <button class="view">
      <img src="${viewIMG}" /></button
    ><button class="complete">
      <img src="${completeIMG}" /></button
    ><button class="important">
      <img src="${importantIMG}" /></button
    ><button class="delete">X</button>
  </div>
  `);

  return todoEl;
}

function renderTodoEls() {
  deleteChildEls(todosContEl);

  if (getCurrentProject().todos.length === 0) return;

  getCurrentProject().todos.forEach((todo, i) => {
    const todoEl = createTodoEl(todo, i);
    todosContEl.appendChild(todoEl);
    addTodoBtnsListeners();
    isCompletedHighlighted(todo);
    isImportantHighlighted(todo);
  });
}

// ***** PROJECTS *****

function createProjectEl(project, i) {
  const projectEl = document.createElement('li');
  projectEl.classList.add('title');
  projectEl.setAttribute('data-project-index', i);

  projectEl.innerHTML = DOMPurify.sanitize(`
  ${project.title}
  <button class="delete">X</button> 
  `);

  return projectEl;
}

function addDefaultProjects() {
  createDefaultProjects();
  createDefaultTodos();
  renderProjectEls();
}

function renderProjectEls() {
  deleteChildEls(projectsContEl);

  if (TodoList.projects.length === 0) {
    deleteChildEls(todosContEl);
    setTodosHeader('');
    return;
  }

  TodoList.projects.forEach((project, i) => {
    const projectEl = createProjectEl(project, i);
    projectsContEl.appendChild(projectEl);
    addDeleteProjectBtnListener();
    switchProjectListener(projectEl);

    // the first project and it's todos is the one that gets displayed on render call
    if (i === 0) {
      setCurrentProject(project);
      addCurrentClass(projectEl);
      setTodosHeader(project.title);
      renderTodoEls();
    }
  });
}

const removeCurrentClass = () => {
  const currEl = document.querySelector('.title.current');

  if (currEl === null) return;

  currEl.classList.remove('current');
};

const addCurrentClass = projectEl => projectEl.classList.add('current');

function switchProjectListener(projectEl) {
  projectEl.addEventListener('click', () => {
    const projectIndex = projectEl.getAttribute('data-project-index');

    if (getProject(projectIndex) === undefined) return; // if the project is deleted, exit

    removeCurrentProject();
    setCurrentProject(projectIndex);
    removeCurrentClass();
    addCurrentClass(projectEl);
    setTodosHeader(getCurrentProject().title);
    renderTodoEls();
  });
}

function addDeleteProjectBtnListener() {
  const deleteProjectBtns = document.querySelectorAll('li .delete');
  const deleteProjectBtn = deleteProjectBtns[deleteProjectBtns.length - 1];

  deleteProjectBtn.addEventListener('click', e => {
    const projectEl = e.target.parentNode;
    const projectIndex = projectEl.getAttribute('data-project-index');
    deleteProject(projectIndex);
    renderProjectEls();
  });
}

// ****** FORM *******

// type is either 'todo' or 'project'
function addFormDisplayListeners(type) {
  const formEl = document.querySelector(`#${type}-form`);
  const openFormBtn = document.querySelector(`nav .create-${type}`);
  const closeFormBtn = document.querySelector(
    `#${type}-form .form-cont .delete`
  );
  const submitFormBtn = document.querySelector(`form .create-${type}`);

  const listners = [openFormBtn, closeFormBtn, submitFormBtn];

  listners.forEach(listener =>
    listener.addEventListener('click', () => {
      formEl.classList.toggle('blur');
      formEl.classList.toggle('hidden');
    })
  );
}

const getInputValue = (id, valueType = 'value') =>
  document.querySelector(`#${id}`)[valueType];

function clearInputValues() {
  const textInputs = document.querySelectorAll('input:not([type="checkbox"])');
  const checkboxInput = document.querySelector('input[type="checkbox"]');

  textInputs.forEach(input => (input.value = ''));
  checkboxInput.checked = false;
}

function submitProjectHandler() {
  const title = getInputValue('project-title');

  addProject(title);
  const project = getProject(-1);
  const i = TodoList.projects.indexOf(project);

  if (getCurrentProject() !== undefined) {
    removeCurrentProject();
    removeCurrentClass();
  }

  setCurrentProject(i);
  const projectEl = createProjectEl(project, i);
  projectsContEl.appendChild(projectEl);
  addDeleteProjectBtnListener();
  switchProjectListener(projectEl);

  addCurrentClass(projectEl);

  setTodosHeader(title);
  renderTodoEls();

  clearInputValues();
}

function submitTodoHandler() {
  if (getCurrentProject() === undefined) return;

  const title = getInputValue('todo-title');
  const desc = getInputValue('todo-desc');
  const date = getInputValue('todo-date');
  const importantBool = getInputValue('important', 'checked');

  const formattedDate = format(
    new Date(date.split('-').join('/')),
    'MM/dd/yyyy'
  );

  getCurrentProject().addTodo(title, desc, formattedDate, importantBool);
  const todo = getCurrentProject().getTodo(-1);
  const i = getCurrentProject().todos.indexOf(todo);
  const todoEl = createTodoEl(todo, i);
  todosContEl.appendChild(todoEl);
  addTodoBtnsListeners();
  isImportantHighlighted(todo);
  clearInputValues();
}
