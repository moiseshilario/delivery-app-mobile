import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as CartActions } from '../../store/ducks/cart';

import { Container, Content, List } from './styles';

import Header from '~/components/Header';
import OrderItem from '~/components/OrderItem';

const Orders = ({ orders, getOrdersRequest, navigation }) => {
  useEffect(() => {
    const getOrders = async () => {
      await getOrdersRequest();
    };
    getOrders();
  }, []);

  const onPressBack = () => navigation.pop();

  return (
    <Container>
      <Header title="Meus pedidos" onPressBack={onPressBack} />
      <Content>
        {!!orders.length && (
          <List
            data={orders}
            keyExtractor={product => String(product.id)}
            renderItem={({ item, index }) => <OrderItem index={index + 1} item={item} />}
          />
        )}
      </Content>
    </Container>
  );
};

Orders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  getOrdersRequest: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  orders: state.cart.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
