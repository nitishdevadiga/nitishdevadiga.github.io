/**
 * Navigation behaviors:
 *  - Adds a "scrolled" modifier to the nav when the page scrolls.
 *  - Highlights the active section link based on scroll position.
 */
export function initNavigation() {
  const nav = document.querySelector('.nav');
  const links = document.querySelectorAll('.nav__links a');
  const sections = document.querySelectorAll('section[id]');

  if (!nav) return;

  // Scrolled state on nav
  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    updateActiveLink();
  };

  // Active link highlighting
  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 120;
    let activeId = '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}
