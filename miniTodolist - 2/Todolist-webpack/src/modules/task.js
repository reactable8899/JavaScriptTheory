import Dom from "./dom";
import Storage from "./localStorage";
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
  const deleteButton = Dom.make('img', ['delButton'], {
    src: './images/delButton.png'
  });
  const deleteSpan = Dom.make('button', ['deleteSpan'], {
    textContent: 'Удалить'
  });
  const editButton = Dom.make('img', ['editButton'], {
    src: './images/editPic.png'
  });
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
  deleteSpan.addEventListener('click', function() {
    const div = event.target.parentNode;

    app.tasksCountDec(event.target.parentNode);
    Storage.setToStorage(this.currentManager);
    div.remove();
  });

  editButton.addEventListener('click', function(event) {
    let index = 0;
    const tasks = document.querySelectorAll('.list__task');

    for(let j = 0; j < tasks.length; j++) {
      const taskText = tasks[j].querySelector('.listText').textContent;
      if (taskText == spanText.textContent) {
        index = j;
      }
    }

    if (n == 0) {
      const currentText = spanText.textContent;
      spanText.contentEditable = "true";
      spanText.focus();
      n++
    } else {
      spanText.contentEditable = "false";
      n--;

      const editor = JSON.parse(localStorage.getItem(app.currentManager.name));
      editor[index].text = spanText.textContent;
      localStorage.setItem(app.currentManager.name,JSON.stringify(editor));

    }
  });

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
