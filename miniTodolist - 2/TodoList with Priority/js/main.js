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
    this.list.textInput.placeholder = 'Add Task';

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
/////////////////////////////////////////////////////////////////////////////////////////////////
// const App = function() {
//   // Middle
//   // this.todayList = new TaskManager("Today List");
//   // this.tomorrowList = new TaskManager("Tomorrow List");
//   // this.may5 = new TaskManager("5 May");
//   // this.may10 = new TaskManager("10 May");
//   // this.may11 = new TaskManager("11 May");
//
//   // Advanced
//   this.managers = [];
//
//   this.drawButton();
// };
//
// App.prototype.drawButton = function() {
//   const button = document.querySelector('.ButtonAdd');
//   this.ul = document.querySelector('.ulClass');
//
//   let currentList;
//   let currentManager;
//
//   const self = this;
//   const buttons = document.querySelectorAll('.manager');
//
//   for (let i = 0; i < buttons.length; i++) {
//     const button = buttons[i];
//
//     const manager = new TaskManager(button.dataset.id);
//     this.managers.push(manager);
//
//     button.addEventListener('click', function(event) {
//       const clickedButton = event.target;
//       const id = clickedButton.dataset.id;
//
//       self.ul.innerHTML = '';
//
//       // Advanced
//       for (let i = 0; i < self.managers.length; i++) {
//         if (self.managers[i].name === id) {
//           currentList = id;
//           currentManager = self.managers[i];
//         }
//       }
//
//       console.log('currentManager', currentManager);
//       self.fillByManagerList(currentManager);
//
//       // Middle
//       // if (id === 'today') {
//       //   self.fillByManagerList(self.todayList);
//       // } else if (id === 'tomorrow') {
//       //   self.fillByManagerList(self.tomorrowList);
//       // } else if (id === '5may') {
//       //   self.fillByManagerList(self.may5);
//       // } else if (id === '10may') {
//       //   self.fillByManagerList(self.may10);
//       // } else if (id === '11may') {
//       //   self.fillByManagerList(self.may11);
//       // }
//
//     });
//   }
//
//   button.addEventListener('click', function(event) {
//
//     self.inputValue = document.querySelector('.input');
//
//     const name = self.inputValue.value;
//
//     // Advanced
//     const task = currentManager.addTask(name);
//
//     // Middle
//     // if (currentList === 'today') {
//     //   task = self.todayList.addTask(name);
//     // } else if (currentList === 'tomorrow') {
//     //   task = self.tomorrowList.addTask(name);
//     // } else if (currentList === '5may') {
//     //   task = self.may5.addTask(name);
//     // } else if (currentList === '10may') {
//     //   task = self.may10.addTask(name);
//     // } else if (currentList === '11may') {
//     //   task = self.may11.addTask(name);
//     // }
//
//     self.AddToUl(task.getElement());
//     self.inputValue.value = '';
//     self.inputValue.focus();
//
//   });
// };
//
// App.prototype.fillByManagerList = function(manager) {
//   for ( let i = 0; i < manager.list.length; i++) {
//     this.AddToUl(manager.list[i].getElement())
//   }
// };
//
// App.prototype.AddToUl = function(task) {
//   this.ul.append(task);
// };
