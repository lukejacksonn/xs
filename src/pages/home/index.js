import Nav from '../../components/nav';
import Div from '../../components/div';

const View = (state) => {
  const $container = document.createElement('page-home');
  $container.appendChild(Nav({
    '/': 'Home',
    '/demo': 'Demo',
  }));
  $container.appendChild(Div(x => `
    <h1>HOME</h1>
    <p>Hey there, try the demo</p>
  `)(state));
  return $container;
};

export default View;
