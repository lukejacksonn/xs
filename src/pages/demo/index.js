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
    <svg><use xlink:href='#i-settings'></svg>
    <p>Woah, the page changed</p>
  `)(state));
  return $container;
}

export default View;
