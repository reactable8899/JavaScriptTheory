function Cube(cubeId) {
  const cubeElement = document.getElementById(cubeId);

  this.currentLeftOffset = 12;

  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
      this.right();
    } else if (event.keyCode === 37) {
      this.left();
    }
  });

  this.left = function() {
    if (this.currentLeftOffset === 12) {
      return;
    }

    this.currentLeftOffset -= 100;
    cubeElement.style.left = this.currentLeftOffset + 'px';
  }

  this.right = function() {
    if (this.currentLeftOffset === 212) {
      return;
    }

    this.currentLeftOffset += 100;
    cubeElement.style.left = this.currentLeftOffset + 'px';
  }

  console.log(this.sayHello());
}
