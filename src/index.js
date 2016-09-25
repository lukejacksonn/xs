// Required Pages
import homePage from './pages/home';
import lostPage from './pages/lost';
import demoPage from './pages/demo';

// Application root element
const $body = document.querySelector('main');

// Routing functions
const render = view => $body.appendChild(view);
const redirect = url => window.location.replace(url);

// Route Handler
window.onpopstate = () => {
  // Remove any existing views
  while ($body.firstChild) $body.removeChild($body.firstChild);
  // Route according to pathname
  switch (window.location.pathname) {
    case '/': render(homePage()); break;
    case '/demo': render(demoPage()); break;
    default: render(lostPage()); break;
  };
};

// Route path with repo name stripped
const path = window.location.pathname.replace('/xs','/');
history.replaceState(null, null, path);
window.onpopstate();
