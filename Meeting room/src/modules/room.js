import Dom from "./dom";
const Room = function(name) {
};
Room.prototype.createRoom = function(name) {
  const self = this;

  const div = Dom.make('div',['room']);
  const roomImg = Dom.make('img', ['roomImg'], {
    src: '././images/room.jpg'
  });
  const roomName = Dom.make('div',['roomName'], {
    textContent: name
  });
  const roomStatus = Dom.make('span',['roomStatus'], {
    textContent: 'free'
  });
  const reserveButton = Dom.make('button',['reserveButton'], {
    textContent: 'Reserve'
  });
  
  reserveButton.dataset.toggle="modal";
  reserveButton.dataset.target="#reserveButton";

  div.appendChild(roomName);
  div.appendChild(roomImg);
  div.appendChild(roomStatus);
  div.appendChild(reserveButton);

  reserveButton.addEventListener('click', function(event) {
    self.currentButton = event.target;
  })

  const reserveModalButton = Dom.find(document,'#reserveModalButton');

  reserveModalButton.addEventListener('click', function(event) {

    const reserveDate = Dom.find(document,'.ReserveDate').value;
    const description = Dom.find(document,'.description').value;

    const reservedDate = Dom.make('span',['reservedDate'], {
      textContent: reserveDate
    });
    const roomDescription = Dom.make('div',['roomDescription'], {
      textContent: description
    });

    self.currentButton.parentNode.appendChild(reservedDate);
    self.currentButton.parentNode.appendChild(roomDescription);

    roomStatus.style.display = 'none';
    reserveButton.style.display = 'none';

    self.currentButton = event.target;
  })

  return div
}
export default new Room();
