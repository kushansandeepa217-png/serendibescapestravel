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
document.querySelectorAll(".tour-card, .destination-card, .attraction").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px) scale(1.03)";
    card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
  });
});

/* =========================================================
   TIMELINE HOVER EFFECT
========================================================= */
document.querySelectorAll(".timeline li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.background = "#e6f7f5";
    const circle = item.querySelector("::before");
  });
  item.addEventListener("mouseleave", () => {
    item.style.background = "#f9f9f9";
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
const fadeElements = document.querySelectorAll(".fade-in, .timeline li, .tour-intro-card");

function fadeInOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 70) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

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

/* --- Arrow Navigation --- */
document.querySelectorAll('.gallery-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.gallery-slider');
  const left = wrapper.querySelector('.gallery-arrow.left');
  const right = wrapper.querySelector('.gallery-arrow.right');

  if(left && right) {
    left.addEventListener('click', () => {
      slider.scrollBy({ left: -350, behavior: 'smooth' });
    });

    right.addEventListener('click', () => {
      slider.scrollBy({ left: 350, behavior: 'smooth' });
    });
  }
});

/* --- Auto Slide --- */
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
   BOOKING FORM (FAKE SUBMIT)
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
   PROFESSIONAL TIMELINE ANIMATION
========================================================= */
const timelineItems = document.querySelectorAll(".timeline li");

timelineItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-5px)";
    item.style.transition = "all 0.3s ease";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0)";
  });
});
