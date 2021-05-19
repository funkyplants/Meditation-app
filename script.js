//AUDIO
let audio = new Audio("rain-sound.mp3");
let soundBtn = document.querySelector(".sound");
soundBtn.addEventListener("click", soundPlaying);
let mute = true; //see if audio is playing or not

//greeting localStorage
askForName = document.querySelector(".name-p");
let windowLoadedFirst;

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
let originalTime;

//play, pause, stop buttons
let pauseBtn = document.querySelector(".pause-btn");
let stopBtn = document.querySelector(".stop-btn");
pauseBtn.addEventListener("click", playPause);
stopBtn.addEventListener("click", stopTimer);
let timerPlaying = true; //timer is playing => pause button is displayed
let confirmDialog = document.querySelector(".confirm-box");
let okBtn = document.querySelector(".ok-btn");
let cancelBtn = document.querySelector(".cancel-btn");
okBtn.addEventListener("click", okFunction);
cancelBtn.addEventListener("click", cancelFunction);
let cloudContentOpacity = 0;

// third content
let thirdContent = document.querySelector(".third-content");
let thirdContentOpacity = 0;
let yesBtn = document.querySelector(".yes-btn");
let returnBtn = document.querySelector(".return-btn");
yesBtn.addEventListener("click", yesBtnFade);
returnBtn.addEventListener("click", returnBtnFade);
let clickedRestart;
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
window.addEventListener("load", loadHandler);
let timeBasedGreeting;
let timeOfDay;

function loadHandler() {
  cloudContent.style.opacity = 0;
  windowLoadedFirst = true;
  readGreeting();
}

function readGreeting() {
  //change greeting depending on hour
  timeOfDay = new Date().getHours();
  console.log("window is loaded");
  // localStorage for the name //
  if (localStorage.getItem("storeName") === null) {
    if (timeOfDay < 12) {
      timeBasedGreeting = "Good Morning!";
    } else if (timeOfDay < 18) {
      timeBasedGreeting = "Good Day!";
    } else if (timeOfDay <= 18) {
      timeBasedGreeting = "Good Night!";
    }
    greeting.innerHTML = timeBasedGreeting;
  } else {
    if (timeOfDay < 12) {
      timeBasedGreeting = "Good Morning";
    } else if (timeOfDay < 18) {
      timeBasedGreeting = "Good Day";
    } else if (timeOfDay <= 18) {
      timeBasedGreeting = "Good Night";
    }
    readName = localStorage.getItem("storeName");
    askForName.innerHTML = "Not you? What's your name?";
    greeting.innerHTML = timeBasedGreeting + " " + readName + "!";
  }
  nameInput.value = "";
  if (windowLoadedFirst === true) {
    windowLoadedFirst = false;
    setTimeout(fadeInCloudContent, 500);
  } else if (windowLoadedFirst === false) {
    setTimeout(fadeInCloudContent, 2000);
  }
}

// --------------- TIMER-INPUT ------------- //
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
  timerPlaying = true;
  originalTime = parseTime;
  parseTime = parseInt(randomTime.value);
  if (nameInput.value === "" && localStorage.getItem("storeName") === null) {
    nameInput.style.border = "solid 1px #FF0000";
    nameInput.style.borderRadius = "3px";
    nameInput.placeholder = "Please enter this field";
  } else if (
    nameInput.value !== "" ||
    localStorage.getItem("storeName") !== null
  ) {
    nameInput.style.border = "solid 1px rgb(145, 145, 145)";
    nameInput.style.borderRadius = "3px";
    nameInput.placeholder = "Your name here...";
    if (nameInput.value !== "") {
      localStorage.setItem("storeName", nameInput.value);
    }
    console.log(parseTime);
    startPgFadeOut();
  }
}

function startPgFadeOut() {
  let fadeEffect = setInterval(function () {
    //no opacity is defined = empty string
    if (cloudContent.style.opacity === "") {
      cloudContent.style.opacity = 1;
    }
    if (cloudContent.style.opacity > 0) {
      cloudContent.style.opacity -= 0.04;
    } else {
      clearInterval(fadeEffect);
      cloudContentOpacity = 0;
      cloudContent.style.display = "none";
      shrinkCloud();
    }
  }, 30);
}

function shrinkCloud() {
  bigCloud.classList.add("scale-down-keyframe");
  bigCloud.style.transform = "scale(0.5)";
  readTimer();
}

//read the value from the timer input and display in html
function readTimer() {
  if (clickedRestart === true) {
    timerElement.innerHTML = originalTime + ":00";
  } else {
    timerElement.innerHTML = parseTime + ":00";
  }
  setTimeout(timerFadeIn, 1500);
}
//second content fades in
function timerFadeIn() {
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

//the timer itself
function startTimer() {
  if (clickedRestart === true) {
    startingTime = originalTime;
    clickedRestart = false;
  } else {
    startingTime = parseTime; //the time the user has chosen
  }
  time = startingTime * 60; //how many seconds (time chosen * 60)
  timerCountdown = setInterval(function () {
    minutes = Math.floor(time / 60); // get the closest minute rounded down
    seconds = time % 60; //the rest from time/60 - the rest of the seconds when we got the minutes

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
      //pause potential sound and play GONG
      if (mute === false) {
        audio.pause();
        gongSound.play();
      } else {
        gongSound.play();
      }
      //second content fades out
      setTimeout(timerComplete, 1200);
    }
  }, 1000);
}

