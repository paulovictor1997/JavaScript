/**
 * Blogr — Menu Script
 * Vanilla JS — sem dependências externas
 *
 * Funcionalidades:
 * - Menu hamburger mobile (abrir/fechar)
 * - Dropdowns desktop (abrir/fechar, fechar ao clicar fora)
 * - Dropdowns mobile accordion (toggle)
 * - Fechamento por tecla Escape
 * - Gerenciamento de aria-expanded e hidden para acessibilidade
 */

'use strict';

(function () {

  /* ========================================================
     SELETORES
  ======================================================== */
  const hamburger     = document.getElementById('hamburger');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mobileMenu    = document.getElementById('mobile-menu');
  const overlay       = document.getElementById('overlay');
  const header        = document.getElementById('header');

  // Triggers desktop
  const desktopTriggers = document.querySelectorAll('.nav__trigger');
  // Triggers mobile
  const mobileTriggers  = document.querySelectorAll('.mobile-menu__trigger');

  /* ========================================================
     ÍCONES
  ======================================================== */
  const ICON_HAMBURGER = 'images/icon-hamburger.svg';
  const ICON_CLOSE     = 'images/icon-close.svg';

  /* ========================================================
     HELPERS
  ======================================================== */

  /**
   * Abre um dropdown desktop
   * @param {HTMLButtonElement} trigger
   */
  function openDesktopDropdown(trigger) {
    const dropdownId = trigger.getAttribute('aria-controls');
    const dropdown   = document.getElementById(dropdownId);
    if (!dropdown) return;

    trigger.setAttribute('aria-expanded', 'true');
    dropdown.classList.add('is-open');
  }

  /**
   * Fecha um dropdown desktop
   * @param {HTMLButtonElement} trigger
   */
  function closeDesktopDropdown(trigger) {
    const dropdownId = trigger.getAttribute('aria-controls');
    const dropdown   = document.getElementById(dropdownId);
    if (!dropdown) return;

    trigger.setAttribute('aria-expanded', 'false');
    dropdown.classList.remove('is-open');
  }

  /**
   * Fecha todos os dropdowns desktop
   * @param {HTMLButtonElement} [except] — trigger a não fechar
   */
  function closeAllDesktopDropdowns(except) {
    desktopTriggers.forEach(function (trigger) {
      if (trigger !== except) {
        closeDesktopDropdown(trigger);
      }
    });
  }

  /**
   * Abre o menu mobile
   */
  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-visible');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Fechar menu');
    hamburgerIcon.src = ICON_CLOSE;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Fecha o menu mobile
   */
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-visible');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
    hamburgerIcon.src = ICON_HAMBURGER;
    document.body.style.overflow = '';

    // Fecha todos os dropdowns mobile ao fechar o menu
    closeAllMobileDropdowns();
  }

  /**
   * Abre/fecha accordion dropdown mobile
   * @param {HTMLButtonElement} trigger
   */
  function toggleMobileDropdown(trigger) {
    const dropdownId = trigger.getAttribute('aria-controls');
    const dropdown   = document.getElementById(dropdownId);
    if (!dropdown) return;

    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    // Fecha outros dropdowns mobile abertos (accordion)
    closeAllMobileDropdowns(trigger);

    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      dropdown.removeAttribute('hidden');
    } else {
      trigger.setAttribute('aria-expanded', 'false');
      dropdown.setAttribute('hidden', '');
    }
  }

  /**
   * Fecha todos os dropdowns mobile
   * @param {HTMLButtonElement} [except]
   */
  function closeAllMobileDropdowns(except) {
    mobileTriggers.forEach(function (trigger) {
      if (trigger !== except) {
        const dropdownId = trigger.getAttribute('aria-controls');
        const dropdown   = document.getElementById(dropdownId);
        if (dropdown) {
          trigger.setAttribute('aria-expanded', 'false');
          dropdown.setAttribute('hidden', '');
        }
      }
    });
  }

  /* ========================================================
     EVENT LISTENERS — HAMBURGER
  ======================================================== */
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  /* ========================================================
     EVENT LISTENERS — OVERLAY
  ======================================================== */
  if (overlay) {
    overlay.addEventListener('click', function () {
      closeMobileMenu();
    });
  }

  /* ========================================================
     EVENT LISTENERS — DROPDOWNS DESKTOP
  ======================================================== */
  desktopTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Fecha todos antes de abrir outro
      closeAllDesktopDropdowns(trigger);

      if (!isOpen) {
        openDesktopDropdown(trigger);
      } else {
        closeDesktopDropdown(trigger);
      }
    });
  });

  /* ========================================================
     EVENT LISTENERS — DROPDOWNS MOBILE
  ======================================================== */
  mobileTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      toggleMobileDropdown(trigger);
    });
  });

  /* ========================================================
     FECHAR AO CLICAR FORA (desktop dropdowns)
  ======================================================== */
  document.addEventListener('click', function (e) {
    // Se o clique não foi dentro do nav, fecha todos
    const nav = document.getElementById('nav');
    if (nav && !nav.contains(e.target)) {
      closeAllDesktopDropdowns();
    }
  });

  /* ========================================================
     FECHAR COM TECLA ESCAPE
  ======================================================== */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;

    // Desktop
    closeAllDesktopDropdowns();

    // Mobile
    const mobileIsOpen = hamburger &&
      hamburger.getAttribute('aria-expanded') === 'true';

    if (mobileIsOpen) {
      closeMobileMenu();
      hamburger.focus();
    }
  });

  /* ========================================================
     FECHAR DROPDOWNS DESKTOP AO REDIMENSIONAR PARA MOBILE
  ======================================================== */
  const mq = window.matchMedia('(max-width: 63.9375em)');

  function handleViewportChange(e) {
    if (e.matches) {
      // Passou para mobile: fecha dropdowns desktop
      closeAllDesktopDropdowns();
    } else {
      // Passou para desktop: fecha menu mobile
      closeMobileMenu();
    }
  }

  // Suporte a navegadores mais antigos
  if (mq.addEventListener) {
    mq.addEventListener('change', handleViewportChange);
  } else {
    mq.addListener(handleViewportChange);
  }

})();