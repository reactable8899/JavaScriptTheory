<<<<<<< HEAD
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TodoList=e():t.TodoList=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o=function(t,e,n){this.name=t,this.priority=e,this.app=n,this.dom={div:null};let s=0;const i=document.createElement("div");i.classList.add("list__task");const a=document.createElement("span");a.classList.add=o.prototype.getPriority(e,a);const d=document.createElement("span");d.classList.add("listText"),d.textContent=t;const l=document.createElement("button");l.textContent="...",l.classList.add("list__button");const r=document.createElement("button");r.classList.add("deleteSpan"),r.textContent="Удалить",l.addEventListener("click",(function(t){0===s?(i.appendChild(r),r.classList.add("changeDisplayBlock"),r.classList.remove("changeDisplayNone"),s++):(r.classList.add("changeDisplayNone"),r.classList.remove("changeDisplayBlock"),s--)})),r.addEventListener("click",(function(){const t=event.target.parentNode;n.tasksCountDec(event.target.parentNode),t.remove()})),i.appendChild(a),i.appendChild(d),i.appendChild(l),this.dom.div=i};o.prototype.getElement=function(){return this.dom.div},o.prototype.getPriority=function(t,e){"High"===t?(e.textContent=t,e.classList.add("priorityClassHigth")):"Medium"===t?(e.textContent=t,e.classList.add("priorityClassMedium")):(e.textContent=t,e.classList.add("priorityClassLow"))};var s=o;const i=function(t){this.name=t,this.list=[]};i.prototype.addTask=function(t,e,n){const o=new s(t,e,n);return this.list.push(o),o};var a=i;const d=function(){};d.prototype.make=function(t,e=[],n={}){const o=document.createElement(t);for(let t=0;t<e.length;t++){const n=e[t];o.classList.add(n)}for(let t in n)o[t]=n[t];return o},d.prototype.find=function(t,e){return t.querySelector(e)},d.prototype.findAll=function(t,e){return t.querySelectorAll(e)},d.prototype.appendTo=function(t,e){t.append(e)};var l=new d;const r=function(){this.managers=[],this.currentManager=null,this.list={counter:0},this.prepare(),this.listAdd(),this.drawButton(),this.showAddBlock()};r.prototype.showAddBlock=function(){let t=0;const e=l.find(document,".main__block_show"),n=l.find(document,".lists");l.find(document,".addButton").addEventListener("click",(function(){0===t?(e.style.display="block",n.style.display="block",t++):(e.style.display="none",n.style.display="none",t--)}))},r.prototype.prepare=function(){const t=l.find(document,".main__block"),e=l.find(document,".main__block_show");this.lists=l.make("div",["lists"]),this.lists.span=l.make("span"),this.lists.TodayButton=l.make("button",["manager","list"],{textContent:"Cегодня"}),this.lists.TodayButton.dataset.id="today",this.addListButton=l.make("button",["listAdd"],{textContent:"+"}),this.addListButton.dataset.toggle="modal",this.addListButton.dataset.target="#myModal",this.addBlockInput=l.make("input",["input"]),this.addBlockInput.placeholder="Add Task",this.addBlockSelect=l.make("select",["priority"]),this.addBlockOptionHigth=l.make("option",[],{textContent:"High"}),this.addBlockOptionMedium=l.make("option",[],{textContent:"Medium"}),this.addBlockOptionLow=l.make("option",[],{textContent:"Low"}),this.taskList=l.make("div",["taskList"]),this.taskList.ul=l.make("ul",["ulClass"]),this.taskList.Counter=l.make("span",["taskCount"],{textContent:"Tasks: "+this.list.counter}),l.appendTo(this.addBlockSelect,this.addBlockOptionHigth),l.appendTo(this.addBlockSelect,this.addBlockOptionMedium),l.appendTo(this.addBlockSelect,this.addBlockOptionLow),l.appendTo(this.taskList,this.taskList.ul),e.prepend(this.addBlockSelect),e.prepend(this.addBlockInput),l.appendTo(this.lists,this.lists.TodayButton),l.appendTo(this.lists,this.addListButton),l.appendTo(t,this.lists),l.appendTo(t,this.taskList),l.appendTo(t,this.taskList.Counter)},r.prototype.listAdd=function(){const t=this;l.find(document,".listAdd").addEventListener("click",(function(){const e=l.find(document,".newListInput");l.make("button",["listAdd"],{textContent:"+"});document.querySelector(".newListInput").addEventListener("keydown",(function(t){13===t.keyCode&&(n(),e.value="")}));function n(){const n=e.value;if(""===n)return;const o=l.make("button");o.textContent=n,o.classList.add("manager","list"),o.dataset.id=n,t.lists.append(o),t.lists.append(t.addListButton);const s=new a(n);t.managers.push(s),t.bindButtonEvent(o),e.value=""}l.find(document,"#addList").addEventListener("click",n)}))},r.prototype.drawUl=function(){return document.createElement("ul")},r.prototype.drawButton=function(){const t=document.querySelector(".button");this.taskList.ul=document.querySelector(".ulClass");const e=this,n=document.querySelectorAll(".manager");for(let t=0;t<n.length;t++){const e=n[t],o=new a(e.dataset.id);this.managers.push(o),this.bindButtonEvent(e)}t.addEventListener("click",(function(t){const n=l.find(document,".priority").value;e.tasksCountInc(),e.taskList.Counter.style.display="block",e.inputValue=l.find(document,".input");const o=e.inputValue.value,s=e.currentManager.addTask(o,n,e);e.AddToUl(s.getElement()),e.inputValue.value="",e.inputValue.focus()}))},r.prototype.fillByManagerList=function(t){for(let e=0;e<t.list.length;e++)this.AddToUl(t.list[e].getElement())},r.prototype.AddToUl=function(t){this.taskList.ul.append(t)},r.prototype.tasksCountInc=function(){this.list.counter++,this.taskList.Counter.textContent="Tasks: "+this.list.counter},r.prototype.tasksCountDec=function(t){const e=t.querySelector(".listText").textContent;for(let t=0;t<this.currentManager.list.length;t++)this.currentManager.list[t].name===e&&this.currentManager.list.splice(t,1);this.list.counter--,this.taskList.Counter.textContent="Tasks: "+this.list.counter},r.prototype.bindButtonEvent=function(t){const e=this;t.addEventListener("click",(function(t){const n=t.target.dataset.id;e.taskList.ul.innerHTML="";for(let t=0;t<e.managers.length;t++)e.managers[t].name===n&&(e.currentList=n,e.currentManager=e.managers[t]);e.fillByManagerList(e.currentManager)}))};e.default=r}]).default}));
=======
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskManager */ \"./src/modules/taskManager.js\");\n/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main */ \"./src/modules/main.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_modules_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst App = function() {\r\n\r\n  this.managers = [];\r\n  this.currentManager = null;\r\n\r\n  this.list = {\r\n    counter:0\r\n  }\r\n\r\n  this.prepare();\r\n  this.listAdd();\r\n  this.drawButton();\r\n  this.showAddBlock();\r\n};\r\nApp.prototype.showAddBlock = function() {\r\n  let show = 0;\r\n  const addBlockList = document.querySelector('.main__block_show');\r\n  const buttonList = document.querySelector('.lists');\r\n\r\n  addBlockButton = document.querySelector('.addButton');\r\n  addBlockButton.addEventListener('click', function() {\r\n\r\n    if (show === 0) {\r\n      addBlockList.style.display = 'block';\r\n      buttonList.style.display = 'block';\r\n      show++;\r\n    } else {\r\n      addBlockList.style.display = 'none';\r\n      buttonList.style.display = 'none';\r\n      show--;\r\n    }\r\n\r\n  });\r\n};\r\n\r\nApp.prototype.prepare = function() {\r\n  const mainBlock = document.querySelector('.main__block');\r\n  const mainMenu = document.querySelector('.main__block_show');\r\n\r\n  this.lists = this.drawDiv();\r\n  this.lists.classList.add('lists');\r\n\r\n  this.lists.span = this.drawSpan();\r\n\r\n  this.lists.TodayButton = this.drowListButton('today');\r\n  this.lists.TodayButton.textContent = 'Сегодня';\r\n  this.lists.TodayButton.classList.add('manager');\r\n  this.lists.TodayButton.classList.add('list');\r\n  this.lists.TodayButton.dataset.id = 'today';\r\n\r\n  this.addListButton = this.drowListButton();\r\n  this.addListButton.textContent = '+';\r\n  this.addListButton.classList.add('listAdd');\r\n  this.addListButton.dataset.toggle=\"modal\"\r\n  this.addListButton.dataset.target=\"#myModal\";\r\n\r\n  this.addBlockInput = this.drawInput();\r\n  this.addBlockInput.classList.add('input');\r\n  this.addBlockInput.placeholder = 'Add Task';\r\n\r\n  this.addBlockSelect = this.drawSelect();\r\n  this.addBlockSelect.classList.add('priority');\r\n\r\n  this.addBlockOptionHigth = this.drawOption(\"Higth\");\r\n  this.addBlockOptionMedium = this.drawOption(\"Medium\");\r\n  this.addBlockOptionLow = this.drawOption(\"Low\");\r\n\r\n  this.taskList = this.drawDiv();\r\n  this.taskList.classList.add('taskList');\r\n\r\n  this.taskList.ul = this.drawUl();\r\n  this.taskList.ul.classList.add('ulClass');\r\n\r\n  this.taskList.Counter = this.drawSpan();\r\n  this.taskList.Counter.textContent = `Tasks: ${this.list.counter}`;\r\n  this.taskList.Counter.classList.add('taskCount');\r\n\r\n  this.addBlockSelect.append(this.addBlockOptionHigth);\r\n  this.addBlockSelect.append(this.addBlockOptionMedium);\r\n  this.addBlockSelect.append(this.addBlockOptionLow);\r\n\r\n  this.taskList.append(this.taskList.ul);\r\n\r\n  mainMenu.prepend(this.addBlockSelect);\r\n  mainMenu.prepend(this.addBlockInput);\r\n\r\n  this.lists.append(this.lists.TodayButton);\r\n  this.lists.append(this.addListButton);\r\n\r\n  mainBlock.append(this.lists);\r\n  mainBlock.append(this.taskList);\r\n  mainBlock.append(this.taskList.Counter);\r\n\r\n};\r\n\r\nApp.prototype.listAdd = function() {\r\n\r\n  const self = this;\r\n  const listAdd = document.querySelector('.listAdd');\r\n\r\n  listAdd.addEventListener('click', function() {\r\n\r\n    const newListInput = document.querySelector('.newListInput');\r\n    const newListButton = document.createElement('button');\r\n    newListButton.classList.add('listAdd');\r\n    newListButton.textContent = '+';\r\n\r\n      (function() {\r\n        document.querySelector('.newListInput').addEventListener('keydown', function(e) {\r\n          if (e.keyCode === 13) {\r\n            createNewList();\r\n            newListInput.value = '';\r\n          }\r\n        });\r\n      })();\r\n\r\n      const addList = document.querySelector('#addList');\r\n      addList.addEventListener('click', createNewList)\r\n\r\n      function createNewList() {\r\n        listName = newListInput.value;\r\n        if (listName === '') {\r\n          return\r\n        }\r\n\r\n        const newList = document.createElement('button');\r\n        newList.textContent = listName;\r\n        newList.classList.add('manager','list');\r\n        newList.dataset.id = listName;\r\n\r\n        self.lists.append(newList);\r\n        self.lists.append(self.addListButton);\r\n\r\n        const manager = new TaskManager(listName);\r\n        self.managers.push(manager);\r\n        self.bindButtonEvent(newList);\r\n        newListInput.value = '';\r\n\r\n      }\r\n  })\r\n};\r\n\r\nApp.prototype.drawSpan = function() {\r\n   return document.createElement('span');\r\n};\r\n\r\nApp.prototype.drawDiv = function() {\r\n   return document.createElement('div');\r\n};\r\n\r\nApp.prototype.drawInput = function() {\r\n   return document.createElement('input');\r\n};\r\n\r\nApp.prototype.drawSelect = function() {\r\n   return document.createElement('select');\r\n};\r\n\r\nApp.prototype.drawOption = function(text) {\r\n   const option = document.createElement('option');\r\n   option.textContent = text;\r\n   return option;\r\n};\r\n\r\nApp.prototype.drawUl = function() {\r\n   return document.createElement('ul');\r\n};\r\n\r\nApp.prototype.drowListButton = function() {\r\n  return listButton = document.createElement('button');\r\n};\r\n\r\nApp.prototype.drawButton = function() {\r\n  const addtaskButton = document.querySelector('.button');\r\n  this.taskList.ul = document.querySelector('.ulClass');\r\n\r\n  const self = this;\r\n  const buttons = document.querySelectorAll('.manager');\r\n\r\n  for (let i = 0; i < buttons.length; i++) {\r\n    const button = buttons[i];\r\n\r\n    const manager = new TaskManager(button.dataset.id);\r\n    this.managers.push(manager);\r\n    this.bindButtonEvent(button);\r\n  }\r\n\r\n  addtaskButton.addEventListener('click', function(event) {\r\n\r\n    const priority = document.querySelector('.priority').value;\r\n\r\n    self.tasksCountInc();\r\n    self.taskList.Counter.style.display = 'block';\r\n    self.inputValue = document.querySelector('.input');\r\n\r\n    const name = self.inputValue.value;\r\n    const task = self.currentManager.addTask(name,priority,self);\r\n\r\n    self.AddToUl(task.getElement());\r\n    self.inputValue.value = '';\r\n    self.inputValue.focus();\r\n\r\n  });\r\n};\r\n\r\nApp.prototype.fillByManagerList = function(manager) {\r\n  for ( let i = 0; i < manager.list.length; i++) {\r\n    this.AddToUl(manager.list[i].getElement())\r\n  }\r\n};\r\n\r\nApp.prototype.AddToUl = function(task) {\r\n  this.taskList.ul.append(task);\r\n};\r\n\r\nApp.prototype.tasksCountInc = function() {\r\n  this.list.counter++;\r\n  this.taskList.Counter.textContent = `Tasks: ${this.list.counter}`;\r\n};\r\n\r\nApp.prototype.tasksCountDec = function(event) {\r\n\r\n  const listText = event.querySelector('.listText').textContent;\r\n  for (let i = 0; i < this.currentManager.list.length; i++) {\r\n\r\n    if (this.currentManager.list[i].name === listText) {\r\n      this.currentManager.list.splice(i, 1);\r\n    }\r\n\r\n  }\r\n  this.list.counter--;\r\n  this.taskList.Counter.textContent = `Tasks: ${this.list.counter}`;\r\n};\r\n\r\nApp.prototype.bindButtonEvent = function(button) {\r\n  const self = this;\r\n  button.addEventListener('click', function(event) {\r\n\r\n    const clickedButton = event.target;\r\n    const id = clickedButton.dataset.id;\r\n    self.taskList.ul.innerHTML = '';\r\n\r\n    for (let i = 0; i < self.managers.length; i++) {\r\n      if (self.managers[i].name === id) {\r\n        self.currentList = id;\r\n        self.currentManager = self.managers[i];\r\n      }\r\n    }\r\n\r\n    self.fillByManagerList(self.currentManager);\r\n\r\n  });\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/modules/main.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Task = function(name, priority,app) {\r\n\r\n  this.name = name;\r\n  this.priority = priority;\r\n  this.app = app;\r\n\r\n  this.dom = {\r\n    div: null\r\n  };\r\n  let n = 0;\r\n  const self = this;\r\n\r\n  const div = document.createElement('div');\r\n  div.classList.add('list__task');\r\n\r\n  const span = document.createElement('span');\r\n  span.classList.add = Task.prototype.getPriority(priority,span);\r\n\r\n  const spanText = document.createElement('span');\r\n  spanText.classList.add('listText');\r\n  spanText.textContent = name;\r\n\r\n  const buttonDelete = document.createElement('button');\r\n  buttonDelete.textContent = '...';\r\n  buttonDelete.classList.add('list__button');\r\n\r\n  const deleteSpan = document.createElement('button');\r\n  deleteSpan.classList.add('deleteSpan');\r\n  deleteSpan.textContent = 'Удалить';\r\n\r\n  buttonDelete.addEventListener('click', function(event) {\r\n\r\n    if (n === 0) {\r\n      div.appendChild(deleteSpan);\r\n      deleteSpan.classList.add('changeDisplayBlock');\r\n      deleteSpan.classList.remove('changeDisplayNone');\r\n      n++;\r\n    } else {\r\n      deleteSpan.classList.add('changeDisplayNone');\r\n      deleteSpan.classList.remove('changeDisplayBlock');\r\n      n--;\r\n    }\r\n\r\n  });\r\n\r\n  deleteSpan.addEventListener('click', function() {\r\n    const div = event.target.parentNode;\r\n\r\n    app.tasksCountDec(event.target.parentNode);\r\n    div.remove();\r\n  })\r\n\r\n  div.appendChild(span);\r\n  div.appendChild(spanText);\r\n  div.appendChild(buttonDelete);\r\n\r\n  this.dom.div = div;\r\n\r\n};\r\n\r\nTask.prototype.getElement = function() {\r\n  return this.dom.div;\r\n};\r\n\r\nTask.prototype.getPriority = function(prioritys,span) {\r\n\r\n  if (prioritys === 'Higth') {\r\n    span.textContent = prioritys;\r\n    span.classList.add('priorityClassHigth');\r\n  } else {\r\n    if (prioritys === 'Medium') {\r\n      span.textContent = prioritys;\r\n      span.classList.add('priorityClassMedium');\r\n    } else {\r\n      span.textContent = prioritys;\r\n      span.classList.add('priorityClassLow');\r\n    }\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\r\n\n\n//# sourceURL=webpack:///./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskManager.js":
/*!************************************!*\
  !*** ./src/modules/taskManager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TaskManager = function(name) {\r\n  this.name = name;\r\n  this.list = [];\r\n};\r\n\r\nTaskManager.prototype.addTask = function(name,priority,app) {\r\n\r\n  const task = new Task(name,priority,app);\r\n\r\n  this.list.push(task);\r\n\r\n  return task;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskManager);\r\n\n\n//# sourceURL=webpack:///./src/modules/taskManager.js?");

/***/ })

/******/ });
>>>>>>> master
