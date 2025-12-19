document.addEventListener('DOMContentLoaded', () => {
  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        alert('Please fill out all required fields.');
        return;
      }
      alert('Submitting your request...');
    });
  });

  // Slideshow functionality
  const slides = document.querySelectorAll('.hero-section .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      slide.style.opacity = 0;
    });
    slides[index].classList.add('active');
    slides[index].style.opacity = 1;
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Initial display and auto-slide
  showSlide(current);
  setInterval(nextSlide, 4000); // Change slide every 4 seconds
});