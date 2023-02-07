'use strict';

// TODO: Get useres name and alert greet back to the user
let userName = prompt('What is your name?')

alert(`Welcome to my site ${userName}, let's play a guessing game.. please answer yes/y or no/n`);
//todo prompt 5 yes/no or y/n questions when they are correct or in correct

let score = 0;
function evalAnswer(question, rightAnswer) {
  let userAnswer = prompt(question);
  let validAnswer = ['yes', 'y', 'no', 'n',];
  // let rightAnswer = ['yes', 'y'];
  while (!validAnswer.includes(userAnswer.toLowerCase())) {
    userAnswer = prompt(`You answered ${userAnswer}, and it is not a valid answer. Please enter a valid yes/y no/n answer`);
    // console.log(`User answered ${userAnswer}`)
  }
  if (!rightAnswer.includes(userAnswer.toLowerCase())) {
    // console.log(`${userAnswer} is incorrect`);
    alert(`${userAnswer} is incorrect`);
  } else {
    // console.log('Great Guess');
    alert('Great Guess');
    score++;
  };
  console.log(score);
}

evalAnswer('Do I have a sister', ['yes', 'y']);

evalAnswer('Am I cool', ['no', 'n']);

evalAnswer('Is the earth flat?', ['no', 'n']);

evalAnswer('Are prompt and alert boxes annoying?', ['yes', 'y']);

evalAnswer('Should I have skipped lunch?', ['no', 'n']);

//todo: give them afinal message with their name in the alert

alert(`Thanks for playing ${userName}! You were ${score}/5 today, maybe you can do a little better tomorrow?`);
