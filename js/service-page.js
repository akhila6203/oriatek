document.addEventListener("DOMContentLoaded", () => {
  const pageRoot =
    document.getElementById("servicePage");

  if (!pageRoot || !window.ORIATEK_SERVICES) {
    return;
  }

  const currentSlug =
    pageRoot.dataset.service;

  const service =
    window.ORIATEK_SERVICES.find(
      (item) => item.slug === currentSlug
    );

  if (!service) {
    pageRoot.innerHTML = `
      <section class="service-not-found">
        <div class="container">
          <h1>Service not found</h1>
          <a href="services.html">View All Services</a>
        </div>
      </section>
    `;

    return;
  }

  document.title =
    `${service.fullName} | Oriatek Technology`;

  pageRoot.innerHTML = `
    <section
      class="service-inner-banner"
      style="
        --service-banner-image:
        linear-gradient(
          rgba(3, 27, 57, 0.84),
          rgba(3, 27, 57, 0.9)
        ),
        url('${service.image}');
      "
    >
      <div class="container">

        <span class="service-banner-label">
          ORIATEK SERVICE
        </span>

        <h1>${service.fullName}</h1>

        <nav class="service-page-breadcrumb">

          <a href="index.html">
            <i class="fa-solid fa-house"></i>
            Home
          </a>

          <span>/</span>

          <a href="services.html">
            Services
          </a>

          <span>/</span>

          <span>${service.name}</span>

        </nav>

      </div>
    </section>

    <section class="service-overview-section">
      <div class="container service-overview-grid">

        <div class="service-overview-content">

          <span class="service-section-label">
            SERVICE ${service.number}
          </span>

          <h2>${service.fullName}</h2>

          <p>${service.overview}</p>

          <p>${service.secondaryText}</p>

          <div class="service-feature-list">

            ${service.features
              .map(
                (feature) => `
                  <div class="service-feature-item">
                    <i class="fa-solid fa-circle-check"></i>
                    <span>${feature}</span>
                  </div>
                `
              )
              .join("")}

          </div>

        </div>

        <div class="service-overview-image">
          <img
            src="${service.image}"
            alt="${service.fullName}"
          />
        </div>

      </div>
    </section>

    <section class="service-capabilities-section">
      <div class="container">

        <div class="service-section-heading">
          <span>KEY CAPABILITIES</span>

          <h2>
            Practical capabilities designed for measurable outcomes.
          </h2>
        </div>

        <div class="service-capabilities-grid">

          ${service.capabilities
            .map(
              (capability, index) => `
                <article class="service-capability-card">

                  <span class="capability-number">
                    ${String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>${capability.title}</h3>

                  <p>${capability.text}</p>

                </article>
              `
            )
            .join("")}

        </div>

      </div>
    </section>

    <section class="service-benefits-section">
      <div class="container service-benefits-layout">

        <div class="service-benefits-heading">

          <span>BUSINESS BENEFITS</span>

          <h2>
            What your organization can achieve.
          </h2>

          <p>
            Our delivery approach combines strategy, engineering
            quality and operational support.
          </p>

        </div>

        <div class="service-benefits-list">

          ${service.benefits
            .map(
              (benefit) => `
                <div class="service-benefit-card">

                  <i class="fa-solid fa-arrow-trend-up"></i>

                  <span>${benefit}</span>

                </div>
              `
            )
            .join("")}

        </div>

      </div>
    </section>

    <section class="service-related-section">
      <div class="container">

        <div class="service-section-heading">
          <span>RELATED SERVICES</span>

          <h2>Explore more Oriatek capabilities.</h2>
        </div>

        <div class="related-services-grid">

          ${window.ORIATEK_SERVICES
            .filter(
              (item) => item.slug !== service.slug
            )
            .slice(0, 3)
            .map(
              (related) => `
                <article class="related-service-card">

                  <div class="related-service-icon">
                    <i class="${related.icon}"></i>
                  </div>

                  <h3>${related.name}</h3>

                  <p>
                    ${related.shortDescription}
                  </p>

                  <a href="${related.page}">
                    Read More &gt;&gt;
                  </a>

                </article>
              `
            )
            .join("")}

        </div>

      </div>
    </section>

    <section class="service-cta-section">
      <div class="container">

        <div class="service-cta-card">

          <div>
            <span>DISCUSS YOUR REQUIREMENT</span>

            <h2>
              Ready to explore ${service.name}?
            </h2>

            <p>
              Share your goals and our team will recommend
              a practical next step.
            </p>
          </div>

          <a
            href="contact.html?service=${encodeURIComponent(service.name)}"
          >
            Discuss This Service
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>
    </section>
  `;
});