document.addEventListener("DOMContentLoaded", () => {
  const pageRoot =
    document.getElementById("trainingPage");

  if (
    !pageRoot ||
    !Array.isArray(window.ORIATEK_TRAININGS)
  ) {
    return;
  }

  const currentSlug =
    pageRoot.dataset.training;

  const training =
    window.ORIATEK_TRAININGS.find(
      (item) => item.slug === currentSlug
    );

  if (!training) {
    pageRoot.innerHTML = `
      <section class="training-not-found">
        <div class="container">
          <h1>Training not found</h1>
          <a href="trainings.html">
            View All Trainings
          </a>
        </div>
      </section>
    `;

    return;
  }

  document.title =
    `${training.fullName} | Oriatek Technology`;

  pageRoot.innerHTML = `
    <section
      class="training-details-banner"
      style="
        --training-banner-image:
        linear-gradient(
          rgba(3, 27, 57, 0.84),
          rgba(3, 27, 57, 0.92)
        ),
        url('${training.image}');
      "
    >
      <div class="container training-details-banner-content">

        <span class="training-banner-label">
          ORIATEK TRAINING
        </span>

        <h1>${training.fullName}</h1>

        <p>${training.shortDescription}</p>

        <nav
          class="training-details-breadcrumb"
          aria-label="Breadcrumb"
        >
          <a href="index.html">
            <i class="fa-solid fa-house"></i>
            Home
          </a>

          <i class="fa-solid fa-chevron-right"></i>

          <a href="trainings.html">
            Trainings
          </a>

          <i class="fa-solid fa-chevron-right"></i>

          <span>${training.name}</span>
        </nav>

      </div>
    </section>

    <section class="training-overview-section">
      <div class="container training-overview-grid">

        <div class="training-overview-content">

          <span class="training-section-label">
            TRAINING ${training.number}
          </span>

          <h2>${training.fullName}</h2>

          <p>${training.overview}</p>

          <p>${training.secondaryText}</p>

          <div class="training-info-grid">

            <div>
              <i class="fa-regular fa-clock"></i>
              <span>Duration</span>
              <strong>${training.duration}</strong>
            </div>

            <div>
              <i class="fa-solid fa-signal"></i>
              <span>Level</span>
              <strong>${training.level}</strong>
            </div>

            <div>
              <i class="fa-solid fa-display"></i>
              <span>Training Mode</span>
              <strong>${training.mode}</strong>
            </div>

          </div>

        </div>

        <div class="training-overview-image">
          <img
            src="${training.image}"
            alt="${training.fullName}"
          />
        </div>

      </div>
    </section>

    <section class="training-highlights-section">
      <div class="container">

        <div class="training-section-heading">
          <span>COURSE HIGHLIGHTS</span>

          <h2>
            Practical topics included in this training.
          </h2>
        </div>

        <div class="training-highlights-grid">
          ${training.highlights
            .map(
              (highlight) => `
                <div class="training-highlight-card">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>${highlight}</span>
                </div>
              `
            )
            .join("")}
        </div>

      </div>
    </section>

    <section class="training-modules-section">
      <div class="container">

        <div class="training-section-heading">
          <span>TRAINING MODULES</span>

          <h2>
            Structured learning from fundamentals to project development.
          </h2>
        </div>

        <div class="training-modules-grid">
          ${training.modules
            .map(
              (module, index) => `
                <article class="training-module-card">

                  <span class="training-module-number">
                    ${String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>${module.title}</h3>

                  <p>${module.text}</p>

                </article>
              `
            )
            .join("")}
        </div>

      </div>
    </section>

    <section class="training-outcomes-section">
      <div class="container training-outcomes-layout">

        <div class="training-outcomes-heading">
          <span>LEARNING OUTCOMES</span>

          <h2>
            Skills you can build through this program.
          </h2>

          <p>
            Complete assignments, guided exercises and project
            development to strengthen practical understanding.
          </p>
        </div>

        <div class="training-outcomes-list">
          ${training.outcomes
            .map(
              (outcome) => `
                <div>
                  <i class="fa-solid fa-arrow-trend-up"></i>
                  <span>${outcome}</span>
                </div>
              `
            )
            .join("")}
        </div>

      </div>
    </section>

    <section class="training-technologies-section">
      <div class="container">

        <div class="training-section-heading">
          <span>TOOLS & TECHNOLOGIES</span>

          <h2>
            Technologies covered during the training.
          </h2>
        </div>

        <div class="training-technologies-list">
          ${training.technologies
            .map(
              (technology) => `
                <span>${technology}</span>
              `
            )
            .join("")}
        </div>

      </div>
    </section>

    <section class="related-trainings-section">
      <div class="container">

        <div class="training-section-heading">
          <span>RELATED TRAININGS</span>

          <h2>Explore more Oriatek training programs.</h2>
        </div>

        <div class="related-trainings-grid">
          ${window.ORIATEK_TRAININGS
            .filter(
              (item) => item.slug !== training.slug
            )
            .slice(0, 3)
            .map(
              (related) => `
                <article class="related-training-card">

                  <img
                    src="${related.image}"
                    alt="${related.fullName}"
                    loading="lazy"
                  />

                  <div>
                    <span>${related.duration}</span>

                    <h3>${related.name}</h3>

                    <p>${related.shortDescription}</p>

                    <a href="${related.page}">
                      Read More
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                </article>
              `
            )
            .join("")}
        </div>

      </div>
    </section>

    <section class="training-cta-section">
      <div class="container">

        <div class="training-cta-card">

          <div>
            <span>START YOUR LEARNING JOURNEY</span>

            <h2>
              Interested in ${training.name} Training?
            </h2>

            <p>
              Contact our team for batch schedules, training mode
              and enrollment information.
            </p>
          </div>

          <a
            href="contact.html?training=${encodeURIComponent(training.name)}"
          >
            Enquire Now
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>
    </section>
  `;
});