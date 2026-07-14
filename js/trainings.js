document.addEventListener("DOMContentLoaded", () => {
  const trainingsGrid =
    document.getElementById("allTrainingsGrid");

  if (
    !trainingsGrid ||
    !Array.isArray(window.ORIATEK_TRAININGS)
  ) {
    return;
  }

  trainingsGrid.innerHTML =
    window.ORIATEK_TRAININGS.map(
      (training) => `
        <article class="training-card">

          <a
            class="training-card-image"
            href="${training.page}"
            aria-label="View ${training.name} training"
          >
            <img
              src="${training.image}"
              alt="${training.fullName}"
              loading="lazy"
            />

            <span class="training-card-number">
              ${training.number}
            </span>
          </a>

          <div class="training-card-content">

            <div class="training-card-icon">
              <i class="${training.icon}"></i>
            </div>

            <h3>${training.name}</h3>

            <p>${training.shortDescription}</p>

            <div class="training-card-meta">
              <span>
                <i class="fa-regular fa-clock"></i>
                ${training.duration}
              </span>

              <span>
                <i class="fa-solid fa-signal"></i>
                ${training.level}
              </span>
            </div>

            <ul>
              ${training.highlights
                .slice(0, 3)
                .map(
                  (highlight) => `
                    <li>
                      <i class="fa-solid fa-check"></i>
                      <span>${highlight}</span>
                    </li>
                  `
                )
                .join("")}
            </ul>

            <a
              class="training-read-more"
              href="${training.page}"
            >
              Read More
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>
        </article>
      `
    ).join("");
});