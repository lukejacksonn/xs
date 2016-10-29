import {Draw} from '../../xs';
import Nav from '../../components/nav';
import Div from '../../components/div';

export default (state = {}) =>
Promise.all([
  Nav({
    '/': 'Home',
  }),
  Div({
    icon: 'alert',
    text: 'Uh ohhh, go back home',
  })
]).then(Draw('page-lost'));
