// Empty array to hold the game colors
let gamePattern = [];

// Button colors available for selection
let buttonColors = ["red", "blue", "green", "yellow"];

// Function to choose next game color
function nextSequence() {
  // Creates random number between 0-3
  let randomNumber = Math.floor(Math.random() * 4);
  // Choose a random color from the color button array with random number
  let randomChosenColor = buttonColors[randomNumber];
  // Adds the random color to the array
  gamePattern.push(randomChosenColor);
}
