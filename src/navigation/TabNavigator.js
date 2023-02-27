import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerNavigation from './DrawerNavigation';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarShowLabel: true,
      tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 78,
        backgroundColor: '#00A0EA',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
       
      },
      tabBarLabelStyle:{
        fontWeight:"bold",
        fontSize:16,
        paddingBottom:8
       },
    }}
      >
      <Tab.Screen name="DrawerNavigation" component={DrawerNavigation} options={{
          tabBarLabel: "Menu",
       
          tabBarIcon: ({ color, size, }) => (
            <Icon2 name="home-circle-outline" color='white' size={40}  />
          ),
        }}/>
      <Tab.Screen name="WalletScreen" component={WalletScreen} options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="wallet-outline" color='white' size={40} />
          ),
        }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="account-circle-outline" color='white' size={40} />
          ),
        }}/>
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="restore" color='white' size={40} />
          ),
        }} />

    </Tab.Navigator>
  );
};

export default TabNavigator;
