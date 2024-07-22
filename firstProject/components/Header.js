import React, {useEffect, useState} from 'react';
import {Text, Button, View} from 'react-native';
import {} from 'react-redux';
import {useSelector} from 'react-redux';
export const Header = () => {
  const [cartItems, setCartItems] = useState(0);
  const cartData = useSelector(state => state.reducer);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View>
      <Text>`The no of items are {cartItems}`</Text>
    </View>
  );
};
