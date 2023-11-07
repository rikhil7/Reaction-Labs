let nameInput = document.querySelector("#name")
let username = ""
let emailInput = document.querySelector(".email")
let email = ""
let doneBtn = document.querySelector("#button")
doneBtn.onclick = ()=>{
    username = nameInput.value
    email = emailInput.value
    localStorage.setItem("name", username)
    if (username.length!=0 && email.length!=0){
        window.open("arena.html", "_self")
    }
    else{
        alert("Please enter all details!")
    }
}