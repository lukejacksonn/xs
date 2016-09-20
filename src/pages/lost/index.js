import Nav from '../../components/nav';
import Div from '../../components/div';

const View = (state) => {
  const $container = document.createElement('page-lost');
  $container.appendChild(Nav({
    '/': 'Home',
  }));
  $container.appendChild(Div(x => `
    <svg><use xlink:href="#i-alert"></svg>
    <p>Not found, go back home</p>
  `)(state));
  return $container;
}

export default View;
