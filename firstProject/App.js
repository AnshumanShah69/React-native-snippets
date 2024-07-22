///FIRST COMMENT ALL THEN CHOOSE THE SNIPPET YOU WANT TO USE AND JUST UNCOMMENT IT THERE WILL BE NO ERRORS
///for api reach out to jsonparser website and follow the instructions
///start a json server on watch mode when working with api part 
///json-server --watch db.json --port 3000
//for redux part install all the packages of redux and saga

//KEEP CODING



import React from 'react';
import {Text, View} from 'react-native';
import {flatStyles} from './style';
import {ScrollView} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'anshuman',
    },
    {
      id: 2,
      name: 'asmit',
    },
    {
      id: 3,
      name: 'abhay',
    },
    {
      id: 4,
      name: 'abhay',
    },
    {
      id: 5,
      name: 'abhay',
    },
    {
      id: 6,
      name: 'abhay',
    },
    {
      id: 7,
      name: 'abhay',
    },
    {
      id: 8,
      name: 'abhay',
    },
    {
      id: 9,
      name: 'abhay',
    },
    {
      id: 10,
      name: 'asmit',
    },
    {
      id: 11,
      name: 'asmit',
    },
    {
      id: 12,
      name: 'asmit',
    },
    {
      id: 13,
      name: 'asmit',
    },
  ];

  return (
    <View>
      <ScrollView>
        {users.map(item => (
          <Text key={item.id} style={flatStyles.flat}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

import React from 'react';
import {Text, View} from 'react-native';
import {gridStyles} from './style';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'anshuman',
    },
    {
      id: 2,
      name: 'asmit',
    },
    {
      id: 3,
      name: 'abhay',
    },
    {
      id: 4,
      name: 'abhay',
    },
    {
      id: 5,
      name: 'abhay',
    },
    {
      id: 6,
      name: 'abhay',
    },
    {
      id: 7,
      name: 'abhay',
    },
    {
      id: 8,
      name: 'abhay',
    },
    {
      id: 9,
      name: 'abhay',
    },
    {
      id: 10,
      name: 'asmit',
    },
    {
      id: 11,
      name: 'asmit',
    },
    {
      id: 12,
      name: 'asmit',
    },
    {
      id: 13,
      name: 'asmit',
    },
  ];
  return (
    <View>
      <Text>Hello there</Text>
      {/* this is the view for the flexbox of the items */}
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {users.map(item => (
          <Text style={gridStyles.griditem}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

export default App;

import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native';
import UsersData from './components/Userdata';
import {SectionList} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'anshuman',
      data: ['PHP', 'JAVA', 'PYTHON', 'REACT'],
    },
    {
      id: 2,
      name: 'asmit',
      data: ['PHP', 'JAVA', 'PYTHON', 'REACT', 'ANGULAR'],
    },
    {
      id: 3,
      name: 'abhay',
      data: ['PHP', 'JAVA', 'PYTHON'],
    },
    {
      id: 4,
      name: 'abhay',
      data: ['PYTHON', 'REACT', 'ANGULAR'],
    },
  ];
  return (
    <View>
      <Text>Section list from from natives</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={{fontSize: 20}}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
            {name}
          </Text>
        )}></SectionList>
    </View>
  );
};

export default App;

/whenever we want to use the lifecycle methods in a functional component we use the useEffect hook

import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    console.warn('hello on mounting called');
  }, []);
  return (
    <View>
      <Text style={{fontSize: 20, color: 'red', fontWeight: 10}}>
        Hi my name is anshuman
      </Text>
    </View>
  );
};

export default App;
/when we mount the component the useEffect hook only comes into play and it should never be called on state change by any other activity or hook so to use this we use the useEffect() the syntax is as follows:

useEffect(()=>{
},[]);

the [] indicates that the useEffect should only be called on mounting of the component and not on any other activity

we also use the componentDidUpdate() in the functional components
basically we can use the useEffect as compunentDidMount() when we give the [] as the second argument
and we can use the useEffect as the componentDidUpdate() when we give the state variable as the second argument
import React, {useState} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {useEffect} from 'react';
import {Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [warn, setWarn] = useState(50);
  const [toggle, setToggle] = useState(true);

  // useEffect(() => {
  //   console.warn('called the lifecycle method for mounting on inc');
  // }, [count]);
  // useEffect(() => {
  //   console.warn('The warn log is called');
  //   console.log(warn);
  // }, [warn]);

  return (
    <View>
      <Text style={{fontSize: 20, color: 'red', fontWeight: 10}}>
        Hi this is the tutorial for the useEffect hook
      </Text>
      <Text>count is : {count}</Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)}></Button>
      {/* creating useEffect for another button on state change */}
      <Button title="Warn me" onPress={() => setWarn(warn - 1)}></Button>
      <Text>warn is : {warn}</Text>
      <Userprops info={{count, warn}}></Userprops>
      {/* toggle component */}
      <View>
        <ToggleComponent>
          <Button title="Toggle" onPress={() => setToggle(!false)} />
        </ToggleComponent>
      </View>
    </View>
  );
};

