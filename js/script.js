/* =========================================================
   MOBILE MENU
   ========================================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

/* =========================================================
   SMOOTH SCROLL
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (document.querySelector(this.getAttribute("href"))) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================================================
   CARD HOVERS
   ========================================================= */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

/* =========================================================
   TIMELINE HOVER
   ========================================================= */
document.querySelectorAll(".timeline li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.background = "#dff4f2";
  });
  item.addEventListener("mouseleave", () => {
    item.style.background = "#eef7f6";
  });
});

/* =========================================================
   BUTTON HOVER EFFECT
   ========================================================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => (btn.style.opacity = "0.85"));
  btn.addEventListener("mouseleave", () => (btn.style.opacity = "1"));
});

/* =========================================================
   FADE-IN ON SCROLL
   ========================================================= */
const revealElements = document.querySelectorAll(".card, .timeline li, .section-title");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 70) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================================================
   SIMPLE IMAGE SLIDER (DESTINATION GALLERY)
   ========================================================= */
const sliders = document.querySelectorAll(".gallery-slider");

sliders.forEach(slider => {
  slider.addEventListener("wheel", evt => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
});

/* =========================================================
   BOOKING FORM (FAKE SUBMIT)
   ========================================================= */
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your booking request has been submitted.");
    bookingForm.reset();
  });
}
