'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
  // change secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // 1. score value = 20
  document.querySelector('.score').textContent = '20';
  score = 20;
  // 2. input box number = empty
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // 3. color default
  document.querySelector('body').style.backgroundColor = '#222';
  // 4. secret number hide
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // if no number
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // if correct number
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎆 Correct Number!';
    displayMessage('🎆 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    // chech highscore
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // style change
    document.querySelector('body').style.backgroundColor = '#60b347';

    // if number is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      // score--;
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '0';
      // document.querySelector('.message').textContent = '🙅 You Lost the game!';
      displayMessage('🙅 You Lost the game!');
    }
  }
});
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.score').textContent = '0';
//     document.querySelector('.message').textContent = '🙅 You Lost the game!';
//   }

//   // if number is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.score').textContent = '0';
//     document.querySelector('.message').textContent = '🙅 You Lost the game!';
//   }
// }
// });
('');
