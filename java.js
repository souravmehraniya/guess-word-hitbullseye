const answers = ['France', 'Italy', 'Germany', 'Spain', 'Greece'];
const answer = answers[Math.floor(Math.random() * answers.length)];

const form = document.getElementById('guess-form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const guess = document.getElementById('guess-input').value;
  if (guess === answer) {
    result.textContent = 'You win! The answer is ' + answer + '.';
  } else {
    result.textContent = 'Sorry, try again.';
  }
});
