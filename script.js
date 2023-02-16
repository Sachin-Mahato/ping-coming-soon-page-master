const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = input.value;
    if (inputValue && validateEmail(inputValue)) {
        errorMessage.style.display = "none";
    } else {
        errorMessage.textContent = "Please provide a valid email address.";
        errorMessage.style.display = "block";
    }
});

function validateEmail(email) {
    let rest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rest.test(email);
}



