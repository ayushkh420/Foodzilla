import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ViewCart() {
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginBottom:10.
      }}>
        <TouchableOpacity style={{
                marginTop: 10,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "center",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}>
        <Text style={{ color: "white", fontSize: 20, marginRight: 0}}>
                View Cart
              </Text>
      </TouchableOpacity>
    </View>
  )
}