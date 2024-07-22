import React, {useEffect, useState} from 'react';
import {Text, Button, View, Image, StyleSheet} from 'react-native';
import {addToCart, removeFromCart} from './redux/action';
import {useDispatch} from 'react-redux';

import {useSelector} from 'react-redux';
///to call the action first we use the useDispatch() form the react redux then it does the processing to the reducer
///we import the action where there is the UI button and from there we call it to the reducer

export const Product = props => {
  const dispatch = useDispatch();
  const item = props.item;
  const handleAddToCart = item => {
    console.warn(item);
    dispatch(addToCart(item)); ///till here we are creating the actiona now we create the reducer
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };

  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

  return (
    <View style={styles.productContainer}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.color}</Text>
      <Image style={styles.image} source={{uri: item.image}} />
      {isAdded ? (
        <Button
          title="Remove from cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
