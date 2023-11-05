let carSound = new Audio("car-driving.mp3")
let body = document.querySelector("body")
let gameStartTimer = Date.now()
let clicks = 0
let stopSignTimeout
let stopSign = document.querySelector("#stop")
let timer
function stop(){
    timer = Math.ceil(Math.random()*7)+3
    stopSignTimeout = setTimeout(()=>{
        stopSignTimeStart = Date.now()
        stopSign.style.visibility = "visible"
    }, timer*1000)
}
stop()
let car = document.querySelector("#car")
let wheels = document.querySelectorAll("#wheel img")
let road = document.querySelector("#road")
let buildings = document.querySelector("#buildings")
let stopSignTimeStart
let carBrakingSound = new Audio("car-braking.mp3")
function carStop(){
    carSound.pause()
    carBrakingSound.play()
    car.style.animation = "none"
    wheels.forEach((e)=>{
        e.style.animation = "none"
    })
    road.style.animation = "none"
    buildings.style.animation = "none"
}
let tooSoonTimeTracker
let reactionTimeBox = document.querySelector("#reaction-time-box")
function tooSoon(){
    tooSoonTimeTracker = Date.now()
    console.log(`tooSoon: ${tooSoonTimeTracker}`)
    if (clicks>0 && (tooSoonTimeTracker-gameStartTimer)<timer*1000){
        clearTimeout(stopSignTimeout)
        reactionTimeBox.textContent = "Clicked too Soon! Try Again."
        reactionTimeBox.style.visibility = "visible"
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
let reactTimer
document.body.onkeydown = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        clicks++
        carStop()
        tooSoon()
        if((tooSoonTimeTracker-gameStartTimer)>timer*1000){
            stopSign.style.visibility = "hidden"
            reactTimer = Date.now()
            reactionTimeBox.style.visibility = "visible"
            console.log(`reactTimer: ${reactTimer}`)
            reactionTimeBox.textContent = `Your Reaction Time: ${reactTimer-stopSignTimeStart}ms`
            console.log(reactTimer-stopSignTimeStart)
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

carSound.play()