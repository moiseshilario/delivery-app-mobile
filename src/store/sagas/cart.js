import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';
import { clearAsync } from '~/services/asyncStorage';

import { ToastActionsCreators } from 'react-native-redux-toast';
import { Actions as CartActions } from '../ducks/cart';

import { getUser, getOrderId, getCurrentItem } from '../selectors/index';

export function* loadCart() {
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
  } else {
    clearAsync();
    navigate('SignIn');
  }

  yield put(CartActions.initCheckSuccess());
}

export function* addItem() {
  const { id: userId } = yield select(getUser);
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

    yield put(ToastActionsCreators.displayInfo('Produto adicionado ao carrinho!'));

    navigate('Products');
  } catch (err) {
    yield put(CartActions.error());
    yield put(
      ToastActionsCreators.displayError('Não foi possível adicionar o produto no carrinho'),
    );
  }
}

export function* removeItem(action) {
  const { itemId } = action.payload;
  const currentOrderId = yield select(getOrderId);

  try {
    yield call(api.delete, `/orders/${currentOrderId}/items/${itemId}`);
    yield put(CartActions.removeItemSuccess(itemId));
  } catch (err) {
    yield put(CartActions.error());
    yield put(
      ToastActionsCreators.displayError('Não foi possível adicionar o produto no carrinho'),
    );
  }
}

export function* confirmOrder(action) {
  const { form, total } = action.payload;
  const currentOrderId = yield select(getOrderId);

  try {
    yield call(api.put, `/orders/${currentOrderId}/confirm`, { ...form, total });

    yield put(CartActions.confirmOrderSuccess());
    yield put(ToastActionsCreators.displayInfo('Pedido realizado com sucesso!'));
    navigate('Products');
  } catch (e) {
    yield put(CartActions.error());
    yield put(ToastActionsCreators.displayError('Não foi possível confirmar a compra'));
  }
}

export function* getOrders() {
  const { id: userId } = yield select(getUser);

  try {
    const { data } = yield call(api.get, `users/${userId}/orders`);

    yield put(CartActions.getOrdersSuccess(data));
  } catch (e) {
    yield put(CartActions.error());
    yield put(ToastActionsCreators.displayError('Erro ao carregar pedidos'));
  }
}
