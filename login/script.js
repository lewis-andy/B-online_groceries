document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("loginForm").addEventListener("submit", function(event) {
	  event.preventDefault(); // Prevent the form from submitting

	  var username = document.getElementById("user").value;
	  var password = document.getElementById("pass").value;

	  if (username === "user" && password === "12345@") {
		window.location.href = "user-interface/home.html"; // Redirect to home.html for user
	  } else if (username === "admin" && password === "12345@") {
		window.location.href = "admin-panel/index.html"; // Redirect to admin.html for admin
	  } else {
		alert("Invalid username or password. Please try again."); // Show an error message for incorrect credentials
	  }
	});
  });