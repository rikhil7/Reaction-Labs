let colorChangeArea = document.querySelector("#color-change-area")
let text = document.querySelector("#text")
let reactTime = document.querySelector("#reaction-time")
let randomTime
let seconds = 0
let ms = 0
let stopWatchTimeout
let clicks = 0
let randomTimeMS
let startGameTime
let tooSoonTimeTracker
let z
let r
let t1
let reactionTimeValue
let reactionTimeValueLocalStorage = 0
let randomColor
let instructionsDiv = document.querySelector("#instruction")
let arena = document.querySelector("#arena")
let startBtn = document.querySelector("#button")
let endBtn = document.querySelector("#endBtn")
let scoreDiv = document.querySelector("score")
let scoreValueDisplay = document.querySelector("#scoreValue")
let scoreArray = []
let sum = 0
let averageValue
let average = document.querySelector("#average")
let playBtn = document.querySelector("#playBtn")
let homeBtn = document.querySelector(".homeBtn")
let homeBtn2 = document.querySelector(".homeBtn2")
homeBtn2.onclick = ()=>{
    window.location.href = "arena.html"
}
playBtn.onclick = ()=>{
    location.reload()
}
startBtn.onclick = ()=>{
    reactionTimeValueLocalStorage = 0
    localStorage.setItem("min-time", 0)
    instructionsDiv.style.visibility = "hidden"
    arena.style.visibility = "visible"
    fullGameStart()
}
endBtn.onclick = ()=>{
    arena.style.visibility = "hidden"
    score.style.visibility = "visible"
    scoreValueDisplay.textContent = `${localStorage.getItem("min-time")}ms`
    reactTime.style.visibility = "hidden"
    console.log(scoreArray)
    scoreArray.forEach((e)=>{
        sum=sum+e
    })
    console.log(sum)
    averageValue = (sum/scoreArray.length)
    console.log(averageValue)
    average.textContent = `${Math.round(averageValue*100)/100}ms`
}
homeBtn.onclick = ()=>{
    console.log("hello")
    window.location.href = "arena.html"
}
// let bgm = new Audio("full-screen-reaction-bg.mp3")
// bgm.play(
    
    function fullGameStart(){
        clicks = 0
        text.textContent = "Click or Press Spacebar to Start"
        colorChangeArea.style.background = "rgba( 255, 255, 255, 0.4 )"
        reactTime.style.visibility = "hidden"
        function startgame(){
            if (clicks==1){
                startGameTime = Date.now()
                text.textContent = "Click as soon as color changes!"
                randomTime = Math.ceil(Math.random()*3)+3
                randomTimeMS = randomTime*1000
                console.log(randomTimeMS)
                // console.log(randomTime)
                t1 = setTimeout(() => {
                    randomColor = Math.floor(Math.random()*16777215).toString(16)
                    colorChangeArea.style.backgroundColor = `#${randomColor}`
                    z = Date.now()
                    // console.log("changed")
            }, randomTime*1000);
        }
    }
    
    function tooSoon(){
        tooSoonTimeTracker = Date.now()
        if (clicks>1 && (tooSoonTimeTracker-startGameTime)<randomTimeMS){
            text.textContent = "Clicked too soon!"
            clearTimeout(t1)
            // bgm.pause()
            colorChangeArea.onclick = ()=>{
                fullGameStart()
            }
            document.body.onkeydown = function(e) {
                if (e.key == " " ||
                e.code == "Space" ||      
                    e.keyCode == 32      
                ) {
                    fullGameStart()
                }
            }
        }
    }
    
    colorChangeArea.onclick = ()=>{
        clicks++
        // console.log(clicks)
        startgame()
        tooSoon()
        if (clicks==2 && (tooSoonTimeTracker-startGameTime)>randomTimeMS){
            r = Date.now()
            text.textContent = "Your reaction time:"
            reactionTimeValue = r-z
            scoreArray.push(reactionTimeValue)
            if(reactionTimeValueLocalStorage==0 || reactionTimeValueLocalStorage>reactionTimeValue){
                reactionTimeValueLocalStorage = reactionTimeValue
            }
            localStorage.setItem("min-time", reactionTimeValueLocalStorage)
            reactTime.textContent = `${reactionTimeValue}ms`
            reactTime.style.visibility = "visible"
            colorChangeArea.onclick = ()=>{
                fullGameStart()
            }
            document.body.onkeydown = function(e) {
                if (e.key == " " ||
                e.code == "Space" ||      
                e.keyCode == 32      
                ) {
                    fullGameStart()
                }
            }
        }
    }
    
    document.body.onkeydown = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||      
            e.keyCode == 32      
        ) {
            clicks++
            // console.log(clicks)
            startgame()
            tooSoon()
            console.log(clicks)
            if (clicks==2 && (tooSoonTimeTracker-startGameTime)>randomTimeMS){
                r = Date.now()
                // bgm.pause()
                text.textContent = "Your reaction time:"
                reactionTimeValue = r-z
                scoreArray.push(reactionTimeValue)
                
                if(reactionTimeValueLocalStorage==0 || reactionTimeValueLocalStorage>reactionTimeValue){
                    reactionTimeValueLocalStorage = reactionTimeValue
                }
                localStorage.setItem("min-time", reactionTimeValueLocalStorage)
                reactTime.textContent = `${reactionTimeValue}ms`
                reactTime.style.visibility = "visible"
                document.body.onkeydown = function(e) {
                    if (e.key == " " ||
                    e.code == "Space" ||      
                    e.keyCode == 32      
                    ) {
                        fullGameStart()
                    }
                  }
                  colorChangeArea.onclick = ()=>{
                      fullGameStart()
                    }
                }
            }
        }
    }
    // localStorage.clear()