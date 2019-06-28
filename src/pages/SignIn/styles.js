import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.ImageBackground`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  background-color: #fff;
  padding: 5px 20px;
  margin: 5px 0;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 15px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #da2a41;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const SignupText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
`;
