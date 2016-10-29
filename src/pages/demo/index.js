import {Draw} from '../../xs';
import Nav from '../../components/nav';
import Div from '../../components/div';

export default (state = {}) =>
Promise.all([
  Nav({
    '/': 'Home',
    '/demo': 'Demo',
    '/more': 'More',
  }),
  Div({
    icon: 'settings',
    text: 'Woah, the page changed',
  })
]).then(Draw('page-demo'));
