let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attemptsRemaining = 10;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guessesDisplay = document.querySelector('.guesses');
const lastResultDisplay = document.querySelector('.lastResult');
const lowOrHiDisplay = document.querySelector('.lowOrHi');

function checkGuess(event) {
  event.preventDefault();
  
  const userGuess = Number(guessField.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    lowOrHiDisplay.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  guesses.push(userGuess);
  guessesDisplay.textContent = guesses.join(', ');
  attemptsRemaining--;
  lastResultDisplay.textContent = attemptsRemaining;

  if (userGuess === randomNumber) {
    lowOrHiDisplay.textContent = 'Congratulations! You guessed the number!';
    lowOrHiDisplay.style.color = '#4CAF50';
    endGame();
  } else if (attemptsRemaining === 0) {
    lowOrHiDisplay.textContent = `Game over! The correct number was ${randomNumber}.`;
    lowOrHiDisplay.style.color = '#f44336';
    endGame();
  } else {
    if (userGuess < randomNumber) {
      lowOrHiDisplay.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
      lowOrHiDisplay.textContent = 'Too high! Try again.';
    }
    lowOrHiDisplay.style.color = '#ffeb3b';
  }

  guessField.value = '';
  guessField.focus();
}

function endGame() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  resetButton.style.backgroundColor = '#4CAF50';
  resetButton.style.color = 'white';
  resetButton.style.padding = '10px 20px';
  resetButton.style.border = 'none';
  resetButton.style.borderRadius = '5px';
  resetButton.style.cursor = 'pointer';
  resetButton.style.marginTop = '10px';
  resetButton.style.marginBottom = '10px';
  resetButton.style.fontSize = '16px';
  resetButton.style.fontWeight = 'bold';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  attemptsRemaining = 10;
  guesses = [];
  randomNumber = Math.floor(Math.random() * 100) + 1;

  guessesDisplay.textContent = '';
  lastResultDisplay.textContent = attemptsRemaining;
  lowOrHiDisplay.textContent = '';

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  const resetButton = document.querySelector('button');
  resetButton.remove();
}

guessSubmit.addEventListener('click', checkGuess);
