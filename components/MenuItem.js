import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import { Divider } from '@rneui/base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const foods = [
  {
    title: 'Tea',
    description: 'With Ginger, cardamon, Black Pepper, Rose, cinnamon',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
  },
  { 
    title: 'Coffee',
    description: 'With Milk, Handbeaten, Separate Sugar',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Green Tea',
    description: 'Without Milk, Separate Sugar',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1576092762793-c0e9395ec4b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Tea',
    description: 'With Ginger, cardamon, Black Pepper, Rose, cinnamon',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
  },
  { 
    title: 'Coffee',
    description: 'With Milk, Handbeaten, Separate Sugar',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Green Tea',
    description: 'Without Milk, Separate Sugar',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1576092762793-c0e9395ec4b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
  },
  descStyle: {
    fontSize: 12,
    color: 'black',
  },
});

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food,index)=>(
      <View key={index}>
        <View style={styles.menuItemStyle}>
          <BouncyCheckbox  iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
               />
          <FoodInfo food={food} />
          <FoodImage food={food} />
        </View>
        <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}}/>
      </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={styles.descStyle}>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = props => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);
