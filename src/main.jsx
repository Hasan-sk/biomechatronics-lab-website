import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

document.title = 'Biomechatronics System Design Lab';

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
