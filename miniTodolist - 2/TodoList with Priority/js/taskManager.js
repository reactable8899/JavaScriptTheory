const TaskManager = function(name,priority,app) {
  this.name = name;
  this.list = [];
};

TaskManager.prototype.addTask = function(name,priority,app) {
  const task = new Task(name,priority,app);

  this.list.push(task);

  return task;
};
