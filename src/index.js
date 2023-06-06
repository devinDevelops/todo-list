import './style.css';

import { renderLS, initiateLS } from './localStorage';
import { initiateTodoListListeners, addDefaultProjects } from './ui';

addEventListener('DOMContentLoaded', () => {
  const emptyLocalStorage = localStorage.length === 0;

  if (emptyLocalStorage) {
    addDefaultProjects();
    initiateTodoListListeners();
    initiateLS();
  } else {
    renderLS();
    initiateTodoListListeners();
  }
});