const Userprops = props => {
  useEffect(() => {
    console.warn('Running when count prop is updated');
  }, [props.info.count]);
  useEffect(() => {
    console.warn('Running when warn prop is updated');
  }, [props.info.warn]);

  return (
    <View>
      <Text style={{fontSize: 20, color: 'orange', margin: 10, padding: 10}}>
        This is another Component for the props calling the useEffect hook
      </Text>

      <Text style={{fontSize: 20, color: 'black'}}>
        the count is : {props.info.count}
      </Text>
      <Text style={{fontSize: 20, color: 'blue'}}>
        the warn count is : {props.info.warn}
      </Text>
    </View>
  );
};

const ToggleComponent = () => {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'green'}}>Toggle component</Text>
    </View>
  );
};

export default App;

/toggle function for the useEffect hook in the functional component

import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <View>
      <Button title="Toggle me" onPress={() => setToggle(!toggle)}></Button>
      {toggle ? <ToggleComponent /> : null}
    </View>
  );
};

const ToggleComponent = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.warn('Timer is called');
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <Text style={{fontSize: 10, color: 'blue'}}>
        this is the hiding component
      </Text>
    </View>
  );
};

export default App;

import React from 'react';
import {View} from 'react-native';
import {flexStyles} from './style';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={flexStyles.box1}>
        <View style={flexStyles.innerBox1}></View>
        <View style={flexStyles.innerBox2}></View>
        <View style={flexStyles.innerBox3}></View>
      </View>
      <View style={flexStyles.box2}></View>
      <View style={flexStyles.box3}></View>
      <View style={flexStyles.box4}></View>
    </View>
  );
};

export default App;

import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {touchStyles} from './style';

const App = () => {
  return (
    <View>
      <TouchableHighlight>
        <Text style={touchStyles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={touchStyles.button1}>success</Text>
      </TouchableHighlight>
    </View>
  );
};

export default App;

import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {myButtonStyles, touchStyles} from './style';

const App = () => {
  const skills = [
    {id: 1, name: 'JAVA'},
    {id: 2, name: 'PHP'},
    {id: 3, name: 'NODE'},
    {id: 4, name: 'SQL'},
  ];

  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={myButtonStyles.myVariableButton}>
      {skills.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedRadio(item.id)}
          style={touchStyles.touchable}>
          <View style={myButtonStyles.radioWrapper}>
            <View style={myButtonStyles.radio}>
              {selectedRadio === item.id ? (
                <View style={myButtonStyles.radioBackground} />
              ) : null}
            </View>
            <Text style={myButtonStyles.myRadio}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default App;

import React, {useState} from 'react';
import {Button, View, Text, ActivityIndicator} from 'react-native';
import {loader} from './style';

const App = () => {
  const [show, setShow] = useState(false);

  const displayButton = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return (
    <View style={loader.loaderItem}>
      <ActivityIndicator size={200} color="red" animating={show} />
      <Text style={{fontSize: 20, color: 'black'}}>Hi there</Text>
      <Button onPress={displayButton} title="Click" />
    </View>
  );
};
export default App;

import React, {useState} from 'react';
import {Text, View, Button, Modal} from 'react-native';
import {modalComp} from './style';

const App = () => {
  const [hide, setHide] = useState(true);

  const showdisplay = () => {
    setHide(false);
  };

  return (
    <View style={modalComp.modalItem}>
      <Modal transparent={true} visible={hide} animationType="fade">
        <View style={modalComp.centerView}>
          <View style={modalComp.modalView}>
            <Text style={{fontSize: 20}}>hello there</Text>
            <Button title="Close Modal" onPress={showdisplay}></Button>
          </View>
        </View>
      </Modal>
      <View style={modalComp.buttonView}>
        <Button title="open modal" onPress={() => setHide(true)} />
      </View>
    </View>
  );
};

export default App;

import React, {useState} from 'react';
import {Text, View, Button, Modal} from 'react-native';
import {Pressable} from 'react-native';
import {pressableStyles} from './style';

const App = () => {
  return (
    <View style={pressableStyles.main}>
      <Pressable
        onPress={() => console.warn('On normal press')}
        onLongPress={() => console.warn('On long press')}
        onPressIn={() => {
          console.warn('on press in');
        }}
        onPressOut={() => {
          console.warn('on press out');
        }}>
        <Text style={pressableStyles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

import React, {useState} from 'react';
import {Text, View, TouchableHighlight, StatusBar, Button} from 'react-native';
import {pressableStyles} from './style';
import {statusFile} from './style';

const App = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');
  return (
    <View style={statusFile.centerButtons}>
      <StatusBar
        baclgroundColor="blue"
        barStyle={barStyle}
        hidden={hide}></StatusBar>
      <View style={statusFile.marginButtons}>
        <Button
          title="Toggle status bar"
          onPress={() => setHide(!hide)}></Button>
        <Button
          title="Update style to dark"
          onPress={() => setBarStyle('dark-content')}></Button>
        <Button
          title="Update style to light"
          onPress={() => setBarStyle('light-content')}></Button>
      </View>
    </View>
  );
};

export default App;

import React from 'react';
import {Platform} from 'react-native';
import {View, Button, Text} from 'react-native';
import {platformFile} from './style';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 10, color: 'red'}}>
        HI THERE this is :{Platform.OS}
      </Text>
      {Platform.OS == 'android' ? (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      ) : (
        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View>
      )}
      <Text style={platformFile.platformStyleText}>Hi this is android</Text>
    </View>
  );
};
export default App;

