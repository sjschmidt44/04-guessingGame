'Use Strict';

var userName = prompt('Hello friend!\nWhat is your name?');
alert('Welcome to the site ' + userName + '!\nLet us play a guessing game');
console.log('Checking userName after prompt', userName);

alert('Please respond to the following questions with Yes or No answers');

var responseOne = prompt('Did I graduate from Indiana University?');
console.log('Checking responseOne after prompt', responseOne);
if (responseOne.toLowerCase() === 'yes' || responseOne.toLowerCase() === 'y') {
  alert('Correct!');
  correctGuess++;
} else {
  alert('We should spend more time together!');
}

var responseTwo = prompt('My favorite movie is Shaun of the Dead');
console.log('Checking responseTwo after prompt', responseTwo);
if (responseTwo.toLowerCase() === 'yes' || responseTwo.toLowerCase() === 'y') {
  alert('Correct!');
  correctGuess++;
} else {
  alert('We should spend more time together!');
}

var responseThree = prompt('My favorite band is THe Postal Service');
console.log('Checking responseThree after prompt', responseThree);
if (responseThree.toLowerCase() === 'no' || responseThree.toLowerCase() === 'n') {
  alert('We should spend more time together!');
} else if (responseThree.toLowerCase() === 'yes' || responseThree.toLowerCase() === 'y') {
  alert('Correct!');
  correctGuess++;
} else {
  alert('We should spend more time together. Please use Yes or No!');
}
var responseFour = prompt('Is my favorite food sushi?');
console.log('Checking responseFour after prompt', responseFour);
if (responseFour.toLowerCase() === 'yes' || responseFour.toLowerCase() === 'y') {
  alert('Correct!');
  correctGuess++;
} else {
  alert('We should spend more time together!');
}

var responseFive = prompt('Is my favorite animal the dog?');
console.log('Checking responseFive after prompt', responseFive);
if (responseFive.toLowerCase() === 'yes' || responseFive.toLowerCase() === 'y') {
  alert('Correct!');
  correctGuess++;
} else {
  alert('We should spend more time together so I can tell you why dogs are the best!');
}

//QUESTION 6
var yearGuess = parseInt(prompt(userName + ' please guess what year I was born.'));
var yearBorn = 1988;
var counter = 0;

while (yearBorn !== yearGuess && counter < 3) {
  counter++;
  console.log('counter', counter);
  if (yearGuess > yearBorn) {
    yearGuess = parseInt(prompt('Your guess was too high. Try again'));
  } else if (yearGuess < yearBorn) {
    yearGuess = parseInt(prompt('Your guess was too low. Try again.'));
  }
}
if (yearGuess === yearBorn) {
  alert('Correct! I was born in ' + yearBorn);
  correctGuess++;
}
console.log('Checking yearGuess after prompt', yearGuess);

//QUESTION 7 check 8/25 lecture youtube to do this - get much less complicated
var state = ['INDIANA', 'ILLINOIS', 'CALIFORNIA', 'NEW YORK', 'NORTH CAROLINA'];
var stateGuess = prompt('Please guess what state I have lived in besides Washington?').toUpperCase();
var counter2 = 0;
var arrayLength = state.length; //i need to define this later but ran out of time

for (var i = 0; i < 5; i++)
  while (state !== stateGuess && counter2 <= 6) {
    counter2++;
    console.log('counter2', counter2);
    if (state !== stateGuess) {
      stateGuess = (prompt('Your guess incorrect. Try again'));
    } else (state)(prompt('Correct1'));

  }


  var correctGuess = 0;

  alert('Thank you for playing. You got ' + corrrectGuess +' correct.')
