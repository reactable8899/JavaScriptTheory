import TaskManager from "./modules/taskManager";
import Dom from "./modules/dom";
import Storage from "./modules/localStorage";
require('./css/style.css');
const App = function() {

  this.managers = [];
  this.currentManager = null;

  this.list = {
    counter: 0
  };

  this.prepare();
  this.addNewList();
  this.drawButton();
  this.setFirstList();
  this.getFromStorage(this.managers[0]);
  this.getStorageButtons();
};

App.prototype.prepare = function() {
  const mainBlock = Dom.find(document,'.main__block');
  const mainMenu = Dom.find(document,'.main__block_show');

  this.lists = Dom.make('div',['lists']);
  this.lists.span = Dom.make('span');

  this.lists.TodayButton = Dom.make('button', ['manager','list'], {
    textContent: 'Cегодня'
  });
  this.lists.TodayButton.dataset.id = 'today';

  this.addListButton = Dom.make('button', ['listAdd'], {
    textContent: '+'
  });
  this.addTasksButton = Dom.make('button', ['button'], {
    textContent: 'Add Task'
  });

  this.addListButton.dataset.toggle="modal";
  this.addListButton.dataset.target="#myModal";

  this.addBlockInput = Dom.make('input', ['input']);
  this.addBlockInput.placeholder = 'Add Task...';

  this.addBlockSelect = Dom.make('select', ['priority']);

  this.addBlockOptionHigth = Dom.make('option', [], {
    textContent: "High",
  });

  this.addBlockOptionMedium = Dom.make('option', [], {
    textContent: "Medium"
  });

  this.addBlockOptionLow = Dom.make('option', [], {
    textContent: "Low"
  });

  this.taskList = Dom.make('div', ['taskList']);
  this.taskList.ul = Dom.make('ul', ['ulClass']);

  this.taskList.Counter = Dom.make('span', ['taskCount'], {
    textContent: `Tasks: ${this.list.counter}`
  });

  Dom.appendTo(this.addBlockSelect,this.addBlockOptionHigth);
  Dom.appendTo(this.addBlockSelect,this.addBlockOptionMedium);
  Dom.appendTo(this.addBlockSelect,this.addBlockOptionLow);

  Dom.appendTo(this.taskList,this.addBlockInput);
  Dom.appendTo(this.taskList,this.addBlockSelect);
  Dom.appendTo(this.taskList,this.addTasksButton);

  Dom.appendTo(this.taskList,this.taskList.ul);

  Dom.appendTo(this.lists,this.lists.TodayButton);
  Dom.appendTo(this.lists,this.addListButton);

  Dom.appendTo(mainBlock,this.lists);
  Dom.appendTo(mainBlock,this.taskList);
  Dom.appendTo(mainBlock,this.taskList.Counter);

  let counter = JSON.parse(localStorage.getItem('counter'));
  if (counter != null) {
    this.taskList.Counter.style.display = 'block';
    this.taskList.Counter.textContent = `Tasks: ${counter}`;
  }

};

App.prototype.addNewList = function() {

  const self = this;
  const listAdd = Dom.find(document,'.listAdd');

  listAdd.addEventListener('click', function() {

    const newListInput = Dom.find(document,'.newListInput');
    const newListButton = Dom.make('button',['listAdd'], {
      textContent: '+'
    });

    document.querySelector('.newListInput').addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        createNewList();
        newListInput.value = '';
      }
    });

    const addList = Dom.find(document,'#addList');

    addList.addEventListener('click', createNewList);

    function createNewList() {

      const listName = newListInput.value;
      if (listName === '') {
        return
      }

      const newList = Dom.make('button', ['manager','list'], {
        textContent: listName
      });
      newList.dataset.id = listName;

      Dom.appendTo(self.lists, newList);
      Dom.appendTo(self.lists, self.addListButton);

      const manager = new TaskManager(listName);
      self.managers.push(manager);
      self.bindButtonEvent(newList);
      newListInput.value = '';
      self.SetStorageButtons(listName);
    }
  })
};

App.prototype.drawButton = function() {

  const addtaskButton = Dom.find(document,'.button');
  this.taskList.ul = Dom.find(document,'.ulClass');

  const self = this;
  const buttons = Dom.findAll(document,'.manager');

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const manager = new TaskManager(button.dataset.id);
    this.managers.push(manager);
    this.bindButtonEvent(button);
  }

  document.querySelector('.input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      createNewtask();
    }
  });

  addtaskButton.addEventListener('click', createNewtask);

  function createNewtask() {
    const priority = Dom.find(document, '.priority').value;

    self.tasksCountInc();
    self.taskList.Counter.style.display = 'block';

    self.inputValue = Dom.find(document, '.input');

    if (self.inputValue.value != '') {

      const name = self.inputValue.value;
      const task = self.currentManager.addTask(name,priority,self);

      self.AddToUl(task.getElement());
      self.inputValue.value = '';
      self.inputValue.focus();
      Storage.setToStorage(self.currentManager);
    }
  }

};

App.prototype.tasksCountInc = function() {
  let counter = JSON.parse(localStorage.getItem('counter'));
  counter++;
  localStorage.setItem('counter',JSON.stringify(counter));
  this.taskList.Counter.textContent = `Tasks: ${counter}`;
};

App.prototype.tasksCountDec = function(event) {

  const listText = Dom.find(event,'.listText').textContent;

  for (let i = 0; i < this.currentManager.list.length; i++) {
    if (this.currentManager.list[i].name === listText) {
      this.currentManager.list.splice(i, 1);
      Storage.setToStorage(this.currentManager);
    }
  }

  let counter = JSON.parse(localStorage.getItem('counter'));
  if (counter > 0) {
    counter--;
  }
  localStorage.setItem('counter',JSON.stringify(counter));
  this.taskList.Counter.textContent = `Tasks: ${counter}`;
};

App.prototype.setFirstList = function() {
  this.currentManager = this.managers[0];
};
App.prototype.bindButtonEvent = function(button) {
  const self = this;
  button.addEventListener('click', function(event) {

    const clickedButton = event.target;
    const id = clickedButton.dataset.id;
    self.taskList.ul.innerHTML = '';

    for (let i = 0; i < self.managers.length; i++) {
      if (self.managers[i].name === id) {
        self.currentList = id;
        self.currentManager = self.managers[i];

      }
    }
    self.getFromStorage(self.currentManager);

  });
};
App.prototype.setToStorage = function(manager) {
  Storage.setToStorage(manager);
};
App.prototype.getFromStorage = function(manager) {
  Storage.getFromStorage(manager,this)
};
App.prototype.SetStorageButtons = function(button) {
  Storage.SetStorageButtons(button);
};
App.prototype.getStorageButtons = function() {
  Storage.getStorageButtons(this)
};
App.prototype.fillByManagerList = function(manager) {
    for ( let i = 0; i < manager.list.length; i++) {
      this.AddToUl(manager.list[i].getElement())
    }
};
App.prototype.AddToUl = function(task) {
  Dom.appendTo(this.taskList.ul,task);
};
export default App
