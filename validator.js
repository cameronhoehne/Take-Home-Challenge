// Validation script for the form

const button = document.querySelector("#submit");
const passwordField = document.querySelector("#password-field");
const emailIcon = document.querySelector("#email-icon")
const passwordIcon = document.querySelector("#password-icon");
const emailField = document.getElementById("email-field");

//Password Shower/Obscurer
let val = passwordIcon.classList.value;
passwordIcon.addEventListener("click", function() {
    if (val === "eye-icon-show") {
        passwordIcon.classList.remove("eye-icon-show") || 
        passwordIcon.classList.add("eye-icon-hide")
        passwordField.type = "text";
        val = "eye-icon-hide"
    } else if (val === "eye-icon-hide"){ 
        passwordIcon.classList.remove("eye-icon-hide")
        passwordIcon.classList.add("eye-icon-show")
        passwordField.type = "password";
        val = "eye-icon-show"
  }     
 }
)

//Submit Button Action
button.addEventListener("click", function() {
    validateInputs();
})

//Remove Error Styles on Focus
emailField.addEventListener("focus", function() {
        emailField.classList.remove("input-invalid");
        emailField.classList.add("input-main");
        emailIcon.classList.remove("error-icon-show");
        emailIcon.classList.add("error-icon-hide");
})

passwordField.addEventListener("focus", function() {
    passwordField.classList.remove("input-invalid");
    passwordField.classList.add("input-main");
    passwordIcon.classList.remove("error-icon-show");
    if (val === "eye-icon-show") {
        passwordIcon.classList.add("eye-icon-show")
    } else if (val === "eye-icon-hide") {
        passwordIcon.classList.add("eye-icon-hide")
    }
})

//Validator Function
function validateInputs() {
    let email = document.getElementById("email-field").value;
    let password = document.getElementById("password-field").value;
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email) && !password) {
        emailField.classList.remove("input-main");
        emailField.classList.add("input-invalid");
        emailIcon.classList.remove("error-icon-hide");
        emailIcon.classList.add("error-icon-show");
        passwordField.classList.remove("input-main");
        passwordField.classList.add("input-invalid");
        passwordIcon.classList.remove("eye-icon-show") || passwordIcon.classList.remove("eye-icon-hide");
        passwordIcon.classList.add("error-icon-show");
    } else if (!pattern.test(email) && (password)) {
        emailField.classList.remove("input-main");
        emailField.classList.add("input-invalid");
        emailIcon.classList.remove("error-icon-hide");
        emailIcon.classList.add("error-icon-show");
    } else if ((pattern.test(email)) && !password) {
        passwordField.classList.remove("input-main");
        passwordField.classList.add("input-invalid");
        passwordIcon.classList.remove("eye-icon-show") || passwordIcon.classList.remove("eye-icon-hide");
        passwordIcon.classList.add("error-icon-show");
    }
}

