// //comment
// var rainButton = document.querySelector(".rain");

// var oceanButton = document.querySelector(".ocean");
// var forestButton = document.querySelector(".forest");
// var fireButton = document.querySelector(".fire");

// var background = "rain";
// let audioPlaying = true;
// audio = new Audio("rain-sound.mp3");
// audio.play();

// rainButton.addEventListener("click", rainPlay);
// oceanButton.addEventListener("click", oceanPlay);
// forestButton.addEventListener("click", forestPlay);
// fireButton.addEventListener("click", firePlay);

// function rainPlay() {
//   background = "rain";
//   document.body.style.backgroundImage = "url('rain.jpeg')";

//   if (audioPlaying === true) {
//     audio.pause();
//     audio = new Audio("rain-sound.mp3");
//     audio.play();
//   } else if (audioPlaying === false) {
//     audio.pause();
//   }
// }
// function oceanPlay() {
//   background = "ocean";
//   document.body.style.backgroundImage = "url('ocean.jpeg')";

//   if (audioPlaying === true) {
//     audio.pause();
//     audio = new Audio("ocean-sound.mp3");
//     audio.play();
//   } else if (audioPlaying === false) {
//     audio.pause();
//   }
// }

// function forestPlay() {
//   background = "forest";
//   document.body.style.backgroundImage = "url('forest.jpeg')";

//   if (audioPlaying === true) {
//     audio.pause();
//     audio = new Audio("forest-sound.mp3");
//     audio.play();
//   } else if (audioPlaying === false) {
//     audio.pause();
//   }
// }

// function firePlay() {
//   background = "fire";
//   document.body.style.backgroundImage = "url('fire.jpeg')";

//   if (audioPlaying === true) {
//     audio.pause();
//     audio = new Audio("fire-sound.mp3");
//     audio.play();
//   } else if (audioPlaying === false) {
//     audio.pause();
//   }
// }

// // control timer button //
// var playElement = document.querySelector(".play");
// playElement.addEventListener("click", startStop);
// var timerPlaying = true;

// function startStop() {
//   if (timerPlaying === true) {
//     timerPlaying = false; //timer played
//     playElement.src = "pause-button.png";
//   } else if (timerPlaying === false) {
//     timerPlaying = true; //timer played
//     playElement.src = "play-button.png";
//   }
// }

// var audioElement = document.querySelector(".sound-symbol");
// audioElement.addEventListener("click", soundOnOff);

// function soundOnOff() {
//   if (audioPlaying === true) {
//     audioPlaying = false; //audio is now off
//     audioElement.src = "sound-off.png";
//     audio.pause();
//   } else if (audioPlaying === false) {
//     audioPlaying = true; //audio is now on
//     audioElement.src = "sound-on.png";
//     if (background === "rain") {
//       audio = new Audio("rain-sound.mp3");
//       audio.play();
//     } else if (background === "ocean") {
//       audio = new Audio("ocean-sound.mp3");
//       audio.play();
//     } else if (background === "forest") {
//       audio = new Audio("forest-sound.mp3");
//       audio.play();
//     } else if (background === "fire") {
//       audio = new Audio("fire-sound.mp3");
//       audio.play();
//     }
//   }
// }
// console.log(audioPlaying);
