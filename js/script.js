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
   PROFESSIONAL TIMELINE HOVER (MATCHED WITH NEW CSS)
========================================================= */
document.querySelectorAll(".timeline li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.background = "#f7fdfc";   // subtle premium hover color
    item.style.borderColor = "#d7f1eb";
    item.style.transform = "translateX(9px)";
    item.style.boxShadow = "0 14px 38px rgba(0,0,0,0.16)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.background = "#ffffff";
    item.style.borderColor = "#e8f2f0";
    item.style.transform = "translateX(0)";
    item.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
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
   PROFESSIONAL TOUR OVERVIEW FADE-IN
========================================================= */
const tourOverviewBox = document.querySelector(".tour-overview-box");
const overviewPoints = tourOverviewBox ? tourOverviewBox.querySelectorAll("ul li") : [];

function fadeProfessionalOverview() {
  if (tourOverviewBox && tourOverviewBox.getBoundingClientRect().top < window.innerHeight - 100) {
    tourOverviewBox.classList.add("visible");
  }

  overviewPoints.forEach((point, idx) => {
    if(point.getBoundingClientRect().top < window.innerHeight - 100) {
      setTimeout(() => point.classList.add("visible"), idx * 150);
    }
  });
}

window.addEventListener("scroll", fadeProfessionalOverview);
fadeProfessionalOverview();


/* =========================================================
   STAGGERED FADE-IN FOR TOUR OVERVIEW
========================================================= */
const overviewBox = document.querySelector(".tour-overview-box");
const overviewParagraphs = overviewBox ? overviewBox.querySelectorAll("p") : [];
const overviewListItems = overviewBox ? overviewBox.querySelectorAll("ul li") : [];

function fadeInTourOverview() {
  if(overviewBox && overviewBox.getBoundingClientRect().top < window.innerHeight - 100) {
    overviewBox.classList.add("visible");

    // Stagger paragraphs
    overviewParagraphs.forEach((p, idx) => {
      setTimeout(() => p.classList.add("visible"), idx * 200);
    });

    // Stagger list items
    overviewListItems.forEach((li, idx) => {
      setTimeout(() => li.classList.add("visible"), overviewParagraphs.length * 200 + idx * 150);
    });
  }
}

window.addEventListener("scroll", fadeInTourOverview);
fadeInTourOverview();


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

/* =========================================================
   SMOOTH PAGINATION SCROLL
========================================================= */
document.querySelectorAll(".pagination a").forEach(link => {
  link.addEventListener("click", function(e) {
    // If link is active, do nothing
    if (link.classList.contains("active")) return;

    // Smooth scroll to top
    e.preventDefault();
    const targetUrl = link.getAttribute("href");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Optional: redirect after smooth scroll completes
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 400); // 400ms delay matches smooth scroll
  });
});

/* =========================================================
   FADE-IN FOR THINGS TO DO + BEST TIME SECTIONS
========================================================= */
const tourSections = document.querySelectorAll(".tour-section");

function revealTourSections() {
  tourSections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 80) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealTourSections);
revealTourSections();

/* =========================================================
   HOME HOSPITALITY SECTION FADE-IN
========================================================= */
const hospitalityBox = document.querySelector(".hospitality-section");

function hospitalityFadeIn() {
  if (hospitalityBox && hospitalityBox.getBoundingClientRect().top < window.innerHeight - 100) {
    hospitalityBox.classList.add("visible");
  }
}

window.addEventListener("scroll", hospitalityFadeIn);
hospitalityFadeIn();

/* =========================================================
   WHY CHOOSE US — FADE IN ON SCROLL
========================================================= */
const whyBoxes = document.querySelectorAll(".why-box");

function revealWhyBoxes() {
  whyBoxes.forEach(box => {
    if (box.getBoundingClientRect().top < window.innerHeight - 100) {
      box.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealWhyBoxes);
revealWhyBoxes();

// CATEGORY FILTER FUNCTION
const dots = document.querySelectorAll(".dot");
const markers = document.querySelectorAll(".map-marker");
const categoryTitle = document.getElementById("categoryTitle");

const categoryNames = {
  beach: "Popular Beaches",
  culture: "History & Culture",
  nature: "Wildlife & Nature",
  lesser: "Hidden Gems",
  adventure: "Adventure Travel",
  gastronomy: "Food & Gastronomy"
};

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    // Activate dot
    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");

    const cat = dot.getAttribute("data-cat");
    categoryTitle.textContent = categoryNames[cat];

    // Show only selected markers
    markers.forEach(marker => {
      marker.style.display = marker.classList.contains(cat)
        ? "block"
        : "none";
    });
  });
});

const catItems = document.querySelectorAll(".cat-item");
const markers2 = document.querySelectorAll(".map-marker");

const catMap = {
  nature: "nature",
  beach: "beach",
  culture: "culture",
  lesser: "lesser",
  adventure: "adventure",
  food: "gastronomy",
};

catItems.forEach(item => {
  item.addEventListener("click", () => {

    // Remove active from all
    catItems.forEach(i => i.classList.remove("active"));

    // Activate clicked one
    item.classList.add("active");

    // Get category
    const category = item.getAttribute("data-cat");
    const mapped = catMap[category];

    // Filter markers
    markers2.forEach(marker => {
      marker.style.display = marker.classList.contains(mapped)
        ? "block"
        : "none";
    });
  });
});

