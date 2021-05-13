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

//frequently used options
let heartImg = document.querySelector(".heart-button");
let frequentlyText = document.querySelector(".frequently-p");
let dialogBox = document.querySelector(".dialog-box");
frequentlyText.addEventListener("click", showDialog);
let closeWindow = document.querySelector(".close-window");
closeWindow.addEventListener("click", closeDialog);

//time input
let incrementTime = document.querySelector(".up-arrow");
let decrementTime = document.querySelector(".down-arrow");
incrementTime.addEventListener("click", increment);
decrementTime.addEventListener("click", decrement);
let parseTime;

//START
let cloudContent = document.querySelector(".cloud-content");
let bigCloud = document.querySelector(".big-cloud");
let cloudWidth = bigCloud.style.width;
let parseWidth;
let numberShrink = 1;

//second content
let secondContent = document.querySelector(".second-content");
let timerOpacity = 0;

//timer
let timerElement = document.querySelector(".timer");
let startingTime;
let time;
let minutes;
let seconds;
let gongSound = new Audio("gong-sound.mp3");

// document.addEventListener("click", locateClick(this));

// function locateClick(element) {
//   console.log(element);
//   let targetElement = element.target;
//   do {
//     if (targetElement !== dialogBox) {
//       dialogBox.style.display = "none";
//     }
//     targetElement = targetElement.parentNode;
//   } while (targetElement);
// }

// window.addEventListener("click", locateClick(e)

// function locateClick(element) {
//   if (!dialogBox.is(e.target) && dialogBox.has(e.target).length === 0 {
//     dialogBox.hide();
//   }
// }

// //--------------GREETING------------------------//
// window.addEventListener("load", loadHandler);
// let timeBasedGreeting;
// let time;

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
// ---------------- FREQUENTLY USED OPTIONS FEATURE (HEART) ------------------- //
//onmouseover
function heartText() {
  heartImg.style.display = "none";
  frequentlyText.style.display = "block";
}
//onmouseout
function noHeartText() {
  if (dialogBox.style.display !== "block") {
    heartImg.style.display = "block";
    frequentlyText.style.display = "none";
  }
}
//show dialog window //
function showDialog() {
  frequentlyText.style.display = "block";
  heartImg.style.display = "none";
  dialogBox.style.display = "block";
  console.log("show dialog");
  //eventListener
  // body.addEventListener("click", locateClick(event));
}
// close dialog window //
function closeDialog() {
  dialogBox.style.display = "none";
  heartImg.style.display = "block";
  frequentlyText.style.display = "none";
  console.log("show me");
}

function locateClick(event) {
  console.log(event.target.className);
  //rutan ska stängas om man klickar knapp eller X
  if (
    event.target.className === "close-window" ||
    event.target.className === "option-btn"
  ) {
    dialogBox.style.display = "none";
    heartImg.style.display = "block";
  }
  //visar om användare har klickat i rutan = inget händer
  else if (
    event.target.className === "dialog-time-flex" ||
    event.target.className === "dialog-time" ||
    event.target.className === "dialog-theme-flex" ||
    event.target.className === "dialog-theme" ||
    event.target.className === "dialog-bold" ||
    event.target.className === "frequently-p"
  ) {
    console.log("klickade i rutan");
  }
  //klickar utanför rutan
  else {
    dialogBox.style.display = "none";
    heartImg.style.display = "block";
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
  parseTime = parseInt(randomTime.value);
  if (nameInput.value === "") {
    nameInput.style.border = "solid 1px #FF0000";
    nameInput.placeholder = "Please enter this field";
  } else if (nameInput.value !== "") {
    localStorage.setItem("storeName", nameInput.value);
    console.log(parseTime);
    fadeOut();
  }
}

function fadeOut() {
  let fadeEffect = setInterval(function () {
    //no opacity is defined = empty string
    if (cloudContent.style.opacity === "") {
      cloudContent.style.opacity = 1;
    }
    if (cloudContent.style.opacity > 0) {
      cloudContent.style.opacity -= 0.04;
    } else {
      clearInterval(fadeEffect);
      cloudContent.style.display = "none";
      shrinkCloud();
    }
  }, 30);
}

function shrinkCloud() {
  bigCloud.classList.add("run-keyframe");
  bigCloud.style.transform = "scale(0.5)";
  readTimer();
}

function readTimer() {
  timerElement.innerHTML = parseTime + ":00";
  setTimeout(fadeIn, 1500);
}

function fadeIn() {
  let secondFadeEffect = setInterval(function () {
    //no opacity is defined = empty string
    if (timerOpacity === 0) {
      secondContent.style.display = "block";
    }
    if (timerOpacity <= 1) {
      console.log(timerOpacity);
      timerOpacity += 0.04;
      secondContent.style.opacity = timerOpacity;
    } else {
      clearInterval(secondFadeEffect);
    }
  }, 30);
  startTimer();
}

function startTimer() {
  startingTime = parseTime;
  time = startingTime * 60;
  let timerCountdown = setInterval(function () {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }
    timerElement.innerHTML = minutes + ":" + seconds;
    time--;

    if (minutes === 0 && seconds === "0" + 0) {
      clearInterval(timerCountdown);
      timerElement.innerHTML = "0:00";
      if (mute === false) {
        audio.pause();
        gongSound.play();
      } else {
        gongSound.play();
      }
    }
  }, 1000);
}

// function shrinkCloud() {
//   let scaleEffect = setInterval(function () {
//     let cloudScale = "scale(" + numberShrink + ")";
//     bigCloud.style.transform = cloudScale;
//     if (numberShrink === 1.1) {
//       boolean = true;
//     } else if (numberShrink < 1.1 && boolean === false) {
//       numberShrink += 0.05;
//       console.log(numberShrink);
//     } else if (numberShrink <= 1.1 && numberShrink > 0.5 && boolean === true) {
//       numberShrink -= 0.05;
//     } else {
//       clearInterval(scaleEffect);
//     }
//   }, 20);
// }

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
