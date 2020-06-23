(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TodoList"] = factory();
	else
		root["TodoList"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/bootstrap.min.css":
/*!*******************************!*\
  !*** ./css/bootstrap.min.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://TodoList/./css/bootstrap.min.css?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://TodoList/./css/style.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/bootstrap.min.css */ \"./css/bootstrap.min.css\");\n/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/taskManager */ \"./modules/taskManager.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ \"./modules/dom.js\");\n\r\n\r\n\r\n\r\n\r\nconst App = function() {\r\n\r\n  this.managers = [];\r\n  this.currentManager = null;\r\n\r\n  this.list = {\r\n    counter:0\r\n  };\r\n\r\n  this.prepare();\r\n  this.listAdd();\r\n  this.drawButton();\r\n  this.showAddBlock();\r\n};\r\n\r\nApp.prototype.showAddBlock = function() {\r\n  let show = 0;\r\n  const addBlockList = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.main__block_show');\r\n  const buttonList = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.lists');\r\n\r\n  const addBlockButton = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.addButton');\r\n  addBlockButton.addEventListener('click', function() {\r\n\r\n    if (show === 0) {\r\n      addBlockList.style.display = 'block';\r\n      buttonList.style.display = 'block';\r\n      show++;\r\n    } else {\r\n      addBlockList.style.display = 'none';\r\n      buttonList.style.display = 'none';\r\n      show--;\r\n    }\r\n\r\n  });\r\n};\r\n\r\nApp.prototype.prepare = function() {\r\n  const mainBlock = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.main__block');\r\n  const mainMenu = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.main__block_show');\r\n\r\n  this.lists = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('div',['lists']);\r\n  this.lists.span = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('span');\r\n\r\n  this.lists.TodayButton = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('button', ['manager','list'], {\r\n    textContent: 'Cегодня'\r\n  });\r\n  this.lists.TodayButton.dataset.id = 'today';\r\n\r\n  this.addListButton = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('button', ['listAdd'], {\r\n    textContent: '+'\r\n  });\r\n  this.addListButton.dataset.toggle=\"modal\";\r\n  this.addListButton.dataset.target=\"#myModal\";\r\n\r\n  this.addBlockInput = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('input', ['input']);\r\n  this.addBlockInput.placeholder = 'Add Task';\r\n\r\n  this.addBlockSelect = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('select', ['priority']);\r\n\r\n  this.addBlockOptionHigth = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('option', [], {\r\n    textContent: \"High\",\r\n  });\r\n\r\n  this.addBlockOptionMedium = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('option', [], {\r\n    textContent: \"Medium\"\r\n  });\r\n\r\n  this.addBlockOptionLow = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('option', [], {\r\n    textContent: \"Low\"\r\n  });\r\n\r\n  this.taskList = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('div', ['taskList']);\r\n  this.taskList.ul = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('ul', ['ulClass']);\r\n\r\n  this.taskList.Counter = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('span', ['taskCount'], {\r\n    textContent: `Tasks: ${this.list.counter}`\r\n  });\r\n\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(this.addBlockSelect,this.addBlockOptionHigth);\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(this.addBlockSelect,this.addBlockOptionMedium);\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(this.addBlockSelect,this.addBlockOptionLow);\r\n\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(this.taskList,this.taskList.ul);\r\n\r\n  mainMenu.prepend(this.addBlockSelect);\r\n  mainMenu.prepend(this.addBlockInput);\r\n\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(this.lists,this.lists.TodayButton);\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(this.lists,this.addListButton);\r\n\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(mainBlock,this.lists);\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(mainBlock,this.taskList);\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(mainBlock,this.taskList.Counter);\r\n\r\n};\r\n\r\nApp.prototype.listAdd = function() {\r\n\r\n  const self = this;\r\n  const listAdd = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.listAdd');\r\n\r\n  listAdd.addEventListener('click', function() {\r\n\r\n    const newListInput = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.newListInput');\r\n    const newListButton = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('button',['listAdd'], {\r\n      textContent: '+'\r\n    });\r\n\r\n    document.querySelector('.newListInput').addEventListener('keydown', function(e) {\r\n      if (e.keyCode === 13) {\r\n        createNewList();\r\n        newListInput.value = '';\r\n      }\r\n    });\r\n\r\n    const addList = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'#addList');\r\n\r\n    addList.addEventListener('click', createNewList);\r\n\r\n    function createNewList() {\r\n\r\n      const listName = newListInput.value;\r\n      if (listName === '') {\r\n        return\r\n      }\r\n\r\n      const newList = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].make('button', ['manager','list'], {\r\n        textContent: listName\r\n      });\r\n      newList.dataset.id = listName;\r\n\r\n      _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(self.lists, newList);\r\n      _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(self.lists, self.addListButton);\r\n\r\n      const manager = new _modules_taskManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"](listName);\r\n      self.managers.push(manager);\r\n      self.bindButtonEvent(newList);\r\n      newListInput.value = '';\r\n\r\n    }\r\n  })\r\n};\r\nApp.prototype.drawButton = function() {\r\n\r\n  const addtaskButton = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.button');\r\n  this.taskList.ul = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document,'.ulClass');\r\n\r\n  const self = this;\r\n  const buttons = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findAll(document,'.manager');\r\n\r\n  for (let i = 0; i < buttons.length; i++) {\r\n    const button = buttons[i];\r\n\r\n    const manager = new _modules_taskManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"](button.dataset.id);\r\n    this.managers.push(manager);\r\n    this.bindButtonEvent(button);\r\n  }\r\n\r\n  addtaskButton.addEventListener('click', function(event) {\r\n\r\n    const priority = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document, '.priority').value;\r\n\r\n    self.tasksCountInc();\r\n    self.taskList.Counter.style.display = 'block';\r\n\r\n    self.inputValue = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(document, '.input');\r\n\r\n    const name = self.inputValue.value;\r\n    const task = self.currentManager.addTask(name,priority,self);\r\n\r\n    self.AddToUl(task.getElement());\r\n    self.inputValue.value = '';\r\n    self.inputValue.focus();\r\n\r\n  });\r\n};\r\n\r\nApp.prototype.fillByManagerList = function(manager) {\r\n  for ( let i = 0; i < manager.list.length; i++) {\r\n    this.AddToUl(manager.list[i].getElement())\r\n  }\r\n};\r\n\r\nApp.prototype.AddToUl = function(task) {\r\n  _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendTo(this.taskList.ul,task);\r\n};\r\n\r\nApp.prototype.tasksCountInc = function() {\r\n  this.list.counter++;\r\n  this.taskList.Counter.textContent = `Tasks: ${this.list.counter}`;\r\n};\r\n\r\nApp.prototype.tasksCountDec = function(event) {\r\n\r\n  const listText = _modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(event,'.listText').textContent;\r\n\r\n  for (let i = 0; i < this.currentManager.list.length; i++) {\r\n    if (this.currentManager.list[i].name === listText) {\r\n      this.currentManager.list.splice(i, 1);\r\n    }\r\n  }\r\n\r\n  this.list.counter--;\r\n  this.taskList.Counter.textContent = `Tasks: ${this.list.counter}`;\r\n};\r\n\r\nApp.prototype.bindButtonEvent = function(button) {\r\n  const self = this;\r\n  button.addEventListener('click', function(event) {\r\n\r\n    const clickedButton = event.target;\r\n    const id = clickedButton.dataset.id;\r\n    self.taskList.ul.innerHTML = '';\r\n\r\n    for (let i = 0; i < self.managers.length; i++) {\r\n      if (self.managers[i].name === id) {\r\n        self.currentList = id;\r\n        self.currentManager = self.managers[i];\r\n      }\r\n    }\r\n\r\n    self.fillByManagerList(self.currentManager);\r\n\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack://TodoList/./index.js?");

/***/ }),

