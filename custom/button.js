import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native'

export default function FlatButton( {text, onPress}){
  return(
    <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{ text }</Text>
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
button: {
  borderRadius: 9,
  paddingVertical:15,
  paddingHorizontal:'42.5%',
  backgroundColor:"#2E8B57",
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: 16,
  textAlign: 'center'
}
})
