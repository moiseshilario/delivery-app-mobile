import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import auth from './auth';

export default combineReducers({
  auth,
  toast,
});
