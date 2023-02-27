import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import TabNavigator from './TabNavigator'

const StackNavigation = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
         <Stack.Screen name='TabNavigator' component={TabNavigator} />
    </Stack.Navigator>
   
  )
}
// ap is ko smpl ni kr skhty?
// yai is tarha hogah l stack main bottom call hojaiga and bottom main drawer .. baad main agha ap bottm say kisi or screen pay laikay jana chaingay tho oskay liye apko stack use krna hogah 

export default StackNavigation