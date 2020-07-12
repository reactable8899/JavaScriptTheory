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

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://TodoList/./css/style.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskManager */ \"./modules/taskManager.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./modules/dom.js\");\n\n\n\n__webpack_require__(/*! ./css/style.css */ \"./css/style.css\");\n\nvar App = function App() {\n  this.managers = [];\n  this.currentManager = null;\n  this.list = {\n    counter: 0\n  };\n  this.prepare();\n  this.addNewList();\n  this.drawButton();\n  this.setFirstList();\n  this.getFromStorage(this.managers[0]);\n  this.getStorageButtons();\n};\n\nApp.prototype.prepare = function () {\n  var mainBlock = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.main__block');\n  var mainMenu = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.main__block_show');\n  this.lists = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('div', ['lists']);\n  this.lists.span = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('span');\n  this.lists.TodayButton = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('button', ['manager', 'list'], {\n    textContent: 'Cегодня'\n  });\n  this.lists.TodayButton.dataset.id = 'today';\n  this.addListButton = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('button', ['listAdd'], {\n    textContent: '+'\n  });\n  this.addTasksButton = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('button', ['button'], {\n    textContent: 'Add Task'\n  });\n  this.addListButton.dataset.toggle = \"modal\";\n  this.addListButton.dataset.target = \"#myModal\";\n  this.addBlockInput = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('input', ['input']);\n  this.addBlockInput.placeholder = 'Add Task...';\n  this.addBlockSelect = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('select', ['priority']);\n  this.addBlockOptionHigth = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('option', [], {\n    textContent: \"High\"\n  });\n  this.addBlockOptionMedium = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('option', [], {\n    textContent: \"Medium\"\n  });\n  this.addBlockOptionLow = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('option', [], {\n    textContent: \"Low\"\n  });\n  this.taskList = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('div', ['taskList']);\n  this.taskList.ul = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('ul', ['ulClass']);\n  this.taskList.Counter = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('span', ['taskCount'], {\n    textContent: \"Tasks: \".concat(this.list.counter)\n  });\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.addBlockSelect, this.addBlockOptionHigth);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.addBlockSelect, this.addBlockOptionMedium);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.addBlockSelect, this.addBlockOptionLow);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.taskList, this.addBlockInput);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.taskList, this.addBlockSelect);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.taskList, this.addTasksButton);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.taskList, this.taskList.ul);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.lists, this.lists.TodayButton);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.lists, this.addListButton);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(mainBlock, this.lists);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(mainBlock, this.taskList);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(mainBlock, this.taskList.Counter);\n  var counter = JSON.parse(localStorage.getItem('counter'));\n\n  if (counter != null) {\n    this.taskList.Counter.style.display = 'block';\n    this.taskList.Counter.textContent = \"Tasks: \".concat(counter);\n  }\n};\n\nApp.prototype.addNewList = function () {\n  var self = this;\n  var listAdd = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.listAdd');\n  listAdd.addEventListener('click', function () {\n    var newListInput = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.newListInput');\n    var newListButton = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('button', ['listAdd'], {\n      textContent: '+'\n    });\n    document.querySelector('.newListInput').addEventListener('keydown', function (e) {\n      if (e.keyCode === 13) {\n        createNewList();\n        newListInput.value = '';\n      }\n    });\n    var addList = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '#addList');\n    addList.addEventListener('click', createNewList);\n\n    function createNewList() {\n      var listName = newListInput.value;\n\n      if (listName === '') {\n        return;\n      }\n\n      var newList = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('button', ['manager', 'list'], {\n        textContent: listName\n      });\n      newList.dataset.id = listName;\n      _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(self.lists, newList);\n      _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(self.lists, self.addListButton);\n      var manager = new _modules_taskManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"](listName);\n      self.managers.push(manager);\n      self.bindButtonEvent(newList);\n      newListInput.value = '';\n      self.SetStorageButtons(listName);\n    }\n  });\n};\n\nApp.prototype.drawButton = function () {\n  var addtaskButton = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.button');\n  this.taskList.ul = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.ulClass');\n  var self = this;\n  var buttons = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findAll(document, '.manager');\n\n  for (var i = 0; i < buttons.length; i++) {\n    var button = buttons[i];\n    var manager = new _modules_taskManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"](button.dataset.id);\n    this.managers.push(manager);\n    this.bindButtonEvent(button);\n  }\n\n  addtaskButton.addEventListener('click', function (event) {\n    var priority = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.priority').value;\n    self.tasksCountInc();\n    self.taskList.Counter.style.display = 'block';\n    self.inputValue = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(document, '.input');\n\n    if (self.inputValue.value != '') {\n      var name = self.inputValue.value;\n      var task = self.currentManager.addTask(name, priority, self);\n      self.AddToUl(task.getElement());\n      self.inputValue.value = '';\n      self.inputValue.focus();\n      self.setToStorage(self.currentManager);\n    }\n  });\n};\n\nApp.prototype.tasksCountInc = function () {\n  var counter = JSON.parse(localStorage.getItem('counter'));\n  counter++;\n  localStorage.setItem('counter', JSON.stringify(counter));\n  this.taskList.Counter.textContent = \"Tasks: \".concat(counter);\n};\n\nApp.prototype.tasksCountDec = function (event) {\n  var listText = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(event, '.listText').textContent;\n\n  for (var i = 0; i < this.currentManager.list.length; i++) {\n    if (this.currentManager.list[i].name === listText) {\n      this.currentManager.list.splice(i, 1);\n      this.setToStorage(this.currentManager);\n    }\n  }\n\n  var counter = JSON.parse(localStorage.getItem('counter'));\n  counter--;\n  localStorage.setItem('counter', JSON.stringify(counter));\n  this.taskList.Counter.textContent = \"Tasks: \".concat(counter);\n};\n\nApp.prototype.setFirstList = function () {\n  this.currentManager = this.managers[0];\n};\n\nApp.prototype.bindButtonEvent = function (button) {\n  var self = this;\n  button.addEventListener('click', function (event) {\n    var clickedButton = event.target;\n    var id = clickedButton.dataset.id;\n    self.taskList.ul.innerHTML = '';\n\n    for (var i = 0; i < self.managers.length; i++) {\n      if (self.managers[i].name === id) {\n        self.currentList = id;\n        self.currentManager = self.managers[i];\n      }\n    }\n\n    self.getFromStorage(self.currentManager);\n  });\n};\n\nApp.prototype.setToStorage = function (manager) {\n  if (manager != undefined) {\n    var setLocalList = [];\n\n    for (var i = 0; i < manager.list.length; i++) {\n      var localObj = {\n        text: manager.list[i].name,\n        priority: manager.list[i].priority\n      };\n      setLocalList.push(localObj);\n    }\n\n    localStorage.setItem(manager.name, JSON.stringify(setLocalList));\n  }\n};\n\nApp.prototype.getFromStorage = function (manager) {\n  var getfromLocal = JSON.parse(localStorage.getItem(manager.name));\n  var getLocalList = [];\n  var fromLocalList = {\n    name: manager.name,\n    list: getLocalList\n  };\n\n  if (getfromLocal != null) {\n    for (var i = 0; i < getfromLocal.length; i++) {\n      var localTask = this.currentManager.addTask(getfromLocal[i].text, getfromLocal[i].priority, this);\n      getLocalList.push(localTask);\n    }\n  }\n\n  this.fillByManagerList(fromLocalList);\n};\n\nApp.prototype.SetStorageButtons = function (button) {\n  var buttonList = [];\n  var localButton = JSON.parse(localStorage.getItem(\"buttonsList\"));\n\n  if (localButton != null) {\n    for (var i = 0; i < localButton.length; i++) {\n      buttonList.push(localButton[i]);\n    }\n  }\n\n  buttonList.push(button);\n  localStorage.setItem(\"buttonsList\", JSON.stringify(buttonList));\n};\n\nApp.prototype.getStorageButtons = function () {\n  var localButtons = JSON.parse(localStorage.getItem(\"buttonsList\"));\n\n  if (localButtons != null) {\n    for (var j = 0; j < localButtons.length; j++) {\n      var newList = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make('button', ['manager', 'list'], {\n        textContent: localButtons[j]\n      });\n      newList.dataset.id = localButtons[j];\n      _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.lists, newList);\n      _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.lists, this.addListButton);\n      var manager = new _modules_taskManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"](localButtons[j]);\n      this.managers.push(manager);\n      this.bindButtonEvent(newList);\n    }\n  }\n};\n\nApp.prototype.fillByManagerList = function (manager) {\n  for (var i = 0; i < manager.list.length; i++) {\n    this.AddToUl(manager.list[i].getElement());\n  }\n};\n\nApp.prototype.AddToUl = function (task) {\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTo(this.taskList.ul, task);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack://TodoList/./index.js?");

