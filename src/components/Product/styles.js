import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  padding: 15px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #555;
  shadow-offset: 0px 0px;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  justify-content: flex-start;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const InfoContainer = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
`;

export const Description = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  line-height: 14px;
  margin: 5px 0;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeIcon = styled(Icon).attrs({
  name: 'alarm',
  color: '#aaa',
  size: 18,
})``;

export const TimeText = styled.Text`
  margin-left: 5px;
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
`;
