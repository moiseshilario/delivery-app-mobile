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
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  margin-left: 10px;
`;

export const CartPrice = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #ffffff;
`;
