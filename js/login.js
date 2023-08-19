document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const mailField = document.getElementById("user_mail");
    const passField = document.getElementById("user_pass");

    if((mailField.value === 'azadcoxgmtl@gmail.com') && (passField.value === 'gmtl70')){
        window.location.href = "bank.html"; // Redirect to the welcome page
    }
    else if(mailField.value === "" || passField.value === ""){
        alert("Plese enter email or password");
    }
    else{
        alert("Something went wrong. Please try again");
    }

    mailField.value = '';
    passField.value = '';
});


