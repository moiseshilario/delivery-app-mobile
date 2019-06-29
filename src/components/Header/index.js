import React, { Fragment } from 'react';

import { StatusBar } from 'react-native';

import {
  Container, LeftContainer, CenterContainer, RightContainer, Title,
} from './styles';

import headerBg from '~/assets/header-background.png';

const Header = ({ renderBackButton, title }) => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <Container source={headerBg}>
      <LeftContainer />
      <CenterContainer>
        <Title>{title}</Title>
      </CenterContainer>
      <RightContainer />
    </Container>
  </Fragment>
);

export default Header;
