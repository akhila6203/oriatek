

const sharedHeaderPlaceholder = document.getElementById("shared-header");
const sharedFooterPlaceholder = document.getElementById("shared-footer");

/* =========================================================
   SERVICES DROPDOWN DATA
========================================================= */

const serviceLinks = [
  {
    name: "Artificial Intelligence & ML",
    icon: "fa-solid fa-brain",
    href: "artificial-intelligence.html",
  },
  {
    name: "Cyber Security Solutions",
    icon: "fa-solid fa-shield-halved",
    href: "cyber-security.html",
  },
  {
    name: "Digital Product Engineering",
    icon: "fa-solid fa-gears",
    href: "digital-product-engineering.html",
  },
  {
    name: "Cloud Computing Solutions",
    icon: "fa-solid fa-cloud",
    href: "cloud-computing.html",
  },
  {
    name: "IT Management Solutions",
    icon: "fa-solid fa-screwdriver-wrench",
    href: "it-management.html",
  },
  {
    name: "Application Services",
    icon: "fa-solid fa-layer-group",
    href: "application-services.html",
  },
  {
    name: "Web & Mobile App Development",
    icon: "fa-solid fa-laptop-code",
    href: "web-mobile-development.html",
  },
  {
    name: "IT Consulting",
    icon: "fa-solid fa-lightbulb",
    href: "it-consulting.html",
  },
  // {
  //   name: "Staff Augmentation",
  //   icon: "fa-solid fa-user-group",
  //   href: "staff-augmentation.html",
  // },
];

  /* =========================================================
   TRAININGS DROPDOWN DATA
========================================================= */

const trainingLinks = [
  {
    name: "Java Development",
    icon: "fa-brands fa-java",
    href: "java-development.html",
  },
  {
    name: "Full Stack Java",
    icon: "fa-solid fa-code",
    href: "full-stack-java.html",
  },
  {
    name: ".NET Development",
    icon: "fa-brands fa-microsoft",
    href: "dot-net-development.html",
  },
  {
    name: "Python Development",
    icon: "fa-brands fa-python",
    href: "python-development.html",
  },
  {
    name: "Full Stack Python",
    icon: "fa-solid fa-layer-group",
    href: "full-stack-python.html",
  },
  {
    name: "Python with Advanced AI",
    icon: "fa-solid fa-robot",
    href: "python-ai.html",
  },
];

const desktopTrainingLinks = trainingLinks
  .map(
    (training) => `
      <a
        class="service-dropdown-link"
        href="${training.href}"
      >
        <span class="service-dropdown-icon">
          <i
            class="${training.icon}"
            aria-hidden="true"
          ></i>
        </span>

        <span class="service-dropdown-content">
          <strong>${training.name}</strong>
          <small>View training details</small>
        </span>

        <i
          class="fa-solid fa-arrow-right service-dropdown-arrow"
          aria-hidden="true"
        ></i>
      </a>
    `
  )
  .join("");

const mobileTrainingLinks = trainingLinks
  .map(
    (training) => `
      <a
        href="${training.href}"
        class="mobile-service-link"
      >
        <i
          class="${training.icon}"
          aria-hidden="true"
        ></i>

        <span>${training.name}</span>
      </a>
    `
  )
  .join("");


const desktopServiceLinks = serviceLinks
  .map(
    (service) => `
      <a class="service-dropdown-link" href="${service.href}">
        <span class="service-dropdown-icon">
          <i class="${service.icon}" aria-hidden="true"></i>
        </span>

        <span class="service-dropdown-content">
          <strong>${service.name}</strong>
          <small>View service details</small>
        </span>

        <i class="fa-solid fa-arrow-right service-dropdown-arrow" aria-hidden="true"></i>
      </a>
    `
  )
  .join("");

const mobileServiceLinks = serviceLinks
  .map(
    (service) => `
      <a href="${service.href}" class="mobile-service-link">
        <i class="${service.icon}" aria-hidden="true"></i>
        <span>${service.name}</span>
      </a>
    `
  )
  .join("");

/* =========================================================
   HEADER TEMPLATE
========================================================= */

