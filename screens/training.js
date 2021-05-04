import React,{Component} from 'react';
import {StyleSheet, View,Text,ScrollView, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';


const Training = ({}) => {
  return(
    <ScrollView showsVerticalScrollIndicatior={false}>

    <View style={{
        flexDirection:'column',
    }}>
        <Text style={{
          fontSize:14,
          fontWeight:"600",
          alignSelf:"center",
         
         
        }}>
           Log your exercise down below or learn more about training
        </Text>

        <View >
        <TextInput style={styles.container}
        placeholder='Type of exercise'
        
        >
        </TextInput>
        <TextInput style={styles.container}
        placeholder='Duration(minutes)'
        >
        </TextInput>
        <TextInput style={styles.container}
        placeholder='Intensity: low | medium | hard'
        >
        </TextInput>
        
        </View>
    </View>
    </ScrollView>
    
  )
}

export default Training;

const styles = StyleSheet.create({
  background:{
  flex:1,
  alignItems:'center'
},
container:{
  flexDirection:'row',
  alignItems:'flex-start',
  marginHorizontal:70,
      borderWidth:2,
      marginTop:30,
      paddingHorizontal:50,
      borderColor:"#00716F",
      borderRadius:29,
      paddingVertical:10,
}
});