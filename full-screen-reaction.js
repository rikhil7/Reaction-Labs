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
let randomColor
let bgm = new Audio("full-screen-reaction-bg.mp3")
bgm.play()
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
        bgm.pause()
        document.body.onkeydown = function(e) {
            if (e.key == " " ||
                e.code == "Space" ||      
                e.keyCode == 32      
            ) {
                location.reload()
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
        reactTime.textContent = `${r-z}ms`
        reactTime.style.visibility = "visible"
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
        if (clicks==2 && (tooSoonTimeTracker-startGameTime)>randomTimeMS){
            r = Date.now()
            bgm.pause()
            text.textContent = "Your reaction time:"
            reactTime.textContent = `${r-z}ms`
            reactTime.style.visibility = "visible"
            document.body.onkeydown = function(e) {
                if (e.key == " " ||
                    e.code == "Space" ||      
                    e.keyCode == 32      
                ) {
                    location.reload()
                }
              }
        }
    }
  }
