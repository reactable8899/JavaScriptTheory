const Task = function(name) {
  this.name = name;
}

const TaskManager = function(name) {
  this.name = name;
  this.tasks = [];
}

TaskManager.prototype.addTask(name, priority) {
  const task = new Task(name, priority);

  this.tasks.push(task);
}

const App = function() {
  this.managers = [];
}

App.prototype.addManager(name) {
  const manager = new TaskManager(name);

  this.managers.push(manager);
}

today = TaskManager("today");
tomorrow = TaskManager("tomorrow");

today.addTask("1");
today.addTask("2");
today.addTask("3");

tomorrow.addTask("1");
tomorrow.addTask("2");
tomorrow.addTask("4");

App.addManager(today);
App.addManager(tomorrow);
