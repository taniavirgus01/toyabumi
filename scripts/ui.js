/**
 * Adds / removes `.is-scrolled` on the site header as the user scrolls.
 * @param {Element|null} headerEl
 */
export function initHeader(headerEl) {
  if (!headerEl) return;
  const onScroll = () => headerEl.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Wires up the hamburger toggle and handles:
 *   - Toggle open/close on button click
 *   - Close when a nav link is clicked
 *   - Close when clicking outside the menu
 *   - Close on Escape key (with focus return)
 *
 * @param {Element|null} toggleEl
 * @param {Element|null} navEl
 */
export function initMobileMenu(toggleEl, navEl) {
  if (!toggleEl || !navEl) return;

  function openMenu() {
    toggleEl.setAttribute('aria-expanded', 'true');
    navEl.classList.add('is-open');
  }

  function closeMenu() {
    toggleEl.setAttribute('aria-expanded', 'false');
    navEl.classList.remove('is-open');
  }

  function isOpen() {
    return navEl.classList.contains('is-open');
  }

  toggleEl.addEventListener('click', () => isOpen() ? closeMenu() : openMenu());

  navEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', e => {
    if (isOpen() && !navEl.contains(e.target) && !toggleEl.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen()) {
      closeMenu();
      toggleEl.focus();
    }
  });
}

/**
 * Observes `.reveal` elements and adds `.is-visible` when they enter the
 * viewport. Falls back to immediately showing all items in older browsers.
 *
 * @param {NodeList|Element[]} items
 */
export function initReveal(items) {
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
}

/**
 * Makes entire `.product-card[data-product-link]` elements navigable by click
 * or keyboard (Enter / Space), while preserving native behaviour of inner
 * anchors and buttons (e.g. right-click "open in new tab").
 *
 * @param {NodeList|Element[]} cards
 */
export function initProductCards(cards) {
  cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');

    card.addEventListener('click', e => {
      if (e.target.closest('a, button')) return;
      const href = card.getAttribute('data-product-link');
      if (href) window.location.href = href;
    });

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const href = card.getAttribute('data-product-link');
        if (href) window.location.href = href;
      }
    });
  });
}
