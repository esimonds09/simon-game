// Empty array to hold the game colors
let gamePattern = [];

// Array of color pattern chosen by user
let userClickedPattern = [];

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

// Capture the user clicked button
$(".btn").click(function (e) {
  let colorClicked = e.target.classList[1];
  // Add selected color to array
  userClickedPattern.push(colorClicked);
  //Call to playSound function
  playSound(colorClicked);
});
