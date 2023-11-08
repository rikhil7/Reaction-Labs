let options = document.querySelectorAll(".options")
let waterDropSound = new Audio("./assets/water-drop.mp3")
let bgm = new Audio("./assets/choose-bgm.mp3")
let colorTest = document.querySelector(".color-test")
let pop = document.querySelector(".pop")
let car = document.querySelector(".car")
let username = document.querySelector("#username")
username.textContent = localStorage.getItem("name")
bgm.play()
bgm.loop = true

// function for sound effect
options.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        // console.log("in")
        waterDropSound.play()
    })
})


// click on divs to enter different game modes
colorTest.onclick = ()=>{
    window.open("full-screen-reaction.html","_self")
}
pop.onclick = ()=>{
    window.open("random-elements.html", "_self")
}
car.onclick = ()=>{
    window.open("car-reaction.html", "_self")
}