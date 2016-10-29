import {Draw} from '../../xs';
import Nav from '../../components/nav';
import Div from '../../components/div';

export default (state = {}) =>
Promise.all([
  Nav({
    '/': 'Home',
    '/demo': 'Demo',
  }),
  Div({
    icon: 'home',
    text: 'Hey, try out the demo',
  })
]).then(Draw('page-home'));
