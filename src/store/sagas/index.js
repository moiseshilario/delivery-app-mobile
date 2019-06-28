import { all, takeLatest } from 'redux-saga/effects';

// import api from '~/services/api';
// import { navigate } from '~/services/navigation';

import { Types as AuthTypes } from '../ducks/auth';

import { signIn, init } from './auth';

export default function* rootSaga() {
  yield all([init(), takeLatest(AuthTypes.SIGNIN_REQUEST, signIn)]);
}
