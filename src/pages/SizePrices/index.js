import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { menuTypes } from '~/services/menuTypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as MenuActions } from '../../store/ducks/menu';
import { Actions as CartActions } from '../../store/ducks/cart';

import { Text, ActivityIndicator } from 'react-native';
import {
  Container, Content, List, NotAvailableContainer,
} from './styles';

import Header from '~/components/Header';
import SizePrice from '~/components/SizePrice';

const SizePrices = ({
  prices,
  menuRequest,
  addStep,
  removeStep,
  addItemRequest,
  loading,
  navigation,
}) => {
  useEffect(() => {
    const getSizePrices = async () => {
      const typeId = navigation.getParam('typeId');
      await menuRequest(menuTypes.PRICES, typeId);
    };
    getSizePrices();
  }, []);

  const onPressSizePrice = async (id) => {
    addStep('price', prices.find(price => price.id === id));

    addItemRequest();
  };

  const onPressBack = () => {
    removeStep('price');
    navigation.pop();
  };

  return (
    <Container>
      <Header title="Selecione um tamanho" onPressBack={onPressBack} />
      <Content>
        {prices.length > 0 ? (
          <List
            data={prices}
            keyExtractor={price => String(price.id)}
            renderItem={({ item }) => <SizePrice item={item} onPress={onPressSizePrice} />}
            numColumns={2}
          />
        ) : (
          <NotAvailableContainer>
            <Text>Indisponível</Text>
          </NotAvailableContainer>
        )}
        {loading && <ActivityIndicator />}
      </Content>
    </Container>
  );
};

SizePrices.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  menuRequest: PropTypes.func.isRequired,
  addStep: PropTypes.func.isRequired,
  addItemRequest: PropTypes.func.isRequired,
  removeStep: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  prices: state.menu.prices,
  loading: state.cart.loading,
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
)(SizePrices);
