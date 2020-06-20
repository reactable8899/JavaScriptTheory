<<<<<<< HEAD
import Task from './task';

=======
>>>>>>> master
const TaskManager = function(name) {
  this.name = name;
  this.list = [];
};

TaskManager.prototype.addTask = function(name,priority,app) {

  const task = new Task(name,priority,app);

  this.list.push(task);

  return task;
};
<<<<<<< HEAD

export default TaskManager;
=======
export default TaskManager
>>>>>>> master
