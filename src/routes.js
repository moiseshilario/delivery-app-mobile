import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  }),
);

export default Routes;
