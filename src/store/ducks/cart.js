/**
 * Action Types
 */
export const Types = {
  ADD_STEP: 'cart/ADD_STEP',
  REMOVE_STEP: 'cart/REMOVE_STEP',

  ADD_ITEM_REQUEST: 'cart/ADD_ITEM_REQUEST',
  ADD_ITEM_SUCCESS: 'cart/ADD_ITEM_SUCCESS',

  REMOVE_ITEM_REQUEST: 'cart/REMOVE_ITEM_REQUEST',
  REMOVE_ITEM_SUCCESS: 'cart/REMOVE_ITEM_SUCCESS',

  SET_ORDER_ID: 'cart/SET_ORDER_ID',
  SET_ITEMS: 'cart/SET_ITEMS',

  CONFIRM_ORDER_REQUEST: 'cart/CONFIRM_ORDER_REQUEST',
  CONFIRM_ORDER_SUCCESS: 'cart/CONFIRM_ORDER_SUCCESS',

  INIT_CHECK_SUCCESS: 'cart/INIT_CHECK_SUCCESS',

  GET_ORDERS_REQUEST: 'cart/GET_ORDERS_REQUEST',
  GET_ORDERS_SUCCESS: 'cart/GET_ORDER_SSUCCESS',

  LOAD_CART: 'cart/LOAD_CART',

  ERROR: 'cart/ERROR',
};

/**
 * Action Creators
 */
export const Actions = {
  addStep: (step, value) => ({
    type: Types.ADD_STEP,
    payload: { step, value },
  }),
  removeStep: step => ({
    type: Types.REMOVE_STEP,
    payload: { step },
  }),
  addItemRequest: () => ({
    type: Types.ADD_ITEM_REQUEST,
  }),
  addItemSuccess: data => ({
    type: Types.ADD_ITEM_SUCCESS,
    payload: { data },
  }),
  removeItemRequest: itemId => ({
    type: Types.REMOVE_ITEM_REQUEST,
    payload: { itemId },
  }),
  removeItemSuccess: itemId => ({
    type: Types.REMOVE_ITEM_SUCCESS,
    payload: { itemId },
  }),
  setOrderId: orderId => ({
    type: Types.SET_ORDER_ID,
    payload: { orderId },
  }),
  setItems: items => ({
    type: Types.SET_ITEMS,
    payload: { items },
  }),
  error: () => ({
    type: Types.ERROR,
  }),
  initCheckSuccess: () => ({
    type: Types.INIT_CHECK_SUCCESS,
  }),
  confirmOrderRequest: (form, total) => ({
    type: Types.CONFIRM_ORDER_REQUEST,
    payload: { form, total },
  }),
  confirmOrderSuccess: () => ({
    type: Types.CONFIRM_ORDER_SUCCESS,
  }),
  getOrdersRequest: () => ({
    type: Types.GET_ORDERS_REQUEST,
  }),
  getOrdersSuccess: data => ({
    type: Types.GET_ORDERS_SUCCESS,
    payload: { data },
  }),
  loadCart: () => ({
    type: Types.LOAD_CART,
  }),
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  cartChecked: false,
  orderId: null,
  currentItem: {
    product: null,
    type: null,
    price: null,
  },
  items: [],
  total: null,
  orders: [],
  loading: false,
};

export default function menu(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.INIT_CHECK_SUCCESS:
      return { ...state, cartChecked: true };
    case Types.SET_ORDER_ID:
      return { ...INITIAL_STATE, orderId: payload.orderId };
    case Types.SET_ITEMS:
      return { ...state, items: [...payload.items] };
    case Types.ADD_STEP:
      return {
        ...state,
        currentItem: { ...state.currentItem, [payload.step]: payload.value },
      };
    case Types.REMOVE_STEP:
      return {
        ...state,
        currentItem: { ...state.currentItem, [payload.step]: null },
      };
    case Types.ADD_ITEM_REQUEST:
    case Types.REMOVE_ITEM_REQUEST:
    case Types.CONFIRM_ORDER_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload.data],
        currentItem: INITIAL_STATE.currentItem,
      };
    case Types.REMOVE_ITEM_SUCCESS:
      return { ...state, items: state.items.filter(item => item.id !== payload.itemId) };
    case Types.CONFIRM_ORDER_SUCCESS:
      return { ...INITIAL_STATE };
    case Types.GET_ORDERS_SUCCESS:
      return { ...state, orders: payload.data };
    case Types.ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
