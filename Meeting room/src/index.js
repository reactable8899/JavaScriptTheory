import Dom from "./modules/dom";
import Room from "./modules/room";

const App = function() {
  this.rooms = [];

  this.prepare();
  this.createRoom();
};

App.prototype.prepare = function() {

  const mainBlock = Dom.find(document,'.main__block');
  const menu = Dom.find(document,'.menu');

  this.header = Dom.make('div',['header']);
  this.roomsBlock = Dom.make('div',['roomsBlock']);
  this.search = Dom.make('input',['search']);

  this.findRoomButton = Dom.make('button',['findRoomButton'], {
    textContent: 'search'
  });

  this.createRoomButton = Dom.make('button',['createRoomButton'], {
    textContent: 'createRoom'
  });
  this.createRoomButton.dataset.toggle="modal";
  this.createRoomButton.dataset.target="#myModal";

  this.roomButtonsList = Dom.make('ul',['roomButtonsList']);
  this.roomList = Dom.make('ul',['roomList']);

  this.roomButtonAll = Dom.make('li',['roomButtons'], {
    textContent: "All rooms"
  });
  this.roomButtonReserved = Dom.make('li',['roomButtons'], {
    textContent: "Reserved Rooms"
  });
  this.roomButtonFree = Dom.make('li',['roomButtons'], {
    textContent: "Free rooms"
  });

  Dom.appendTo(this.roomButtonsList,this.roomButtonAll);
  Dom.appendTo(this.roomButtonsList,this.roomButtonReserved);
  Dom.appendTo(this.roomButtonsList,this.roomButtonFree);

  Dom.appendTo(menu,this.roomButtonsList);
  Dom.appendTo(mainBlock,this.header);
  Dom.appendTo(this.roomsBlock,this.roomList);
  Dom.appendTo(mainBlock,this.roomsBlock);

  Dom.appendTo(this.header,this.search);
  Dom.appendTo(this.header,this.findRoomButton);
  Dom.appendTo(this.header,this.createRoomButton);
};

App.prototype.createRoom = function() {
  
  const self = this;
  const newRoomButton = Dom.find(document,'#newRoomButton');

  newRoomButton.addEventListener('click', function(event) {

    const newRoomInput = Dom.find(document,'.newRoomInput').value;
    const roomsBlock = Dom.find(document,'.roomsBlock')
    const room = Room.createRoom(newRoomInput);

    Dom.appendTo(self.roomList,room);
    self.rooms.push(room)

  })
}

export default App
