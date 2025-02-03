document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let jobRole = document.getElementById("job-role").value;
    let experience = document.getElementById("experience").value;
    let skills = document.getElementById("skills").value;
    let resume = document.getElementById("resume").files[0];

    if (!resume) {
        document.getElementById("message").innerText = "⚠️ Please upload your resume!";
        return;
    }

    // Check if the uploaded file is a PDF
    if (resume.type !== "application/pdf") {
        document.getElementById("message").innerText = "⚠️ Resume must be a PDF file!";
        return;
    }

    if (name && email && password && phone && jobRole && experience && skills) {
        document.getElementById("message").innerText = "🎊 Sign-Up Successful! Redirecting...";

        this.reset(); // Clears the form after successful signup

        // Redirect to login page after 2 seconds
        setTimeout(function() {
            window.location.href = "devsoc2Mohil.html";
        }, 2000); // 2000ms = 2 seconds
    } else {
        document.getElementById("message").innerText = "⚠️ Please fill in all fields!";
    }
});