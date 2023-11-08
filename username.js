let nameInput = document.querySelector("#name");
let username = "";
let emailInput = document.querySelector(".email");
let email = "";
let doneBtn = document.querySelector("#button");

// login form functionality, done button can be clicked only if user has filled all the details
doneBtn.onclick = () => {
  username = nameInput.value;
  email = emailInput.value;
  localStorage.setItem("name", username);
  if (username.length != 0 && email.length != 0) {
    window.open("arena.html", "_self");
  } else {
    alert("Please enter all details!");
  }
};
