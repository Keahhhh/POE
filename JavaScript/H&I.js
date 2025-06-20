document.addEventListener('DOMContentLoaded', () => {
  // Animate fade-in
  const elements = document.querySelectorAll('section');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 150);
  });

  // Dark mode toggle
  const toggleButton = document.getElementById('toggle-dark-mode');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Quiz logic
  const quizButton = document.getElementById('start-quiz');
  const resultText = document.getElementById('quiz-result');

  quizButton.addEventListener('click', () => {
    const eras = ['Renaissance', 'Lemonade', 'Dangerously in Love', '4', 'B’Day'];
    const randomEra = eras[Math.floor(Math.random() * eras.length)];
    resultText.textContent = `You're in your "${randomEra}" era!`;
  });
});