const siteHeaderTemplate = `
  <div class="site-header" id="siteHeader">
    <div class="header-container">

      <a class="brand-logo" href="index.html" aria-label="Oriatek Technology home">
        <img src="assets/logo.jpg" alt="Oriatek Technology Logo">
      </a>

      <nav class="desktop-navigation" aria-label="Primary navigation">
        <a class="desktop-nav-link" href="index.html">Home</a>

        <a class="desktop-nav-link" href="about.html">About Us</a>

        <div class="services-dropdown" id="servicesDropdown">
          <a
            class="desktop-nav-link services-main-link"
            href="services.html"
            aria-haspopup="true"
          >
            Services
            <i class="fa-solid fa-chevron-down dropdown-chevron" aria-hidden="true"></i>
          </a>

          <div class="services-mega-menu" aria-label="Services submenu">
            <div class="mega-menu-header">
              <div>
                <span class="mega-menu-label">OUR SERVICES</span>
                <h3>Technology solutions for modern businesses</h3>
              </div>

              <a href="services.html" class="view-all-services">
                View All Services
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            <div class="services-dropdown-grid">
              ${desktopServiceLinks}
            </div>
          </div>
        </div>
        <div class="services-dropdown training-dropdown">
  <a
    class="desktop-nav-link trainings-main-link"
    href="trainings.html"
    aria-haspopup="true"
  >
    Trainings

    <i
      class="fa-solid fa-chevron-down dropdown-chevron"
      aria-hidden="true"
    ></i>
  </a>

  <div
    class="services-mega-menu trainings-mega-menu"
    aria-label="Trainings submenu"
  >
    <div class="mega-menu-header">

      <div>
        <span class="mega-menu-label">
          OUR TRAININGS
        </span>

        <h3>
           Career-Focused Tech Training
        </h3>
      </div>

      <a
        href="trainings.html"
        class="view-all-services"
      >
        View All Trainings

        <i
          class="fa-solid fa-arrow-right"
          aria-hidden="true"
        ></i>
      </a>

    </div>

    <div class="services-dropdown-grid">
      ${desktopTrainingLinks}
    </div>
  </div>
</div>
        <a class="desktop-nav-link" href="contact.html">Contact Us</a>
      </nav>

      <div class="header-controls">

      <div class="header-social-links desktop-header-socials">
    <a href="#" aria-label="LinkedIn">
      <i class="fa-brands fa-linkedin-in"></i>
    </a>

    <a href="#" aria-label="Facebook">
      <i class="fa-brands fa-facebook-f"></i>
    </a>

    <a href="#" aria-label="Instagram">
      <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="#" aria-label="X">
      <i class="fa-brands fa-x-twitter"></i>
    </a>
  </div>
        <button
          class="theme-toggle"
          id="themeToggle"
          type="button"
          aria-label="Switch to dark mode"
          title="Switch to dark mode"
        >
          <i class="fa-solid fa-sun" aria-hidden="true"></i>
        </button>

        <button
          class="mobile-menu-button"
          id="mobileMenuButton"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="mobileNavigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    </div>

    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>

    <aside class="mobile-navigation" id="mobileNavigation">
      <div class="mobile-navigation-header">
        <a class="mobile-brand-logo" href="index.html">
          <img src="assets/logo.jpg" alt="Oriatek Technology Logo">
        </a>

        <button
          class="mobile-close-button"
          id="mobileCloseButton"
          type="button"
          aria-label="Close navigation menu"
        >
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
      </div>

      <div class="mobile-navigation-body">
        <a class="mobile-nav-link" href="index.html">
          <span>Home</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>

        <a class="mobile-nav-link" href="about.html">
          <span>About Us</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>

        <div class="mobile-services-wrapper">
          <div class="mobile-services-row">
            <a class="mobile-nav-link mobile-services-main" href="services.html">
              <span>Services</span>
            </a>

            <button
              class="mobile-services-toggle"
              id="mobileServicesToggle"
              type="button"
              aria-expanded="false"
              aria-label="Open services menu"
            >
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>

          <div class="mobile-services-list" id="mobileServicesList">
            ${mobileServiceLinks}
          </div>
        </div>

        <div class="mobile-services-wrapper">

  <div class="mobile-services-row">

    <a
      class="mobile-nav-link mobile-trainings-main"
      href="trainings.html"
    >
      <span>Trainings</span>
    </a>

    <button
      class="mobile-services-toggle"
      id="mobileTrainingsToggle"
      type="button"
      aria-expanded="false"
      aria-label="Open trainings menu"
    >
      <i class="fa-solid fa-chevron-down"></i>
    </button>

  </div>

  <div
    class="mobile-services-list"
    id="mobileTrainingsList"
  >
    ${mobileTrainingLinks}
  </div>

</div>
        <a class="mobile-nav-link" href="contact.html">
          <span>Contact Us</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="mobile-navigation-footer">
        <p>Innovate • Integrate • Elevate</p>
        <a href="mailto:hello@oriatek.com">
          <i class="fa-solid fa-envelope"></i>
          hello@oriatek.com
        </a>

         <div class="mobile-social-section">

    <span class="mobile-social-title">
      Follow Us
    </span>

    <div class="mobile-header-socials">

      <a
        href="#"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-linkedin-in"></i>
      </a>

      <a
        href="#"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-facebook-f"></i>
      </a>

      <a
        href="#"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a
        href="#"
        aria-label="X"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-x-twitter"></i>
      </a>

    </div>

  </div>
      </div>
    </aside>
  </div>
`;

