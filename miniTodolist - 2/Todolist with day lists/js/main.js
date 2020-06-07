const App = function() {

  this.managers = [];
  this.list = {
    counter:0
  }
  this.prepare();
  this.drawButton();
  this.showAdd();

};
App.prototype.showAdd = function() {

  let show = 0;
  addButton = document.querySelector('.addButton');
  const addList = document.querySelector('.main__block_show');
  const todaybutton = document.querySelector('[data-id="today"]');
  const tomorrowbutton = document.querySelector('[data-id="tomorrow"]');

  addButton.addEventListener('click', function() {

    if (show === 0) {
      addList.style.display = 'block';
      todaybutton.style.display = 'inline';
      tomorrowbutton.style.display = 'inline';
      show++;
    } else {
      addList.style.display = 'none';
      todaybutton.style.display = 'none';
      tomorrowbutton.style.display = 'none';
      show--;
    }
  });
};
App.prototype.prepare = function() {
  const mainBlock = document.querySelector('.main__block');
  const mainMenu = document.querySelector('.main__block_show');

  this.list.lists = this.drawDiv();
  this.list.lists.classList.add('lists');

  this.list.lists.span = this.drawSpan();

  this.list.listButtonToday = this.drowListButton('today');
  this.list.listButtonToday.textContent = 'today';
  this.list.listButtonToday.classList.add('manager');
  this.list.listButtonToday.classList.add('list');
  this.list.listButtonToday.dataset.id = 'today';

  this.list.listButtonTomorrow = this.drowListButton('tomorrow');
  this.list.listButtonTomorrow.textContent = 'tomorrow';
  this.list.listButtonTomorrow.classList.add('manager');
  this.list.listButtonTomorrow.classList.add('list');
  this.list.listButtonTomorrow.dataset.id = 'tomorrow';

  this.list.input = this.drawInput();
  this.list.input.classList.add('input');
  this.list.input.placeholder = 'Add Task';

  this.list.select = this.drawSelect();
  this.list.select.classList.add('priority');

  this.list.optionHigth = this.drawOption("Higth");
  this.list.optionMedium = this.drawOption("Medium");
  this.list.optionLow = this.drawOption("Low");

  this.list.taskList = this.drawDiv();
  this.list.taskList.classList.add('taskList');

  this.list.ul = this.drawUl();
  this.list.ul.classList.add('ulClass');

  this.list.taskCount = this.drawSpan();
  this.list.taskCount.textContent = `Tasks: ${this.list.counter}`;
  this.list.taskCount.classList.add('taskCount');

  this.list.select.append(this.list.optionHigth);
  this.list.select.append(this.list.optionMedium);
  this.list.select.append(this.list.optionLow);

  this.list.taskList.append(this.list.ul);
  mainMenu.prepend(this.list.select);
  mainMenu.prepend(this.list.input);

  this.list.lists.append(this.list.listButtonToday);
  this.list.lists.append(this.list.listButtonTomorrow);

  mainBlock.append(this.list.lists);
  mainBlock.append(this.list.taskList);
  mainBlock.append(this.list.taskCount);

};

App.prototype.drawSpan = function() {
   return document.createElement('span');
};

App.prototype.drawDiv = function() {
   return document.createElement('div');
};

App.prototype.drawInput = function() {
   return document.createElement('input');
};

App.prototype.drawSelect = function() {
   return document.createElement('select');
};

App.prototype.drawOption = function(text) {
   const option = document.createElement('option');
   option.textContent = text;
   return option;
};

App.prototype.drawUl = function() {
   return document.createElement('ul');
};
App.prototype.drowListButton = function(name) {
  const listButton = document.createElement('button');

  return listButton
}
App.prototype.drawButton = function() {
  const button = document.querySelector('.button');
  this.ul = document.querySelector('.ulClass');

  let currentList;
  let currentManager;

  const self = this;
  const buttons = document.querySelectorAll('.manager');

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    const manager = new TaskManager(button.dataset.id);
    this.managers.push(manager);

    button.addEventListener('click', function(event) {

      const clickedButton = event.target;
      const id = clickedButton.dataset.id;

      self.ul.innerHTML = '';

      // Advanced
      for (let i = 0; i < self.managers.length; i++) {
        if (self.managers[i].name === id) {
          currentList = id;
          currentManager = self.managers[i];
        }
      }

      console.log('currentManager', currentManager);
      self.fillByManagerList(currentManager);

    });
  }

  button.addEventListener('click', function(event) {
    const priority = document.querySelector('.priority').value;
    self.tasksCountInc();
    self.list.taskCount.style.display = 'block';
    self.inputValue = document.querySelector('.input');

    const name = self.inputValue.value;

    const task = currentManager.addTask(name,priority,self);

    self.AddToUl(task.getElement());
    self.inputValue.value = '';
    self.inputValue.focus();

  });
};

App.prototype.fillByManagerList = function(manager) {
  for ( let i = 0; i < manager.list.length; i++) {
    this.AddToUl(manager.list[i].getElement())
  }
};

App.prototype.AddToUl = function(task) {
  this.ul.append(task);
};

App.prototype.tasksCountInc = function() {

  this.list.counter++;
  this.list.taskCount.textContent = `Tasks: ${this.list.counter}`;
};

App.prototype.tasksCountDec = function() {

  this.list.counter--;
  this.list.taskCount.textContent = `Tasks: ${this.list.counter}`;

};
