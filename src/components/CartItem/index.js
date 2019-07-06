import React from 'react';
import PropType from 'prop-types';
import { imagesURL } from '~/services/api';

import {
  Container,
  ItemInfo,
  Image,
  InfoContainer,
  Title,
  Size,
  Price,
  DeleteButton,
  DeleteIcon,
} from './styles';

const CartItem = ({ item, onPressDelete }) => (
  <Container>
    <ItemInfo>
      <Image
        source={{
          uri: `${imagesURL}/${item.type.image}`,
        }}
      />
      <InfoContainer>
        <Title>{item.type.name}</Title>
        <Size>{item.size.description}</Size>
        <Price>{`R$${item.price.toFixed(2)}`}</Price>
      </InfoContainer>
    </ItemInfo>
    <DeleteButton onPress={() => onPressDelete(item.id)}>
      <DeleteIcon name="delete-forever" />
    </DeleteButton>
  </Container>
);

CartItem.propTypes = {
  item: PropType.shape({
    type: PropType.shape({
      image: PropType.string,
      name: PropType.string,
    }),
    size: PropType.shape({
      description: PropType.string,
    }),
    price: PropType.number,
  }).isRequired,
  onPressDelete: PropType.func.isRequired,
};

export default CartItem;
