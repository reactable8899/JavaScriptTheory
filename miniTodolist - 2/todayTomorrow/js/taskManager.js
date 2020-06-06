const TaskManager = function(name) {
  this.name = name;
  this.list = [];
};

TaskManager.prototype.addTask = function(name) {
  const task = new Task(name, 1);

  this.list.push(task);

  return task;
};
