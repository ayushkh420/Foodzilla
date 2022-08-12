import { View, Text,Image } from 'react-native'
import React from 'react'


const image="https://jaipurchalo.com/wp-content/uploads/2020/07/Tapri-ashram-Jaipur.jpg"

const title="Tapri Ashram";
const description="Eat .Drink .Celebrate     ⭐(3K+)";

export default function About() {
  return (
    <View>
      <ReasturantImage image={image}/> 
      <ReasturantTitle title={title}/> 
      <ReasturantDescription description={description}/> 
    </View>
  )
}

const ReasturantImage =(props)=>(
  <Image source={{uri:props.image}} style={{width:"100%", height:180}}/>
);

const ReasturantTitle =(props)=>(
  <Text style={{fontSize:29,fontWeight:"600",color:"black",marginHorizontal:15, marginTop:10}}
  >{props.title}</Text>
);

const ReasturantDescription=(props)=>(
  <Text style={{fontSize:15,fontWeight:"400",marginHorizontal:15, marginTop:10,color:"black"}}>{props.description}</Text>

)