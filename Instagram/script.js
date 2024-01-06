// script.js

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Basic validation
  if (username === "" || password === "") {
    alert("Please enter both username and password");
    return;
  }

  // Simulate login (you would typically make an API request here)
  alert("Login successful!\nUsername: " + username);
}
