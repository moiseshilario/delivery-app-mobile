import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import Main from '~/pages/Main';

function createNavigator(isLoggedIn = false) {
  console.tron.log('TCL: createNavigator -> isLoggedIn', isLoggedIn);
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
