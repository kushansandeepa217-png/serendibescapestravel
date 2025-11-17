// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Animate timeline hover
const timelineItems = document.querySelectorAll('.timeline li');
timelineItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.background = '#e6f2f1';
  });
  item.addEventListener('mouseleave', () => {
    item.style.background = 'transparent';
  });
});

// Optional: Read More hover effect
const readMoreBtns = document.querySelectorAll('.btn');
readMoreBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.opacity = '0.85';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.opacity = '1';
  });
});
