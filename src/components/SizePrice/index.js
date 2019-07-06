import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { imagesURL } from '~/services/api';

import { Image } from 'react-native';
import {
  Container, Button, ImageContainer, SizeImage, Title, Price,
} from './styles';

const SizePrice = ({ item, onPress }) => {
  const [imgWidth, setImgWidth] = useState(40);
  const [imgHeight, setImgHeigh] = useState(40);

  Image.getSize(`${imagesURL}/${item.size.image}`, (width, height) => {
    setImgWidth(width);
    setImgHeigh(height);
  });

  return (
    <Container>
      <Button onPress={() => onPress(item.id)}>
        <ImageContainer>
          {item.size.image && (
            <SizeImage
              source={{ uri: `${imagesURL}/${item.size.image}` }}
              imgWidth={imgWidth}
              imgHeight={imgHeight}
            />
          )}
        </ImageContainer>
        <Title>{item.size.description}</Title>
        <Price>{`R$${item.price.toFixed(2)}`}</Price>
      </Button>
    </Container>
  );
};

SizePrice.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    size: PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SizePrice;
