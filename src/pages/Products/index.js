import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { menuTypes } from '~/services/menuTypes';
import { navigate } from '~/services/navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as MenuActions } from '../../store/ducks/menu';
import { Actions as CartActions } from '../../store/ducks/cart';

import { Container, Content, List } from './styles';

import ProductHeader from '~/components/ProductHeader';
import Product from '~/components/Product';

const Products = ({
  products, cartItems, menuRequest, addStep, loadCart,
}) => {
  useEffect(() => {
    const getProducts = async () => {
      await menuRequest(menuTypes.PRODUCTS);
      await loadCart();
    };
    getProducts();
  }, []);

  const onPressProduct = (id) => {
    addStep('product', products.find(product => product.id === id));
    navigate('Types', { productId: id });
  };

  const onPressCart = () => navigate('Cart');

  const onPressOrders = () => navigate('Orders');

  return (
    <Container>
      <ProductHeader
        cartItems={cartItems}
        onPressCart={onPressCart}
        onPressOrders={onPressOrders}
      />
      <Content>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <Product product={item} onPress={onPressProduct} />}
        />
      </Content>
    </Container>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  cartItems: PropTypes.number.isRequired,
  menuRequest: PropTypes.func.isRequired,
  addStep: PropTypes.func.isRequired,
  loadCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.menu.products,
  cartItems: state.cart.items.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...MenuActions,
    ...CartActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
