const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Basic validation (replace with server-side validation for security)
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Simulate form submission (replace with actual submission logic)
  console.log('Registration details:', { name, email, password });
//   alert('Registration successful!');
});

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate form validation (replace with your actual logic)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    // Login successful (replace with redirect or other actions)
    alert('Login successful!');
  } else {
    alert('Invalid username or password!');
  }
});

