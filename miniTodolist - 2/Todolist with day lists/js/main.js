const App = function() {
  // Middle
  // this.todayList = new TaskManager("Today List");
  // this.tomorrowList = new TaskManager("Tomorrow List");
  // this.may5 = new TaskManager("5 May");
  // this.may10 = new TaskManager("10 May");
  // this.may11 = new TaskManager("11 May");

  // Advanced
  this.managers = [];
  this.list = {

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
      todaybutton.style.display = 'block';
      tomorrowbutton.style.display = 'block';
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

  this.list.select.append(this.list.optionHigth);
  this.list.select.append(this.list.optionMedium);
  this.list.select.append(this.list.optionLow);

  this.list.taskList.append(this.list.ul);
  mainMenu.prepend(this.list.select);
  mainMenu.prepend(this.list.input);
  mainBlock.append(this.list.taskList);
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

    self.inputValue = document.querySelector('.input');

    const name = self.inputValue.value;

    // Advanced
    const task = currentManager.addTask(name,priority,App);

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
