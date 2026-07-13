/* =========================================================
   ORIATEK SERVICES DROPDOWN
========================================================= */

function createOriatekServicesDropdown() {
  if (!window.ORIATEK_SERVICES) {
    return "";
  }

  return window.ORIATEK_SERVICES.map(
    (service) => `
      <a
        class="service-dropdown-link"
        href="${service.page}"
      >
        <span class="service-dropdown-icon">
          <i class="${service.icon}"></i>
        </span>

        <span class="service-dropdown-content">
          <strong>${service.name}</strong>
          <small>View service details</small>
        </span>
      </a>
    `
  ).join("");
}

function createOriatekMobileServicesDropdown() {
  if (!window.ORIATEK_SERVICES) {
    return "";
  }

  return window.ORIATEK_SERVICES.map(
    (service) => `
      <a
        class="mobile-service-link"
        href="${service.page}"
      >
        <i class="${service.icon}"></i>
        <span>${service.name}</span>
      </a>
    `
  ).join("");
}

window.createOriatekServicesDropdown =
  createOriatekServicesDropdown;

window.createOriatekMobileServicesDropdown =
  createOriatekMobileServicesDropdown;