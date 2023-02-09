'use strict';

// TODO: Get useres name and alert greet back to the user
let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}, let's play a guessing game.. please answer yes/y or no/n`);
//todo prompt 5 yes/no or y/n questions when they are correct or in correct

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
//       // console.log('Great Guess');
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
  while (!validAnswers.includes(userAnswer.toLowerCase())) {
    userAnswer = prompt(`You answered ${userAnswer}, and it is not a valid answer. Please enter a valid yes/y no/n answer`);
    // console.log(`User answered ${userAnswer}`)
  }//log number tries and check if answer is right or wrong
  for (let tryNumber = 0; tryNumber < 6; tryNumber ++){
    if (!rightAnswer.includes(userAnswer.toLowerCase())) {
      // console.log(`${userAnswer} is incorrect. Please try again.`);
      prompt(`${userAnswer} is incorrect. Please try again. This is try number ${tryNumber} of six.`);
    } else {
      // console.log('Great Guess');
      alert('Great Guess');
      tryNumber += 6;
      score++;
    }
  }
}


// let score = 0;
// function evalAnswer(question, rightAnswer, validAnswers) {
//   let userAnswer = prompt(question);
//   //Reject invalid answer types
//   let isValid = false;
//   for (let i = 0; i < validAnswers.length; i++) {
//     if (validAnswers[i] === userAnswer.toLowerCase()) {
//       isValid = true;
//       break;
//     }
//   }
//   while (!isValid) {
//     userAnswer = prompt(`You answered ${userAnswer}, and it is not a valid answer. Please enter a valid yes/y no/n answer`);
//     for (let i = 0; i < validAnswers.length; i++) {
//       if (validAnswers[i] === userAnswer.toLowerCase()) {
//         isValid = true;
//         break;
//       }
//     }
//   }
//   //log number tries and check if answer is right or wrong
//   for (let tryNumber = 0; tryNumber < 6; tryNumber ++){
//     let isRight = false;
//     for (let i = 0; i < rightAnswer.length; i++) {
//       if (rightAnswer[i] === userAnswer.toLowerCase()) {
//         isRight = true;
//         break;
//       }
//     }
//     if (!isRight) {
//       prompt(`${userAnswer} is incorrect. Please try again. This is try number ${tryNumber} of six.`);
//     } else {
//       alert('Great Guess');
//       tryNumber += 6;
//       score++;
//     }
//   }
// }

evalAnswer('Do I have a sister', ['yes', 'y'], ['yes', 'y', 'no', 'n',]);

evalAnswer('Am I cool', ['no', 'n'], ['yes', 'y', 'no', 'n',]);

evalAnswer('Is the earth flat?', ['no', 'n'], ['yes', 'y', 'no', 'n',]);

evalAnswer('Are prompt and alert boxes annoying?', ['yes', 'y'], ['yes', 'y', 'no', 'n',]);

evalAnswer('Should I have skipped lunch?', ['no', 'n'], ['yes', 'y', 'no', 'n',]);


//todo: give them afinal message with their name in the alert

alert(`Thanks for playing ${userName}! You scored ${score}/5 today, maybe you can do a little better tomorrow?`);

