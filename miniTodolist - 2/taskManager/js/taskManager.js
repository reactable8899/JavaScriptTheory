const TaskManager = function()
{
  this.list = [];
}

TaskManager.prototype.addTask = function() {
  const task = new Task();
  this.list.push(task);
  console.log(task)
}

const App = function()
{
   this.taskManagers = [];
}

App.prototype.addTaskManager()
{
  manager = new TaskManager();
  this.taskManager.push(manager);
}
