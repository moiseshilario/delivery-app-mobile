import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { menuTypes } from '~/services/menuTypes';
import { navigate } from '~/services/navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as MenuActions } from '../../store/ducks/menu';

import { Text } from 'react-native';
import {
  Container, Content, List, NotAvailableContainer,
} from './styles';

import Header from '~/components/Header';
import SizePrice from '~/components/SizePrice';

const SizePrices = ({ prices, menuRequest, navigation }) => {
  useEffect(() => {
    const getSizePrices = async () => {
      const typeId = navigation.getParam('typeId');
      console.tron.log('TCL: getSizePrices -> typeId', typeId);
      await menuRequest(menuTypes.PRICES, typeId);
    };
    getSizePrices();
  }, []);

  const onPressSizePrice = (id) => {
    // navigate('SizePrices', { typeId: id });
  };

  const onPressBack = () => {
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
  menuRequest: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  prices: state.menu.prices,
});

const mapDispatchToProps = dispatch => bindActionCreators(MenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SizePrices);
