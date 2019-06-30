import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ImageBackground`
  height: 170px;
  flex-direction: row;
  align-items: flex-start;
  padding-top: ${getStatusBarHeight() + 30}px;
  margin-bottom: -70px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
`;

export const Cart = styled.TouchableOpacity`
  background: #e22c43;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const CounterContainer = styled.View`
  position: absolute;
  background: #fdc02f;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: -5px;
  right: -7px;
  justify-content: center;
  align-items: center;
`;

export const CounterText = styled.Text`
  font-size: 12px;
`;
