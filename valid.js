// validation for input

let firstNameError = document.querySelector('#first-name-error');
let lastNameError = document.querySelector('#last-name-error');
let emailError = document.querySelector('#email');
let passwordError = document.querySelector('#password-error');
let sumitError = document.querySelector('#sumit-error');



function validateFirstName() {
    let firstName = document.querySelector("#fname").value;
    let img = document.querySelector("smoth");

    if(firstName.length == 0) {
       firstNameError.innerHTML = "Enter your real name";
       fname.style.border = "1px solid hsl(0, 100%, 74%)";
       img.style.display = "none";
       setTimeout(function() {
        img.style.display = 'block';
       }, 2000);
        return false;

    }  else if(firstName.length <= 3) {
        firstNameError.innerHTML = "Your name must be atleast 3 long";
        fname.style.border = "1px solid hsl(0, 100%, 74%)";
        return false;
    }
    
    else {
        firstNameError.innerHTML = "Success";
        fname.style.border = "1px solid hsl(154, 59%, 51%)";
    }
        return true;
}