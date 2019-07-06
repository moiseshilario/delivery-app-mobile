import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, HeaderContent, LeftContainer, Title, CartPrice,
} from './styles';

import headerBg from '~/assets/header-background.png';

const Header = ({ title, onPressBack, cartPrice = null }) => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <Container source={headerBg}>
      <HeaderContent>
        <LeftContainer>
          <TouchableOpacity onPress={onPressBack}>
            <MIcon name="chevron-left" size={22} color="#fff" />
          </TouchableOpacity>
          <Title>{title}</Title>
        </LeftContainer>
        {!!cartPrice && <CartPrice>{`R$${cartPrice.toFixed(2)}`}</CartPrice>}
      </HeaderContent>
    </Container>
  </Fragment>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  cartPrice: PropTypes.number,
  onPressBack: PropTypes.func.isRequired,
};

Header.defaultProps = {
  cartPrice: null,
};

export default Header;
