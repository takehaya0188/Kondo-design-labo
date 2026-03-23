document.addEventListener('DOMContentLoaded', () => {

  /*
    ==============================
    スクロールフェードイン
    ==============================
  */
  const fadeTargets = document.querySelectorAll('.fadein');

  if (fadeTargets.length > 0) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    fadeTargets.forEach(target => {
      fadeObserver.observe(target);
    });
  }


  /*
    ==============================
    ファーストビューの画像スライド
    ==============================
  */
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

});

