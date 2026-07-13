document.addEventListener("DOMContentLoaded", () => {
  const servicesGrid =
    document.getElementById("allServicesGrid");

  if (!servicesGrid || !window.ORIATEK_SERVICES) {
    return;
  }

  servicesGrid.innerHTML =
    window.ORIATEK_SERVICES.map(
      (service) => `
        <article class="all-service-card">

          <div class="all-service-icon">
            <i class="${service.icon}"></i>
          </div>

          <h3>${service.name}</h3>

          <p>
            ${service.shortDescription}
          </p>

          <ul>
            ${service.features
              .slice(0, 3)
              .map(
                (feature) => `
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>${feature}</span>
                  </li>
                `
              )
              .join("")}
          </ul>

          <a
            class="all-service-read-more"
            href="${service.page}"
          >
            Read More &gt;&gt;
          </a>

        </article>
      `
    ).join("");
});