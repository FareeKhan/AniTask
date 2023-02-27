import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './src/navigation/DrawerNavigation'


// const Drawer = createDrawerNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
    touchableButton: {
      width: '80%',
      padding: 10,
      backgroundColor: '#9c27b0',
    },
    TextStyle: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    }

  });