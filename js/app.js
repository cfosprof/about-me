'use strict';

// TODO: Get useres name and alert greet back to the user
let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}, let's play a guessing game.. please answer yes/y or no/n`);
//todo prompt 5 yes/no or y/n questions when they are correct or in correct


// this is my original function that used the includes() method
// let score = 0;
// function evalAnswer(question, rightAnswer, validAnswers) {
//   let userAnswer = prompt(question);
//   //Reject invalid answer types
//   while (!validAnswers.includes(userAnswer.toLowerCase())) {
//     userAnswer = prompt(`You answered ${userAnswer}, and it is not a valid answer. Please enter a valid yes/y no/n answer`);
//     // console.log(`User answered ${userAnswer}`)
//   }//log number tries and check if answer is right or wrong
//   for (let tryNumber = 0; tryNumber < 6; tryNumber ++){
//     if (!rightAnswer.includes(userAnswer.toLowerCase())) {
//       // console.log(`${userAnswer} is incorrect. Please try again.`);
//       prompt(`${userAnswer} is incorrect. Please try again. This is try number ${tryNumber} of six.`);
//     } else {
//       // console.log('Great Guess');s
//       alert('Great Guess');
//       tryNumber += 6;
//       score++;
//     }
//   }
// }


let score = 0;
function evalAnswer(question, rightAnswer, validAnswers) {
  let userAnswer = prompt(question);
  //Reject invalid answer types
  let isValid = false;
  //if isValid never switches to false they never break out of this
  //checks the userAnswer across each valid answer
  for (let i = 0; i < validAnswers.length; i++) {
    if (validAnswers[i] === userAnswer.toLowerCase()) {
      isValid = true;
      break;
    }
  }
  //Now that we've established it is a valid answer we check whethere the answer is the correct answer and ask them to guess again if the answer was not correct.
  while (!isValid) {
    userAnswer = prompt(`You answered ${userAnswer}, and it is not a valid answer. Please enter a valid yes/y no/n answer`);
    for (let i = 0; i < validAnswers.length; i++) {
      if (validAnswers[i] === userAnswer.toLowerCase()) {
        isValid = true;
        break;
      }
    }
  }
  //log number tries and check if answer is right or wrong isRight will break from loop and move on to great guess
  for (let tryNumber = 0; tryNumber < 6; tryNumber ++){
    let isRight = false;
    for (let i = 0; i < rightAnswer.length; i++) {
      if (rightAnswer[i] === userAnswer.toLowerCase()) {
        isRight = true;
        break;
      }
    }
    if (!isRight) {
      prompt(`${userAnswer} is incorrect. Please try again. This is try number ${tryNumber} of six.`);
      if (tryNumber === 5){
        alert(`You've run out of guesses, the right answers were ${rightAnswer}`);
      }
    } else {
      alert('Great Guess');
      tryNumber += 6;
      score++;
    }
  }
}


function guessAge(answer) {
  let userGuess;
  let attempts = 0;

  while (attempts < 4) {
    userGuess = parseInt(prompt('Guess my age:'));
    attempts++;
    if (userGuess === answer) {
      alert('You are right and I am getting old');
      break;
    } else if (userGuess > answer) {
      alert(`${userGuess} is getting too high, and be careful this is getting insulting. This is attempt ${attempts}/4`);
    } else if (userGuess < answer) {
      alert(`That is too low. This is attempt: ${attempts}/4`);
    }
  }
  if (attempts === 4 && userGuess !== answer) {
    alert(`You ran out of attempts. The correct answer was ${answer}`);
  }
}



evalAnswer('Do I have a sister', ['yes', 'y'], ['yes', 'y', 'no', 'n',]);

// evalAnswer('Am I cool', ['no', 'n'], ['yes', 'y', 'no', 'n',]);

// evalAnswer('Is the earth flat?', ['no', 'n'], ['yes', 'y', 'no', 'n',]);

// evalAnswer('Are prompt and alert boxes annoying?', ['yes', 'y'], ['yes', 'y', 'no', 'n',]);

// evalAnswer('Should I have skipped lunch?', ['no', 'n'], ['yes', 'y', 'no', 'n',]);

// guessAge(31);

evalAnswer('What are some of my favorite movies?', ['Without a Paddle','accepted', 'inception']);


//todo: give them afinal message with their name in the alert

alert(`Thanks for playing ${userName}! You scored ${score}/5 today, maybe you can do a little better tomorrow?`);

