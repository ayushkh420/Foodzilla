import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/About'
import { Divider } from "@rneui/themed";
import MenuItem from '../components/MenuItem';
import ViewCart from '../components/ViewCart';


export default function ReasturantDetail({route,navigation}) {
  return (
    <ScrollView>
    <View>
      <About route={route}/>
      <Divider width={1.5} style={{marginVertical:20}}/>
      <MenuItem/>
      <ViewCart/>
    </View> 
    </ScrollView>
  )
}   
