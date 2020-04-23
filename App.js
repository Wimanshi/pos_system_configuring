import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import Login from './src/components/Login/Login';
import ScreenManager from './src/components/ScreenManager/ScreenManager';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*const Navigation = StackNavigator({
  Login: {
    screen: Login,
  },
  Profile: {
    screen: Profile,
  }
})*/

export default class App extends Component {
  render() {
    return (
      <Login/>
    );
  }
}
 
/*const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});*/

/*export default Navigation;
export default ScreenManager;*/