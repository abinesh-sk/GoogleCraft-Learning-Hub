const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const fullName = document.getElementById('fullName').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const course = document.getElementById('course').value;

  // Regular expressions
  const nameRegex = /^[A-Z][a-z]{1,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^.{5,}$/;
  const phoneNumberRegex = /^\d{10}$/;

  // Validation
  if (!nameRegex.test(fullName)) {
    alert('Please enter a valid Full Name (First letter should be uppercase).');
    return;
  }
  if (!usernameRegex.test(username)) {
    alert('Username must be at least 5 characters.');
    return;
  }
  if (!emailRegex.test(email)) {
    alert('Please enter a valid Gmail address.');
    return;
  }
  if (!phoneNumberRegex.test(phoneNumber)) {
    alert('Please enter a valid phone number (10 digits).');
    return;
  }
  if (!passwordRegex.test(password)) {
    alert('Password must be at least 8 characters with at least 1 uppercase letter, symbol, and number.');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }
  if (course === "") {
    alert('Please select a course.');
    return;
  }

  form.submit();
}
