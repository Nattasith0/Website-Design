function handleScrollFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight * 0.85;
  
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', handleScrollFadeIn);
  window.addEventListener('load', handleScrollFadeIn);
  