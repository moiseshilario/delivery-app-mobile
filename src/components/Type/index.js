import React from 'react';
import PropType from 'prop-types';
import { imagesURL } from '~/services/api';

import {
  Container, Button, Image, Title,
} from './styles';

const Type = ({ type, onPress }) => (
  <Container>
    <Button onPress={() => onPress(type.id)}>
      {!!type.image && <Image source={{ uri: `${imagesURL}/${type.image}` }} />}
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