import React from 'react';
import {Text, Button, View} from 'react-native';
import {WebView} from 'react-native-webview';
const App = () => {
  return <WebView source={{uri: 'https://naruto-official.com/en'}}></WebView>;
};
export default App;

import React, {useState} from 'react';

import {View, Stylesheet, Text} from 'react-native';
import {Button} from 'react-native';
import {customModal} from './style';
const App = () => {
  const [hide, setHide] = useState(false);
  return (
    <View style={customModal.container}>
      {hide ? (
        <View style={customModal.modal}>
          <View style={customModal.body}>
            <Text>Tap to close the modal</Text>
            <Button title="Close Modal" onPress={() => setHide(false)}></Button>
          </View>
        </View>
      ) : null}
      <Button title="Open Modal" onPress={() => setHide(true)}></Button>
    </View>
  );
};

export default App;

/Here we are doing navigation in web its called routing

/there are nasically 3 types of navigation in android
1st - stack navigation
2st - Drawer navigation
3st - tab navigation

/use this component for making the structure of the navigation stack

import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationStyles} from './style';
import {TextInput} from 'react-native';
import {Home} from './components/HomeComponent';
import {Login} from './components/LoginComponent';
import {Sign} from './components/SignComponent';
///props gets automatically passed from one home screen to other components

const Stack = createNativeStackNavigator();

const App = () => {
  const actionLeft = () => {
    console.warn('left button pressed');
  };

  const headerButtonLeft = () => {
    return <Button title="Left" onPress={actionLeft} />;
  };

  const textInputRight = () => {
    return <TextInput placeholder="Search here" cursorColor="red"></TextInput>;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft: headerButtonLeft,
            headerRight: textInputRight,
            title: 'Login page',
            headerStyle: {backgroundColor: 'lightblue'},
            headerTitleStyle: {fontSize: 25},
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{
            title: 'Sign',
            headerStyle: {backgroundColor: 'lightgreen'},
            headerTitleStyle: {fontSize: 25},
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {fontSize: 25},
            headerTintColor: 'black',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from './components/LoginComponent';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={MyLoginScreen}></Tab.Screen>
        <Tab.Screen name="Signup" component={MySignUp}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const MyLoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
      }}>
      <Text>Hi there this is Login screen using tab navigation</Text>
    </View>
  );
};
const MySignUp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
      }}>
      <Text>Hi there this is Signup screen using tab navigation</Text>
    </View>
  );
};

export default App;

import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Login} from './components/LoginComponent';

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={MyLoginScreen}></Tab.Screen>
        <Tab.Screen name="Signup" component={MySignUp}></Tab.Screen>
        <Tab.Screen name="About Us" component={AboutUs}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const MyLoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
      }}>
      <Text>Hi there this is Login screen using tab navigation</Text>
    </View>
  );
};
const MySignUp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
      }}>
      <Text>Hi there this is Signup screen using tab navigation</Text>
    </View>
  );
};
const AboutUs = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}>
      <Text>Hi there this is the about us</Text>
    </View>
  );
};

export default App;

/THIS SNIPPET IS TO CALL THE API and RENDER A SINGLE OBJECT

