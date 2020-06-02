const todo = function() {
  let taskCount = 0;
  let listshow = 0;

  const addButton = document.querySelector('.addButton');
  const addList = document.querySelector('.addList');
  const button = document.getElementById('button');
  const ul = document.getElementById('ulClass')
  const input = document.getElementById('input');
  const tasks = document.querySelector('.taskCount');

  let domModule = null;

  function setDomModule(dom) {
     domModule = dom;
  }

  function init() {

    button.addEventListener('click', function() {
      const priority = document.querySelector('.priority').value;
      if (input.value === '') {
        return
      }

      taskCountInc();

      tasks.style.display = 'block';
      tasks.textContent = `Tasks: ${taskCount}`;

      let text = input.value;
      domModule.createTodoElement(text,priority);

      input.focus();
      input.value = '';
    })

    addButton.addEventListener('click', function() {
      if (listshow === 0) {
        addList.style.display = 'block';
        listshow++;
      } else {
        addList.style.display = 'none';
        listshow--;
      }
    })
  }
  function taskCountInc() {
    taskCount++;
  }
  function taskCountDec() {
    taskCount--;
    tasks.textContent = `Tasks: ${taskCount}`;
  }

  return {
    init: init,
    setDomModule:setDomModule,
    taskCountInc:taskCountInc,
    taskCountDec:taskCountDec
  }
}();
