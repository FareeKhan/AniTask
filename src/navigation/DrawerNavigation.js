
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'

import { createDrawerNavigator } from '@react-navigation/drawer';



const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()
  return (
       <Drawer.Navigator>
         <Drawer.Screen name='HomeScreen' component={HomeScreen}  />
       </Drawer.Navigator>
  )
}

export default DrawerNavigation
