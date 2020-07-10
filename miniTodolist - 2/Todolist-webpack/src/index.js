import TaskManager from "./modules/taskManager";
import Dom from "./modules/dom";
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
  this.getfromLocal(this.managers[0]);
  this.getLocalButtons();
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
      self.SetLocalButtons(listName);
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

  addtaskButton.addEventListener('click', function(event) {

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
      self.setToLocal(self.currentManager);
    }

  });
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
      this.setToLocal(this.currentManager);
    }
  }

  let counter = JSON.parse(localStorage.getItem('counter'));
  counter--;
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
    self.getfromLocal(self.currentManager);

  });
};
App.prototype.setToLocal = function(manager) {
  if (manager != undefined) {
    const setLocalList = [];
    for(let i = 0; i < manager.list.length; i++) {
      const localObj = {
        text: manager.list[i].name,
        priority: manager.list[i].priority
      }
      setLocalList.push(localObj);
    }

    localStorage.setItem(manager.name,JSON.stringify(setLocalList))
  }
};
App.prototype.getfromLocal = function(manager) {

  const getfromLocal = JSON.parse(localStorage.getItem(manager.name));
  const getLocalList = [];

  const fromLocalList = {
    name: manager.name,
    list: getLocalList
  }
  if (getfromLocal != null) {
    for(let i = 0; i < getfromLocal.length; i++) {
      const localTask = this.currentManager.addTask(getfromLocal[i].text,getfromLocal[i].priority,this);
      getLocalList.push(localTask)
    }
  }
    this.fillByManagerList(fromLocalList);
};
App.prototype.SetLocalButtons = function(button) {
  const buttonList = [];
  const localButton = JSON.parse(localStorage.getItem("buttonsList"));
  if (localButton != null) {
    for (let i = 0; i < localButton.length; i++) {
      buttonList.push(localButton[i]);
    }
  }
  buttonList.push(button);
  localStorage.setItem("buttonsList",JSON.stringify(buttonList));
};
App.prototype.getLocalButtons = function() {
  const localButtons = JSON.parse(localStorage.getItem("buttonsList"));
  if (localButtons != null) {
    for(let j = 0; j < localButtons.length; j++) {
      const newList = Dom.make('button', ['manager','list'], {
        textContent: localButtons[j]
      });
      newList.dataset.id = localButtons[j];

      Dom.appendTo(this.lists, newList);
      Dom.appendTo(this.lists, this.addListButton);

      const manager = new TaskManager(localButtons[j]);
      this.managers.push(manager);
      this.bindButtonEvent(newList);
    }
  }
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
