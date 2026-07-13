/* =========================================================
   ORIATEK ABOUT PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeRevealAnimations();
  initializeAboutCounters();
});

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initializeRevealAnimations() {
  const revealElements =
    document.querySelectorAll(".reveal");

  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      }
    );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

/* =========================================================
   COUNTERS
========================================================= */

function initializeAboutCounters() {
  const counters =
    document.querySelectorAll("[data-count]");

  if (!counters.length) return;

  function animateCounter(counter) {
    if (counter.dataset.animated === "true") {
      return;
    }

    counter.dataset.animated = "true";

    const target =
      Number(counter.dataset.count) || 0;

    const suffix =
      counter.dataset.suffix || "";

    const duration = 1300;

    const startTime =
      performance.now();

    function updateCounter(currentTime) {
      const elapsed =
        currentTime - startTime;

      const progress =
        Math.min(elapsed / duration, 1);

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue =
        Math.floor(target * easedProgress);

      counter.textContent =
        `${currentValue}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent =
          `${target}${suffix}`;
      }
    }

    requestAnimationFrame(updateCounter);
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

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.5,
      }
    );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}