import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { menuTypes } from '~/services/menuTypes';
import { navigate } from '~/services/navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as MenuActions } from '../../store/ducks/menu';
import { Actions as CartActions } from '../../store/ducks/cart';

import { Text } from 'react-native';
import {
  Container, Content, List, NotAvailableContainer,
} from './styles';

import Header from '~/components/Header';
import Type from '~/components/Type';

const Types = ({
  types, menuRequest, addStep, removeStep, navigation,
}) => {
  useEffect(() => {
    const getTypes = async () => {
      const productId = navigation.getParam('productId');
      await menuRequest(menuTypes.TYPES, productId);
    };
    getTypes();
  }, []);

  const onPressType = (id) => {
    addStep('type', types.find(type => type.id === id));
    navigate('SizePrices', { typeId: id });
  };

  const onPressBack = () => {
    removeStep('type');
    navigation.pop();
  };

  return (
    <Container>
      <Header title="Selecione um tipo" onPressBack={onPressBack} />
      <Content>
        {types.length > 0 ? (
          <List
            data={types}
            keyExtractor={type => String(type.id)}
            renderItem={({ item }) => <Type type={item} onPress={onPressType} />}
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

Types.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  menuRequest: PropTypes.func.isRequired,
  addStep: PropTypes.func.isRequired,
  removeStep: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  types: state.menu.types,
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
)(Types);
