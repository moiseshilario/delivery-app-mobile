import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  padding: 15px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #555;
  shadow-offset: 0px 0px;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px 5px;
  max-width: ${(width - 20) / 2};
  min-width: 150px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  margin-top: 18px;
`;
