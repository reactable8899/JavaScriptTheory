const todo = function() {

  const button = document.getElementById('button');
  const ul = document.getElementById('ul')
  const input = document.getElementById('input');

  let domModule = null;

  function setDomModule(dom) {
     domModule = dom;
  }

  function init() {

    button.addEventListener('click', function() {
      if (input.value === '') {
        return
      }

      let text = input.value;

      domModule.createTodoElement(text);

      input.focus();
      input.value = '';
    })

  }

  return {
    init: init,
    setDomModule:setDomModule
  }
}();
