import { translations, HTML_KEYS } from './translations.js';

const STORAGE_KEY = 'tbb-lang';
const VALID_LANGS = new Set(Object.keys(translations));

export function getSavedLang() {
  try {
    const saved = window.localStorage?.getItem(STORAGE_KEY);
    if (VALID_LANGS.has(saved)) return saved;
  } catch {
    return 'id';
  }
}

function saveLang(lang) {
  try {
    window.localStorage?.setItem(STORAGE_KEY, lang);
  } catch {
    // silently ignore
  }
}

/**
 * Walk every [data-i18n] element and set its content from the given dict.
 * Keys listed in HTML_KEYS are injected via innerHTML; the rest use textContent.
 */
export function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  const titleEl = document.querySelector('#page-title');
  const descEl = document.querySelector('#page-description');

  if (titleEl && dict.pageTitle) titleEl.textContent = dict.pageTitle;
  if (descEl && dict.pageDescription) descEl.setAttribute('content', dict.pageDescription);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value === undefined) return;

    if (HTML_KEYS.has(key)) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    const isActive = btn.getAttribute('data-lang-switch') === lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  saveLang(lang);
}

/**
 * Attach click handlers to every [data-lang-switch] button.
 * Call this once after the DOM is ready.
 */
export function initLangSwitcher() {
  document.querySelectorAll('[data-lang-switch]').forEach(button => {
    button.addEventListener('click', () => {
      applyTranslations(button.getAttribute('data-lang-switch'));
    });
  });
}
