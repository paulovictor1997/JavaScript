const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");
const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");
const accordionTriggers = document.querySelectorAll(".accordion__trigger");
const contactForm = document.querySelector(".contact-form");
const emailInput = document.querySelector("#email");
const emailControl = document.querySelector(".form-control");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function closeMenu() {
  body.classList.remove("menu-open");
  navPanel.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
}

navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");
  body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTab = tab.dataset.tab;

    tabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    panels.forEach((panel) => {
      const isSelected = panel.dataset.panel === selectedTab;
      panel.classList.toggle("is-active", isSelected);
      panel.hidden = !isSelected;
    });
  });
});

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion__item");
    const isOpen = item.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const isValid = emailRegex.test(email);

  emailControl.classList.toggle("is-invalid", !isValid);
  emailInput.setAttribute("aria-invalid", String(!isValid));

  if (isValid) {
    contactForm.reset();
  }
});

emailInput.addEventListener("input", () => {
  if (emailControl.classList.contains("is-invalid") && emailRegex.test(emailInput.value.trim())) {
    emailControl.classList.remove("is-invalid");
    emailInput.setAttribute("aria-invalid", "false");
  }
});
