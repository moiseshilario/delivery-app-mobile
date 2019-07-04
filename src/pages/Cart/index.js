import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as CartActions } from '../../store/ducks/cart';

import { Text } from 'react-native';
import {
  Container,
  Content,
  List,
  NotAvailableContainer,
  BottomContent,
  CartIconButton,
  CartIcon,
  CheckoutButton,
  CheckoutText,
  NextIcon,
} from './styles';

import Header from '~/components/Header';
import CartItem from '~/components/CartItem';
import normalizeData from '~/helpers/normalizeData';

const Cart = ({
  items, total, removeItemRequest, navigation,
}) => {
  const onPressDelete = (id) => {
    removeItemRequest(id);
  };

  const onPressBack = () => navigation.pop();

  const onPressCheckout = () => navigation.navigate('Checkout');

  return (
    <Container>
      <Header title="Carrinho" onPressBack={onPressBack} cartPrice={total} />
      <Content>
        {items.length ? (
          <List
            data={items}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <CartItem item={normalizeData(item)} onPressDelete={onPressDelete} />
            )}
          />
        ) : (
          <NotAvailableContainer>
            <Text>Nenhum produto no carrinho</Text>
          </NotAvailableContainer>
        )}
        <BottomContent>
          <CartIconButton onPress={onPressBack}>
            <CartIcon />
          </CartIconButton>
          {!!items.length && (
            <CheckoutButton onPress={onPressCheckout}>
              <CheckoutText>Realizar Pedido</CheckoutText>
              <NextIcon />
            </CheckoutButton>
          )}
        </BottomContent>
      </Content>
    </Container>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  total: PropTypes.number.isRequired,
  removeItemRequest: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
  total: state.cart.items.reduce((acc, item) => acc + item.price, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
