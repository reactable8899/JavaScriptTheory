const Dom = function() {
};

Dom.prototype.make = function(element, classList = [], properties = {}) {
  const el = document.createElement(element);

  for(let i = 0; i < classList.length; i++) {
    const className = classList[i];
    el.classList.add(className);
  }

  for(let prop in properties) {
    el[prop] = properties[prop];
  }

  return el;
};

Dom.prototype.find = function (element, selector) {
  return element.querySelector(selector);
};

Dom.prototype.findAll = function(element, selector) {
  // const getManager = localStorage.getItem('today')
  // const localManager = JSON.parse(getManager)
  // console.log(localManager)
  return element.querySelectorAll(selector);
};

Dom.prototype.appendTo = function(element, child) {

  element.append(child);
};

export default new Dom();
