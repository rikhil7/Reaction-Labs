//functionlity to play sound effect when user click anywhere

let body = document.querySelector("body");
let reloadAudio = new Audio("./assets/1911-reload-6248.mp3");
body.onclick = () => {
  reloadAudio.play();
  setTimeout(() => {
    window.open("username.html", "_self");
  }, 1000);
};
