const customName = document.getElementById('customName');
const customeNAme = document.getElementById('customeNAme')
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was a majestic night with a velvety sky covered in twinkling stars and a balmy 75 Fahrenheit. Naturally Abigail and Luke decided it was the perfect time to go star gazing. They gathered some supplies, including :insertX:, before heading to the top of their favorite hill. They got a little carried away and it felt like their bag weighed 100 lbs. But it was worth it because they were able to see so many constellations, even their favorite one :insertY:. In the wee hours of the morning, after seeing :insertZ:, they decided it was finally time to call it a night and go to bed. Hopefully they could go star gazing again soon!';
let insertX = ['their favorite onesies', 'steaming hot coffee', 'candy, candy, and more candy'];
let insertY = ['Pegasus', 'Scorpio', 'Cassiopeia'];
let insertZ = ['a shooting star', 'a comet', 'a meteor shower'];

randomize.addEventListener('click', result);

function result() {
  let newStory = 'storyText';

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertX:',xItem);
  newStory = newStory.replace(':insertY:',yItem);
  newStory = newStory.replace(':insertZ:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Abigail',name);
  }
  if(customNAme.value !== '') {
    const name = customNAme.value;
    newStory = newStory.replace('Luke',name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(100/14) +' stone';
    let temperature =  Math.round((75-32)*(5/9)) +'* centigrade';
    newStory = newStory.replace('100 pounds', weight);
    newStory = newStory.replace('75 Fahrenheit', temperature);
  }
  if(document.getElementById("fr").checked) {
    let weight = Math.round(100/2.205) +' kg';
    let temperature =  Math.round((75-32)*(5/9)) +' celsius';
    newStory = newStory.replace('100 pounds', weight);
    newStory = newStory.replace('75 Fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
