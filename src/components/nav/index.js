import {Fetch, Node, Bind} from '../../xs';

const actions = {
  navigate(e) {
    e.preventDefault();
    history.pushState(null, null, e.currentTarget.href);
    window.onpopstate();
  }
};

const link = x => href =>
  `<a href='${href}'>${x[href]}</a>`

const template = x => `
  <nav>${
    Object.keys(x).map(link(x)).join('')
  }</nav>`;

export default (state) =>
  Fetch(state)
  .then(Node(template))
  .then(Bind('a[href^="/"]')('click')(actions.navigate));
