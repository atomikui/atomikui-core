const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

window.addEventListener('DOMContentLoaded', () => {
  const copyrightDiv = document.createElement('div');

  copyrightDiv.style.textAlign = 'center';
  copyrightDiv.style.marginTop = '32px';
  copyrightDiv.style.fontSize = '14px';
  copyrightDiv.innerHTML = `&copy; ${new Date().getFullYear()} Atomik UI. All rights reserved.`;

  document.querySelector('main').appendChild(copyrightDiv);
});
