/**
 * Main entry point — Nitish Devadiga Portfolio
 * Initializes all modules once the DOM is ready.
 */

import { initReveal } from './reveal.js';
import { initNavigation } from './nav.js';
import { initTypewriter } from './typewriter.js';
import { initFooterYear, initBackToTop } from './ui.js';
import { initTheme } from './theme.js';

const onReady = (callback) => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

onReady(() => {
  initTheme();
  initFooterYear();
  initNavigation();
  initReveal();
  initBackToTop();

  initTypewriter(
    '.hero__subtitle',
    [
      'Software Developer',
      'Full-Stack Engineer',
      'Java + Spring Boot Dev',
      'Vue.js Enthusiast',
      'AI-Assisted Coder',
    ],
    { typeSpeed: 70, deleteSpeed: 35, pauseAfterType: 1600 }
  );

  console.log(
    '%c👋 Hey there!',
    'color:#58a6ff; font-size:20px; font-weight:bold;'
  );
  console.log(
    '%cPoking around the source? Nice. Let\'s connect: devadignitish@gmail.com',
    'color:#8b949e; font-size:13px;'
  );
});
