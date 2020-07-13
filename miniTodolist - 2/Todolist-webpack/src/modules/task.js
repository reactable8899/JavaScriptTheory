import Dom from "./dom";
const Task = function(name, priority,app) {

  this.name = name;
  this.priority = priority;
  this.app = app;

  this.dom = {
    div: null
  };
  let n = 0;
  let k = 0;
  const self = this;

  const div = Dom.make('div',['list__task']);

  const span = Dom.make('span');
  span.classList.add = Task.prototype.getPriority(priority,span);

  const spanText = Dom.make('span', ['listText'], {
    textContent: name
  });
  const deleteButton = Dom.make('button', ['list__button'], {
    textContent: '...'
  });
  const deleteSpan = Dom.make('button', ['deleteSpan'], {
    textContent: 'Удалить'
  });
  const editButton = Dom.make('button', ['editButton'], {
    textContent: 'edit'
  })
  const confirmEdit = Dom.make('button', ['confirmEdit'], {
    textContent: '+'
  })
  deleteButton.addEventListener('click', function(event) {
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
  editButton.addEventListener('click', function(event) {
    const takeNode = event.target.parentNode;
    const editText = takeNode.querySelector('.listText');
    if (k == 0) {
      k++;
      const editInput = Dom.make('input', ['editInput'], {
        value: editText.textContent
      })

      div.appendChild(editInput);
      div.appendChild(confirmEdit);

      editText.style.display = 'none';

    } else {
      const deleteteEdit = takeNode.querySelector('.editInput');

      editText.style.display = 'inline-block';

      deleteteEdit.remove();
      confirmEdit.remove();
      k--;
    }

    confirmEdit.addEventListener('click', function() {

      const editInput = takeNode.querySelector('.editInput');
      const spanText = Dom.make('span', ['listText'], {
        textContent: editInput.value
      });

      k--;
      div.appendChild(spanText);
      editText.remove();
      editInput.remove();
      confirmEdit.remove();

    })
  })

  deleteSpan.addEventListener('click', function() {
    const div = event.target.parentNode;

    app.tasksCountDec(event.target.parentNode);
    app.setToStorage(this.currentManager);
    div.remove();
  })

  div.appendChild(span);
  div.appendChild(spanText);
  div.appendChild(deleteButton);
  div.appendChild(editButton);

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
};
export default Task;
