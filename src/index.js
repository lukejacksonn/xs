// Required Views
import homePage from './pages/home';
import lostPage from './pages/lost';
import demoPage from './pages/demo';

// Application root element
const $main = document.querySelector('main');

// Routing functions
const render = view => $main.appendChild(view);
const redirect = url => window.location.replace(url);

// Route Handler
window.onpopstate = () => {

  // Remove any existing views
  while ($main.firstChild) $main.removeChild($main.firstChild);

  // Route according to pathname
  switch (window.location.pathname) {
    case '/': render(homePage()); break;
    case '/demo': render(demoPage()); break;
    default: render(lostPage()); break;
  };

  // Ensure rendered internal links are handled by router
  [...document.querySelectorAll(`a[href^="/"]`)]
  .forEach(x => x.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, null, e.currentTarget.href);
    window.onpopstate();
  }));

};

// Route on page load
history.pushState(null, null, window.location.pathname);
history.go(-1);
