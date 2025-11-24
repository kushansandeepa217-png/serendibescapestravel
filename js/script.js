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
    item.style.background = "#f4faf9";
  });
  item.addEventListener("mouseleave", () => {
    item.style.background = "#ffffff";
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
    const img = slider.querySelector("img");
    if (img) {
      const gap = parseInt(getComputedStyle(slider).gap);
      const scrollAmount = img.offsetWidth + gap;
      slider.scrollLeft += evt.deltaY > 0 ? scrollAmount : -scrollAmount;
    }
  });
});

document.querySelectorAll(".gallery-wrapper").forEach(wrapper => {
  const slider = wrapper.querySelector(".gallery-slider");
  const left = wrapper.querySelector(".gallery-arrow.left");
  const right = wrapper.querySelector(".gallery-arrow.right");

  left.addEventListener("click", () => {
    const img = slider.querySelector("img");
    const gap = parseInt(getComputedStyle(slider).gap);
    const scrollAmount = img.offsetWidth + gap;
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    const img = slider.querySelector("img");
    const gap = parseInt(getComputedStyle(slider).gap);
    const scrollAmount = img.offsetWidth + gap;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

/* Auto Slide */
setInterval(() => {
  sliders.forEach(slider => {
    const img = slider.querySelector("img");
    const gap = parseInt(getComputedStyle(slider).gap);
    const scrollAmount = img.offsetWidth + gap;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your booking request has been submitted.");
    bookingForm.reset();
  });
}
