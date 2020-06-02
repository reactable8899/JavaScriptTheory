const Task = function(name, priority,tasksCount) {

  this.name = name;
  this.priority = priority;
  this.tasksCount = tasksCount;

  this.dom = {
    div: null
  };

  const self = this;

  const div = document.createElement('div');
  div.classList.add('list__task');

  const span = document.createElement('span');
  span.classList.add = Task.prototype.getPriority(priority,span);

  const spanText = document.createElement('span');
  spanText.textContent = name;

  const buttonDelete = document.createElement('button');
  buttonDelete.textContent = 'удалить';
  buttonDelete.classList.add('list__button');

  buttonDelete.addEventListener('click', function(event) {
    const div = event.target.parentNode;
    tasksCount--;
    div.remove();
  });

  div.appendChild(span);
  div.appendChild(spanText);
  div.appendChild(buttonDelete);

  this.dom.div = div;
};

Task.prototype.tasksCount = function() {
  return tasksCount;
};

Task.prototype.getElement = function() {
  return this.dom.div;
};

Task.prototype.getPriority = function(prioritys,span) {

  if (prioritys === 'Higth') {
    span.textContent = prioritys;
    span.classList.add('priorityClassHigth');
  } else {
    if (prioritys === 'Medium') {
      span.textContent = prioritys;
      span.classList.add('priorityClassMedium');
    } else {
      span.textContent = prioritys;
      span.classList.add('priorityClassLow');
    }
  }
}
