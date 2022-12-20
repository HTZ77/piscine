function handleSubmit(){

   const firstnameInput = document.getElementById("firstname");
        const lastnameInput = document.getElementById("lastname");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        let errorInput = document.getElementById("error");
        const button = document.getElementById("submitButton");


        console.log(firstnameInput)


        if (firstnameInput.value.length===0) {
            errorInput.textContent = "First name must not be empty";
        }
        else if (lastnameInput.value.length===0){
            errorInput.textContent = "Last name must not be empty";
        }
        else if (emailInput.value.length===0) {
            errorInput.textContent = "Email is badly formatted";
        }
        else if (passwordInput.value.length<=7) {
            errorInput.textContent = "Password must be at least 8 characters long and contain at least a letter and a number";
        }


    }





