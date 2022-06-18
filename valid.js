// validation for input


let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let fName = id("fname"),
     lName = id("lname"),
     email = id("email"),
     form = id("register-form"),
     password = id("password"),
     errorMsg = classes("error"),
     failureIcon = classes("failure-icon");

     form.addEventListener('submit', (event) => {
        event.preventDefault();
        if(fName.value === "") {
            errorMsg[0].innerHTML = "First Name can not be empty";
            failureIcon[0].style.display = "block";
            fName.style.border = "1px solid hsl(0, 100%, 74%)";
        } else if (fName.value.length <= 3) {
            errorMsg[0].innerHTML = "First Name must be more than 3 characters";
            failureIcon[0].style.display = "block";
            fName.style.border = "1px solid hsl(0, 100%, 74%)";
        }

        else {
            errorMsg[0].innerHTML = "";
            failureIcon[0].style.display = "none";
            fName.style.border = "1px solid hsl(154, 59%, 51%)";
        }
     
        if(lName.value === "") {
            errorMsg[1].innerHTML = "Last Name can not be empty";
            failureIcon[1].style.display = "block";
            lName.style.border = "1px solid hsl(0, 100%, 74%)";
        } else if (lName.value.length <= 3) {
            errorMsg[1].innerHTML = "Last Name must be more than 3 characters";
            failureIcon[1].style.display = "block";
            lName.style.border = "1px solid hsl(0, 100%, 74%)";
        }

        else {
            errorMsg[1].innerHTML = "";
            failureIcon[1].style.display = "none";
            lName.style.border = "1px solid hsl(154, 59%, 51%)";
        }
    
        if(email.value === "") {
            errorMsg[2].innerHTML = "Email can not be empty";
            failureIcon[2].style.display = "block";
            email.style.border = "1px solid hsl(0, 100%, 74%)";
        } else if (email.value.length <= 3) {
            errorMsg[2].innerHTML = "Email must be more than 3 characters";
            failureIcon[2].style.display = "block";
            email.style.border = "1px solid hsl(0, 100%, 74%)";
        }

        else {
            errorMsg[2].innerHTML = "";
            failureIcon[2].style.display = "none";
            email.style.border = "1px solid hsl(154, 59%, 51%)";
        }

        if(password.value === "") {
            errorMsg[3].innerHTML = "Password can not be empty";
            failureIcon[3].style.display = "block";
            password.style.border = "1px solid hsl(0, 100%, 74%)";
        } else if (password.value.length <= 3) {
            errorMsg[3].innerHTML = "Password must be more than 3 characters";
            failureIcon[3].style.display = "block";
            password.style.border = "1px solid hsl(0, 100%, 74%)";
        }

        else {
            errorMsg[3].innerHTML = "";
            failureIcon[3].style.display = "none";
            password.style.border = "1px solid hsl(154, 59%, 51%)";
        } 
    
    })






