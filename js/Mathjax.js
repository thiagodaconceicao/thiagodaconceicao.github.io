var polyfillScript = document.createElement('script');
polyfillScript.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';

var mathJaxScript = document.createElement('script');
mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
mathJaxScript.id = 'MathJax-script';
mathJaxScript.async = true;

var mathJaxConfigScript = document.createElement('script');
mathJaxConfigScript.innerHTML = `
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
`;

document.head.appendChild(polyfillScript);
document.head.appendChild(mathJaxScript);
document.head.appendChild(mathJaxConfigScript);
