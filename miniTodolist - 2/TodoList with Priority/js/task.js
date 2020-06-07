const Task = function(name, priority,app) {

  this.name = name;
  this.priority = priority;
  this.app = app;

  this.dom = {
    div: null
  };
  let n = 0;
  const self = this;

  const div = document.createElement('div');
  div.classList.add('list__task');

  const span = document.createElement('span');
  span.classList.add = Task.prototype.getPriority(priority,span);

  const spanText = document.createElement('span');
  spanText.textContent = name;

  const buttonDelete = document.createElement('button');
  buttonDelete.textContent = '...';
  buttonDelete.classList.add('list__button');

  const deleteSpan = document.createElement('button');
  deleteSpan.classList.add('deleteSpan');
  deleteSpan.textContent = 'Удалить';

  buttonDelete.addEventListener('click', function(event) {

    if (n === 0) {
      div.appendChild(deleteSpan);
      deleteSpan.classList.add('changeDisplayBlock');
      deleteSpan.classList.remove('changeDisplayNone');
      n++;
    } else {
      deleteSpan.classList.add('changeDisplayNone');
      deleteSpan.classList.remove('changeDisplayBlock');
      n--;
    }

  });

  deleteSpan.addEventListener('click', function() {
    const div = event.target.parentNode;

    app.tasksCountDec();
    div.remove();
  })

  div.appendChild(span);
  div.appendChild(spanText);
  div.appendChild(buttonDelete);

  this.dom.div = div;

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
};
