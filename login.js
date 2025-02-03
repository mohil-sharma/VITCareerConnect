document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        document.getElementById("login-message").innerText = "🎊 Login Successful! Redirecting...";

        // Simulate authentication (In real scenario, check with a database)
        setTimeout(function() {
            window.location.href = "devsoc2Mohil.html"; // Redirects to dashboard/homepage
        }, 2000); // 2 seconds delay for user to see message
    } else {
        document.getElementById("login-message").innerText = "⚠️ Please enter your email and password!";
    }
});