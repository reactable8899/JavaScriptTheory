const today = new App({
  holder: "today"
});

const tomorrow = new App({
  holder: "tomorrow"
});

const tomorrowButton = document.querySelector('#tomorrowButton');
const todayButton = document.querySelector('#todayButton');

const todayList = document.querySelector('#today');
const tomorrowList = document.querySelector('#tomorrow');

todayButton.addEventListener('click', function(){
  todayList.style.display = 'none';
  tomorrowList.style.display = 'block';
  console.log('click')
})

tomorrowButton.addEventListener('click', function(){
  tomorrowList.style.display = 'none';
  todayList.style.display = 'block';
  console.log('click')
})
