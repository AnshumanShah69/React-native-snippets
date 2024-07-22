import React from 'react';
import {Text, Button, View, ScrollView, StyleSheet} from 'react-native';

import {Header} from './Header';
import {Product} from './Product';

const ProductWrapper = ({navigation}) => {
  // Static data for products
  const products = [
    {
      name: 'Samsung',
      price: 10000,
      color: 'black',
      image:
        'https://images.unsplash.com/photo-1612265152720-671efb0e3047?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Nothing',
      price: 30000,
      color: 'white',
      image:
        'https://images.unsplash.com/photo-1661268277249-38f133ba09c9?q=80&w=1339&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'OnePlus',
      price: 40000,
      color: 'ceramic',
      image:
        'https://images.unsplash.com/photo-1658851362428-e136c3efad4b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <View style={styles.container}>
      <Button
        title="Go to userList"
        onPress={() => navigation.navigate('User')}></Button>
      <Text style={styles.title}>Hi this is the redux part</Text>
      <ScrollView>
        <Header></Header>
        {products.map(item => (
          <Product key={item.name} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProductWrapper;
