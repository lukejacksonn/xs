import Nav from '../../components/nav';
import Div from '../../components/div';

const View = (state) => {
  const $container = document.createElement('page-home');
  $container.appendChild(Nav({
    '/': 'Home',
    '/demo': 'Demo',
  }));
  $container.appendChild(Div(x => `
    <svg><use xlink:href="#i-home"></svg>
    <p>Hey, try out the demo</p>
  `)(state));
  return $container;
};

export default View;
