import React from 'react';
import PropType from 'prop-types';
import { imagesURL } from '~/services/api';
import { getTypeImage } from '~/services/images';

import {
  Container, Button, Image, Title,
} from './styles';

const Type = ({ type, onPress }) => (
  <Container>
    <Button onPress={() => onPress(type.id)}>
      {type.images.length > 0 && (
        <Image source={{ uri: `${imagesURL}/${getTypeImage(type.images)}` }} />
      )}
      <Title>{type.name}</Title>
    </Button>
  </Container>
);

Type.propTypes = {
  type: PropType.shape({
    id: PropType.number,
    images: PropType.arrayOf(
      PropType.shape({
        file: PropType.string,
        ratio: PropType.number,
      }),
    ),
    name: PropType.string,
  }).isRequired,
  onPress: PropType.func.isRequired,
};

export default Type;
