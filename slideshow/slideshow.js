const slider = function () {

  let container;
  let images;
  let currentActiveIndex = 0;

  function initSlider() {
    container = document.getElementsByClassName('slider')[0];
    images = container.getElementsByClassName('slider__image')

    let nextButton = container.getElementsByClassName('slider__button-next')[0];
    let previousButton = container.getElementsByClassName('slider__button-previous')[0];

    nextButton.addEventListener('click', function(event) {
      activateNextImage();
    }, false);

    previousButton.addEventListener('click', function(event) {
      activePreviousImage();
    }, false);
  }

  function getCurrentImage() {
    return images[currentActiveIndex];
  }

  function activateNextImage() {
    const image = getCurrentImage();
    deactiveImage(image);

    if (currentActiveIndex === images.length - 1) {
      currentActiveIndex = 0;
    } else {
      currentActiveIndex++;
    }

    currentActiveImage = images[currentActiveIndex];
    activateImage(currentActiveImage);
  }

  function activePreviousImage() {
    const image = getCurrentImage();
    deactiveImage(image);

    if (currentActiveIndex === 0) {
      currentActiveIndex = images.length - 1;
    } else {
      currentActiveIndex--;
    }

    currentActiveImage = images[currentActiveIndex];
    activateImage(currentActiveImage);
  }

  function activateImage(image) {
    image.classList.add('slider__image--active');
  }

  function deactiveImage(image) {
    image.classList.remove('slider__image--active');
  }

  return {
    initSlider: initSlider
  }
}();
