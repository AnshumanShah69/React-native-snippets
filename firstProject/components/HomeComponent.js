import React from 'react';
import {View, Text, Button} from 'react-native';
import {navigationStyles} from '../style';

export const Home = props => {
  const {name, age} = props.route.params;
  return (
    ///we can use the concept of destructuring the data
    <View style={navigationStyles.homecomponent}>
      <Text style={{fontSize: 20, color: 'red'}}>
        Hello there, this is the home screen
      </Text>
      <Text style={{fontSize: 20, color: 'green'}}>
        {name}
        {/* this is one way of accessing the structured data*/}
      </Text>
      <Text style={{fontSize: 20, color: 'green'}}>
        {age}
        {/* ths is just one way of accessing tge the structured data we can use another way to do the same */}
      </Text>
    </View>
  );
};
