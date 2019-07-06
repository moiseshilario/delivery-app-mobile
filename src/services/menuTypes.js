export const menuTypes = {
  PRODUCTS: 'products',
  TYPES: 'types',
  PRICES: 'prices',
};

export const getURL = (menuType, id) => {
  switch (menuType) {
    case menuTypes.PRODUCTS:
      return 'products';
    case menuTypes.TYPES:
      return `products/${id}/types`;
    case menuTypes.PRICES:
      return `types/${id}/prices`;
    default:
      return '';
  }
};
