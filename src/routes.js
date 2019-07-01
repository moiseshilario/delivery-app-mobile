import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import Products from '~/pages/Products';
import Types from '~/pages/Types';

function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Main: createStackNavigator(
          {
            Products,
            Types,
          },
          {
            defaultNavigationOptions: {
              header: null,
            },
          },
        ),
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}

export default createNavigator;
