import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import auth from './auth';
import menu from './menu';
import cart from './cart';

export default combineReducers({
  auth,
  menu,
  cart,
  toast,
});
