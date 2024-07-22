import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {navigationStyles} from '../style';
export const Login = props => {
  const passion = 'development';
  const salary = 100000;

  const [devname, setName] = useState('');
  const myname = devname;
  return (
    <View style={navigationStyles.homecomponent}>
      <Text style={{fontSize: 20, color: 'red'}}>
        Hello there, this is the login screen click on the button to move to the
        signup screen
      </Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'black',
          margin: 5,
          borderRadius: 10,
        }}
        onChangeText={text => setName(text)}
        placeholder="Enter the text"></TextInput>
      <Button
        title="Signup"
        onPress={() =>
          props.navigation.navigate('Sign', {
            myname,
            passion,
            salary,
            ///we can give directly also
            // passion:"development"
          })
        }
      />
    </View>
  );
};
