// let user = function(name,id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }
//
// let olim = new user('Olim' , 22)

function User(name,id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.sayhello = function() {
    console.log("hello! " + this.name)
  }
}

let olim = new User('Olim' , 22),
  malika = new User('Malika', 14);

console.log(olim)
