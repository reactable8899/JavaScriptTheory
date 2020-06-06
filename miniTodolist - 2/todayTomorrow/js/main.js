const App = function() {
  this.todayList = new TaskManager("Today List");
  this.tomorrowList = new TaskManager("Tomorrow List");
  this.may5 = new TaskManager("5 May");
  this.may10 = new TaskManager("10 May");
  this.may11 = new TaskManager("11 May");

  this.drawButton();
};

App.prototype.drawButton = function() {
  const button = document.querySelector('.ButtonAdd');
  this.ul = document.querySelector('.ulClass');

  let currentList = '';

  const self = this;
  const buttons = document.querySelectorAll('.manager');

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', function(event) {
      const clickedButton = event.target;
      const id = clickedButton.dataset.id;

      currentList = id;

      self.ul.innerHTML = '';

      if (id === 'today') {
        self.fillByManagerList(self.todayList);
      } else if (id === 'tomorrow') {
        self.fillByManagerList(self.tomorrowList);
      } else if (id === '5may') {
        self.fillByManagerList(self.may5);
      } else if (id === '10may') {
        self.fillByManagerList(self.may10);
      } else if (id === '11may') {
        self.fillByManagerList(self.may11);
      }

    });
  }

  button.addEventListener('click', function(event) {

    self.inputValue = document.querySelector('.input');

    const name = self.inputValue.value;

    let task;

    if (currentList === 'today') {
      task = self.todayList.addTask(name);
    } else if (currentList === 'tomorrow') {
      task = self.tomorrowList.addTask(name);
    } else if (currentList === '5may') {
      task = self.may5.addTask(name);
    } else if (currentList === '10may') {
      task = self.may10.addTask(name);
    } else if (currentList === '11may') {
      task = self.may11.addTask(name);
    }

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
