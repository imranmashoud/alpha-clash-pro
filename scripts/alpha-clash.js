// function play() {
//   //   console.log("Play Start now");
//   // Step -2: Hide the home screen, to hide home screen add the class hidden to the home section.
//   const homeSection = document.getElementById("home-screen");
//   //   console.log(homeSection);
//   homeSection.classList.add("hidden");
//   /* ************************************* */

//   // Show Playground section
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  // console.log("Button pressed");
  const playerPressed = event.key;
  // console.log("Player Pressed", playerPressed);

  // Stop game if press "Esc"

  if (playerPressed === "Escape") {
    gameOver();
  }

  // Get the expected to press.
  const currentAlphabetElement = document.getElementById("current-alphabet");
  // console.log(currentAlphabetElement.innerText);
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // Checked matched or not

  if (playerPressed === expectedAlphabet) {
    console.log("You get a point");

    const currentScore = getTextElementValueById("current-score");
    console.log(currentScore);
    const updatedScore = currentScore + 1;

    setTextElementValueById("current-score", updatedScore);

    /* ************************************************** */
    // Update Score.
    // 1. Get the current score.
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // 2. Increase the score 1.
    // const newScore = currentScore + 1;
    // // 3. Show the update score.
    // currentScoreElement.innerText = newScore;
    // Start a new round.
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You lost a life.");

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      // console.log("game over");
      gameOver();
    }

    /* ************************************************ */
    // 1. Get current life no.
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // 2. Reduce the life count.
    // const newLife = currentLife - 1;
    // // 3. display the updated life count.
    // currentLifeElement.innerText = newLife;
  }
}
// Capture keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // Step -1: Generate a random alphabet
  const alphabet = getRandomAlphabet();
  console.log(alphabet);

  //   Set randomly generated alphabet to display
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //   Set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");

  // Resetting Score and Life Value
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // Update final score
  // 1. Get final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  // clear last selected alphabet
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
