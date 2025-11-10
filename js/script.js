// Mobile Menu Toggle
const menu = document.querySelector('#mobile-menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('open');
});
