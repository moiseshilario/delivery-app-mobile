export const getUser = state => state.auth.loggedUser;

export const getCartItems = state => state.cart.items;

export const getOrderId = state => state.cart.orderId;

export const getCurrentItem = state => state.cart.currentItem;
