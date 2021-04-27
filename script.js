//AUDIO
let audio = new Audio("rain-sound.mp3");
let soundBtn = document.querySelector(".sound");
soundBtn.addEventListener("click", soundPlaying);
let mute = true; //see if audio is playing or not

//Feeling lucky?
let starImg = document.querySelector(".star-button");
let luckyText = document.querySelector(".lucky-p");
luckyText.addEventListener("click", randomizeSettings);
let randomTime = document.querySelector(".time-input");
let randomTheme = document.querySelector("#theme");
let nameInput = document.querySelector(".input-name");
let startBtn = document.querySelector("#start-btn");
let greeting = document.querySelector(".greeting");

//time input
let incrementTime = document.querySelector(".up-arrow");
let decrementTime = document.querySelector(".down-arrow");
incrementTime.addEventListener("click", increment);
decrementTime.addEventListener("click", decrement);
let parseTime;

//--------------GREETING------------------------//
window.addEventListener("load", loadHandler);
let timeBasedGreeting;
let time;

function loadHandler() {
  //change greeting depending on hour
  time = new Date().getHours();
  console.log("window is loaded");
  console.log(time);
  if (time < 12) {
    timeBasedGreeting = "Good Morning";
  } else if (time < 18) {
    timeBasedGreeting = "Good Day";
  } else if (time <= 18) {
    timeBasedGreeting = "Good Night";
  }
  // localStorage for the name //
  if (localStorage.getItem("storeName") === null) {
    greeting.innerHTML = timeBasedGreeting;
  } else {
    readName = localStorage.getItem("storeName");
    greeting.innerHTML = timeBasedGreeting + " " + readName + "!";
  }
}

// --------------- TIMER-SECTION ------------- //
function checkNumber() {
  // isNAN = is not a number, so if "not a number" = false, it IS a number //
  if (isNaN(randomTime.value) == false) {
    console.log("number");
    parseTime = parseInt(randomTime.value);
    randomTime.value = parseTime + ":00";
    console.log(parseTime);
    randomTime.style.border = "solid 1px rgb(145, 145, 145)";
    randomTime.placeholder = "";
  } else {
    console.log("not a number");
    randomTime.style.border = "solid 1px #FF0000";
    randomTime.value = "";
    randomTime.placeholder = "Error";
  }
}

function increment() {
  let parseTime;
  if (randomTime.placeholder !== "Error") {
    parseTime = parseInt(randomTime.value);
    console.log(parseTime);
    randomTime.value = parseTime + 5 + ":00";
  } else if (randomTime.placeholder === "Error") {
    parseTime = 5;
    randomTime.value = parseTime + ":00";
    randomTime.placeholder = "";
    randomTime.style.border = "solid 1px rgb(145, 145, 145)";
  }
  if (parseTime % 5 !== 0) {
    console.log("remainder");
    let remainder = parseTime % 5;
    //hur mycket ska vi runda upp?
    let roundUp = 5 - remainder;
    parseTime += roundUp;
    randomTime.value = parseTime + ":00";
    console.log(parseTime);
    console.log(randomTime.value);
  }
}
function decrement() {
  let parseTime;
  if (randomTime.placeholder !== "Error") {
    parseTime = parseInt(randomTime.value);
    console.log(parseTime);
  } else if (randomTime.placeholder === "Error") {
    parseTime = 5;
    randomTime.value = parseTime + ":00";
    randomTime.placeholder = "";
    randomTime.style.border = "solid 1px rgb(145, 145, 145)";
  }
  if (parseTime > 5) {
    randomTime.value = parseTime - 5 + ":00";
  }
  if (parseTime % 5 !== 0) {
    console.log("remainder");
    let remainder = parseTime % 5;
    //hur mycket ska vi runda upp?
    parseTime -= remainder;
    randomTime.value = parseTime + ":00";
    console.log(parseTime);
    console.log(randomTime.value);
  }
}

// ---------------- RANDOMIZATION FEATURE (STAR) ------------------- //
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
  randomTime.value = 5 * (Math.floor(Math.random() * 6) + 1) + ":00";

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
}

// ------------- AUDIO --------------- //

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
  console.log(randomTheme.value);
  if (randomTheme.value === "rain") {
    rainPlay();
  } else if (randomTheme.value === "ocean") {
    oceanPlay();
  } else if (randomTheme.value === "forest") {
    forestPlay();
  } else if (randomTheme.value === "fire") {
    firePlay();
  }
}

function rainPlay() {
  if (mute === true) {
    audio.pause();
    audio = new Audio("rain-sound.mp3");
  } else if (mute === false) {
    audio.pause();
    audio = new Audio("rain-sound.mp3");
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

// --------------------START BUTTON---------------------- //

startBtn.addEventListener("click", startMeditation);

function startMeditation() {
  if (nameInput.value === "") {
    nameInput.style.border = "solid 1px #FF0000";
    nameInput.placeholder = "Please enter this field";
  } else if (nameInput.value !== "") {
    localStorage.setItem("storeName", nameInput.value);
  }
}

// window.addEventListener("load", loadHandler);

// if (localStorage.getItem("names") === null) {
//   names.unshift(nameInput.value);
//   localStorage.setItem("names", JSON.stringify(names));
//   console.log(names);
//   console.log(nameInput.value);
// } else {
//   storedNames = JSON.parse(localStorage.getItem("names"));
//   names.unshift(nameInput.value);
//   localStorage.setItem("names", JSON.stringify(names));
// }

// personInfo = {
//   name: nameInput.value,
//   time: randomTime.value,
//   theme: randomTheme.value,
// };

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

// object //
// personInfo = {
//   name: document.getElementById("name").value,
// };

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
//   }
// }
// console.log(audioPlaying);
