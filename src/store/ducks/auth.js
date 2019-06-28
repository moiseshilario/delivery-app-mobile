/**
 * Action Types
 */
export const Types = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'auth/SIGNIN_ERROR',

  SIGNUP_REQUEST: 'auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'auth/SIGNUP_ERROR',

  INIT_CHECK_SUCCESS: 'auth/INIT_CHECK_SUCCESS',
};

/**
 * Action Creators
 */
export const Actions = {
  signInRequest: (email, password) => ({
    type: Types.SIGNIN_REQUEST,
    payload: { email, password },
  }),
  signInSuccess: data => ({
    type: Types.SIGNIN_SUCCESS,
    payload: { data },
  }),
  signInError: () => ({
    type: Types.SIGNIN_ERROR,
  }),

  signupRequest: user => ({
    type: Types.SIGNUP_REQUEST,
    payload: { user },
  }),
  signupSuccess: data => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { data },
  }),
  signupError: () => ({
    type: Types.SIGNUP_ERROR,
  }),
  initCheckSuccess: () => ({
    type: Types.INIT_CHECK_SUCCESS,
  }),
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  authChecked: false,
  loggedUser: null,
  token: null,
  loading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INIT_CHECK_SUCCESS:
      return { ...state, authChecked: true };
    case Types.SIGNIN_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        loggedUser: action.payload.data.user,
        token: action.payload.data.token,
        loading: false,
        error: null,
      };
    case Types.SIGNIN_ERROR:
      return { ...state, loading: false, error: true };
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.payload.token,
        loading: false,
        error: null,
      };
    case Types.SIGNUP_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
