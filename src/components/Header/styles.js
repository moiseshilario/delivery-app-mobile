import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ImageBackground`
  height: 170px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight() + 30}px;
  margin-bottom: -70px;
`;

export const LeftContainer = styled.View``;
export const CenterContainer = styled.View``;
export const RightContainer = styled.View``;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
`;
