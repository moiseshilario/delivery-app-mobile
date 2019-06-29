import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { Container, Content, List } from './styles';

import Header from '~/components/Header';
import Product from '~/components/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get('/products');
      setProducts(data);
    };
    getProducts();
  }, []);

  const onPressProduct = (id) => {
    console.tron.log('product id', id);
  };

  return (
    <Container>
      <Header title="Pizzaria Don Juan" />
      <Content>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <Product product={item} onPress={onPressProduct} />}
        />
      </Content>
    </Container>
  );
};

export default Products;
