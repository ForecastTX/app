function checkEmail() {
    const emailInput = document.getElementById("email").value;
    const authorizedEmails = ["user@example.com", "admin@forecasttx.com"];
    
    if (authorizedEmails.includes(emailInput)) {
        window.location.href = "createAccount.html";
    } else {
        alert("Email not authorized.");
    }
}
