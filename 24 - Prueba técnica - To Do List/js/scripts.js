const switchElement = document.getElementById('switch');
const formElement = document.getElementById('form');
const tasksElement = document.getElementById('tasks');
const deleteCompletedElement = document.getElementById('delete-completed');
const itemsLeftElement = document.getElementById('items-left');
const filtersElement = document.getElementById('filters');
const allFilters = document.querySelectorAll('.filter');

let allTasks = [];

let filterActive = 'all';

let darkMode = false;

if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
  darkMode = true;
}

const changeTheme = () => {
  if (darkMode) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    switchElement.src = './assets/images/icon-sun.svg';
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    switchElement.src = './assets/images/icon-moon.svg';
  }
};

const countItemsLeft = () => {
  if (allTasks.length === 0) {
    itemsLeftElement.textContent = 'No tasks';
    return;
  }

  const itemsLeft = allTasks.filter(task => !task.completed).length;

  if (itemsLeft === 0) {
    itemsLeftElement.textContent = 'All tasks completed!';
  } else {
    itemsLeftElement.textContent = `${itemsLeft} items left`;
  }
};

const getFilteredTasks = () => {
  if (filterActive === 'active') return allTasks.filter(task => !task.completed);
  if (filterActive === 'completed') return allTasks.filter(task => task.completed);
  return [...allTasks];
};

const printTasks = () => {
  const fragment = document.createDocumentFragment();
  const filteredTasks = getFilteredTasks();
  filteredTasks.forEach(task => {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('task-container');

    const newTaskCheck = document.createElement('input');
    newTaskCheck.type = 'checkbox';
    newTaskCheck.classList.add('task-check');
    newTaskCheck.checked = task.completed;
    newTaskCheck.id = task.id;
    newTaskCheck.dataset.id = task.id;

    const newTaskLabel = document.createElement('label');
    newTaskLabel.classList.add('task-text');
    newTaskLabel.textContent = task.taskName;
    newTaskLabel.htmlFor = task.id;

    const newTaskDelete = document.createElement('img');
    newTaskDelete.classList.add('task-delete');
    newTaskDelete.src = './assets/images/icon-cross.svg';

    newTaskDelete.addEventListener('click', () => deleteTask(task.id));
    newTaskCheck.addEventListener('change', () => completeTask(task.id));

    newTaskContainer.append(newTaskCheck, newTaskLabel, newTaskDelete);

    fragment.append(newTaskContainer);
  });

  tasksElement.textContent = '';
  tasksElement.append(fragment);
  countItemsLeft();
};

const saveTask = task => {
  allTasks.push(task);
  printTasks();
};

const createTask = taskName => {
  const newTask = {
    id: Date.now(),
    taskName,
    completed: false
  };

  saveTask(newTask);
};

const completeTask = id => {
  allTasks = allTasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });

  printTasks();
};

const deleteTask = id => {
  allTasks = allTasks.filter(task => task.id !== id);
  printTasks();
};

const deleteAllCompletedTasks = () => {
  allTasks = allTasks.filter(task => !task.completed);
  printTasks();
};

const setFiterActive = event => {
  const currentFilter = event.target.dataset.filter;
  if (!currentFilter) return;
  allFilters.forEach(filter => filter.classList.remove('filter-active'));
  event.target.classList.add('filter-active');
  filterActive = currentFilter;
  printTasks();
};

changeTheme();
countItemsLeft();

switchElement.addEventListener('click', () => {
  darkMode = !darkMode;
  changeTheme();
});

formElement.addEventListener('submit', event => {
  event.preventDefault();
  if (!event.target.task.value.trim()) return;
  createTask(event.target.task.value);
  event.target.reset();
});

deleteCompletedElement.addEventListener('click', deleteAllCompletedTasks);

filtersElement.addEventListener('click', setFiterActive);

window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', () => {
  darkMode = event.matches;
  changeTheme();
});
