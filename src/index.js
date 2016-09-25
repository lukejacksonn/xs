// Required Pages
import homePage from './pages/home';
import lostPage from './pages/lost';
import demoPage from './pages/demo';

// Check to see if github redirect has occured
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect != location.href) {
  history.replaceState(null, null, redirect);
}

// Application root element
const $body = document.querySelector('main');
const render = view => $body.appendChild(view);

// Route Handler
window.onpopstate = () => {
  // Remove any existing views
  while ($body.firstChild) $body.removeChild($body.firstChild);
  // Route according to pathname
  switch (window.location.pathname) {
    case '/xs':
    case '/': render(homePage()); break;
    case '/demo': render(demoPage()); break;
    default: render(lostPage()); break;
  };
};

// Route on page load
history.pushState(null, null, window.location.pathname);
history.go(-1);
