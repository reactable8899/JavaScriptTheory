!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TodoList=e():t.TodoList=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o=function(t,e,n){this.name=t,this.priority=e,this.app=n,this.dom={div:null};let s=0;const i=document.createElement("div");i.classList.add("list__task");const a=document.createElement("span");a.classList.add=o.prototype.getPriority(e,a);const d=document.createElement("span");d.classList.add("listText"),d.textContent=t;const l=document.createElement("button");l.textContent="...",l.classList.add("list__button");const r=document.createElement("button");r.classList.add("deleteSpan"),r.textContent="Удалить",l.addEventListener("click",(function(t){0===s?(i.appendChild(r),r.classList.add("changeDisplayBlock"),r.classList.remove("changeDisplayNone"),s++):(r.classList.add("changeDisplayNone"),r.classList.remove("changeDisplayBlock"),s--)})),r.addEventListener("click",(function(){const t=event.target.parentNode;n.tasksCountDec(event.target.parentNode),t.remove()})),i.appendChild(a),i.appendChild(d),i.appendChild(l),this.dom.div=i};o.prototype.getElement=function(){return this.dom.div},o.prototype.getPriority=function(t,e){"High"===t?(e.textContent=t,e.classList.add("priorityClassHigth")):"Medium"===t?(e.textContent=t,e.classList.add("priorityClassMedium")):(e.textContent=t,e.classList.add("priorityClassLow"))};var s=o;const i=function(t){this.name=t,this.list=[]};i.prototype.addTask=function(t,e,n){const o=new s(t,e,n);return this.list.push(o),o};var a=i;const d=function(){};d.prototype.make=function(t,e=[],n={}){const o=document.createElement(t);for(let t=0;t<e.length;t++){const n=e[t];o.classList.add(n)}for(let t in n)o[t]=n[t];return o},d.prototype.find=function(t,e){return t.querySelector(e)},d.prototype.findAll=function(t,e){return t.querySelectorAll(e)},d.prototype.appendTo=function(t,e){t.append(e)};var l=new d;const r=function(){this.managers=[],this.currentManager=null,this.list={counter:0},this.prepare(),this.listAdd(),this.drawButton(),this.showAddBlock()};r.prototype.showAddBlock=function(){let t=0;const e=l.find(document,".main__block_show"),n=l.find(document,".lists");l.find(document,".addButton").addEventListener("click",(function(){0===t?(e.style.display="block",n.style.display="block",t++):(e.style.display="none",n.style.display="none",t--)}))},r.prototype.prepare=function(){const t=l.find(document,".main__block"),e=l.find(document,".main__block_show");this.lists=l.make("div",["lists"]),this.lists.span=l.make("span"),this.lists.TodayButton=l.make("button",["manager","list"],{textContent:"Cегодня"}),this.lists.TodayButton.dataset.id="today",this.addListButton=l.make("button",["listAdd"],{textContent:"+"}),this.addListButton.dataset.toggle="modal",this.addListButton.dataset.target="#myModal",this.addBlockInput=l.make("input",["input"]),this.addBlockInput.placeholder="Add Task",this.addBlockSelect=l.make("select",["priority"]),this.addBlockOptionHigth=l.make("option",[],{textContent:"High"}),this.addBlockOptionMedium=l.make("option",[],{textContent:"Medium"}),this.addBlockOptionLow=l.make("option",[],{textContent:"Low"}),this.taskList=l.make("div",["taskList"]),this.taskList.ul=l.make("ul",["ulClass"]),this.taskList.Counter=l.make("span",["taskCount"],{textContent:"Tasks: "+this.list.counter}),l.appendTo(this.addBlockSelect,this.addBlockOptionHigth),l.appendTo(this.addBlockSelect,this.addBlockOptionMedium),l.appendTo(this.addBlockSelect,this.addBlockOptionLow),l.appendTo(this.taskList,this.taskList.ul),e.prepend(this.addBlockSelect),e.prepend(this.addBlockInput),l.appendTo(this.lists,this.lists.TodayButton),l.appendTo(this.lists,this.addListButton),l.appendTo(t,this.lists),l.appendTo(t,this.taskList),l.appendTo(t,this.taskList.Counter)},r.prototype.listAdd=function(){const t=this;l.find(document,".listAdd").addEventListener("click",(function(){const e=l.find(document,".newListInput");l.make("button",["listAdd"],{textContent:"+"});document.querySelector(".newListInput").addEventListener("keydown",(function(t){13===t.keyCode&&(n(),e.value="")}));function n(){const n=e.value;if(""===n)return;const o=l.make("button");o.textContent=n,o.classList.add("manager","list"),o.dataset.id=n,t.lists.append(o),t.lists.append(t.addListButton);const s=new a(n);t.managers.push(s),t.bindButtonEvent(o),e.value=""}l.find(document,"#addList").addEventListener("click",n)}))},r.prototype.drawUl=function(){return document.createElement("ul")},r.prototype.drawButton=function(){const t=document.querySelector(".button");this.taskList.ul=document.querySelector(".ulClass");const e=this,n=document.querySelectorAll(".manager");for(let t=0;t<n.length;t++){const e=n[t],o=new a(e.dataset.id);this.managers.push(o),this.bindButtonEvent(e)}t.addEventListener("click",(function(t){const n=l.find(document,".priority").value;e.tasksCountInc(),e.taskList.Counter.style.display="block",e.inputValue=l.find(document,".input");const o=e.inputValue.value,s=e.currentManager.addTask(o,n,e);e.AddToUl(s.getElement()),e.inputValue.value="",e.inputValue.focus()}))},r.prototype.fillByManagerList=function(t){for(let e=0;e<t.list.length;e++)this.AddToUl(t.list[e].getElement())},r.prototype.AddToUl=function(t){this.taskList.ul.append(t)},r.prototype.tasksCountInc=function(){this.list.counter++,this.taskList.Counter.textContent="Tasks: "+this.list.counter},r.prototype.tasksCountDec=function(t){const e=t.querySelector(".listText").textContent;for(let t=0;t<this.currentManager.list.length;t++)this.currentManager.list[t].name===e&&this.currentManager.list.splice(t,1);this.list.counter--,this.taskList.Counter.textContent="Tasks: "+this.list.counter},r.prototype.bindButtonEvent=function(t){const e=this;t.addEventListener("click",(function(t){const n=t.target.dataset.id;e.taskList.ul.innerHTML="";for(let t=0;t<e.managers.length;t++)e.managers[t].name===n&&(e.currentList=n,e.currentManager=e.managers[t]);e.fillByManagerList(e.currentManager)}))};e.default=r}]).default}));