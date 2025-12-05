document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-fade-wrapper img.slide');
    const prevBtn = document.querySelector('.slider-fade-wrapper .prev');
    const nextBtn = document.querySelector('.slider-fade-wrapper .next');
    const dots = document.querySelectorAll('.dots .dot');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
      let index = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    nextBtn.addEventListener('click', () => {
      let index = (currentIndex + 1) % slides.length;
      showSlide(index);
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        showSlide(parseInt(dot.dataset.index));
      });
    });

    showSlide(0);

    const form = document.getElementById('contactUs');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', e => {
      e.preventDefault();
      status.style.display = 'block';
      form.reset();
      setTimeout(() => {
        status.style.display = 'none';
      }, 5000);
    });
});
