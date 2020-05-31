const Task = function(name, priority) {
  this.name = name;
  this.priority = priority;

  this.dom = {
    li: null
  };
  // ссылка на родительский this
  const self = this;


  const li = document.createElement('li');
  li.classList.add('liClass')

  const span = document.createElement('span');
  span.textContent = this.name + ': priority - ' + this.priority;

  const likeButton = document.createElement('button');
  likeButton.textContent = ' + ';
  likeButton.classList.add('priorityButtons')

  const dislikeButton = document.createElement('button');
  dislikeButton.textContent = ' - ';
  dislikeButton.classList.add('priorityButtons')

  const deleteButton = document.createElement('button');
  deleteButton.textContent = ' x ';
  deleteButton.classList.add('deleteButton')

  likeButton.addEventListener('click', function(event) {
    self.priority++;
    self.changePriority(self.priority,this.list);
  }, false);

  dislikeButton.addEventListener('click', function(event) {
    self.priority--;
    self.changePriority(self.priority,self.list);
  }, false);
  deleteButton.addEventListener('click', function(event) {
    const li = event.target.parentNode;

    li.remove();
  });

  li.appendChild(span);
  li.appendChild(likeButton);
  li.appendChild(dislikeButton);
  li.appendChild(deleteButton);

  this.dom.li = li;
  this.dom.span = span;
};

// changes priority
Task.prototype.changePriority = function(priority,list) {
  this.dom.span.textContent = this.name + ': priority - ' + priority;

  App.prototype.sort(list);
};

// Returns element
Task.prototype.getElement = function() {
  return this.dom.li;
};
