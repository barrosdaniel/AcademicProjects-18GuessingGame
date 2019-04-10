// Players must guess a number between a min and max
// PLayers get a certain number of guesses
// Notify players of remaining guesses
// Notify player of the correct answer if lose
// Let player choose to play again

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct. You won!`, "green");
    console.log("Correct guess");
  } else {
    console.log("Wrong guess");
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