/* =========================================================
   FOOTER TEMPLATE
========================================================= */

const siteFooterTemplate = `
  <div class="site-footer">
    <div class="footer-top-decoration"></div>

    <div class="container footer-main-grid">

      <div class="footer-company-column">
        <a href="index.html" class="footer-logo-box">
          <img
            class="footer-logo"
            src="assets/logo.jpg"
            alt="Oriatek Technology Logo"
          >
        </a>

        <p class="footer-description">
          Oriatek Technology delivers innovative AI, cloud, cyber security,
          digital engineering and IT consulting solutions for modern businesses.
        </p>

        <p class="footer-tagline">
          Innovate. Integrate. Elevate.
        </p>

        <div class="footer-social-links">
          <a href="#" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="#" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a href="#" aria-label="X">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      
      <div class="footer-column">
  <h3>Quick Links</h3>

  <ul class="footer-links-list quick-footer-links">
    <li>
      <a href="index.html">Home</a>
    </li>

    <li>
      <a href="about.html">About Us</a>
    </li>

    <li>
      <a href="services.html">Services</a>
    </li>
    <li>
      <a href="trainings.html">
        Trainings
      </a>
    </li>
    <li>
      <a href="contact.html">Contact Us</a>
    </li>
  </ul>
</div>

      <div class="footer-column">
  <h3>Our Services</h3>

  <ul class="footer-links-list service-footer-links">
    <li>
      <a href="artificial-intelligence.html">
        Artificial Intelligence & ML
      </a>
    </li>

    <li>
      <a href="cyber-security.html">
        Cyber Security Solutions
      </a>
    </li>

    <li>
      <a href="digital-product-engineering.html">
        Digital Product Engineering
      </a>
    </li>

    <li>
      <a href="cloud-computing.html">
        Cloud Computing Solutions
      </a>
    </li>

    <li>
      <a href="it-management.html">
        IT Management Solutions
      </a>
    </li>

    <li>
      <a href="application-services.html">
        Application Services
      </a>
    </li>

    <li>
      <a href="web-mobile-development.html">
        Web & Mobile App Development
      </a>
    </li>

    <li>
      <a href="it-consulting.html">
        IT Consulting
      </a>
    </li>
  </ul>
</div>

      <div class="footer-column footer-contact-column">
        <h3>Contact Us</h3>

        <ul class="footer-contact-list">
          <li>
            <span class="footer-contact-icon">
              <i class="fa-solid fa-envelope"></i>
            </span>

            <div>
              <small>Email</small>
              <a href="mailto:hello@oriatek.com">
                hello@oriatek.com
              </a>
            </div>
          </li>

          <li>
            <span class="footer-contact-icon">
              <i class="fa-solid fa-phone"></i>
            </span>

            <div>
              <small>Phone</small>
              <a href="tel:+919000000000">
                +91 90000 00000
              </a>
            </div>
          </li>

          <li>
            <span class="footer-contact-icon">
              <i class="fa-solid fa-location-dot"></i>
            </span>

            <div>
              <small>Location</small>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </li>

          <li>
            <span class="footer-contact-icon">
              <i class="fa-solid fa-clock"></i>
            </span>

            <div>
              <small>Business Hours</small>
              <span>Mon - Fri: 9:00 AM - 7:00 PM</span>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
  <div class="container footer-bottom-inner">
    <p>
      © <span id="currentYear"></span> Oriatek Technology.
      All rights reserved.
    </p>

    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>
  </div>
</div>
  </div>
`;

