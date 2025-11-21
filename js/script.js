/* =========================================================
   SMOOTH SCROLL
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (document.querySelector(this.getAttribute('href'))) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* =========================================================
   TIMELINE HOVER
   ========================================================= */
document.querySelectorAll('.timeline li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.background = '#e6f2f1';
  });
  item.addEventListener('mouseleave', () => {
    item.style.background = 'transparent';
  });
});

/* =========================================================
   BUTTON HOVER EFFECT
   ========================================================= */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.opacity = '0.85');
  btn.addEventListener('mouseleave', () => btn.style.opacity = '1');
});

/* =========================================================
   GALLERY SLIDER (HORIZONTAL SCROLL)
   ========================================================= */
document.querySelectorAll('.gallery-slider').forEach(slider => {
  slider.addEventListener('wheel', evt => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
});

/* =========================================================
   BOOKING FORM (FAKE SUBMIT)
   ========================================================= */
const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you! Your booking request has been submitted.");
    bookingForm.reset();
  });
};
