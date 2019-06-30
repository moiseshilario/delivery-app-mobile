import React, { Fragment } from 'react';

import { StatusBar, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Container, HeaderContent, Title, Cart, CounterContainer, CounterText,
} from './styles';

import headerBg from '~/assets/header-background.png';

const ProductHeader = () => {
  const onPressHistory = () => {};
  const onPressCart = () => {};
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <Container source={headerBg}>
        <HeaderContent>
          <TouchableOpacity onPress={onPressHistory}>
            <MIcon name="history" size={30} color="#fff" />
          </TouchableOpacity>
          <Title>Pizzaria Don Juan</Title>
          <Cart onPress={onPressCart}>
            <CounterContainer>
              <CounterText>1</CounterText>
            </CounterContainer>
            <SIcon name="handbag" size={20} color="#fff" />
          </Cart>
        </HeaderContent>
      </Container>
    </Fragment>
  );
};
export default ProductHeader;
