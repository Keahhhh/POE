document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const toggleBtn = document.getElementById('toggle-dark-mode');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Filter outfits by era
  const filterButtons = document.querySelectorAll('.filter-btn');
  const outfitCards = document.querySelectorAll('.outfit-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const era = btn.getAttribute('data-era');

      outfitCards.forEach(card => {
        if (era === 'all' || card.classList.contains(era)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Scroll reveal animations
  const scrollEls = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  scrollEls.forEach(el => observer.observe(el));

  // Lightbox gallery
  const images = document.querySelectorAll('img');
  const modal = document.getElementById('lightbox');
  const modalImg = document.getElementById('lb-img');
  const closeBtn = document.getElementById('lb-close');
  const nextBtn = document.getElementById('lb-next');
  const prevBtn = document.getElementById('lb-prev');

  let currentIndex = 0;
  // Only consider outfit images inside outfit-card divs (exclude nav images etc.)
  const imgArray = Array.from(document.querySelectorAll('.outfit-card img'));

  imgArray.forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.classList.add('show');
      modalImg.src = img.src;
      currentIndex = index;
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.remove('show'));

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgArray.length;
    modalImg.src = imgArray[currentIndex].src;
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    modalImg.src = imgArray[currentIndex].src;
  });

  // Close modal on outside click
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  // Optional: close modal on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === "Escape" && modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  });
});
