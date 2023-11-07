let gameArena = document.querySelector("#game-arena")
let reactionTimeText = document.querySelector("#reaction-time")
let circleTopPosition
let circle
let circleTopPosition2
let randomColor
let startReactionTime
let clickReactionTime
let randomWidthHeight
let randomValue
let easyBtn = document.querySelector(".easy")
let mediumBtn = document.querySelector(".medium")
let hardBtn = document.querySelector(".hard")
let instructionsDiv = document.querySelector("#instructions")
let parent = document.querySelector("#parent")
let timerBox = document.querySelector("#timer")
let btn10 = document.querySelector(".sec10")
let btn20 = document.querySelector(".sec20")
let btn30 = document.querySelector(".sec30")
let startBtn = document.querySelector("#startBtn button")
let time
let timeInterval
let scorePage = document.querySelector("#score")
let score = 0
let scoreBox = document.querySelector("#score-value")
let value
let averageArray = []
let averageValue = document.querySelector("#averageValue")
let sum = 0
let average
let difficultySelected
// function difficultyParameters(difficulty){
    //     if (difficulty=="easy"){
        //         randomWidthHeight = `50`
//     }
//     if (difficulty=="medium"){
//         randomWidthHeight = Math.floor(Math.random()*50)+20
//     }
// }
// hardBtn.onclick = ()=>{
//     instructionsDiv.style.visibility = "hidden"
//     parent.style.visibility = "visible"
// }
function gamePlay(difficulty){
    if(difficulty=="easy"){
        startReactionTime = Date.now()
        console.log(startReactionTime)
        randomColor = Math.floor(Math.random()*16777215).toString(16)
        // console.log(randomWidthHeight)
        circle = document.createElement("div")
        circle.setAttribute("id","circle")
        circle.style.width = `50px`
        circle.style.height = `50px`
        circle.style.backgroundColor = `#${randomColor}`
        circleTopPosition = Math.floor(Math.random()*80)+2
        circleTopPosition2 = Math.floor(Math.random()*85)+2
        circle.style.top = `${circleTopPosition}%`
        circle.style.left = `${circleTopPosition2}%`
        gameArena.appendChild(circle)
        circle.onclick = ()=>{
            score++
            console.log(score)
            // localStorage.setItem("score", score)
            clickReactionTime = Date.now()
            value = clickReactionTime-startReactionTime
            averageArray.push(value)
            reactionTimeText.textContent = `${value}ms`
            gameArena.removeChild(circle)
            gamePlay("easy")
        }
    }
    else if (difficulty=="medium"){
        startReactionTime = Date.now()
        console.log(startReactionTime)
        randomColor = Math.floor(Math.random()*16777215).toString(16)
        randomWidthHeight = Math.floor(Math.random()*50)+20
        // console.log(randomWidthHeight)
        circle = document.createElement("div")
        circle.setAttribute("id","circle")
        circle.style.width = `${randomWidthHeight}px`
        circle.style.height = `${randomWidthHeight}px`
        circle.style.backgroundColor = `#${randomColor}`
        circleTopPosition = Math.floor(Math.random()*80)+2
        circleTopPosition2 = Math.floor(Math.random()*85)+2
        circle.style.top = `${circleTopPosition}%`
        circle.style.left = `${circleTopPosition2}%`
        gameArena.appendChild(circle)
        circle.onclick = ()=>{
            score++
            // localStorage.setItem("score", score)
            clickReactionTime = Date.now()
            value = clickReactionTime-startReactionTime
            averageArray.push(value)
            reactionTimeText.textContent = `${value}ms`
            gameArena.removeChild(circle)
            gamePlay("medium")
        }
    }
    
}
function timer(){
    timerBox.textContent = time
    clearInterval(timeInterval)
    timeInterval = setInterval(() => {
        time--
        timerBox.textContent = time
        if (time==0){
            parent.style.visibility = "hidden"
            console.log(score)
            scoreBox.textContent = score
            scorePage.style.visibility = "visible"
            averageArray.forEach((e)=>{
                sum=sum+e
            })
            console.log(sum)
            average = (sum/averageArray.length)
            averageValue.textContent = `${Math.round(average*100)/100}ms`
        }
    }, 1000);
}
easyBtn.onclick = ()=>{
    easyBtn.style.background = "rgba( 255, 255, 255, 0.5 )"
    mediumBtn.style.visibility = "hidden"
    hardBtn.style.visibility = "hidden"
    difficultySelected = "easy"
}
mediumBtn.onclick = ()=>{
    mediumBtn.style.background = "rgba( 255, 255, 255, 0.5 )"
    easyBtn.style.visibility = "hidden"
    hardBtn.style.visibility = "hidden"
    difficultySelected = "medium"
}
btn10.onclick = ()=>{
    btn10.style.background = "rgba( 255, 255, 255, 0.5 )"
    btn20.style.visibility = "hidden"
    btn30.style.visibility = "hidden"
    time = 10
}
btn20.onclick = ()=>{
    btn20.style.background = "rgba( 255, 255, 255, 0.5 )"
    btn10.style.visibility = "hidden"
    btn30.style.visibility = "hidden"
    time = 20
}
btn30.onclick = ()=>{
    btn30.style.background = "rgba( 255, 255, 255, 0.5 )"
    btn20.style.visibility = "hidden"
    btn10.style.visibility = "hidden"
    time = 30
}
startBtn.onclick = ()=>{
    instructionsDiv.style.visibility = "hidden"
    parent.style.visibility = "visible"
    gamePlay(difficultySelected)
    timer()
}


