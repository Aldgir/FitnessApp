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
  borderRadius: 50,
  paddingVertical:'10%',
  paddingHorizontal:'10%',
  backgroundColor:"#E67E22",
  marginTop:'50%'
  
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign:'center'
}
})
