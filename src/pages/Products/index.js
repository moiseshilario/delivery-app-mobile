import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { menuTypes } from '~/services/menuTypes';
import { navigate } from '~/services/navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as MenuActions } from '../../store/ducks/menu';

import { Container, Content, List } from './styles';

import ProductHeader from '~/components/ProductHeader';
import Product from '~/components/Product';

const Products = ({ products, menuRequest }) => {
  useEffect(() => {
    const getProducts = async () => {
      await menuRequest(menuTypes.PRODUCTS);
    };
    getProducts();
  }, []);

  const onPressProduct = (id) => {
    navigate('Types', { productId: id });
  };

  return (
    <Container>
      <ProductHeader />
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
  menuRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.menu.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(MenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
