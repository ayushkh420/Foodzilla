import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/About'
import { Divider } from "@rneui/themed";
import MenuItem from '../components/MenuItem';


export default function ReasturantDetail() {
  return (
    <View>
      <About/>
      <Divider width={1.5} style={{marginVertical:20}}/>
      <MenuItem/>
    </View>
  )
}   