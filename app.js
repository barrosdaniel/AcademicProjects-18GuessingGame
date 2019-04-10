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
  else if (guess === winningNum) {
    //
    // Game over - won
    // Disable input field
    guessInput.disabled = true;
    // Change input border colour
    guessInput.style.borderColor = "green";
    // Set message
    setMessage(`${winningNum} is correct. You won!`, "green");
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - lost
      // Disable input field
      guessInput.disabled = true;
      // Change input border colour
      guessInput.style.borderColor = "red";
      // Set message
      setMessage(
        `Game over. You lost. The correct number was ${winningNum}.`,
        "red"
      );
    } else {
      // Game continues - wrong answer
      // Change input border colour
      guessInput.style.borderColor = "red";
      // Set message
      setMessage(`Incorrect guess. ${guessesLeft} guesses left.`, "red");
      // Clear input
      guessInput.value = "";
    }
    console.log(guessesLeft);

    console.log("Wrong guess");
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
