const App = function(config) {

  this.config = config;
  this.spisok = [];

  this.list = {
    div: null,
    textInput: null,
    prioritySelect: null,
    addButton: null,
    counter: 0
  };

  this.prepare();
  this.showAdd();

};

App.prototype.prepare = function() {

  const mainBlock = document.querySelector('.main__block');

  this.list.todayButton = this.ButtonChange();
  this.list.todayButton.textContent = 'Today';
  this.list.todayButton.classList.add('todayButton');

  this.list.tomorrowButton = this.ButtonChange();
  this.list.tomorrowButton.textContent = 'Tomorrow';
  this.list.tomorrowButton.classList.add('tomorrowButton');

  this.list.today = this.drawDiv();
  this.list.today.classList.add('today');

  this.list.taskCount = this.drawSpan();
  this.list.taskCount.textContent = `Tasks: ${this.list.counter}`;
  this.list.taskCount.classList.add('taskCount');

  this.list.taskList = this.drawDiv();
  this.list.taskList.classList.add('taskList');

  this.list.textInput = this.drawInput();
  this.list.textInput.classList.add('input');

  this.list.select = this.drawSelect();
  this.list.select.classList.add('priority');

  this.list.optionHigth = this.drawOption("Higth");
  this.list.optionMedium = this.drawOption("Medium");
  this.list.optionLow = this.drawOption("Low");

  this.list.buttonAdd = this.drawButton();

  this.list.select.append(this.list.optionHigth);
  this.list.select.append(this.list.optionMedium);
  this.list.select.append(this.list.optionLow);

  this.holder = document.getElementById(this.config.holder);
  this.holder.append(this.list.textInput);
  this.holder.append(this.list.select);
  this.holder.append(this.list.buttonAdd);

  this.list.ul = this.drawUl();
  this.list.ul.classList.add('ulClass');

  this.list.taskList.append(this.list.ul);

  this.list.today.append(this.list.taskCount);
  this.list.today.append(this.list.todayButton);
  this.list.today.append(this.list.tomorrowButton);

  this.holder.append(this.list.today);
  this.holder.append(this.list.taskList);

};

App.prototype.ButtonChange = function() {
  return document.createElement('button')
}

App.prototype.showAdd = function() {

  let show = 0;
  addButton = document.querySelector('.addButton');
  const addList = document.querySelector('.main__block_show');

  addButton.addEventListener('click', function() {

    if (show === 0) {
      addList.style.display = 'block';
      show++;
    } else {
      addList.style.display = 'none';
      show--;
    }
  });
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
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Add Task';

  const self = this;

  button.addEventListener('click' , function() {

    if (self.list.textInput.value === '') {
      return
    }

    self.list.taskCount.style.display = 'block';

    const text = self.list.textInput.value;
    const priority = document.querySelector('.priority').value;
    self.tasksCountInc();
    const task = self.addTask(text, priority,self);

    self.list.taskList.appendChild(task.getElement());
    self.spisok.push(task);

    self.list.textInput.value = '';
    self.list.textInput.focus();
  })

  return button;
};

App.prototype.addTask = function(text, priority,app) {

  const task = new Task(text, priority,app);

  return task;
};


App.prototype.tasksCountInc = function() {

  this.list.counter++;
  this.list.taskCount.textContent = `Tasks: ${this.list.counter}`;
};

App.prototype.tasksCountDec = function() {

  this.list.counter--;
  this.list.taskCount.textContent = `Tasks: ${this.list.counter}`;

};
