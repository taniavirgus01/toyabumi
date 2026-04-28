const AUTOPLAY_INTERVAL = 5000;
const SWIPE_THRESHOLD = 40;

/**
 * Initialise the carousel found at `carouselEl`.
 * Does nothing if the element is not present.
 *
 * @param {Element|null} carouselEl
 */
export function initCarousel(carouselEl) {
  if (!carouselEl) return;

  const track = carouselEl.querySelector('.hero-carousel-track');
  const slides = [...carouselEl.querySelectorAll('.hero-slide')];
  const dots = [...carouselEl.querySelectorAll('.hero-carousel-dot')];
  const prevBtn = carouselEl.querySelector('[data-carousel-prev]');
  const nextBtn = carouselEl.querySelector('[data-carousel-next]');
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)') ?? { matches: false };

  let currentIndex = 0;
  let autoplayId = null;

  function goTo(index) {
    currentIndex = ((index % slides.length) + slides.length) % slides.length;

    if (track) {
      const translate = `translateX(-${currentIndex * 100}%)`;
      track.style.transform = translate;
      track.style.webkitTransform = translate;
    }

    dots.forEach((dot, i) => {
      const active = i === currentIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', String(active));
    });
  }
  function stopAutoplay() {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (slides.length < 2 || reducedMotion.matches) return;
    autoplayId = setInterval(() => goTo(currentIndex + 1), AUTOPLAY_INTERVAL);
  }

  prevBtn?.addEventListener('click', () => { goTo(currentIndex - 1); startAutoplay(); });
  nextBtn?.addEventListener('click', () => { goTo(currentIndex + 1); startAutoplay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAutoplay(); });
  });

  let touchStartX = 0;

  carouselEl.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselEl.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      goTo(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      startAutoplay();
    }
  }, { passive: true });

  carouselEl.addEventListener('mouseenter', stopAutoplay);
  carouselEl.addEventListener('mouseleave', startAutoplay);
  carouselEl.addEventListener('focusin', stopAutoplay);
  carouselEl.addEventListener('focusout', startAutoplay);

  document.addEventListener('visibilitychange', () => {
    document.hidden ? stopAutoplay() : startAutoplay();
  });

  goTo(0);
  startAutoplay();
}
