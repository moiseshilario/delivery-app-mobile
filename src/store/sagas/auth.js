import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '~/services/navigation';

import { Actions as AuthActions } from '../ducks/auth';

export function* init() {
  const token = yield call(getAsync, '@DeliveryApp:token');
  let user = yield call(getAsync, '@DeliveryApp:user');

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

    const authData = {
      user: {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
      },
      token: response.data.token,
    };
    yield call(storeAsync, '@DeliveryApp:token', authData.token);
    yield call(storeAsync, '@DeliveryApp:user', authData.user);

    yield put(AuthActions.signInSuccess(authData));

    navigate('Main');
  } catch (err) {
    console.tron.log('ERROR =====', err);
    // yield put(ErrorActions.setError(err));
  }
}

export function* signUp(action) {
  const { name, email, password } = action.payload;
  try {
    const response = yield call(api.post, 'users', { name, email, password });

    const authData = {
      user: {
        name: response.data.user.name,
        email: response.data.user.email,
      },
      token: response.data.token,
    };

    yield call([AsyncStorage, 'setItem'], '@DeliveryApp:token', authData.token);
    yield call([AsyncStorage, 'setItem'], '@DeliveryApp:user', authData.user);
    yield put(AuthActions.signInSuccess(authData));

    // yield put(push('/orders'));
  } catch (err) {
    console.tron.log('ERROR =====', err);
    // yield put(ErrorActions.setError(err));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);

  // yield put(push('/signin'));
}

async function storeAsync(name, item) {
  try {
    await AsyncStorage.setItem(name, item);
  } catch (error) {
    console.tron.log(`AsyncStorage error during ${name} store:`, error);
  }
}

async function getAsync(item) {
  try {
    const data = await AsyncStorage.getItem(item);
    return data;
  } catch (error) {
    console.tron.log(`AsyncStorage error during ${item} get:`, error);
    return null;
  }
}
