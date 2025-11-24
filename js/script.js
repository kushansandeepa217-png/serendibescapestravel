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
document.querySelectorAll(".card, .destination-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

/* =========================================================
   TIMELINE HOVER EFFECT
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
const fadeElements = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 70) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

/* =========================================================
   GALLERY SLIDER
========================================================= */
const sliders = document.querySelectorAll(".gallery-slider");

sliders.forEach(slider => {
  slider.addEventListener("wheel", evt => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
});

/* Arrow Navigation */
document.querySelectorAll('.gallery-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.gallery-slider');
  const left = wrapper.querySelector('.gallery-arrow.left');
  const right = wrapper.querySelector('.gallery-arrow.right');

  if (left) left.addEventListener('click', () => slider.scrollBy({ left: -350, behavior: 'smooth' }));
  if (right) right.addEventListener('click', () => slider.scrollBy({ left: 350, behavior: 'smooth' }));
});

/* Auto Slide */
setInterval(() => {
  document.querySelectorAll(".gallery-slider").forEach(slider => {
    slider.scrollBy({ left: 250, behavior: "smooth" });
  });
}, 3800);

/* =========================================================
   LIGHTBOX
========================================================= */
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox-bg");
document.body.appendChild(lightbox);

sliders.forEach(slider => {
  slider.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.innerHTML = `<img src="${img.src}" />`;
      lightbox.style.display = "flex";
    });
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* =========================================================
   BOOKING FORM
========================================================= */
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your booking request has been submitted.");
    bookingForm.reset();
  });
}

/* =========================================================
   TOUR PAGE INTERACTIONS
========================================================= */

/* Itinerary fade-in */
document.querySelectorAll(".timeline li").forEach((day, index) => {
  day.style.transition = "all 0.5s ease";
  day.style.transitionDelay = `${index * 100}ms`;
  day.classList.add("fade-in");
});

/* Inclusions stagger */
document.querySelectorAll(".tour-inclusions p").forEach((item, i) => {
  item.style.opacity = 0;
  item.style.transform = "translateX(-15px)";
  item.style.transition = "all 0.5s ease";
  item.style.transitionDelay = `${i * 70}ms`;
});

function revealInclusions() {
  document.querySelectorAll(".tour-inclusions p").forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 60) {
      item.style.opacity = 1;
      item.style.transform = "translateX(0)";
    }
  });
}

window.addEventListener("scroll", revealInclusions);
revealInclusions();
