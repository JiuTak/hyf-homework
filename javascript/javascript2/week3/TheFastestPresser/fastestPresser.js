/*==============================================================================================
                        The fastest presser in this realm

        Two users compete about who can press a key the most items within a set time!
        A user specifies how long time the game should be, and press "Start game!"
        When the button is pressed it is about pressing either L or S on the keyboard.
        The user that has the highest number of keypresses after the time is up wins.
==============================================================================================*/

const userInput = document.getElementById("userInput");
const startButton = document.getElementById("start-btn");
const timeStatus = document.getElementById("time-checking");
const pressS = document.getElementById("left-click-area");
const pressL = document.getElementById("right-click-area");
const counterS = document.getElementById("clickCounterS");
const counterL = document.getElementById("clickCounterL");
const resetButton = document.getElementById("reset-btn");

startButton.addEventListener("click", gameStart);
resetButton.addEventListener("click", resetStatus);
document.addEventListener("keypress", playCount);
let countS = 0;
let countL = 0;
isPlaying = false;

const confettiElement = document.getElementById("my-canvas1");
const confettiElement2 = document.getElementById("my-canvas2");
const confettiSettings = { target: confettiElement };
const confettiSettings2 = { target: confettiElement2 };
let confettiPlayer1 = null;
let confettiPlayer2 = null;

let timer = 0;
let timeCountdown = 0;

function gameStart() {
  //cannot start game without getting input from user
  if (userInput.value !== "") {
    resetGame();
    timeCountdown = userInput.value * 1000;
    isPlaying = true; //checking if it is playing or not
    timeStatus.innerHTML = "Game Started!";
    timer = setTimeout(() => {
      if (countS === countL) {
        counterS.innerHTML = "DRAW";
        counterL.innerHTML = "DRAW";
        renderConfetti(1);
        renderConfetti(2);
      }
      if (countS > countL) {
        counterS.innerHTML = "WIN!";
        counterL.innerHTML = "Owww!";
        renderConfetti(1);
      } else if (countS < countL) {
        counterL.innerHTML = "WIN!";
        counterS.innerHTML = "Owww!";
        renderConfetti(2);
      }
      timeStatus.innerHTML = "!!!! Finished !!!!";
      isPlaying = false;
    }, timeCountdown);
  }
}

function playCount(e) {
  if (!isPlaying) return;
  if (e.key.toLowerCase() === "S".toLowerCase()) {
    countS++;
    counterS.textContent = countS;
  }
  if (e.key.toLowerCase() === "L".toLowerCase()) {
    countL++;
    counterL.textContent = countL;
  }
}

function resetGame() {
  clearTimeout(timer);
  clearConfetti();
  countS = 0;
  countL = 0;
  counterS.innerHTML = ``;
  counterL.innerHTML = ``;
}

function resetStatus() {
  userInput.value = "";
  resetGame();
  timeStatus.innerHTML = "";
  clearConfetti();
}

function renderConfetti(player) {
  if (player === 1) {
    if (confettiPlayer1) {
      confettiPlayer1.clear();
    }
    confettiPlayer1 = new ConfettiGenerator(confettiSettings);
    confettiPlayer1.render();
  }
  if (player === 2) {
    if (confettiPlayer2) {
      confettiPlayer2.clear();
    }
    confettiPlayer2 = new ConfettiGenerator(confettiSettings2);
    confettiPlayer2.render();
  }
}

function clearConfetti() {
  if (confettiPlayer1) {
    confettiPlayer1.clear();
  }
  if (confettiPlayer2) {
    confettiPlayer2.clear();
  }
}

// function countDownTimer() {
//   let seconds = Math.floor(timeCountdown / 1000);

//   if (seconds <= 0) {
//     return;
//   } else {
//     timeStatus.innerHTML = `${seconds}`;
//     timeCountdown--;
//   }
// }
