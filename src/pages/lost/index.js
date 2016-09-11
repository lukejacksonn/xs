import Nav from '../../components/nav';
import Div from '../../components/div';

const View = (state) => {
  const $container = document.createElement('page-lost');
  $container.appendChild(Nav({
    '/': 'Home',
  }));
  $container.appendChild(Div(x => `
    <h1>LOST</h1>
    <p>That's alright, go back home</p>
  `)(state));
  return $container;
}

export default View;
