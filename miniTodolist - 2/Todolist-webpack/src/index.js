import TaskManager from "./modules/taskManager";
import Dom from "./modules/dom";

const App = function() {

  this.managers = [];
  this.currentManager = null;

  this.list = {
    counter:0
  };

  this.prepare();
  this.listAdd();
  this.drawButton();
  this.showAddBlock();
};

App.prototype.showAddBlock = function() {
  let show = 0;
  const addBlockList = Dom.find(document,'.main__block_show');
  const buttonList = Dom.find(document,'.lists');

  const addBlockButton = Dom.find(document,'.addButton');
  addBlockButton.addEventListener('click', function() {

    if (show === 0) {
      addBlockList.style.display = 'block';
      buttonList.style.display = 'block';
      show++;
    } else {
      addBlockList.style.display = 'none';
      buttonList.style.display = 'none';
      show--;
    }

  });
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
  this.addListButton.dataset.toggle="modal";
  this.addListButton.dataset.target="#myModal";

  this.addBlockInput = Dom.make('input', ['input']);
  this.addBlockInput.placeholder = 'Add Task';

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

  Dom.appendTo(this.taskList,this.taskList.ul);

  mainMenu.prepend(this.addBlockSelect);
  mainMenu.prepend(this.addBlockInput);

  Dom.appendTo(this.lists,this.lists.TodayButton);
  Dom.appendTo(this.lists,this.addListButton);

  Dom.appendTo(mainBlock,this.lists);
  Dom.appendTo(mainBlock,this.taskList);
  Dom.appendTo(mainBlock,this.taskList.Counter);

};

App.prototype.listAdd = function() {

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
        textContent: listName;
      });
      newList.dataset.id = listName;

      Dom.appendTo(self.lists, newList);
      Dom.appendTo(self.lists, self.addListButton);

      const manager = new TaskManager(listName);
      self.managers.push(manager);
      self.bindButtonEvent(newList);
      newListInput.value = '';

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

    const name = self.inputValue.value;
    const task = self.currentManager.addTask(name,priority,self);

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
  Dom.appendTo(this.taskList.ul,task);
};

App.prototype.tasksCountInc = function() {
  this.list.counter++;
  this.taskList.Counter.textContent = `Tasks: ${this.list.counter}`;
};

App.prototype.tasksCountDec = function(event) {

  const listText = Dom.find(event,'.listText').textContent;

  for (let i = 0; i < this.currentManager.list.length; i++) {
    if (this.currentManager.list[i].name === listText) {
      this.currentManager.list.splice(i, 1);
    }
  }

  this.list.counter--;
  this.taskList.Counter.textContent = `Tasks: ${this.list.counter}`;
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

    self.fillByManagerList(self.currentManager);

  });
};

export default App;
