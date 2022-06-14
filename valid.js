// validation for input

let firstNameError = document.querySelector('#first-name-error');
let lastNameError = document.querySelector('#last-name-error');
let emailError = document.querySelector('#email');
let passwordError = document.querySelector('#password-error');
let sumitError = document.querySelector('#sumit-error');


function validateFirstName() {
    let firstName = document.querySelector("#fname").value;
  
    if(firstName.length == 0) {
       firstNameError.innerHTML = "Enter your real name";
       fname.style.border = "1px solid hsl(0, 100%, 74%)";
        return false;
    }  else {
        firstNameError.innerHTML = "great!";
        fname.style.border = "1px solid hsl(154, 59%, 51%)";
    }
        return true;
}