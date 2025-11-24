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