const getWeatherApi = async () => {
  const url = 'https://gorest.co.in/public/v2/comments';
  let myresult = await fetch(url);
  myresult = await myresult.json();
  console.warn(myresult);
};

useEffect(() => {
  getWeatherApi();
}, []);

import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    setData(result); //no we have our api data stored in the state
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text>Hi there we are calling API</Text>
      {data ? (
        <View>
          <Text style={{fontSize: 10}}>{data.userId}</Text>
          <Text style={{fontSize: 10}}>{data.id}</Text>
          <Text style={{fontSize: 10}}>{data.title}</Text>
          <Text style={{fontSize: 10}}>
            {data.completed ? 'True' : 'False'}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;

/this is to call the array of object and display on the frontend

import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {apiStyle} from './style';

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    // change API if not working
    const url = 'https://gorest.co.in/public/v2/comments';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <ScrollView>
        {data.length ? (
          data.map(item => (
            <View
              key={item.id}
              style={{
                padding: 25,
                borderBottomColor: 'black',
                borderBottomWidth: 3,
                backgroundColor: 'lightblue',
              }}>
              <Text
                style={{
                  backgroundColor: 'lightgreen',
                  borderRadius: 10,
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {item.id}
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={apiStyle.myApiStyle}>{item.post_id}</Text>
                <Text style={apiStyle.myApiStyle}>{item.name}</Text>
                <Text style={apiStyle.myApiStyle}>{item.email}</Text>
                <Text style={apiStyle.myApiStyle}>{item.body}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>No data yet.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default App;

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text>Fetching Data</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}>
              <Text>{item.userId}</Text>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
};

export default App;

import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const myApiData = async () => {
    // For now we are giving the data explicitly for getting it when we hit the API. Generally, this we get from the input fields.
    const data = {
      name: 'tshunade',
      email: 'thefifth@gmail.com',
      age: 30,
      id: '13hf',
    };

    // Basically, this is the midway process
    const url = 'http://localhost:3000/myusers';
    // The second parameter is an object
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text>Hi there this is a post call</Text>
      <Button onPress={myApiData} title="click here"></Button>
    </View>
  );
};

export default App;

import React, {useState} from 'react';
import {View, Text, Button, TextInput,} from 'react-native';
import {myInpApi} from './style';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const savedData = async () => {
    if (!name) {
      ///null,undefined or empty
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!age) {
      ///null,undefined or empty
      setAgeError(true);
    } else {
      setAgeError(false);
    }

    if (!email) {
      ///null,undefined or empty
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!name || !age || !email) {
      return false;
    }

    console.warn(name, age, email);
    const url = 'http://localhost:3000/users';
    let result = await fetch(url, {
      headers: {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      },
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();
    if (result) {
      console.warn('data is added');
    }
  };
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>
        Post api with input fields
      </Text>
      <TextInput
        style={myInpApi.input}
        placeholder="Enter the name"
        onChangeText={text => setName(text)}
        value={name}></TextInput>
      {nameError ? (
        <Text style={myInpApi.errorText}>
          Either it is empty or undefined or not present
        </Text>
      ) : null}
      <TextInput
        style={myInpApi.input}
        placeholder="Enter the Age"
        onChangeText={text => setAge(text)}
        value={age}></TextInput>
      {ageError ? (
        <Text style={myInpApi.errorText}>
          Either it is empty or undefined or not present
        </Text>
      ) : null}
      <TextInput
        style={myInpApi.input}
        placeholder="Enter the email"
        onChangeText={text => setEmail(text)}
        value={email}></TextInput>
      {emailError ? (
        <Text style={myInpApi.errorText}>
          Either it is empty or undefined or not present
        </Text>
      ) : null}
      <Button title="Save Details" onPress={savedData}></Button>
    </View>
  );
};

export default App;

/this is a self created for fetching the data and displaying 2 options for deleting and updating the data to the api

complete crud application

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {selfApi} from './style';
import {Modal} from 'react-native';
import {TextInput} from 'react-native';
import {modalInput} from './style';

const App = () => {
  const [data, setData] = useState([]); //this is for the data
  const [showModal, setShowModal] = useState(false); //for modal vis

  const [selectedUser, setSelectedUser] = useState(undefined);
  const getAPIData = async () => {
    const url = 'http://192.168.56.1:3000/characters';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const deleteApiData = async id => {
    const url = 'http://192.168.56.1:3000/characters';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      console.warn('User Deleted');
      getAPIData();
    }
  };
  const updateUser = data => {
    setShowModal(true);
    setSelectedUser(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={selfApi.items}>
      <View style={selfApi.viewStyle}>
        <View style={{flex: 1}}>
          <Text>ID</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Delete</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Update</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View key={item.id} style={selfApi.viewStyle}>
              <View style={{flex: 1}}>
                <Text>{item.id}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button
                  title="Delete"
                  onPress={() => deleteApiData(item.id)}></Button>
              </View>
              <View style={{flex: 1}}>
                <Button
                  title="Update"
                  onPress={() => updateUser(item)}></Button>
              </View>
            </View>
          ))
        : null}

      <Modal visible={showModal} transparent={true}>
        <CloseModal
          setShowModal={setShowModal}
          selectedUser={selectedUser}
          getAPIData={getAPIData}></CloseModal>
      </Modal>
    </View>
  );
};
const CloseModal = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    //if data is there inside the selectedUser which we have selected from the update button
    if (props.selectedUser) {
      setName(props.selectedUser.name.toString());
      setAge(props.selectedUser.age.toString());
      setType(props.selectedUser.type.toString());
    }
  }, [props.selectedUser]);

  //this is to update the data in the api
  const updatedData = async () => {
    console.warn(name, age, type, props.selectedUser.id);
    const id = props.selectedUser.id;
    const url = 'http://192.168.56.1:3000/characters';
    let result = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, age, type}),
    });
    result = await result.json();
    if (result) {
      props.getAPIData();
      props.setShowModal(false);
    }
  };
  return (
    <View style={selfApi.centeredView}>
      <View style={selfApi.myModal}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textDecorationLine: 'underline',
            color: 'black',
          }}>
          Change the data and click on update data
        </Text>
        <TextInput
          style={modalInput.formfields}
          value={name}
          onChangeText={text => setName(text)}></TextInput>
        <TextInput
          style={modalInput.formfields}
          value={age}
          onChangeText={text => setAge(text)}></TextInput>
        <TextInput
          style={modalInput.formfields}
          value={type}
          onChangeText={text => setType(text)}></TextInput>
        <View style={{marginBottom: 5, marginTop: 5}}>
          <Button title="Update" onPress={updatedData}></Button>
        </View>
        <Button
          title="Close"
          onPress={() => props.setShowModal(false)}></Button>
      </View>
    </View>
  );
};

