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
            errorMsg[0].innerHTML = "First Name can not be blank";
            failureIcon[0].style.display = "block";
            fName.style.border = "1px solid hsl(0, 100%, 74%)";
        } else if (fName.value.length <= 3) {
            errorMsg[0].innerHTML = "First Name must be more than 3 characters";
            failureIcon[0].style.display = "block";
            fName.style.border = "1px solid hsl(0, 100%, 74%)";
        }

        else {
            errorMsg[0].innerHTML = "";
            fName.style.border = "1px solid hsl(154, 59%, 51%)";
        }
     
        if(lName.value === "") {
            errorMsg[1].innerHTML = "Last Name can not be blank";
            failureIcon[1].style.display = "block";
            lName.style.border = "1px solid hsl(0, 100%, 74%)";
        } else if (lName.value.length <= 3) {
            errorMsg[1].innerHTML = "Last Name must be more than 3 characters";
            failureIcon[1].style.display = "block";
            lName.style.border = "1px solid hsl(0, 100%, 74%)";
        }

        else {
            errorMsg[1].innerHTML = "";
            lName.style.border = "1px solid hsl(154, 59%, 51%)";
        }
    
    
    })






