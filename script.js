// Course card buttons
document.querySelectorAll('.course-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert('This course page is under construction!');
  });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simple Quiz functionality
function checkAnswer(answer) {
  const result = document.getElementById('result');
  if(answer === 4) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Try Again!";
    result.style.color = "red";
  }
}
// Modal Logic
const modal = document.getElementById('auth-modal');
const openBtn = document.getElementById('auth-open');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => modal.style.display = 'block');
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if(e.target === modal) modal.style.display = 'none';
});

// Toggle Forms
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
  loginForm.style.display = 'flex';
  signupForm.style.display = 'none';
});

signupBtn.addEventListener('click', () => {
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
  signupForm.style.display = 'flex';
  loginForm.style.display = 'none';
});

// Form Submission (for demo purposes)
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Logged in successfully!');
  modal.style.display = 'none';
});

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Signed up successfully!');
  modal.style.display = 'none';
});
