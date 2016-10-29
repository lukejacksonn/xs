// Required Pages
import homePage from './pages/home';
import lostPage from './pages/lost';
import demoPage from './pages/demo';

// Check if app is running on github
const name = 'xs';

// Check to see if github redirect has occured
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect != location.href) {
  history.replaceState(null, null, redirect);
}

// Application root element
const $main = document.querySelector('main');
const render = view => view.then(x => $main.appendChild(x));

// Route Handler
window.onpopstate = () => {
  // Path with app name and trailing spaces removed
  const path = window.location.pathname.replace(/\/$/, '').replace(`/${name}`, '');
  // Remove any existing views
  while ($main.firstChild) $main.removeChild($main.firstChild);
  // Route according to pathname
  switch (path || '/') {
    case '/': render(homePage()); break;
    case '/demo': render(demoPage()); break;
    default: render(lostPage()); break;
  };
};

// Route on page load
history.pushState(null, null, window.location.pathname);
history.go(-1);
