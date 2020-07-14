import Task from './task';

// const TaskManager = function(name) {
//   this.name = name;
//   this.list = [];
// };
//
// TaskManager.prototype.addTask = function(name,priority,app) {
//
//   const task = new Task(name,priority,app);
//
//   this.list.push(task);
//
//   return task;
// };

class TaskManager {
  constructor(name) {
    this.name = name;
    this.list = [];
  }
  addTask(name,priority,app) {

    const task = new Task(name,priority,app);

    this.list.push(task);
    return task;
  };

};
export default TaskManager
