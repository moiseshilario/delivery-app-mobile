import styled from 'styled-components/native';

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
    alignItems: 'center',
  },
  columnWrapper: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
})``;

export const NotAvailableContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
