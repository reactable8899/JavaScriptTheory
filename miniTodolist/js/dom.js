const dom = function() {

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

    ulClass.appendChild(li);

    remove.addEventListener('click', function(event) {
      const li = event.target.parentNode;
      todo.taskCountDec();
      li.remove();

    })

  }

  return {
    createTodoElement: createTodoElement,
  }
}();
