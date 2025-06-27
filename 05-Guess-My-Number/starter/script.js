'use strict';

// //logging the message class (start guessing)
// console.log(document.querySelector('.message').textContent)
// //changeing the text conetent in dom from start guessing -> correct Number
// console.log(document.querySelector('.message').textContent='correct Number!')
// //changing  the highscore in dom from 0->15
// document.querySelector('.highscore').textContent=15
// console.log(document.querySelector('.highscore').textContent=15);

//project starts!

//s2-> generating random
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//creating a function for meesage
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
 const displayScore=function (score){
  document.querySelector('.score').textContent=score
 }

//////////////////////////////////////////////////////////////////////
// s1-> adding event listerner for click button.

//selecting the button using class (.check)
//adding event lister for it
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //if no input!
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }
  // when guess is correct
  else if (secretNumber === guess) {
    // document.querySelector('.message').textContent = '💃 Correct Guess!';
    displayMessage('💃 Correct Guess!');
    document.querySelector('body').style.backgroundColor = 'palevioletred';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is different (high/low) 
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too High!' : '📉Too Low!';

      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score)
    } else {
      // document.querySelector('.message').textContent = '👎 You Lost!';
      displayMessage('👎 You Lost!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0)
    }
  }
 
  // when guess is high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎 You Lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   // when guess is high
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '👎 You Lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score)
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});




