import Dom from "./dom";
import Storage from "./localStorage";
import App from "../index.js";

class Task {
  constructor(text, priority,app) {
    this.name = text;
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
      textContent: text
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
    const status = Dom.make('img',['statusActive'], {
      src: './images/done1.png'
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

    deleteSpan.addEventListener('click', function() {
      const div = event.target.parentNode;
      div.remove();

      app.tasksCountDec(event.target.parentNode);

      Storage.setToStorage(self.app.currentManager);
    });

    status.addEventListener('click', function() {
      if (k === 0) {
        status.src = './images/done.png'
        status.classList.add('statusDone');
        status.classList.remove('statusActive');
        editButton.style.display = 'none';
        spanText.style.cssText = 'text-decoration: line-through; color: #7E8591';
        k++;
      } else {
        status.src = './images/done1.png'
        status.classList.add('statusActive');
        status.classList.remove('statusDone');
        editButton.style.display = 'block';
        spanText.style.color = 'black';
        spanText.style.cssText = 'text-decoration: none';
        k--;
      }
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
    div.appendChild(status);
    div.appendChild(deleteButton);
    div.appendChild(editButton);


    this.dom.div = div;
  };

  getElement(){
    return this.dom.div;
  };

  getPriority(prioritys,span) {
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
};

export default Task;
