import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Container, HeaderContent, Title, Cart, CounterContainer, CounterText,
} from './styles';

import headerBg from '~/assets/header-background.png';

const ProductHeader = ({ cartItems, onPressCart, onPressOrders }) => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <Container source={headerBg}>
      <HeaderContent>
        <TouchableOpacity onPress={onPressOrders}>
          <MIcon name="history" size={30} color="#fff" />
        </TouchableOpacity>
        <Title>Pizzaria Don Juan</Title>
        <Cart onPress={onPressCart}>
          <CounterContainer>
            {!!cartItems && <CounterText>{cartItems}</CounterText>}
          </CounterContainer>
          <SIcon name="handbag" size={20} color="#fff" />
        </Cart>
      </HeaderContent>
    </Container>
  </Fragment>
);

ProductHeader.propTypes = {
  cartItems: PropTypes.number.isRequired,
  onPressCart: PropTypes.func.isRequired,
  onPressOrders: PropTypes.func.isRequired,
};

export default ProductHeader;
