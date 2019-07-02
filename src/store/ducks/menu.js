/**
 * Action Types
 */
export const Types = {
  MENU_REQUEST: 'menu/MENU_REQUEST',
  MENU_SUCCESS: 'menu/MENU_SUCCESS',
  MENU_ERROR: 'menu/MENU_ERROR',
};

/**
 * Action Creators
 */
export const Actions = {
  menuRequest: (menuType, id) => ({
    type: Types.MENU_REQUEST,
    payload: { menuType, id },
  }),
  menuSuccess: (menuType, data) => ({
    type: Types.MENU_SUCCESS,
    payload: { menuType, data },
  }),
  menuError: () => ({
    type: Types.MENU_ERROR,
  }),
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  products: [],
  types: [],
  prices: [],
  loading: false,
};

export default function menu(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.MENU_REQUEST:
      return {
        ...state,
        [payload.menuType]: [],
        loading: true,
      };
    case Types.MENU_SUCCESS:
      return {
        ...state,
        [payload.menuType]: [...state[payload.menuType], ...payload.data],
        loading: false,
      };
    case Types.MENU_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
