// Fashion.js
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    const closeBtn = document.getElementById('lb-close');
    const prevBtn = document.getElementById('lb-prev');
    const nextBtn = document.getElementById('lb-next');
  
    const imgs = Array.from(document.querySelectorAll('img')).filter(img => img.src && img.alt);
    let current = 0;
  
    function show(index) {
      current = (index + imgs.length) % imgs.length;
      lbImg.src = imgs[current].src;
      lbImg.alt = imgs[current].alt;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  
    function hide() {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    }
  
    function change(delta) {
      show(current + delta);
    }
  
    imgs.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => show(i));
    });
  
    closeBtn.addEventListener('click', hide);
    prevBtn.addEventListener('click', () => change(-1));
    nextBtn.addEventListener('click', () => change(1));
  
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) hide();
    });
  
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') hide();
        if (e.key === 'ArrowLeft') change(-1);
        if (e.key === 'ArrowRight') change(1);
      }
    });
  });
  