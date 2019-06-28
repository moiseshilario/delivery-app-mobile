import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as AuthActions } from '../../store/ducks/auth';

import {
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  Container, Input, Button, Logo, ButtonText, SignupText,
} from './styles';

import backgroundImage from '~/assets/background.png';
import logo from '~/assets/logo.png';

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
      console.tron.log('========SIGNUP=======');
      signUpRequest(name, email, password);
    }
  };

  const toggleLoginActive = () => setLoginActive(!loginActive);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <LinearGradient colors={['transparent', '#000']} style={styles.linearGradient}>
          <Logo source={logo} />
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

          <TouchableOpacity activeOpacity={0.6}>
            {loginActive ? (
              <SignupText onPress={toggleLoginActive}>Criar conta gratuita</SignupText>
            ) : (
              <SignupText onPress={toggleLoginActive}>Já tenho login</SignupText>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

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
