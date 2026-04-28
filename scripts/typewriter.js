/**
 * Typewriter effect — cycles through an array of phrases on a target element.
 *
 * @param {string} selector - CSS selector for the target element
 * @param {string[]} phrases - Phrases to cycle through
 * @param {object} options - Optional timing config
 */
export function initTypewriter(selector, phrases, options = {}) {
  const target = document.querySelector(selector);
  if (!target || !phrases.length) return;

  const {
    typeSpeed = 75,
    deleteSpeed = 35,
    pauseAfterType = 1800,
    pauseAfterDelete = 400,
  } = options;

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  // Build the structure with a cursor element
  target.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor"></span>';
  const textEl = target.querySelector('.typewriter-text');

  const tick = () => {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      charIdx--;
      textEl.textContent = current.substring(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, pauseAfterDelete);
        return;
      }
      setTimeout(tick, deleteSpeed);
    } else {
      charIdx++;
      textEl.textContent = current.substring(0, charIdx);
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(tick, pauseAfterType);
        return;
      }
      setTimeout(tick, typeSpeed);
    }
  };

  tick();
}
