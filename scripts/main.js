import { initCarousel } from './carousel.js';
import { applyTranslations, getSavedLang, initLangSwitcher } from './i18n.js';
import { initHeader, initMobileMenu, initReveal, initProductCards } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader(document.querySelector('.site-header'));
  initMobileMenu(
    document.querySelector('.menu-toggle'),
    document.querySelector('.site-nav')
  );

  initReveal(document.querySelectorAll('.reveal'));
  initProductCards(document.querySelectorAll('.product-card[data-product-link]'));
  initCarousel(document.querySelector('[data-carousel]'));
  initLangSwitcher();
  applyTranslations(getSavedLang());
});
