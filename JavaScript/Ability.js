document.addEventListener('DOMContentLoaded', () => {
  // Create and append dark mode toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'toggle-dark-mode';
  toggleBtn.textContent = '🌙';
  document.body.appendChild(toggleBtn);

  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
  });

  // Fade-in animation for main elements
  const fadeEls = document.querySelectorAll('h1, h2, p, ul, ol, nav, footer');

  fadeEls.forEach((el, i) => {
    el.style.setProperty('--delay', `${i * 0.15}s`);
    el.classList.add('fade-in');
  });
});
