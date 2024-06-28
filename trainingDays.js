// The scope of `random` is too loose 

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = trainingEvent => {
  let days;
  if (trainingEvent === 'Marathon') {
    days = 50;
  } else if (trainingEvent === 'Triathlon') {
    days = 100;
  } else if (trainingEvent === 'Pentathlon') {
    days = 200;
  }

  return days;
}

// The scope of `name` is too tight 
const name = 'Nala';

const logEvent = (name,trainingEvent) => {
  console.log(`${name}'s event is: ${trainingEvent}`);
};

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const trainingEvent = getRandEvent();
const days = getTrainingDays(trainingEvent);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name,trainingEvent);
logTime(name,days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
