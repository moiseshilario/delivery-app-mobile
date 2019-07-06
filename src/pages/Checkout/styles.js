import styled from 'styled-components/native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Input = styled.TextInput.attrs({
  autocorrect: false,
  placeholderTextColor: '#999999',
  underlineColorAndroid: 'transparent',
  returnKeyType: 'next',
})`
  padding: 15px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #555;
  shadow-offset: 0px 0px;
  elevation: 1;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px 20px;
  font-size: 15px;
`;

export const ObservationInput = styled(Input).attrs({
  autocorrect: false,
  textAlignVertical: 'top',
})`
  height: 100px;
`;

export const AddressInfoContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const CepInput = styled(Input).attrs({})``;

export const StreetInput = styled(Input).attrs({})`
  flex: 1;
  margin-right: 10px;
`;

export const NumberInput = styled(Input).attrs({})`
  margin-left: 0;
  width: 80px;
`;

export const DistrictInput = styled(Input).attrs({})``;

export const BottomContent = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  justify-content: flex-end;
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
