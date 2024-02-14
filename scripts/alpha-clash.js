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

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
}
