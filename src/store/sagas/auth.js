import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { navigate } from '~/services/navigation';
// eslint-disable-next-line no-unused-vars
import { getItemAsync, setItemAsync, clearAsync } from '~/services/asyncStorage';

import { Actions as AuthActions } from '../ducks/auth';

export function* init() {
  // clearAsync(); // Clean storage (logout)
  const token = yield call(getItemAsync, '@DeliveryApp:token');
  let user = yield call(getItemAsync, '@DeliveryApp:user');

  if (token && user) {
    user = JSON.parse(user);
    yield put(AuthActions.signInSuccess({ user, token }));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(api.post, 'session', { email, password });
    const { user, token } = response.data;

    if (user.admin) {
      yield put(AuthActions.signInError());
      yield put(ToastActionsCreators.displayError('Não autorizado!'));
      return;
    }

    const authData = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    };

    yield call(setItemAsync, '@DeliveryApp:token', authData.token);
    yield call(setItemAsync, '@DeliveryApp:user', JSON.stringify(authData.user));

    yield put(AuthActions.signInSuccess(authData));

    navigate('Main');
  } catch (err) {
    yield put(AuthActions.signInError());
    yield put(ToastActionsCreators.displayError('Email ou senha inválidos'));
  }
}

export function* signUp(action) {
  const { name, email, password } = action.payload;
  try {
    yield call(api.post, 'users', { name, email, password });

    yield put(AuthActions.signUpSuccess());
    yield put(ToastActionsCreators.displayInfo('Cadastro feito com sucesso!'));
  } catch (err) {
    yield put(AuthActions.signUpError());
    yield put(ToastActionsCreators.displayError('Erro'));
  }
}
