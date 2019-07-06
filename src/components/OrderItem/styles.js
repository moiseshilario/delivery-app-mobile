import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #555;
  shadow-offset: 0px 0px;
  elevation: 1;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px 20px;
`;

export const OrderNumber = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
`;

export const Time = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  line-height: 14px;
  margin: 5px 0;
  text-transform: capitalize;
`;

export const Total = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
`;
