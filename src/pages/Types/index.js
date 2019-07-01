import React, { useEffect } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { menuTypes } from '~/services/menuTypes';
// import { navigate } from '~/services/navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as MenuActions } from '../../store/ducks/menu';

import { Container, Content, List } from './styles';

import ProductHeader from '~/components/ProductHeader';
// import Product from '~/components/Product';

const Types = ({ types, menuRequest, navigation }) => {
  useEffect(() => {
    const getTypes = async () => {
      console.log('TCL: getTypes -> navigation', navigation);
      const productId = navigation.getParam('productId');
      await menuRequest(menuTypes.TYPES, productId);
    };
    getTypes();
  }, []);

  // const onPressProduct = (id) => {
  //   console.tron.log('product id', id);
  //   navigate('Types', { productId: id });
  // };

  return (
    <Container>
      <ProductHeader />
      <Content>
        <List
          data={types}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </Content>
    </Container>
  );
};

Types.propTypes = {
  types: PropTypes.arrayOf({
    product: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  menuRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  types: state.menu.types,
});

const mapDispatchToProps = dispatch => bindActionCreators(MenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Types);
