import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import Main from '~/pages/Main';

function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Main,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}

export default createNavigator;
