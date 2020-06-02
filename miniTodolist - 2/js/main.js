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
};
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

App.prototype.prepare = function() {

  const mainBlock = document.querySelector('.main__block');

  this.list.today = this.drawDiv();
  this.list.today.textContent = 'TODAY';
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

  this.list.buttonAdd = this.drawAddButton();

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
  mainBlock.append(this.list.today);
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

App.prototype.drawAddButton = function() {
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Add Task';

  const self = this;

  button.addEventListener('click' , function() {

    if (self.list.textInput.value === '') {
      return
    }

    self.list.taskCount.style.display = 'block';
    self.list.counter++;
    self.list.taskCount.textContent = `Tasks: ${self.list.counter}`;

    const text = self.list.textInput.value;
    const priority = document.querySelector('.priority').value;

    const task = self.addTask(text, priority);

    self.list.taskList.appendChild(task.getElement());
    self.spisok.push(task);


    self.list.textInput.value = '';
    self.list.textInput.focus();
  })

  return button;
};

App.prototype.addTask = function(text, priority) {

  const task = new Task(text, priority);

  return task;
};
