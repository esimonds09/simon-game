// Boolean flag to indicate game has started
let gameStarted = false;

// Level indicator
let level = 0;

// Empty array to hold the game colors
let gamePattern = [];

// Array of color pattern chosen by user
let userClickedPattern = [];

// Button colors available for selection
let buttonColors = ["red", "blue", "green", "yellow"];

// Capture the user clicked button
$(".btn").click(function (e) {
  let colorClicked = e.target.classList[1];
  // Add selected color to array
  userClickedPattern.push(colorClicked);
  // Animate button
  animatePress(colorClicked);
  //Call to playSound function
  playSound(colorClicked);
  let colorIndex = userClickedPattern.length - 1;
  // Send index to check answer
  checkAnswer(colorIndex);
});

// Button click to begin the game
$(document).keypress(function () {
  if (!gameStarted) {
    // Call nextSequence to choose color
    nextSequence();
    // Change heading to indicate the current level
    $("h1").text(`Level ${level}`);
    // Indicate game has started
    gameStarted = true;
  }
});

// Function to choose next game color
function nextSequence() {
  // Increase the level
  level++;
  // Update header
  $("h1").text(`Level ${level}`);
  // Creates random number between 0-3
  let randomNumber = Math.floor(Math.random() * 4);
  // Choose a random color from the color button array with random number
  let randomChosenColor = buttonColors[randomNumber];
  // Adds the random color to the array
  gamePattern.push(randomChosenColor);
  // Call to playSound function
  playSound(randomChosenColor);
  // Create a button flash effect for chosen button color
  $(`#${randomChosenColor}`).fadeIn(50).fadeOut(50).fadeIn(50);
}

// Create function to play sounds
function playSound(name) {
  // Create an audio for selected button color
  let buttonAudio = new Audio(`./sounds/${name}.mp3`);
  // Play audio
  buttonAudio.play();
}

// Function to animate button press
function animatePress(currentColor) {
  // Add pressed class to the selected button
  $(`#${currentColor}`).addClass("pressed");
  // Remove pressed class from selected button after 100ms
  setTimeout(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

// Function to check answers
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Failure");
    // Play game over sound
    playSound("wrong");
    // Add game over effect to the game background
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game over. Press any key to restart!");
    startOver();
  }
}

// Reset the game variables
function startOver() {
  userClickedPattern = [];
  gamePattern = [];
  gameStarted = false;
  level = 0;
}
