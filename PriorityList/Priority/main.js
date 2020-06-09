const priorityList = function() {
  let number = 1;
  let temp = 0;
  const list = [];

  const button = document.getElementById('button');
  const input = document.getElementById('input');
  const taskPriority = document.getElementById('priority');
  const ul = document.getElementById('ul');

  //taskPriority = parseInt(taskPriority);

  function addTask() {
    button.addEventListener('click', function() {

      let text = input.value;

      if (input.value === '' || taskPriority.value === '') {
        return
      }

      newTask(text);
      prov();
      input.value = '';
      priority.value = '';
      input.focus();

    })
  }

  function newTask() {

    const task = {
      id: number++,
      text: input.value,
      taskPriority: taskPriority.value

    }

    const li = document.createElement('li');
    li.textContent = task.text;
    li.classList.add('list__task');

    task['element'] = li;

    const span = document.createElement('span');
    span.textContent = ` (Приоритет ${task.taskPriority})`;
    span.classList.add('list__span');

    const buttonLike = document.createElement('button');
    buttonLike.textContent = ' + ';

    const buttonDislike = document.createElement('button');
    buttonDislike.textContent = ' - ';

    buttonLike.addEventListener('click', function() {
      task.taskPriority++;
      span.textContent = ` (Приоритет ${task.taskPriority})`;
      prov();
    })

    buttonDislike.addEventListener('click', function() {
      task.taskPriority--;
      span.textContent = ` (Приоритет ${task.taskPriority})`;
      prov();
    })

    li.appendChild(span)
    li.appendChild(buttonLike);
    li.appendChild(buttonDislike);
    ul.appendChild(li)

    list.push(task);
    console.log(list)

  }
  let sp1, sp2;

  function prov() {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[i].taskPriority < list[j].taskPriority) {
          let sp1 = i;
          let sp2 = j;
          let temp = list[j];
          list[j] = list[i];
          list[i] = temp;
          ul.insertBefore(list[sp2]['element'], list[sp1]['element'])
        }
      }
    }
    console.log(list)
  }

  return {
    addTask: addTask
  }
}()



//Вариант 2

// const priorityList = function(obj) {
//   let counter = 0;
//   const list = [];
//
//   const button = document.getElementById('button');
//   const input = document.getElementById('input');
//   const taskPriority = document.getElementById('priority');
//   const ul = document.getElementById('ul');
//
//   /**
//    * @public
//    *
//    * Обработчик события click на кнопку
//    * При срабатывании вызывает функцию addTask
//    */
//   obj.addTask = function() {
//     button.addEventListener('click', addTask, false);
//   }
//
//   /**
//    * @public
//    *
//    * Возвращает список задач
//    */
//   obj.getList = function() {
//     return list;
//   }
//
//   /**
//    * @private
//    *
//    * Функция замкнута и находится в скоупе модуля
//    * Получает значение инпута, создает новую задачу и добавляет в список
//    */
//   function addTask() {
//     let text = input.value;
//     let priority = parseInt(taskPriority.value, 10);
//
//     if (!validate(text, priority)) {
//       return;
//     }
//
//     const taskElements = createTask(text, priority);
//     const task = {
//       id: ++counter,
//       text: text,
//       priority: priority,
//       elements: taskElements
//     }
//
//     bindEvents(task);
//
//     ul.appendChild(taskElements.li);
//     list.push(task);
//
//     sort();
//
//     input.value = '';
//     priority.value = '';
//     input.focus();
//   }
//
//   /**
//    * @private
//    *
//    * Функция создает li и кнопки like, dislike.
//    * Возвращает объект с этими элементами
//    */
//   function createTask(text, priority) {
//     const li = document.createElement('li');
//     li.textContent = text;
//     li.dataset.priority = priority;
//     li.classList.add('list__task');
//
//     const span = document.createElement('span');
//     span.textContent = ` (Приоритет ${priority})`;
//     span.classList.add('list__span');
//
//     const buttonLike = document.createElement('button');
//     buttonLike.textContent = ' + ';
//
//     const buttonDislike = document.createElement('button');
//     buttonDislike.textContent = ' - ';
//
//     li.appendChild(span);
//     li.appendChild(buttonLike);
//     li.appendChild(buttonDislike);
//
//     return {
//       li: li,
//       buttonLike: buttonLike,
//       buttonDislike: buttonDislike,
//       span: span
//     }
//   }
//
//   function bindEvents(task) {
//     console.log(task)
//     const elements = task.elements;
//
//     elements.buttonLike.addEventListener('click', function() {
//       task.priority++;
//       elements.span.textContent = ` (Приоритет ${task.priority})`;
//       sort();
//     })
//
//     elements.buttonDislike.addEventListener('click', function() {
//       task.priority--;
//       elements.span.textContent = ` (Приоритет ${task.priority})`;
//       sort();
//     })
//   }
//
//   /**
//    * @private
//    *
//    * Проверяет валидность полей
//    * Если поле не валидно, то возвращается false
//    */
//   function validate(text, priority) {
//     if (text === '') {
//       return false;
//     }
//
//     if (priority < 0) {
//       return false;
//     }
//
//     return true;
//   }
//
//   function sort() {
//     for (let i = 0; i < list.length; i++) {
//       for (let j = 0; j < list.length; j++) {
//         if (list[i].priority < list[j].priority) {
//           let sp1 = i;
//           let sp2 = j;
//
//           let temp = list[j];
//           list[j] = list[i];
//           list[i] = temp;
//
//           ul.insertBefore(list[sp2]['elements'].li, list[sp1]['elements'].li);
//         }
//       }
//     }
//   }
//
//   return obj;
// }({})
