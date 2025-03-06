document.addEventListener("DOMContentLoaded", function () {
    const createAccountBtn = document.getElementById("createAccountBtn");

    if (createAccountBtn) {
        createAccountBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "createAccount.html";
        });
    }
});

