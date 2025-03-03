 window.onload = function() {
            document.getElementById("welcomeText").style.opacity = 1;
            setTimeout(function() {
                window.location.href = '/login.html';
            }, 3000); // Redirect after 3 seconds
        };
