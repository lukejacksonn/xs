import {Fetch, Node, Bind} from '../../xs';
export default (state) =>
  Fetch(state)
  .then(Node(({
    icon='alert',
    text='some default sentence'
  }) => `
  <div>
    <svg><use xlink:href="#i-${icon}"></svg>
    <p>${text}</p>
  </div>`))
  .then(Bind('svg')('click')(() => alert('HEY!')))