export default App;

import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const search = async text => {
    const url = `http://192.168.56.1:3000/characters?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  return (
    <View>
      <Text>hi search here</Text>
      <TextInput
        onChangeText={text => search(text)}
        placeholder="Search here"
        style={{
          fontSize: 20,
          color: 'black',
          borderColor: 'red',
          borderWidth: 2,
          width: 300,
        }}></TextInput>
      {data.length
        ? data.map(item => (
            <View
              key={item.id}
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 10,
              }}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.type}</Text>
            </View>
          ))
        : null}
    </View>
  );
};
export default App;

import React from 'react';
import {Text, Button, View, TextInput, StyleSheet} from 'react-native';
import {ref} from './style';
import {useRef} from 'react';

const App = () => {
  const input = useRef();

  const updateInput = () => {
    console.log('manipulates dom');
    input.current.focus();
    input.current.setNativeProps({
      fontSize: 20,
      color: 'blue',
    });
  };
  return (
    <View style={ref.inpContainer}>
      <TextInput
        placeholder="Enter Name"
        ref={input}
        style={ref.inputFields}></TextInput>
      <TextInput
        placeholder="Enter Password"
        style={ref.inputFields}></TextInput>
      <Button title="update" onPress={updateInput}></Button>
    </View>
  );
};

export default App;

import React from 'react';
import {Text, Button, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Correct import statement

const App = () => {
  const setData = async () => {
    await AsyncStorage.setItem('name', 'Anshuman');
    console.warn('data set');
  };

  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    console.warn(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('name');
  };
  return (
    <View>
      <Text>Hi this is async storage</Text>
      <Button title="Set data" onPress={setData}></Button>
      <Button title="Get data" onPress={getData}></Button>
      <Button title="remove data" onPress={removeData}></Button>
    </View>
  );
};

export default App;

/FROM HERE IS THE REDUX PART

import React from 'react';
import {Text, Button, View, ScrollView, StyleSheet} from 'react-native';

import {Header} from './components/Header';
import {Product} from './components/Product';

const App = () => {
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

export default App;
import React from 'react';
import {Text, Button, View, ScrollView, StyleSheet} from 'react-native';
import ProductWrapper from './components/ProductWrapper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './components/UserList';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper}></Stack.Screen>
        <Stack.Screen name="User" component={UserList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
