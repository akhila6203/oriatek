/* =========================================================
   ORIATEK HOME PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeHeroSlider();
  initializeRevealItems();
  initializeCounters();
});

/* =========================================================
   HERO SLIDER
========================================================= */

function initializeHeroSlider() {
  const slides =
    document.querySelectorAll(".home-hero-slide");

  const previousButton =
    document.getElementById("heroPrevious");

  const nextButton =
    document.getElementById("heroNext");

  const dotsContainer =
    document.getElementById("heroDots");

  const heroSection =
    document.getElementById("homeHero");

  if (!slides.length) return;

  let activeIndex = 0;
  let autoSlideTimer = null;

  const slideDuration = 6000;

  function createDots() {
    if (!dotsContainer) return;

    dotsContainer.innerHTML =
      Array.from(slides)
        .map(
          (_, index) => `
            <button
              class="home-slider-dot ${
                index === 0 ? "active" : ""
              }"
              type="button"
              data-slide-index="${index}"
              aria-label="Open slide ${index + 1}"
            ></button>
          `
        )
        .join("");
  }

  function displaySlide(index) {
    activeIndex =
      (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle(
        "active",
        slideIndex === activeIndex
      );
    });

    document
      .querySelectorAll(".home-slider-dot")
      .forEach((dot, dotIndex) => {
        dot.classList.toggle(
          "active",
          dotIndex === activeIndex
        );
      });
  }

  function nextSlide() {
    displaySlide(activeIndex + 1);
  }

  function previousSlide() {
    displaySlide(activeIndex - 1);
  }

  function startAutoSlide() {
    stopAutoSlide();

    autoSlideTimer =
      window.setInterval(
        nextSlide,
        slideDuration
      );
  }

  function stopAutoSlide() {
    if (!autoSlideTimer) return;

    window.clearInterval(autoSlideTimer);

    autoSlideTimer = null;
  }

  createDots();

  previousButton?.addEventListener(
    "click",
    () => {
      previousSlide();
      startAutoSlide();
    }
  );

  nextButton?.addEventListener(
    "click",
    () => {
      nextSlide();
      startAutoSlide();
    }
  );

  dotsContainer?.addEventListener(
    "click",
    (event) => {
      const dot =
        event.target.closest(
          "[data-slide-index]"
        );

      if (!dot) return;

      const slideIndex =
        Number(dot.dataset.slideIndex);

      displaySlide(slideIndex);
      startAutoSlide();
    }
  );

  heroSection?.addEventListener(
    "mouseenter",
    stopAutoSlide
  );

  heroSection?.addEventListener(
    "mouseleave",
    startAutoSlide
  );

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        stopAutoSlide();
      } else {
        startAutoSlide();
      }
    }
  );

  displaySlide(0);
  startAutoSlide();
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initializeRevealItems() {
  const revealItems =
    document.querySelectorAll(".reveal");

  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

    return;
  }

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "is-visible"
          );

          observer.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12,
      }
    );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
}

/* =========================================================
   COUNTERS
========================================================= */

function initializeCounters() {
  const counters =
    document.querySelectorAll("[data-count]");

  if (!counters.length) return;

  function animateCounter(counter) {
    if (
      counter.dataset.animated === "true"
    ) {
      return;
    }

    counter.dataset.animated = "true";

    const target =
      Number(counter.dataset.count) || 0;

    const suffix =
      counter.dataset.suffix || "";

    const duration = 1200;

    const startTime =
      performance.now();

    function updateCounter(currentTime) {
      const elapsed =
        currentTime - startTime;

      const progress =
        Math.min(
          elapsed / duration,
          1
        );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue =
        Math.floor(
          target * easedProgress
        );

      counter.textContent =
        `${currentValue}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(
          updateCounter
        );
      } else {
        counter.textContent =
          `${target}${suffix}`;
      }
    }

    requestAnimationFrame(
      updateCounter
    );
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const counterObserver =
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animateCounter(entry.target);

          observer.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.4,
      }
    );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}
