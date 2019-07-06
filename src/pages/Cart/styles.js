import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
  columnWrapper: {
    marginHorizontal: 10,
  },
})``;

export const NotAvailableContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BottomContent = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  padding-bottom: ${getBottomSpace() + 10}px;
`;

export const CartIconButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: ${40 / 2};
  background-color: #dddddd;
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled(MIcon).attrs({
  name: 'add-shopping-cart',
  size: 22,
  color: '#666666',
})`
  margin-top: 2px;
  margin-left: 2px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: #e22c43;
  padding: 5px 20px;
  flex-direction: row;
  align-items: center;
  height: 40px;
  border-radius: ${40 / 2};
`;

export const CheckoutText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const NextIcon = styled(MIcon).attrs({
  name: 'chevron-right',
  color: '#fff',
  size: 20,
})``;
