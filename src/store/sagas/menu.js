import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { getURL } from '~/services/menuTypes';

import { Actions as MenuActions } from '../ducks/menu';

export function* loadMenu(action) {
  const { menuType, id } = action.payload;

  try {
    const { data } = yield call(api.get, getURL(menuType, id));

    yield put(MenuActions.menuSuccess(menuType, data));
  } catch (err) {
    yield put(MenuActions.menuError());
    yield put(ToastActionsCreators.displayError('Não foi possível carregar os dados do menu'));
  }
}
