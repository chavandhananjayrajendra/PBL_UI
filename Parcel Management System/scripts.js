document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  
  // Custom validation logic
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,30}$/;
  
  if (!passwordRegex.test(password)) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Password must have at least one uppercase, one lowercase, and one special character.';
      return;
  }
  
  // Placeholder login check
  if (username === 'admin' && password === 'Admin123!') {
      window.location.href = 'dashboard.html';
  } else {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Invalid username or password.';
  }
});
