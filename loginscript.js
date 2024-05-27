document.getElementById("login-form").addEventListener("submit", function(event) {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  } else if (!validatePassword(password)) {
    alert("Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.");
    event.preventDefault();
  }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  var name = document.getElementById("signup-name").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;

  if (!validateName(name)) {
    alert("Please enter your name.");
    event.preventDefault();
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  } else if (!validatePassword(password)) {
    alert("Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.");
    event.preventDefault();
  }
});

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
  return regex.test(password);
}

function validateName(name) {
  return name.trim() !== "";
}
