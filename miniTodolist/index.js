let button = document.getElementById('button');

button.addEventListener('click', function() {

  let input = document.getElementById('input').value;
  let li = document.createElement('li');

    li.innerHTML = input;
    ul.append(li);
    ul.appendChild(li).classList.add = 'difference';

    input = document.getElementById('input').value = '';

})
