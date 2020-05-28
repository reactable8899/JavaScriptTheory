const todo = function() {
  /**
   * config
   * - containerId
   */
  function start(config) {
    init(config);
  }

  function init(config) {
    let container = document.getElementById(config.containerId);
    let input = container.getElementsByClassName('todo-list__input')[0];
    let button = container.getElementsByClassName('todo-list__button')[0];
    let todoListContent = container.getElementsByClassName('todo-list__content')[0];

    button.addEventListener('click', function(event) {

      if (input.value === '') {
        return;
      }

      const task = drawTask(input.value);

      todoListContent.appendChild(task);
      input.value = '';
      input.focus();
    });
  }

  function drawTask(text) {
    const task = document.createElement('div');
    task.classList.add('todo-list__task');

    const checkbox = document.createElement('input');
    checkbox.classList.add('todo-list__task-checkbox');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('click', function(event) {
      const label = event.target.nextSibling;

      if (event.target.checked) {
        label.classList.add('todo-list__task-label--through');
      } else {
        label.classList.remove('todo-list__task-label--through');
      }
    })

    const label = document.createElement('div');
    label.classList.add('todo-list__task-label');
    label.textContent = text;

    const remove = document.createElement('button');
    remove.classList.add('todo-list__task-remove');
    remove.textContent = 'Удалить';

    remove.addEventListener('click', function(event) {
      const task = event.target.parentNode;

      task.remove();
    });

    task.appendChild(checkbox);
    task.appendChild(label);
    task.appendChild(remove);

    return task;
  }

  return {
    start: start
  }
}();
