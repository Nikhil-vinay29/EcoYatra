document.getElementById("signupForm").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let confirmEmail = document.getElementById("confirm-email").value.trim();
    let password = document.getElementById("password").value.trim();
    let state = document.getElementById("state").value;

    if(username.length < 3){
        alert("Username must be at least 3 characters.");
        return;
    }

    if(email !== confirmEmail){
        alert("Emails do not match!");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters.");
        return;
    }

    if(state === ""){
        alert("Please select your state.");
        return;
    }

    let user = {
        username: username,
        email: email,
        password: password,
        state: state
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailExists = users.some(u => u.email === email);

    if(emailExists){
        alert("Email already registered!");
        return;
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    // Save current user
    localStorage.setItem("currentUser", username);

    // Redirect to welcome page
    window.location.href = "welcome.html";

});