/***/ }),

/***/ "./modules/dom.js":
/*!************************!*\
  !*** ./modules/dom.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Dom = function Dom() {};\n\nDom.prototype.make = function (element) {\n  var classList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(element);\n\n  for (var i = 0; i < classList.length; i++) {\n    var className = classList[i];\n    el.classList.add(className);\n  }\n\n  for (var prop in properties) {\n    el[prop] = properties[prop];\n  }\n\n  return el;\n};\n\nDom.prototype.find = function (element, selector) {\n  return element.querySelector(selector);\n};\n\nDom.prototype.findAll = function (element, selector) {\n  return element.querySelectorAll(selector);\n};\n\nDom.prototype.appendTo = function (element, child) {\n  element.append(child);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Dom());\n\n//# sourceURL=webpack://TodoList/./modules/dom.js?");

/***/ }),

/***/ "./modules/task.js":
/*!*************************!*\
  !*** ./modules/task.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./modules/dom.js\");\n\n\nvar Task = function Task(name, priority, app) {\n  this.name = name;\n  this.priority = priority;\n  this.app = app;\n  this.dom = {\n    div: null\n  };\n  var n = 0;\n  var self = this;\n  var div = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('div', ['list__task']);\n  var span = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('span');\n  span.classList.add = Task.prototype.getPriority(priority, span);\n  var spanText = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('span', ['listText'], {\n    textContent: name\n  });\n  var buttonDelete = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('button', ['list__button'], {\n    textContent: '...'\n  });\n  var deleteSpan = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make('button', ['deleteSpan'], {\n    textContent: 'Удалить'\n  });\n  buttonDelete.addEventListener('click', function (event) {\n    if (n === 0) {\n      div.appendChild(deleteSpan);\n      deleteSpan.classList.add('changeDisplayBlock');\n      deleteSpan.classList.remove('changeDisplayNone');\n      n++;\n    } else {\n      deleteSpan.classList.add('changeDisplayNone');\n      deleteSpan.classList.remove('changeDisplayBlock');\n      n--;\n    }\n  });\n  deleteSpan.addEventListener('click', function () {\n    var div = event.target.parentNode;\n    app.tasksCountDec(event.target.parentNode);\n    app.setToStorage(this.currentManager);\n    div.remove();\n  });\n  div.appendChild(span);\n  div.appendChild(spanText);\n  div.appendChild(buttonDelete);\n  this.dom.div = div;\n};\n\nTask.prototype.getElement = function () {\n  return this.dom.div;\n};\n\nTask.prototype.getPriority = function (prioritys, span) {\n  if (prioritys === 'High') {\n    span.textContent = prioritys;\n    span.classList.add('priorityClassHigth');\n  } else {\n    if (prioritys === 'Medium') {\n      span.textContent = prioritys;\n      span.classList.add('priorityClassMedium');\n    } else {\n      span.textContent = prioritys;\n      span.classList.add('priorityClassLow');\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack://TodoList/./modules/task.js?");

/***/ }),

/***/ "./modules/taskManager.js":
/*!********************************!*\
  !*** ./modules/taskManager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./modules/task.js\");\n\n\nvar TaskManager = function TaskManager(name) {\n  this.name = name;\n  this.list = [];\n};\n\nTaskManager.prototype.addTask = function (name, priority, app) {\n  var task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, priority, app);\n  this.list.push(task);\n  return task;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskManager);\n\n//# sourceURL=webpack://TodoList/./modules/taskManager.js?");

/***/ })

/******/ })["default"];
});