import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { Text } from 'react-native';
import { Container, Content, List } from './styles';

import Header from '~/components/Header';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get('/products');
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Header title="Pizzaria Don Juan" />
      <Content>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => <Text>{product.name}</Text>}
        />
      </Content>
    </Container>
  );
};

export default Products;
