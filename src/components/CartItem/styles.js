import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  padding: 15px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #555;
  shadow-offset: 0px 0px;
  elevation: 1;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemInfo = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80px;
  height: 80px;
`;

export const InfoContainer = styled.View`
  margin-left: 10px;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
`;

export const Size = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  line-height: 14px;
  margin: 5px 0;
`;

export const Price = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  justify-content: flex-start;
`;

export const DeleteIcon = styled(Icon).attrs({
  size: 24,
  color: '#e5293e',
})``;
