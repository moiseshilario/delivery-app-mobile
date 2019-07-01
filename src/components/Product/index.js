import React from 'react';
import PropType from 'prop-types';
import { imagesURL } from '~/services/api';

import {
  Container,
  Button,
  Image,
  InfoContainer,
  Title,
  Description,
  TimeContainer,
  TimeText,
  TimeIcon,
} from './styles';

const Product = ({ product, onPress }) => (
  <Container>
    <Button onPress={() => onPress(product.id)}>
      <Image
        source={{
          uri: `${imagesURL}/${product.image}`,
        }}
      />
      <InfoContainer>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <TimeContainer>
          <TimeIcon />
          <TimeText>{`${product.preparation_time} mins`}</TimeText>
        </TimeContainer>
      </InfoContainer>
    </Button>
  </Container>
);

Product.propTypes = {
  product: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    description: PropType.string,
    preparation_time: PropType.number,
  }).isRequired,
  onPress: PropType.func.isRequired,
};

export default Product;
