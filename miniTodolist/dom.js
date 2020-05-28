const dom = function() {

  function createTodoElement(text) {

    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('list__task');
    ul.appendChild(li);

    const remove = document.createElement('button');
    remove.textContent = 'Удалить';
    remove.classList.add('list__button');
    li.appendChild(remove);

    remove.addEventListener('click', function(event) {
      const li = event.target.parentNode;

      li.remove();
    })

  }

  return {
    createTodoElement: createTodoElement
  }
}();
