/**
 * Misc UI helpers:
 *  - Sets the current year in the footer.
 *  - Manages the "back to top" button visibility & action.
 */
export function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

export function initBackToTop() {
  const button = document.querySelector('.back-to-top');
  if (!button) return;

  const toggle = () => {
    if (window.scrollY > 500) {
      button.classList.add('back-to-top--visible');
    } else {
      button.classList.remove('back-to-top--visible');
    }
  };

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}
