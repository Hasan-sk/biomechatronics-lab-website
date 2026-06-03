import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const labName = 'Assistive Robotic Exoskeleton Design Lab';
const labShortName = 'AMREX Design Lab';
const fullLabName = 'Assistive Robotic Exoskeleton Design Lab (AMREX) Design Lab';

document.title = fullLabName;

function updateLabBranding() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    let value = node.nodeValue || '';
    value = value.replaceAll('Biomechatronics System Design Laboratory', fullLabName);
    value = value.replaceAll('Biomechatronics System Design Lab', fullLabName);
    value = value.replaceAll('Biomechatronics', labShortName);
    value = value.replaceAll('System Design Laboratory', labName);
    node.nodeValue = value;
  });

  document.querySelectorAll('[aria-label]').forEach((el) => {
    const current = el.getAttribute('aria-label') || '';
    const updated = current
      .replaceAll('Biomechatronics System Design Laboratory', fullLabName)
      .replaceAll('Biomechatronics System Design Lab', fullLabName)
      .replaceAll('Biomechatronics', labShortName)
      .replaceAll('System Design Laboratory', labName);
    el.setAttribute('aria-label', updated);
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

setTimeout(updateLabBranding, 0);
setTimeout(updateLabBranding, 300);
setTimeout(updateLabBranding, 1000);

const observer = new MutationObserver(updateLabBranding);
observer.observe(document.body, { childList: true, subtree: true, characterData: true });
