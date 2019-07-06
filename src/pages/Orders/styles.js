import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 0,
    paddingBottom: 30,
    overflow: 'visible',
    flexDirection: 'column-reverse',
  },
})``;
