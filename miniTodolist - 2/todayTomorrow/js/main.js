const App = function() {

  this.todayList = [];
  this.tomorrowList = [];


  this.drowButton();
}

App.prototype.prepare = function() {
  this.div = drowDiv();

}

App.prototype.drowDiv = function() {
  return document.createElement('div');
}

App.prototype.drowButton = function() {
  const button = document.querySelector('.ButtonAdd');
  this.ul = document.querySelector('.ulClass');
  const todayButton = document.querySelector('[data-id="today"]');
  const tomorrowButton = document.querySelector('[data-id="tomorrow"]');

  const self = this;
  let clicked = 1;
  button.addEventListener('click', function(event) {

    self.inputValue = document.querySelector('.input');

    name = self.inputValue.value;
    const task = self.createTask(name);
    console.log(task)
    if (clicked === 1) {
      self.todayList.push(task)
      self.AddToUl(task)
    } else {
      self.AddToUl(task)
      self.tomorrowList.push(task)
    }

    self.inputValue.value = '';
    self.inputValue.focus();

  })

  todayButton.addEventListener('click', function() {
     clicked = 1;
    while (self.ul.firstChild) {
      self.ul.firstChild.remove();
    }
    for ( let i = 0; i < self.todayList.length; i++) {
      self.AddToUl(self.todayList[i])
    }

  })
  tomorrowButton.addEventListener('click', function() {
    clicked = 0;
    while (self.ul.firstChild) {
      self.ul.firstChild.remove();
    }
    for ( let i = 0; i < self.tomorrowList.length; i++) {
      self.AddToUl(self.tomorrowList[i])
    }
  })

}

App.prototype.createTask = function(name) {
  const li = document.createElement('li');
  li.textContent = name;

  return li
}

App.prototype.AddToUl = function(list) {
  this.ul.append(list)
}
