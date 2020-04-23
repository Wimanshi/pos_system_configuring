import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from "react-navigation";

import Login from './src/components/Login/Login';
import Profile from './src/components/Profile/Profile';
import { createStackNavigator } from 'react-navigation-stack';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login_Page: {
    screen: Login
  },
  Profile_Page: {
    screen: Profile
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, View, Text } from 'react-native';
// import Login from './src/components/Login/Login';
// import ScreenManager from './src/components/ScreenManager/ScreenManager';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

/*const Navigation = StackNavigator({
  Login: {
    screen: Login,
  },
  Profile: {
    screen: Profile,
  }
})*/

// export default class App extends Component {
//   render() {
//     return (
//       <Login/>
//     );
//   }
// }
 
/*const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});*/

/*export default Navigation;
export default ScreenManager;*/