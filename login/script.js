document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from submitting

	var username = document.getElementById("username").value;
	var password = document.getElementById("password-field").value;

	if (username === "user" && password === "12345@") {
		window.location.href = "user-interface/home.html"; // Redirect to home.html for user
	} else if (username === "admin" && password === "12345@") {
		window.location.href = "admin-panel/admin.html"; // Redirect to admin.html for admin
	} else {
		alert("Invalid username or password. Please try again."); // Show an error message for incorrect credentials
	}
});