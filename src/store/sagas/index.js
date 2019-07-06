import { all, takeLatest } from 'redux-saga/effects';

// import api from '~/services/api';
// import { navigate } from '~/services/navigation';

import { Types as AuthTypes } from '../ducks/auth';
import { Types as MenuTypes } from '../ducks/menu';
import { Types as CartTypes } from '../ducks/cart';

import { signIn, init, signUp } from './auth';
import { loadMenu } from './menu';
import {
  addItem, removeItem, confirmOrder, getOrders, loadCart,
} from './cart';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signUp),
    takeLatest(MenuTypes.MENU_REQUEST, loadMenu),
    takeLatest(CartTypes.ADD_ITEM_REQUEST, addItem),
    takeLatest(CartTypes.REMOVE_ITEM_REQUEST, removeItem),
    takeLatest(CartTypes.CONFIRM_ORDER_REQUEST, confirmOrder),
    takeLatest(CartTypes.GET_ORDERS_REQUEST, getOrders),
    takeLatest(CartTypes.LOAD_CART, loadCart),
  ]);
}
