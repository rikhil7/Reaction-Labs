let body = document.querySelector("body")
let reloadAudio = new Audio("1911-reload-6248.mp3")
body.onclick = ()=>{
    reloadAudio.play()
    setTimeout(()=>{
        window.open("arena.html","_self")
    },1000)
}