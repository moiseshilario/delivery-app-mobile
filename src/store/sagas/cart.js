import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';

import { ToastActionsCreators } from 'react-native-redux-toast';
import { Actions as CartActions } from '../ducks/cart';

import { getUser, getOrderId, getCurrentItem } from '../selectors/index';

export function* initCart() {
  // clearAsync();
  const { id: userId } = yield select(getUser);

  if (userId) {
    let currentOrderId = yield select(getOrderId);

    try {
      if (!currentOrderId) {
        const { data } = yield call(api.get, `users/${userId}/cart`);
        currentOrderId = data.id;
        yield put(CartActions.setOrderId(currentOrderId));
      }

      const { data } = yield call(api.get, `orders/${currentOrderId}/items`);
      yield put(CartActions.setItems(data));
    } catch (e) {
      yield put(ToastActionsCreators.displayError('Não foi possível carregar carrinho'));
    }
  }

  yield put(CartActions.initCheckSuccess());
}

export function* addItem() {
  const { userId } = yield select(getUser);
  const currentItem = yield select(getCurrentItem);
  let currentOrderId = yield select(getOrderId);

  try {
    if (!currentOrderId) {
      const { data } = yield call(api.get, `users/${userId}/cart`);
      currentOrderId = data.id;
      yield put(CartActions.setOrderId(currentOrderId));
    }

    const { data } = yield call(api.post, `orders/${currentOrderId}/items`, currentItem);
    yield put(CartActions.addItemSuccess(data));

    yield put(ToastActionsCreators.displayInfo('Producto adicionado ao carrinho!'));

    navigate('Products');
  } catch (err) {
    yield put(CartActions.error());
    yield put(
      ToastActionsCreators.displayError('Não foi possível adicionar o produto no carrinho'),
    );
  }
}
