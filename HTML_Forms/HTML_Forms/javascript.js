const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const subscribe = document.getElementById("subscribe").checked;

const passwordArray = ["1111", "0000", "qwerty", "54321", "pass"];
let correctPassword = false;

for (let i = 0; i < passwordArray.length; i++) {
    if (password === passwordArray[i]) {
        correctPassword = true;
        break;
    }
}

if (correctPassword) {
    alert("Your password is too simple!");
    } else if (subscribe) {
    alert("Successfully registered and subscribed!");
    } else {
    alert("Successfully registered!");
    }
});
