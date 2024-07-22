import React from 'react';
import {compFlatStyles} from '../style';
import {Text, View} from 'react-native';
//using components in the flatlist
const UsersData = props => {
  const item = props.item;
  return (
    <View style={compFlatStyles.box}>
      <Text style={compFlatStyles.item}>{item.name}</Text>
      <Text style={compFlatStyles.item}>{item.email}</Text>
    </View>
  );
};

export default UsersData;
