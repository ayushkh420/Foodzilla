import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import ReasturantDetail from './screens/ReasturantDetail'

export default function RootNavigation() {
    const stack= createNativeStackNavigator();
    
    const screenOptions ={
        headerShown: false,
    }
  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName='Home' screenOptions={screenOptions} >
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="ReasturantDetail" component={ReasturantDetail} /> 
    </stack.Navigator>
  </NavigationContainer>
  )
}