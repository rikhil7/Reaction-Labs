let gameArena = document.querySelector("#game-arena")
let reactionTimeText = document.querySelector("#reaction-time")
let circleTopPosition
let circle
let circleTopPosition2
let randomColor
let startReactionTime
let clickReactionTime
let randomWidthHeight
function gamePlay(){
    startReactionTime = Date.now()
    console.log(startReactionTime)
    randomColor = Math.floor(Math.random()*16777215).toString(16)
    randomWidthHeight = Math.floor(Math.random()*50)+20
    console.log(randomWidthHeight)
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
        clickReactionTime = Date.now()
        reactionTimeText.textContent = `${clickReactionTime-startReactionTime}ms`
        gameArena.removeChild(circle)
        gamePlay()
    }
}

gamePlay()