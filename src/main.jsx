import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

document.title = 'Biomechatronics System Design Lab';

function animateHeroTitle() {
  const targetText = 'Intelligent Robotics for Human-Centered Rehabilitation';
  const headings = Array.from(document.querySelectorAll('h1'));
  const heading = headings.find((h) => h.textContent?.trim() === targetText);

  if (!heading || heading.dataset.heroAnimated === 'true') return;

  heading.dataset.heroAnimated = 'true';
  heading.classList.add('hero-title-animated');
  heading.setAttribute('aria-label', targetText);

  const words = targetText.split(' ');
  heading.innerHTML = words
    .map(
      (word, index) =>
        `<span class="hero-title-word" style="--word-index:${index}">${word}</span>`
    )
    .join(' ');
}

function cleanPublicationButtonText() {
  const elements = Array.from(document.querySelectorAll('a, button'));
  elements.forEach((element) => {
    const text = element.textContent?.trim();
    if (text === 'View Full Publication List ↗') {
      element.textContent = 'View Full Publication List';
    }
  });
}

// Ensure the top-right Contact Us button opens the lab email directly.
document.addEventListener(
  'click',
  (event) => {
    const target = event.target instanceof Element ? event.target.closest('button, a') : null;
    if (!target) return;

    const label = target.textContent?.trim();
    const isTopContactButton = label === 'Contact Us';

    if (isTopContactButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = 'mailto:hasansk@miamioh.edu';
    }
  },
  true
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function applyEnhancements() {
  animateHeroTitle();
  cleanPublicationButtonText();
}

setTimeout(applyEnhancements, 0);
setTimeout(applyEnhancements, 250);
setTimeout(applyEnhancements, 800);
setTimeout(applyEnhancements, 1500);

const siteObserver = new MutationObserver(applyEnhancements);
siteObserver.observe(document.body, { childList: true, subtree: true });
