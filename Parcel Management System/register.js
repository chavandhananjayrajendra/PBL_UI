document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const successMessage = document.getElementById('success-message');
  
  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }
  
  successMessage.textContent = 'Registration successful. Customer username: ' + Math.random().toString(36).substring(2, 15);
  successMessage.style.color = 'green';
});
