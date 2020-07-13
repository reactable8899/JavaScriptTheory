import App from "../index.js";
import Dom from "./dom.js";
import TaskManager from "./taskManager.js";
const Storage = function() {
};

Storage.prototype.setToStorage = function(manager) {
  if (manager != undefined) {
    const setLocalList = [];
    for(let i = 0; i < manager.list.length; i++) {
      const localObj = {
        text: manager.list[i].name,
        priority: manager.list[i].priority
      }
      setLocalList.push(localObj);
    }

    localStorage.setItem(manager.name,JSON.stringify(setLocalList))
  }
};
Storage.prototype.getFromStorage = function(manager,app) {
  const getfromLocal = JSON.parse(localStorage.getItem(manager.name));
  const getLocalList = [];

  const fromLocalList = {
    name: manager.name,
    list: getLocalList
  }
  if (getfromLocal != null) {
    for(let i = 0; i < getfromLocal.length; i++) {
      const localTask = app.currentManager.addTask(getfromLocal[i].text,getfromLocal[i].priority,app);
      getLocalList.push(localTask)
    }
  }
    app.fillByManagerList(fromLocalList);
};
Storage.prototype.SetStorageButtons = function(button) {

  const buttonList = [];
  const localButton = JSON.parse(localStorage.getItem("buttonsList"));
  if (localButton != null) {
    for (let i = 0; i < localButton.length; i++) {
      buttonList.push(localButton[i]);
    }
  }
  buttonList.push(button);
  localStorage.setItem("buttonsList",JSON.stringify(buttonList));

};

Storage.prototype.getStorageButtons = function(app) {
  const localButtons = JSON.parse(localStorage.getItem("buttonsList"));
  if (localButtons != null) {
    for(let j = 0; j < localButtons.length; j++) {
      const newList = Dom.make('button', ['manager','list'], {
        textContent: localButtons[j]
      });
      newList.dataset.id = localButtons[j];

      Dom.appendTo(app.lists, newList);
      Dom.appendTo(app.lists, app.addListButton);

      const manager = new TaskManager(localButtons[j]);
      app.managers.push(manager);
      app.bindButtonEvent(newList);
    }
  }
}

export default new Storage();
