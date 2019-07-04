import React from 'react';
import PropType from 'prop-types';
import moment from 'moment';

import br from 'moment/locale/pt-br';

import {
  Container, OrderNumber, Time, Total,
} from './styles';

moment.updateLocale('pt-br', br);

const CartItem = ({ item, index }) => (
  <Container>
    <OrderNumber>{`Pedido #${index}`}</OrderNumber>
    <Time>{moment(item.updatedAt).fromNow()}</Time>
    <Total>{`R$${item.total.toFixed(2)}`}</Total>
  </Container>
);

CartItem.propTypes = {
  item: PropType.shape({
    total: PropType.number,
    updatedAt: PropType.string,
  }).isRequired,
  index: PropType.number.isRequired,
};

export default CartItem;
