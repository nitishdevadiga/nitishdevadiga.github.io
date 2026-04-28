/**
 * Theme management:
 *  - Reads saved theme from localStorage (or system preference)
 *  - Applies it to <html data-theme="dark|light">
 *  - Toggles on button click and persists choice
 */

const STORAGE_KEY = 'nitish-portfolio-theme';

/**
 * Get the user's preferred theme.
 * Priority: localStorage → system preference → dark (default)
 */
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch (e) {
    // localStorage might be blocked
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

/**
 * Apply a theme to the document.
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const button = document.querySelector('.theme-toggle');
  if (button) {
    const next = theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${next} mode`);
    button.setAttribute('title', `Switch to ${next} mode`);
  }
}

export function initTheme() {
  // Apply initial theme as soon as possible (this is also done inline in <head> to avoid flash)
  const initial = getInitialTheme();
  applyTheme(initial);

  const button = document.querySelector('.theme-toggle');
  if (!button) return;

  button.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // localStorage might be blocked — toggle still works for the session
    }
  });

  // Listen for system theme changes (only if user hasn't picked one)
  if (window.matchMedia) {
    const mql = window.matchMedia('(prefers-color-scheme: light)');
    mql.addEventListener('change', (e) => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? 'light' : 'dark');
        }
      } catch (err) {
        // ignore
      }
    });
  }
}
