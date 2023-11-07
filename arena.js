let options = document.querySelectorAll(".options")
let waterDropSound = new Audio("water-drop.mp3")
let bgm = new Audio("choose-bgm.mp3")
let colorTest = document.querySelector(".color-test")
let pop = document.querySelector(".pop")
let car = document.querySelector(".car")
bgm.play()
bgm.loop = true
options.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        console.log("in")
        waterDropSound.play()
    })
})
colorTest.onclick = ()=>{
    window.open("full-screen-reaction.html","_self")
}
pop.onclick = ()=>{
    window.open("random-elements.html", "_self")
}
car.onclick = ()=>{
    window.open("car-reaction.html", "_self")
}