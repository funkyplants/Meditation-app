let selectedTheme = document.querySelector("#theme");
console.log(selectedTheme.value);
let audio = new Audio("rain-sound.mp3");

let soundBtn = document.querySelector(".sound");
soundBtn.addEventListener("click", soundPlaying);
let mute = true;
let starImg = document.querySelector(".star-button");
let luckyText = document.querySelector(".lucky-p");
luckyText.addEventListener("click", randomizeSettings);
let randomTime = document.querySelector(".time-input");
randomTheme = document.querySelector("#theme");
let nameInput = document.querySelector(".input-name");
let startBtn = document.querySelector("#start-btn");
let greeting = document.querySelector(".greeting");

let personInfo;
let parseInfo;

//-------ASK GARRIT
// let timeSeconds = document.querySelector(".time-input");
// timeSeconds.value = timeSeconds.value + ":00";

// function loadHandler() {
//   console.log("window is loaded");
//   if (localStorage.personInfo == undefined) {
//     let greeting = document.querySelector(".greeting");
//     greeting.innerHTML = "Good Morning!";
//   } else {
//     parseInfo = JSON.parse(localStorage.personInfo);
//     console.log(personInfo);
//     let greeting = document.querySelector(".greeting");
//     greeting.innerHTML = "Good Morning " + personInfo.name + "!";
//   }
// }

function starText() {
  starImg.style.display = "none";
  luckyText.style.display = "block";
}
function noStarText() {
  starImg.style.display = "block";
  luckyText.style.display = "none";
}
function randomizeSettings() {
  //time
  randomTime.value = 5 * (Math.floor(Math.random() * 6) + 1);

  //theme
  let themes = ["rain", "ocean", "forest", "fire"];
  randomTheme.value = themes[Math.floor(Math.random() * 4)];
  if (randomTheme.value === "rain") {
    rainPlay();
  } else if (randomTheme.value === "ocean") {
    oceanPlay();
  } else if (randomTheme.value === "forest") {
    forestPlay();
  } else if (randomTheme.value === "fire") {
    firePlay();
  }

  // Math.floor(Math.random() * themes.length) + 1;
}

function soundPlaying() {
  if (mute === true) {
    soundBtn.src = "sound-on.svg";
    audio.play();
    mute = false;
  } else if (mute === false) {
    soundBtn.src = "sound-off.svg";
    audio.pause();
    mute = true;
  }
}

function previewFunction() {
  console.log(selectedTheme.value);
  if (selectedTheme.value === "rain") {
    rainPlay();
  } else if (selectedTheme.value === "ocean") {
    oceanPlay();
  } else if (selectedTheme.value === "forest") {
    forestPlay();
  } else if (selectedTheme.value === "fire") {
    firePlay();
  }
}

function rainPlay() {
  if (mute === true) {
    audio.pause();
    audio = new Audio("rain-sound.mp3");
  } else if (mute === false) {
    audio.pause();
    audio.play();
  }

  document.body.style.backgroundImage = "url('rain.jpeg')";
}

function oceanPlay() {
  if (mute === true) {
    audio.pause();
    audio = new Audio("ocean-sound.mp3");
  } else if (mute === false) {
    audio.pause();
    audio = new Audio("ocean-sound.mp3");
    audio.play();
  }

  document.body.style.backgroundImage = "url('ocean.jpeg')";
}

function forestPlay() {
  if (mute === true) {
    audio.pause();
    audio = new Audio("forest-sound.mp3");
  } else if (mute === false) {
    audio.pause();
    audio = new Audio("forest-sound.mp3");
    audio.play();
  }

  document.body.style.backgroundImage = "url('forest.jpeg')";
}
function firePlay() {
  if (mute === true) {
    audio.pause();
    audio = new Audio("fire-sound.mp3");
  } else if (mute === false) {
    audio.pause();
    audio = new Audio("fire-sound.mp3");
    audio.play();
  }

  document.body.style.backgroundImage = "url('fire.jpeg')";
}

// --------------------START BUTTON

startBtn.addEventListener("click", startMeditation);

function startMeditation() {
  if (nameInput.value === "") {
    nameInput.style.border = "solid 1px #FF0000";
    console.log("hej");
    nameInput.placeholder = "Please enter this field";
    
  }
  else if (nameInput.value !== "") {
    personInfo = {
      name: nameInput.value, 
      time: randomTime.value,
      theme: randomTheme.value,
    };
  // else if (nameInput.value !== "") {
  //   // object //
    // personInfo = {
    //   name: nameInput.value,
    //   time: randomTime.value,
    //   theme: randomTheme.value,
    // };
    // localStorage.personInfo = JSON.stringify(personInfo);
  //   // parseInfo = JSON.parse(localStorage.personInfo);
  //   // greeting.innerHTML = "Good Morning " + personInfo.name + "!";
  // }
}

// object //
// personInfo = {
//   name: document.getElementById("name").value,
// };

// window.addEventListener("load", loadHandler);

// oceanOption.addEventListener("select", oceanPreview);

// function oceanPreview() {
//   console.log("working");
// }

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