const cards = document.querySelectorAll(".select-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.parentElement.classList.contains("single-select")) {
      card.parentElement.querySelectorAll(".select-card")
        .forEach(c => c.classList.remove("active"));
    }
    card.classList.toggle("active");
  });
});

const officeData = {
  srilanka: `
    <p><span>🇱🇰 Sri Lanka Office</span></p>
    <p>📍 <strong>Address:</strong> Ambalangoda, Galle, Sri Lanka</p>
    <p>📧 <strong>Email:</strong> inquiries@serendibeescapestravel.com</p>
    <p>📞 <strong>Phone:</strong> +94-77-179-5679</p>
    <p>🌐 <strong>Website:</strong> www.serendibeescapestravels.com</p>
  `,
  uk: `
    <p><span>🇬🇧 United Kingdom Office</span></p>
    <p>📍 <strong>Address:</strong> Liverpool, England</p>
    <p>📧 <strong>Email:</strong> inquiries@serendibeescapestravel.com</p>
    <p>📞 <strong>Phone:</strong> +44-79-507-81227</p>
    <p>🌐 <strong>Website:</strong> www.serendibeescapestravel.com</p>
  `
};

document.getElementById("officeCountry").addEventListener("change", function () {
  const container = document.getElementById("officeDetails");
  const selected = this.value;

  if (officeData[selected]) {
    container.innerHTML = officeData[selected];
    container.classList.add("show");
  } else {
    container.classList.remove("show");
    container.innerHTML = "";
  }
});



function toggleFooterMenu(header) {
  const menu = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');

  menu.classList.toggle("show");
  icon.textContent = menu.classList.contains("show") ? "−" : "+";
}




function toggleLuxMenu(el) {
  const menu = el.nextElementSibling;
  const icon = el.querySelector(".lux-icon");

  menu.classList.toggle("show");
  icon.textContent = menu.classList.contains("show") ? "−" : "+";
}



function toggleLuxMenu(element) {
  const menu = element.nextElementSibling;
  const icon = element.querySelector(".lux-icon");

  menu.classList.toggle("show");

  icon.textContent = menu.classList.contains("show") ? "−" : "+";
}

function toggleLuxMenu(el) {
  const menu = el.nextElementSibling;
  const icon = el.querySelector(".lux-icon");

  menu.classList.toggle("show");
  icon.textContent = menu.classList.contains("show") ? "−" : "+";
}


const track = document.querySelector(".testimonial-track");
const slides = Array.from(track.children);

const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");

const dotsContainer = document.querySelector(".dots");
let currentIndex = 0;

/* Create dots dynamically */
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dot = document.querySelectorAll(".dots div");

/* Update slide position */
function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

/* Arrows */
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

/* Dots functionality */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });
});

/* Testimonials carousel JS - final package
   - Works with arrows, dots, keyboard arrows, touch swipe, autoplay optional
*/
(function () {
  const track = document.getElementById('tTrack');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.t-prev');
  const nextBtn = document.querySelector('.t-next');
  const dotsWrap = document.getElementById('tDots');

  if (!track || slides.length === 0) return;

  let index = 0;
  const total = slides.length;
  let isMoving = false;
  let autoplayInterval = null;
  const AUTOPLAY = false; // set true if you want autoplay
  const AUTOPLAY_DELAY = 5000;

  // build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 't-dot';
    d.setAttribute('aria-label', `Show testimonial ${i+1}`);
    d.setAttribute('role', 'tab');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });

  const dots = Array.from(dotsWrap.children);

  function update() {
    // move track
    track.style.transform = `translateX(-${index * 100}%)`;
    // update dots
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    // ARIA: set active tab
    dots.forEach((d,i) => d.setAttribute('aria-selected', i===index ? 'true' : 'false'));
  }

  function prev() {
    if (isMoving) return;
    index = (index - 1 + total) % total;
    update();
    resetAutoplay();
  }

  function next() {
    if (isMoving) return;
    index = (index + 1) % total;
    update();
    resetAutoplay();
  }

  function goTo(i) {
    if (isMoving) return;
    index = Math.max(0, Math.min(i, total-1));
    update();
    resetAutoplay();
  }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // touch swipe support
  let startX = 0;
  let isTouching = false;
  const threshold = 40; // px

  track.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      startX = e.touches[0].clientX;
      isTouching = true;
    }
  }, {passive: true});

  track.addEventListener('touchmove', (e) => {
    if (!isTouching || !e.touches) return;
    const dx = e.touches[0].clientX - startX;
    // slight translate while moving (nice feel)
    track.style.transition = 'none';
    track.style.transform = `translateX(${ -index*100 + (dx / track.clientWidth) * 100 }%)`;
  }, {passive: true});

  track.addEventListener('touchend', (e) => {
    if (!isTouching) return;
    isTouching = false;
    track.style.transition = ''; // restore transition
    const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
    const diff = endX - startX;
    if (Math.abs(diff) > threshold) {
      if (diff < 0) next(); else prev();
    } else {
      update(); // snap back
    }
  });

  // autoplay (optional)
  function startAutoplay() {
    if (!AUTOPLAY) return;
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      index = (index + 1) % total;
      update();
    }, AUTOPLAY_DELAY);
  }
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // update initial state and show first
  update();
  startAutoplay();

  // adjust on resize to ensure correct transform
  window.addEventListener('resize', () => update());
})();