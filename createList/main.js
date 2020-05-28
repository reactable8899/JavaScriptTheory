const todo = function() {

  const tasks = [
    'task 1',
    'task 4',
    'task 3',
    'task 2',
  ]

  const ul = document.getElementById('ul');

  function start() {
    for( let i = 0; i < tasks.length; i++) {
      const li = document.createElement('li');
      li.textContent = tasks[i];
      ul.appendChild(li);
    }
  }


  return {
    start: start,
  }
}();
