const todo = function() {
  let button = document.getElementById('button');
  let ul = document.getElementById('ul')
  let input = document.getElementById('input');

  function init() {
    button.addEventListener('click', function() {
      input = document.getElementById('input').value;
      let li = document.createElement('li');

        li.innerHTML = input;
        ul.append(li);
        ul.appendChild(li).classList.add('difference');

        input.value = '';
    });

  }

  return {
    init: init
  }
}();
