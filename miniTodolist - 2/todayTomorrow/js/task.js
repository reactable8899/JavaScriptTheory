const Task = function(name, priority) {
  this.name = name;
  this.priority = priority;
};

Task.prototype.getElement = function() {
  const li = document.createElement('li');

  li.dataset.priority = this.priority;
  li.textContent = this.name;

  return li;
};
