// Minimal interactions: contact form validation + optional smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = (document.getElementById('name') || {}).value || '';
      const email = (document.getElementById('email') || {}).value || '';
      const message = (document.getElementById('message') || {}).value || '';
      if(!name.trim() || !email.trim() || !message.trim()){
        alert('Please fill all fields before sending.');
        return;
      }
      alert('Thank you — your message has been sent. We will reply shortly.');
      form.reset();
    });
  }

  // Smooth scroll for anchor links (optional)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });
});
