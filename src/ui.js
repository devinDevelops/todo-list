import TodoList from './todoList';

const {
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

const getTodoBtn = btnIndex => {
  const btns = document.querySelectorAll(
    `.todo-btns button:nth-child(${btnIndex})`
  );
  const btn = btns[btns.length - 1];

  return btn;
};

const getTodoCard = btn => btn.parentNode.parentNode;

function addImportantBtnListener() {
  const importantBtn = getTodoBtn(3);

  importantBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(importantBtn);
    const todoIndex = todoCard.getAttribute('data-todo-index');
    setTodoBool('priorityBool', todoIndex);
    importantBtn.classList.toggle('highlight');
  });
}

function addCompleteBtnListener() {
  const completeBtn = getTodoBtn(2);

  completeBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(completeBtn);
    const todoTextCont = todoCard.childNodes[0];
    const todoTitle = todoTextCont.firstChild;
    const todoIndex = todoCard.getAttribute('data-todo-index');
    setTodoBool('completedBool', todoIndex);
    todoTitle.classList.toggle('complete');
    completeBtn.classList.toggle('highlight');
  });
}

function addViewBtnListener() {
  const viewBtn = getTodoBtn(1);

  viewBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(viewBtn);
    const todoTextCont = todoCard.childNodes[0];
    const todoSubTextEls = todoTextCont.querySelectorAll(
      'li:nth-last-child(-n + 2)'
    );
    todoSubTextEls.forEach(el => el.classList.toggle('hidden'));
    viewBtn.classList.toggle('hidden');
  });
}

function addDeleteTodoBtnListener() {
  const deleteTodoBtn = getTodoBtn(4);

  deleteTodoBtn.addEventListener('click', () => {
    const todoCard = getTodoCard(deleteTodoBtn);
    const todoIndex = todoCard.getAttribute('data-todo-index');

    // render todoEls
  });
}

const setTodosHeader = header =>
  (document.querySelector('.todos-header').textContent = header);

// this gets called when rendering the todos again
// to check if the todo el btns get highlighted based off their bool values
const doesBtnGetHighlight = (bool, btn) => {
  if (bool) btn.classList.toggle('highlight');
};

const getTodoBool = (todo, prop) => todo[prop];

function setTodoBool(prop, todoIndex) {
  const currTodo = getSelectedProj().todosArr[todoIndex];
  const currBoolValue = getTodoBool(currTodo, prop);
  const newBoolValue = (currTodo[prop] = !currBoolValue);

  return newBoolValue;
}

function isImportantHighlighted(todo) {
  const important = getTodoBool(todo, 'isImportant');
  const importantBtn = getTodoBtn(3);
  doesBtnGetHighlight(important, importantBtn);
}

function isCompletedHighlighted(todo) {
  const completed = getTodoBool(todo, 'isComplete');
  const completeBtn = getTodoBtn(2);

  doesBtnGetHighlight(completed, completeBtn);

  if (completed) {
    const titleEl = getTodoCard(completeBtn).firstChild.firstChild;
    titleEl.classList.toggle('complete');
  }
}

function removeCurrentClass() {
  const currProjectEl = document.querySelector('.title.current');

  if (currProjectEl === null || undefined) return;
  // incase there are currenly no projects
  // however, try to implement a way so that the default projects will not be able to
  // be deleted and if all the other projects are deleted, it will default projects[0]
  // as the selected

  currProjectEl.classList.remove('current');
}

const addCurrentClass = projectEl => projectEl.classList.add('current');

function addProjectHandler() {
  const title = getInputValue('project-title');

  addProject(title);
  const project = getProject(-1);
  const i = TodoList.indexOf(project);
  removeCurrentProject();
  setCurrentProject(i);
  const projectEl = createProjectEl(project, i);
  projectsContEl.appendChild(projectEl);
  // add projectEl listeners; swiching proj displays that proj's todos(delete/add todos) and updates the todos header
  // create addCurrentClass/removeCurrentClass fn

  setTodosHeader(title);

  clearInputValues();
}

function addTodoHandler() {
  const title = getInputValue('todo-title');
  const desc = getInputValue('todo-desc');
  const date = getInputValue('todo-date');
  const important = getInputValue('important', 'checked');
  // make a conditional that checks if important is checked
  // set importantBool to true and apply highlight

  getCurrentProject().addTodo(title, desc, date, important);
  const todo = getCurrentProject().getTodo(-1);
  const i = getCurrentProject().todos.indexOf(todo);
  const todoEl = createTodoEl(todo, i);
  todosContEl.appendChild(todoEl);
  // add todo btn listeners; ie view, complete, important
  clearInputValues();
}

function deleteTodoHandler() {}

function deleteProjectHandler() {}

function createTodoEl(todo, i) {
  const todoEl = document.createElement('div');

  return todoEl;
}

function createProjectEl(project, i) {
  const projectEl = document.createElement('div');

  return projectEl;
}

function deleteChildEls(parentContEl) {
  let child = parentContEl.lastElementChild;
  while (child) {
    parentContEl.removeChild(child);
    child = parentContEl.lastElementChild;
  }
}

// the render fns are going to be called for the new todos that need to load when a projEl is clicked
// it will also be called for when a proj/todo is deleted
// depending on how these are created, they can maybe be consolidated into one fn
function renderTodoEls() {}

function renderProjectEls() {}

// function renderEls(arr, elType ,listeners) {}

const appendChildEl = (parentContEl, childEl) =>
  parentContEl.appendChild(childEl); // this approach? or append all todo els on?

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

const getInputValue = (id, inputValue = 'value') =>
  document.querySelector(`#${id}`)[inputValue];

function clearInputValues() {
  const textInputs = document.querySelectorAll('input:not([type="checkbox"])');
  const checkboxInput = document.querySelector('input[type="checkbox"]');

  textInputs.forEach(input => (input.value = ''));
  checkboxInput.checked = false;
}

addFormDisplayListeners('project');
addFormDisplayListeners('todo');
submitTodoBtn.addEventListener('click', addTodoHandler);
submitProjectBtn.addEventListener('click', addProjectHandler);
