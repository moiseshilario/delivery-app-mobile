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
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 130px;
`;

export const SizeImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${({ imgWidth }) => `${imgWidth}px`};
  height: ${({ imgHeight }) => `${imgHeight}px`};
  max-width: 130px;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
`;

export const Price = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  opacity: 0.6;
  margin-top: 5px;
`;
