let options = document.querySelectorAll(".options")
let waterDropSound = new Audio("water-drop.mp3")
let bgm = new Audio("choose-bgm.mp3")
bgm.play()
bgm.loop = true
options.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        console.log("in")
        waterDropSound.play()
    })
})