document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from submitting

	var username = document.getElementById("username").value;
	var password = document.getElementById("password-field").value;

	if (username === "user@gmail.com" && password === "user123!") {
		window.location.href = "online_retail_system/Frontend_RetailSysX/index.html"; // Redirect to index.html for user
	} else if (username === "admin@gmail.com" && password === "admin123!") {
		window.location.href = "online_retail_system/Frontend_RetailSysX/admin_panel/index.html"; // Redirect to admin.html for admin
	} else {
		alert("Invalid username or password. Please try again."); // Show an error message for incorrect credentials
	}
});