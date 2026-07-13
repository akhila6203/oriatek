/* =========================================================
   ORIATEK CONTACT FORM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const submitButton =
    document.getElementById("submitButton");
  const formStatus =
    document.getElementById("formStatus");

  if (!form) return;

  const fields = {
    fullName: {
      element: document.getElementById("fullName"),
      error: document.getElementById("fullNameError"),
    },

    company: {
      element: document.getElementById("company"),
      error: document.getElementById("companyError"),
    },

    email: {
      element: document.getElementById("email"),
      error: document.getElementById("emailError"),
    },

    phone: {
      element: document.getElementById("phone"),
      error: document.getElementById("phoneError"),
    },

    service: {
      element: document.getElementById("service"),
      error: document.getElementById("serviceError"),
    },

    subject: {
      element: document.getElementById("subject"),
      error: document.getElementById("subjectError"),
    },

    message: {
      element: document.getElementById("message"),
      error: document.getElementById("messageError"),
    },

    consent: {
      element: document.getElementById("consent"),
      error: document.getElementById("consentError"),
    },
  };

  function showFieldError(fieldName, message) {
    const field = fields[fieldName];

    if (!field) return;

    if (field.error) {
      field.error.textContent = message;
    }

    field.element
      ?.closest(".input-group")
      ?.classList.add("has-error");
  }

  function clearFieldError(fieldName) {
    const field = fields[fieldName];

    if (!field) return;

    if (field.error) {
      field.error.textContent = "";
    }

    field.element
      ?.closest(".input-group")
      ?.classList.remove("has-error");
  }

  function clearAllErrors() {
    Object.keys(fields).forEach(clearFieldError);
  }

  function showStatus(message, type) {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.className =
      `contact-form-status show ${type}`;
  }

  function clearStatus() {
    if (!formStatus) return;

    formStatus.textContent = "";
    formStatus.className = "contact-form-status";
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validatePhone(value) {
    const cleanedPhone =
      value.replace(/[\s()-]/g, "");

    return /^\+?[0-9]{8,15}$/.test(cleanedPhone);
  }

  function validateForm() {
    clearAllErrors();
    clearStatus();

    let isValid = true;
    let firstInvalidElement = null;

    const fullName =
      fields.fullName.element.value.trim();

    const company =
      fields.company.element.value.trim();

    const email =
      fields.email.element.value.trim();

    const phone =
      fields.phone.element.value.trim();

    const service =
      fields.service.element.value;

    const subject =
      fields.subject.element.value.trim();

    const message =
      fields.message.element.value.trim();

    const consent =
      fields.consent.element.checked;

    if (fullName.length < 2) {
      showFieldError(
        "fullName",
        "Please enter your full name."
      );

      firstInvalidElement ??=
        fields.fullName.element;

      isValid = false;
    }

    if (company.length < 2) {
      showFieldError(
        "company",
        "Please enter your company name."
      );

      firstInvalidElement ??=
        fields.company.element;

      isValid = false;
    }

    if (!email || !validateEmail(email)) {
      showFieldError(
        "email",
        "Please enter a valid email address."
      );

      firstInvalidElement ??=
        fields.email.element;

      isValid = false;
    }

    if (!phone || !validatePhone(phone)) {
      showFieldError(
        "phone",
        "Please enter a valid phone number."
      );

      firstInvalidElement ??=
        fields.phone.element;

      isValid = false;
    }

    if (!service) {
      showFieldError(
        "service",
        "Please select a required service."
      );

      firstInvalidElement ??=
        fields.service.element;

      isValid = false;
    }

    if (subject.length < 4) {
      showFieldError(
        "subject",
        "Please enter a meaningful subject."
      );

      firstInvalidElement ??=
        fields.subject.element;

      isValid = false;
    }

    if (message.length < 20) {
      showFieldError(
        "message",
        "Please enter at least 20 characters."
      );

      firstInvalidElement ??=
        fields.message.element;

      isValid = false;
    }

    if (!consent) {
      showFieldError(
        "consent",
        "Please agree to be contacted."
      );

      firstInvalidElement ??=
        fields.consent.element;

      isValid = false;
    }

    if (!isValid && firstInvalidElement) {
      firstInvalidElement.focus();
    }

    return isValid;
  }

  Object.entries(fields).forEach(
    ([fieldName, field]) => {
      if (!field.element) return;

      const eventName =
        field.element.type === "checkbox" ||
        field.element.tagName === "SELECT"
          ? "change"
          : "input";

      field.element.addEventListener(
        eventName,
        () => {
          clearFieldError(fieldName);
          clearStatus();
        }
      );
    }
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showStatus(
        "Please correct the highlighted fields and submit again.",
        "error"
      );

      return;
    }

    const originalButtonContent =
      submitButton.innerHTML;

    submitButton.disabled = true;

    submitButton.innerHTML = `
      <span>Submitting...</span>
      <i class="fa-solid fa-spinner fa-spin"></i>
    `;

    clearStatus();

    try {
      const formData = new FormData(form);

      const response = await fetch(
        form.action || "contact.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text();
      const normalizedResult = result.trim();

      if (!response.ok) {
        throw new Error(
          normalizedResult ||
          "Server request failed."
        );
      }

      if (normalizedResult === "success") {
        showStatus(
          "Thank you! Your requirement has been submitted successfully. Our team will contact you shortly.",
          "success"
        );

        form.reset();
        clearAllErrors();
      } else {
        showStatus(
          normalizedResult ||
          "Mail could not be sent. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      showStatus(
        "Something went wrong while submitting the form. Please try again.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML =
        originalButtonContent;
    }
  });
});