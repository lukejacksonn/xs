import Nav from '../../components/nav';
import Div from '../../components/div';

const View = (state) => {
  const $container = document.createElement('page-demo');
  $container.appendChild(Nav({
    '/': 'Home',
    '/demo': 'Demo',
    '/more': 'More',
  }));
  $container.appendChild(Div(x => `
    <h1>DEMO</h1>
    <p>Woahhh, the page changed</p>
  `)(state));
  return $container;
}

export default View;
