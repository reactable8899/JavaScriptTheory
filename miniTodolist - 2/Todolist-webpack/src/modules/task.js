<<<<<<< HEAD
import Dom from "./modules/dom";
=======
>>>>>>> master
const Task = function(name, priority,app) {

  this.name = name;
  this.priority = priority;
  this.app = app;

  this.dom = {
    div: null
  };
  let n = 0;
  const self = this;

  const div = Dom.make('div',['list__task']);

  const span = Dom.make('span');
  span.classList.add = Task.prototype.getPriority(priority,span);

  const spanText = Dom.make('span', ['listText'], {
    textContent: name
  });
  const buttonDelete = Dom.make('button', ['list__button'], {
    textContent: '...'
  });
  const deleteSpan = Dom.make('button', ['deleteSpan'], {
    textContent: 'Удалить
  });

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

    app.tasksCountDec(event.target.parentNode);
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
  if (prioritys === 'High') {
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
<<<<<<< HEAD
};
export default Task;
=======
}
export default Task
>>>>>>> master