//play/pause buttons
function playPause() {
  //we want to PAUSE the TIMER
  if (timerPlaying === true) {
    pauseBtn.src = "play-btn.png";
    timerPlaying = false;
    clearInterval(timerCountdown);
    parseTime = time / 60;
    console.log(parseTime);
    audio.pause();
  }
  //we want to PLAY the TIMER
  else {
    pauseBtn.src = "pause-btn.png";
    timerPlaying = true;
    if (mute !== true) {
      audio.play();
    }
    startTimer();
  }
}

//stop button, display dialog box (quit)
function stopTimer() {
  if (
    confirmDialog.style.display === "" ||
    confirmDialog.style.display === "none"
  ) {
    confirmDialog.style.display = "block";
  }
}

//ok button dialog box (quit)
function okFunction() {
  confirmDialog.style.display = "none";
  let fadeTimerContent = setInterval(function () {
    if (secondContent.style.opacity === "") {
      secondContent.style.opacity = 1;
    }
    if (secondContent.style.opacity > 0) {
      secondContent.style.opacity -= 0.04;
    } else {
      clearInterval(fadeTimerContent);
      timerOpacity = 0;
      secondContent.style.display = "none";
    }
  }, 30);
  bigCloud.classList.remove("scale-down-keyframe");
  bigCloud.classList.add("scale-up-keyframe");
  bigCloud.style.transform = "scale(1)";
  //reset timer
  timerPlaying = false;
  clearInterval(timerCountdown);
  audio.pause();
  //reset mute button
  soundBtn.src = "sound-off.svg";
  mute = true;
  //reset play/pause button
  pauseBtn.src = "pause-btn.png";
  readGreeting();
  // setTimeout(fadeInCloudContent, 2000);
}

//fade in start page when returning from quit-button
function fadeInCloudContent() {
  bigCloud.classList.remove("scale-up-keyframe");
  let cloudContentFadeIn = setInterval(function () {
    //no opacity is defined = empty string
    console.log(cloudContentOpacity);
    if (cloudContentOpacity === 0 || cloudContent.style.display === "none") {
      cloudContent.style.display = "block";
    }
    if (cloudContentOpacity <= 1) {
      console.log(cloudContentOpacity);
      cloudContentOpacity += 0.04;
      cloudContent.style.opacity = cloudContentOpacity;
      console.log(cloudContentOpacity);
    } else {
      clearInterval(cloudContentFadeIn);
    }
  }, 30);
}

function cancelFunction() {
  //hej
  confirmDialog.style.display = "none";
}

// -------------------------------------- WHEN TIMER COMPLETED -------------------------- //

function timerComplete() {
  bigCloud.classList.remove("scale-down-keyframe");
  let fadeTimerContent = setInterval(function () {
    if (secondContent.style.opacity === "") {
      secondContent.style.opacity = 1;
    }
    if (secondContent.style.opacity > 0) {
      secondContent.style.opacity -= 0.04;
    } else {
      clearInterval(fadeTimerContent);
      timerOpacity = 0;
      secondContent.style.display = "none";
    }
  }, 30);
  let thirdContentFadeIn = setInterval(function () {
    //no opacity is defined = empty string
    console.log(thirdContentOpacity);
    if (thirdContentOpacity === 0 || thirdContent.style.display === "none") {
      thirdContent.style.display = "block";
    }
    if (thirdContentOpacity <= 1) {
      console.log(thirdContentOpacity);
      thirdContentOpacity += 0.04;
      thirdContent.style.opacity = thirdContentOpacity;
      console.log(thirdContentOpacity);
    } else {
      clearInterval(thirdContentFadeIn);
    }
  }, 30);
}

// fade out when clicking yes and timer fade in //
function yesBtnFade() {
  console.log("dden kommer till funktionen alls");
  clickedRestart = true;
  let fadeThirdContent = setInterval(function () {
    if (thirdContent.style.opacity > 0) {
      thirdContent.style.opacity -= 0.04;
      console.log("dden kommer till 1");
    } else {
      clearInterval(fadeThirdContent);
      thirdContentOpacity = 0;
      thirdContent.style.display = "none";
      console.log("dden kommer till 1");
    }
  }, 30);
  setTimeout(readTimer, 1500);
}

// "return to start" button fade out and start page fade in //
function returnBtnFade() {
  console.log("dden kommer till funktionen alls");
  let fadeThirdContent = setInterval(function () {
    if (thirdContent.style.opacity > 0) {
      thirdContent.style.opacity -= 0.04;
      console.log("dden kommer till 1");
    } else {
      clearInterval(fadeThirdContent);
      thirdContentOpacity = 0;
      thirdContent.style.display = "none";
      console.log("dden kommer till 1");
    }
  }, 30);

  bigCloud.classList.remove("scale-down-keyframe");
  bigCloud.classList.add("scale-up-keyframe");
  bigCloud.style.transform = "scale(1)";
  //reset timer
  timerPlaying = false;
  clearInterval(timerCountdown);
  audio.pause();
  //reset mute button
  soundBtn.src = "sound-off.svg";
  mute = true;
  //reset play/pause button
  pauseBtn.src = "pause-btn.png";

  setTimeout(fadeInCloudContent, 2000);
}

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
