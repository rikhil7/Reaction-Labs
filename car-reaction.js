let carSound = new Audio("car-driving.mp3");
let body = document.querySelector("body");
let gameStartTimer;
let clicks = 0;
let stopSignTimeout;
let stopSign = document.querySelector("#stop");
let timer;
let car = document.querySelector("#car");
let wheels = document.querySelectorAll("#wheel img");
let road = document.querySelector("#road");
let buildings = document.querySelector("#buildings");
let stopSignTimeStart;
let carBrakingSound = new Audio("car-braking.mp3");
let reactTimer;
let tooSoonTimeTracker;
let reactionTimeBox = document.querySelector("#reaction-time-box");
let gamePlayArea = document.querySelector("#gameplay");
let instructions = document.querySelector("#instructions");
let startBtn = document.querySelector("button");
let value
let leastValue
let averageArray = []
let sum = 0
let endBtn = document.querySelector("#endBtn")
let average
let scoreDiv = document.querySelector("#scoreDiv")
let playAgainBtn = document.querySelector("#again")
let least = document.querySelector("#least")
let averageBox = document.querySelector("#average")
playAgainBtn.onclick = ()=>{
    location.reload()
}
endBtn.onclick = ()=>{
    averageArray.forEach((e)=>{
        sum=sum+e
    })
    average = sum/averageArray.length
    stopSign.style.visibility = "hidden"
    gamePlayArea.style.visibility = "hidden"
    scoreDiv.style.visibility = "visible"
    least.textContent = `${leastValue}ms`
    averageBox.textContent = `${Math.round(average*100)/100}ms`
    reactionTimeBox.style.visibility = "hidden"
}
startBtn.onclick = () => {
    leastValue = 0
  gamePlayArea.style.visibility = "visible";
  instructions.style.visibility = "hidden";
  fullGame();
};
carSound.play();

function fullGame() {
  gameStartTimer = Date.now();
  reactionTimeBox.textContent = "";
  // car.style.animation = "car 1s linear infinite"
  wheels.forEach((e) => {
    e.style.animation = "wheel 1s linear infinite";
  });
  road.style.animation = "road 5s linear infinite";
  buildings.style.animation = "buildings 20s linear infinite";
  function stop() {
    timer = Math.ceil(Math.random() * 7) + 3;
    stopSignTimeout = setTimeout(() => {
      stopSignTimeStart = Date.now();
      stopSign.style.visibility = "visible";
    }, timer * 1000);
  }
  stop();
  function carStop() {
    carSound.pause();
    carBrakingSound.play();
    car.style.animation = "none";
    wheels.forEach((e) => {
      e.style.animation = "none";
    });
    road.style.animation = "none";
    buildings.style.animation = "none";
  }
  function tooSoon() {
    tooSoonTimeTracker = Date.now();
    console.log(`tooSoon: ${tooSoonTimeTracker}`);
    if (clicks > 0 && tooSoonTimeTracker - gameStartTimer < timer * 1000) {
      clearTimeout(stopSignTimeout);
      reactionTimeBox.textContent = "Clicked too Soon! Try Again.";
      reactionTimeBox.style.visibility = "visible";
      document.body.onkeydown = function (e) {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
          fullGame();
        }
      };
    }
  }
  document.body.onkeydown = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      clicks++;
      carStop();
      tooSoon();
      if (tooSoonTimeTracker - gameStartTimer > timer * 1000) {
        stopSign.style.visibility = "hidden";
        reactTimer = Date.now();
        reactionTimeBox.style.visibility = "visible";
        console.log(`reactTimer: ${reactTimer}`);
        value = reactTimer - stopSignTimeStart;
        if (leastValue==0 || leastValue>value){
            leastValue = value
        }
        averageArray.push(value)
        reactionTimeBox.textContent = `Your Reaction Time: ${value}ms`;
        console.log(reactTimer - stopSignTimeStart);
        document.body.onkeydown = function (e) {
          if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            fullGame();
          }
        body.onclick = ()=>{
          fullGame()
        }
        };
      }
    }
  };
  body.onclick = ()=>{
      clicks++;
      carStop();
      tooSoon();
      if (tooSoonTimeTracker - gameStartTimer > timer * 1000) {
        stopSign.style.visibility = "hidden";
        reactTimer = Date.now();
        reactionTimeBox.style.visibility = "visible";
        console.log(`reactTimer: ${reactTimer}`);
        value = reactTimer - stopSignTimeStart;
        if (leastValue==0 || leastValue>value){
            leastValue = value
        }
        averageArray.push(value)
        reactionTimeBox.textContent = `Your Reaction Time: ${value}ms`;
        console.log(reactTimer - stopSignTimeStart);
        document.body.onkeydown = function (e) {
          if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            fullGame();
          }
        }
        body.onclick = ()=>{
          fullGame()
        }
      }
  }
}
