let gameArena = document.querySelector("#game-arena");
let reactionTimeText = document.querySelector("#reaction-time");
let circleTopPosition;
let circle;
let circleTopPosition2;
let randomColor;
let startReactionTime;
let clickReactionTime;
let randomWidthHeight;
let randomValue;
let easyBtn = document.querySelector(".easy");
let mediumBtn = document.querySelector(".medium");
let hardBtn = document.querySelector(".hard");
let instructionsDiv = document.querySelector("#instructions");
let parent = document.querySelector("#parent");
let timerBox = document.querySelector("#timer");
let btn10 = document.querySelector(".sec10");
let btn20 = document.querySelector(".sec20");
let btn30 = document.querySelector(".sec30");
let startBtn = document.querySelector("#startBtn button");
let time;
let timeInterval;
let scorePage = document.querySelector("#score");
let score = 0;
let scoreBox = document.querySelector("#score-value");
let value;
let averageArray = [];
let averageValue = document.querySelector("#averageValue");
let sum = 0;
let average;
let difficultySelected;
let playAgain = document.querySelector("#playBtn");
let resetBtn = document.querySelector(".resetBtn");
let homeBtn = document.querySelector(".homeBtn");
let shootSound = new Audio("./assets/blaster.mp3")
let homeBtn2 = document.querySelector(".score-home-btn")
// all buttons functionality
homeBtn2.onclick = ()=>{
  window.open("arena.html", "_self");
}
homeBtn.onclick = () => {
  window.open("arena.html", "_self");
};
playAgain.onclick = () => {
  location.reload();
};
resetBtn.onclick = () => {
  location.reload();
};

// random elements popping and disappearing functionality according to difficulty selected by player (parameter)
function gamePlay(difficulty) {
  if (difficulty == "easy") {
    startReactionTime = Date.now();
    console.log(startReactionTime);
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // console.log(randomWidthHeight)
    circle = document.createElement("div");
    circle.setAttribute("id", "circle");
    circle.style.width = `40px`;
    circle.style.height = `40px`;
    circle.style.backgroundColor = `#${randomColor}`;
    circleTopPosition = Math.floor(Math.random() * 80) + 2;
    circleTopPosition2 = Math.floor(Math.random() * 85) + 2;
    circle.style.top = `${circleTopPosition}%`;
    circle.style.left = `${circleTopPosition2}%`;
    gameArena.appendChild(circle);
    circle.onclick = () => {
      score++;
      shootSound.play()
      console.log(score);
      // localStorage.setItem("score", score)
      clickReactionTime = Date.now();
      value = clickReactionTime - startReactionTime;
      averageArray.push(value);
      reactionTimeText.textContent = `${value}ms`;
      gameArena.removeChild(circle);
      gamePlay("easy");
    };
  } else if (difficulty == "medium") {
    startReactionTime = Date.now();
    console.log(startReactionTime);
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomWidthHeight = Math.floor(Math.random() * 40) + 20;
    // console.log(randomWidthHeight)
    circle = document.createElement("div");
    circle.setAttribute("id", "circle");
    circle.style.width = `${randomWidthHeight}px`;
    circle.style.height = `${randomWidthHeight}px`;
    circle.style.backgroundColor = `#${randomColor}`;
    circleTopPosition = Math.floor(Math.random() * 70) + 2;
    circleTopPosition2 = Math.floor(Math.random() * 72) + 2;
    circle.style.top = `${circleTopPosition}%`;
    circle.style.left = `${circleTopPosition2}%`;
    gameArena.appendChild(circle);
    circle.onclick = () => {
      score++;
      shootSound.play()
      // localStorage.setItem("score", score)
      clickReactionTime = Date.now();
      value = clickReactionTime - startReactionTime;
      averageArray.push(value);
      reactionTimeText.textContent = `${value}ms`;
      gameArena.removeChild(circle);
      gamePlay("medium");
    }
  } else if (difficulty=="hard"){
    startReactionTime = Date.now();
    console.log(startReactionTime);
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomWidthHeight = Math.floor(Math.random() * 40) + 20;
    // console.log(randomWidthHeight)
    circle = document.createElement("div");
    circle.setAttribute("id", "circle");
    circle.style.width = `${randomWidthHeight}px`;
    circle.style.height = `${randomWidthHeight}px`;
    circle.style.backgroundColor = `#${randomColor}`;
    circle.style.animation = "shake 0.1s linear infinite"
    circleTopPosition = Math.floor(Math.random() * 70) + 2;
    circleTopPosition2 = Math.floor(Math.random() * 72) + 2;
    circle.style.top = `${circleTopPosition}%`;
    circle.style.left = `${circleTopPosition2}%`;
    gameArena.appendChild(circle);
    circle.onclick = () => {
      score++;
      shootSound.play()
      // localStorage.setItem("score", score)
      clickReactionTime = Date.now();
      value = clickReactionTime - startReactionTime;
      averageArray.push(value);
      reactionTimeText.textContent = `${value}ms`;
      gameArena.removeChild(circle);
      gamePlay("hard");
    }
  } 
}

// timer of the game (works according to time duration selected by the player)
function timer() {
  timerBox.textContent = time;
  clearInterval(timeInterval);
  timeInterval = setInterval(() => {
    time--;
    timerBox.textContent = time;
    if (time == 0) {
      parent.style.visibility = "hidden";
      console.log(score);
      scoreBox.textContent = score;
      scorePage.style.visibility = "visible";
      averageArray.forEach((e) => {
        sum = sum + e;
      });
      console.log(sum);
      average = sum / averageArray.length;
      averageValue.textContent = `${Math.round(average * 100) / 100}ms`;
    }
  }, 1000);
}

// mode and timer selection functionality
easyBtn.onclick = () => {
  easyBtn.style.background = "rgba( 255, 255, 255, 0.5 )";
  mediumBtn.style.visibility = "hidden";
  hardBtn.style.visibility = "hidden";
  difficultySelected = "easy";
};
mediumBtn.onclick = () => {
  mediumBtn.style.background = "rgba( 255, 255, 255, 0.5 )";
  easyBtn.style.visibility = "hidden";
  hardBtn.style.visibility = "hidden";
  difficultySelected = "medium";
};
hardBtn.onclick = () => {
  hardBtn.style.background = "rgba( 255, 255, 255, 0.5 )";
  easyBtn.style.visibility = "hidden";
  mediumBtn.style.visibility = "hidden";
  difficultySelected = "hard";
};
btn10.onclick = () => {
  btn10.style.background = "rgba( 255, 255, 255, 0.5 )";
  btn20.style.visibility = "hidden";
  btn30.style.visibility = "hidden";
  time = 10;
};
btn20.onclick = () => {
  btn20.style.background = "rgba( 255, 255, 255, 0.5 )";
  btn10.style.visibility = "hidden";
  btn30.style.visibility = "hidden";
  time = 20;
};
btn30.onclick = () => {
  btn30.style.background = "rgba( 255, 255, 255, 0.5 )";
  btn20.style.visibility = "hidden";
  btn10.style.visibility = "hidden";
  time = 30;
};
startBtn.onclick = () => {
  instructionsDiv.style.visibility = "hidden";
  parent.style.visibility = "visible";
  gamePlay(difficultySelected);
  timer();
};
