const todo = function() {
  let button = document.getElementById('button');
  let ul = document.getElementById('ul')
  let input = document.getElementById('input');


  function init() {
    button.addEventListener('click', (event) => {
      const text = input.value;

      addTask(text);

      input.value = '';
    })
  }

  function addTask(text) {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.append(li);
    ul.appendChild(li).classList.add('difference');
  }

  function deleteTask() {
    //delete
  }

  return {
    init: init
  }
}();