/* =========================================================
   INSERT HEADER AND FOOTER
========================================================= */

if (sharedHeaderPlaceholder) {
  sharedHeaderPlaceholder.innerHTML = siteHeaderTemplate;
}

if (sharedFooterPlaceholder) {
  sharedFooterPlaceholder.innerHTML = siteFooterTemplate;
}

/* =========================================================
   GET ELEMENTS AFTER INSERTION
========================================================= */

const siteHeader = document.getElementById("siteHeader");
const themeToggle = document.getElementById("themeToggle");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileCloseButton = document.getElementById("mobileCloseButton");
const mobileNavigation = document.getElementById("mobileNavigation");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

const mobileServicesToggle = document.getElementById(
  "mobileServicesToggle"
);
const mobileServicesList = document.getElementById(
  "mobileServicesList"
);

const mobileTrainingsToggle =
  document.getElementById(
    "mobileTrainingsToggle"
  );

const mobileTrainingsList =
  document.getElementById(
    "mobileTrainingsList"
  );
/* =========================================================
   DARK / LIGHT THEME
========================================================= */

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("oriatek-theme", theme);

  if (!themeToggle) return;

  const themeIcon = themeToggle.querySelector("i");

  if (theme === "dark") {
    themeIcon.className = "fa-solid fa-moon";
    themeToggle.setAttribute(
      "aria-label",
      "Switch to light mode"
    );
    themeToggle.setAttribute(
      "title",
      "Switch to light mode"
    );
  } else {
    themeIcon.className = "fa-solid fa-sun";
    themeToggle.setAttribute(
      "aria-label",
      "Switch to dark mode"
    );
    themeToggle.setAttribute(
      "title",
      "Switch to dark mode"
    );
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("oriatek-theme");

  applyTheme(savedTheme === "dark" ? "dark" : "light");
}

themeToggle?.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

/* =========================================================
   ACTIVE NAVIGATION
========================================================= */
function setActiveNavigation() {
  let currentFile = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

  if (!currentFile || currentFile === "") {
    currentFile = "index.html";
  }

  document
    .querySelectorAll(
      ".desktop-nav-link, .mobile-nav-link"
    )
    .forEach((link) => {
      const href = link
        .getAttribute("href")
        ?.split("#")[0]
        .toLowerCase();

      if (href === currentFile) {
        link.classList.add("active");
      }
    });

  const servicePageFiles = [
    "services.html",
    "artificial-intelligence.html",
    "cyber-security.html",
    "digital-product-engineering.html",
    "cloud-computing.html",
    "it-management.html",
    "application-services.html",
    "web-mobile-development.html",
    "it-consulting.html",
  
    // "staff-augmentation.html",
  ];

  const trainingPageFiles = [
  "trainings.html",
  "java-development.html",
  "full-stack-java.html",
  "dot-net-development.html",
  "python-development.html",
  "full-stack-python.html",
  "python-ai.html",
];

  if (servicePageFiles.includes(currentFile)) {
    document
      .querySelector(".services-main-link")
      ?.classList.add("active");

    document
      .querySelector(".mobile-services-main")
      ?.classList.add("active");
  }

  if (trainingPageFiles.includes(currentFile)) {
  document
    .querySelector(".trainings-main-link")
    ?.classList.add("active");

  document
    .querySelector(".mobile-trainings-main")
    ?.classList.add("active");
}
}

