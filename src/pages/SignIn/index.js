import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as AuthActions } from '../../store/ducks/auth';

import {
  Container,
  BackgroundContainer,
  Gradient,
  Logo,
  Input,
  Button,
  ButtonText,
  SwitchButton,
  SwitchButtonText,
} from './styles';

const SignIn = ({ signInRequest, signUpRequest, loading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginActive, setLoginActive] = useState(true);

  let passwordInput;
  let emailInput;

  const handleSubmit = () => {
    if (loginActive) {
      signInRequest(email, password);
    } else {
      signUpRequest(name, email, password);
    }
  };

  const toggleLoginActive = () => setLoginActive(!loginActive);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <StatusBar barStyle="light-content" />
      <BackgroundContainer>
        <Gradient>
          <Logo />
          {!loginActive && (
            <Input
              autoCapitalize="words"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
              placeholder="Nome Completo"
              onSubmitEditing={() => emailInput.focus()}
              onChangeText={text => setName(text)}
              value={name}
            />
          )}

          <Input
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            placeholder="Seu e-mail"
            onSubmitEditing={() => passwordInput.focus()}
            onChangeText={text => setEmail(text)}
            value={email}
            ref={(e) => {
              emailInput = e;
            }}
          />
          <Input
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            placeholder="Senha secreta"
            onChangeText={text => setPassword(text)}
            value={password}
            ref={(e) => {
              passwordInput = e;
            }}
            onSubmitEditing={handleSubmit}
          />

          <Button onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <ButtonText>{loginActive ? 'Entrar' : 'Criar conta'}</ButtonText>
            )}
          </Button>

          <SwitchButton onPress={toggleLoginActive}>
            {loginActive ? (
              <SwitchButtonText>Criar conta gratuita</SwitchButtonText>
            ) : (
              <SwitchButtonText>Já tenho login</SwitchButtonText>
            )}
          </SwitchButton>
        </Gradient>
      </BackgroundContainer>
    </Container>
  );
};

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  signUpRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
