import React from 'react';
import {View, Text, Button} from 'react-native';
import {navigationStyles} from '../style';

export const Sign = props => {
  const {passion, salary, myname} = props.route.params;
  return (
    <View style={navigationStyles.homecomponent}>
      <Text style={{fontSize: 20, color: 'green'}}>
        Hello there, this is the Sign Up screen click on the button to move to
        the Home screen
      </Text>
      <Text style={{fontSize: 20, color: 'red'}}>{passion}</Text>
      <Text style={{fontSize: 20, color: 'red'}}>{salary}</Text>
      <Text style={{fontSize: 20, color: 'red'}}>{myname}</Text>
      <Button
        title="Home"
        onPress={() =>
          props.navigation.navigate('Home', {name: 'anshuman', age: 40})
        }
      />
    </View>
  );
};