/***/ "./modules/dom.js":
/*!************************!*\
  !*** ./modules/dom.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Dom = function() {\r\n};\r\n\r\nDom.prototype.make = function(element, classList = [], properties = {}) {\r\n  const el = document.createElement(element);\r\n\r\n  for(let i = 0; i < classList.length; i++) {\r\n    const className = classList[i];\r\n    el.classList.add(className);\r\n  }\r\n\r\n  for(let prop in properties) {\r\n    el[prop] = properties[prop];\r\n  }\r\n\r\n  return el;\r\n};\r\n\r\nDom.prototype.find = function (element, selector) {\r\n  return element.querySelector(selector);\r\n};\r\n\r\nDom.prototype.findAll = function(element, selector) {\r\n  return element.querySelectorAll(selector);\r\n};\r\n\r\nDom.prototype.appendTo = function(element, child) {\r\n  element.append(child);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Dom());\r\n\n\n//# sourceURL=webpack://TodoList/./modules/dom.js?");

/***/ }),

/***/ "./modules/task.js":
/*!*************************!*\
  !*** ./modules/task.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./modules/dom.js\");\n\r\nconst Task = function(name, priority,app) {\r\n\r\n  this.name = name;\r\n  this.priority = priority;\r\n  this.app = app;\r\n\r\n  this.dom = {\r\n    div: null\r\n  };\r\n  let n = 0;\r\n  const self = this;\r\n\r\n  const div = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('div',['list__task']);\r\n\r\n  const span = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('span');\r\n  span.classList.add = Task.prototype.getPriority(priority,span);\r\n\r\n  const spanText = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('span', ['listText'], {\r\n    textContent: name\r\n  });\r\n  const buttonDelete = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('button', ['list__button'], {\r\n    textContent: '...'\r\n  });\r\n  const deleteSpan = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('button', ['deleteSpan'], {\r\n    textContent: 'Удалить'\r\n  });\r\n\r\n  buttonDelete.addEventListener('click', function(event) {\r\n    if (n === 0) {\r\n      div.appendChild(deleteSpan);\r\n      deleteSpan.classList.add('changeDisplayBlock');\r\n      deleteSpan.classList.remove('changeDisplayNone');\r\n      n++;\r\n    } else {\r\n      deleteSpan.classList.add('changeDisplayNone');\r\n      deleteSpan.classList.remove('changeDisplayBlock');\r\n      n--;\r\n    }\r\n  });\r\n\r\n  deleteSpan.addEventListener('click', function() {\r\n    const div = event.target.parentNode;\r\n\r\n    app.tasksCountDec(event.target.parentNode);\r\n    div.remove();\r\n  })\r\n\r\n  div.appendChild(span);\r\n  div.appendChild(spanText);\r\n  div.appendChild(buttonDelete);\r\n\r\n  this.dom.div = div;\r\n};\r\n\r\nTask.prototype.getElement = function() {\r\n  return this.dom.div;\r\n};\r\n\r\nTask.prototype.getPriority = function(prioritys,span) {\r\n  if (prioritys === 'High') {\r\n    span.textContent = prioritys;\r\n    span.classList.add('priorityClassHigth');\r\n  } else {\r\n    if (prioritys === 'Medium') {\r\n      span.textContent = prioritys;\r\n      span.classList.add('priorityClassMedium');\r\n    } else {\r\n      span.textContent = prioritys;\r\n      span.classList.add('priorityClassLow');\r\n    }\r\n  }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\r\n\n\n//# sourceURL=webpack://TodoList/./modules/task.js?");

/***/ }),

/***/ "./modules/taskManager.js":
/*!********************************!*\
  !*** ./modules/taskManager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./modules/task.js\");\n\r\nconst TaskManager = function(name) {\r\n  this.name = name;\r\n  this.list = [];\r\n};\r\n\r\nTaskManager.prototype.addTask = function(name,priority,app) {\r\n\r\n  const task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name,priority,app);\r\n\r\n  this.list.push(task);\r\n\r\n  return task;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskManager);\r\n\n\n//# sourceURL=webpack://TodoList/./modules/taskManager.js?");

/***/ })

/******/ })["default"];
});