const App = function(config) {
  this.config = config;
  this.list = [];


  this.ui = {
    ul: null,
    textInput: null,
    priorityInput: null,
    addButton: null
  };

  this.prepare();
};

// Prepares module
App.prototype.prepare = function() {
  this.ui.ul = this.drawUl();
  
  this.ui.textInput = this.drawInput('text');
  this.ui.textInput.classList.add('textInput');

  this.ui.priorityInput = this.drawInput('number');
  this.ui.priorityInput.classList.add('priorityInput');

  this.ui.addButton = this.drawAddButton();
  this.ui.addButton.classList.add('ButtonClass');

  this.holder = document.getElementById(this.config.holder);
  this.holder.append(this.ui.textInput);
  this.holder.append(this.ui.priorityInput);
  this.holder.append(this.ui.addButton);
  this.holder.appendChild(this.ui.ul);
};

// Draws UL
App.prototype.drawUl = function() {
   return document.createElement('ul');
};

// Draws Input
App.prototype.drawInput = function(type) {
  const input = document.createElement('input');
  input.type = type;

  return input;
};

// Draws button
App.prototype.drawAddButton = function() {
  const button = document.createElement('button');
  button.textContent = 'Add task';

  // Ссылка на this родителя
  const self = this;
  button.addEventListener('click', function() {

    if (self.ui.textInput.value === '' || self.ui.priorityInput.value === '') {
      return
    }

    const text = self.ui.textInput.value;
    const priority = self.ui.priorityInput.value;

    const task = self.addTask(text, priority);

    self.ui.ul.appendChild(task.getElement());

    self.list.push(task);
    console.log(self.list)

    // чистим поля
    self.ui.textInput.value = '';
    self.ui.priorityInput.value = '';
    self.ui.textInput.focus();

  }, false);

  return button;
};

// Adds task
App.prototype.addTask = function(text, priority) {
  const task = new Task(text, priority);

  return task;
};

// Sort
App.prototype.sort = function() {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < self.list.length; j++) {
      if (self.list[i].priority < self.list[j].priority) {
        let sp1 = i;
        let sp2 = j;
        let temp = self.list[j];
        self.list[j] = self.list[i];
        this.ui[i] = temp;
        ul.insertBefore(this.ui[sp2], this.ui[sp1])
      }
    }
  }
};
