const dom = function() {
  const list = [];
  const localList = [];
  const count = 1;
  function createTodoElement(text,prioritys) {

    const li = document.createElement('div');
    li.classList.add('list__task');

    const priority = document.createElement('span');

    if (prioritys === 'Higth') {
      priority.textContent = prioritys;
      priority.classList.add('priorityClassHigth');
    } else {
      if (prioritys === 'Medium') {
        priority.textContent = prioritys;
        priority.classList.add('priorityClassMedium');
      } else {
        priority.textContent = prioritys;
        priority.classList.add('priorityClassLow');
      }
    }
    li.appendChild(priority);

    const span = document.createElement('span');
    span.textContent = text;

    li.appendChild(span);

    const remove = document.createElement('button');
    remove.textContent = 'Удалить';
    remove.classList.add('list__button');

    li.appendChild(remove);

    const lits = {
      name: text,
      priority: prioritys,
    }
    list.push(lits);

    localStorage.setItem('list', JSON.stringify(list));
    fillList();

    remove.addEventListener('click', function(event) {
      const li = event.target.parentNode;

      todo.taskCountDec();
      li.remove();

    })

  }

  function fillList(lits) {
    ulClass.innerHTML = '';
    const spisok = JSON.parse(localStorage.getItem("list"));

    if (spisok != null) {
      for(let i = 0; i < spisok.length; i++) {
        const li = document.createElement('div');
        li.classList.add('list__task');

        const priority = document.createElement('span');
        priority.classList.add(spisok[i].priority);

        if (spisok[i].priority === 'Higth') {
          priority.textContent = spisok[i].priority;
          priority.classList.add('priorityClassHigth');
        } else {
          if (spisok[i].priority === 'Medium') {
            priority.textContent = spisok[i].priority;
            priority.classList.add('priorityClassMedium');
          } else {
            priority.textContent = spisok[i].priority;
            priority.classList.add('priorityClassLow');
          }
        }

        li.appendChild(priority);

        const span = document.createElement('span');
        span.textContent = spisok[i].name;

        li.appendChild(span);

        const remove = document.createElement('button');
        remove.textContent = 'Удалить';
        remove.classList.add('list__button');

        li.appendChild(remove);
        ulClass.appendChild(li);

        remove.addEventListener('click', function(event) {

          const li = event.target.parentNode;
          li.remove()

        })
      }
    }

  }


  return {
    createTodoElement: createTodoElement,
    fillList: fillList
  }
}();
