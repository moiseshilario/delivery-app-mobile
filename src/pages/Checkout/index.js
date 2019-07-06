import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cepApi from 'cep-promise';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as CheckoutActions } from '../../store/ducks/cart';

import { Platform } from 'react-native';
import {
  Container,
  Content,
  ObservationInput,
  CepInput,
  AddressInfoContainer,
  StreetInput,
  NumberInput,
  DistrictInput,
  BottomContent,
  CheckoutButton,
  CheckoutText,
  NextIcon,
} from './styles';

import Header from '~/components/Header';

const Checkout = ({ total, confirmOrderRequest, navigation }) => {
  const [observation, setObservation] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');

  let cepInput;
  let streetInput;
  let numberInput;
  let districtInput;

  useEffect(() => {
    const getCep = async () => {
      try {
        const addressInfo = await cepApi(cep);
        setStreet(addressInfo.street);
        setDistrict(addressInfo.neighborhood);
      } catch (e) {
        console.tron.log('CEP inválido');
      }
    };
    if (cep.length === 8) {
      getCep();
    }
  }, [cep]);

  const onPressBack = () => navigation.pop();

  const onPressConfirm = () => {
    const form = {
      observation,
      address: {
        cep,
        street,
        number,
        district,
      },
    };
    confirmOrderRequest(form, total);
  };

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Header title="Realizar pedido" onPressBack={onPressBack} cartPrice={total} />
      <Content showsVerticalScrollIndicator={false}>
        <ObservationInput
          placeholder="Alguma observação?"
          multiline
          numberOfLines={4}
          value={observation}
          onChangeText={text => setObservation(text)}
          onSubmitEditing={() => cepInput.focus()}
        />
        <CepInput
          placeholder="Qual seu CEP?"
          keyboardType="number-pad"
          maxLength={8}
          value={cep}
          onChangeText={text => setCep(text)}
          onSubmitEditing={() => streetInput.focus()}
          ref={(e) => {
            cepInput = e;
          }}
        />
        <AddressInfoContainer>
          <StreetInput
            placeholder="Rua"
            value={street}
            onChangeText={text => setStreet(text)}
            onSubmitEditing={() => numberInput.focus()}
            ref={(e) => {
              streetInput = e;
            }}
          />
          <NumberInput
            placeholder="Nº"
            keyboardType="number-pad"
            value={number}
            onChangeText={text => setNumber(text)}
            onSubmitEditing={() => districtInput.focus()}
            ref={(e) => {
              numberInput = e;
            }}
          />
        </AddressInfoContainer>
        <DistrictInput
          placeholder="Bairro"
          value={district}
          onChangeText={text => setDistrict(text)}
          onSubmitEditing={() => cepInput.focus()}
          ref={(e) => {
            districtInput = e;
          }}
        />
        <BottomContent>
          <CheckoutButton onPress={onPressConfirm}>
            <CheckoutText>Finalizar</CheckoutText>
            <NextIcon />
          </CheckoutButton>
        </BottomContent>
      </Content>
    </Container>
  );
};

Checkout.propTypes = {
  total: PropTypes.number.isRequired,
  confirmOrderRequest: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  total: state.cart.items.reduce((acc, item) => acc + item.price, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CheckoutActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