/* =========================================================
   STICKY HEADER SHADOW
========================================================= */

function handleHeaderScroll() {
  siteHeader?.classList.toggle(
    "scrolled",
    window.scrollY > 15
  );
}

window.addEventListener("scroll", handleHeaderScroll, {
  passive: true,
});

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function openMobileMenu() {
  mobileNavigation?.classList.add("open");
  mobileMenuOverlay?.classList.add("show");
  mobileMenuButton?.classList.add("active");

  mobileMenuButton?.setAttribute("aria-expanded", "true");

  document.body.classList.add("menu-open");
}

function closeMobileMenu() {
  mobileNavigation?.classList.remove("open");
  mobileMenuOverlay?.classList.remove("show");
  mobileMenuButton?.classList.remove("active");

  mobileMenuButton?.setAttribute("aria-expanded", "false");

  document.body.classList.remove("menu-open");
}

mobileMenuButton?.addEventListener("click", () => {
  if (mobileNavigation?.classList.contains("open")) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

mobileCloseButton?.addEventListener(
  "click",
  closeMobileMenu
);

mobileMenuOverlay?.addEventListener(
  "click",
  closeMobileMenu
);

document
  .querySelectorAll(
    ".mobile-nav-link, .mobile-service-link"
  )
  .forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

/* =========================================================
   MOBILE SERVICES ACCORDION
========================================================= */

mobileServicesToggle?.addEventListener("click", () => {
  const isOpen =
    mobileServicesList?.classList.toggle("open");

  mobileServicesToggle.classList.toggle(
    "active",
    Boolean(isOpen)
  );

  mobileServicesToggle.setAttribute(
    "aria-expanded",
    String(Boolean(isOpen))
  );
});

/* =========================================================
   MOBILE TRAININGS ACCORDION
========================================================= */

mobileTrainingsToggle?.addEventListener("click", () => {
  const isOpen =
    mobileTrainingsList?.classList.toggle("open");

  mobileTrainingsToggle.classList.toggle(
    "active",
    Boolean(isOpen)
  );

  mobileTrainingsToggle.setAttribute(
    "aria-expanded",
    String(Boolean(isOpen))
  );
});

/* =========================================================
   CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
========================================================= */

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    closeMobileMenu();
  }
});

/* =========================================================
   WHATSAPP FLOATING BUTTON
========================================================= */

const whatsappButton = document.createElement("a");

whatsappButton.className = "whatsapp-chat-button";
whatsappButton.href =
  "https://wa.me/919000000000?text=Hello%20Oriatek%20Technology%2C%20I%20would%20like%20to%20discuss%20a%20technology%20requirement.";
whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";
whatsappButton.setAttribute(
  "aria-label",
  "Chat with Oriatek Technology on WhatsApp"
);

whatsappButton.innerHTML = `
  <span class="whatsapp-tooltip">Chat with us</span>

  <span class="whatsapp-icon-ring">
    <i class="fa-brands fa-whatsapp"></i>
  </span>
`;

document.body.appendChild(whatsappButton);

/* =========================================================
   SCROLL TO TOP BUTTON
========================================================= */

const scrollTopButton = document.createElement("button");

scrollTopButton.className = "scroll-top-button";
scrollTopButton.type = "button";
scrollTopButton.setAttribute(
  "aria-label",
  "Scroll to top"
);

scrollTopButton.innerHTML = `
  <i class="fa-solid fa-arrow-up"></i>
`;

document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener(
  "scroll",
  () => {
    scrollTopButton.classList.toggle(
      "show",
      window.scrollY > 500
    );
  },
  { passive: true }
);

/* =========================================================
   FOOTER CURRENT YEAR
========================================================= */

const currentYearElement =
  document.getElementById("currentYear");

if (currentYearElement) {
  currentYearElement.textContent =
    new Date().getFullYear();
}




/* =========================================================
   INITIALIZE
========================================================= */

initializeTheme();
setActiveNavigation();
handleHeaderScroll();
// scrollToHashSection();


