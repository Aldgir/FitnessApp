import React from 'react';
import { ImageBackground, StyleSheet, View,Button} from 'react-native';
import FlatButton from '../custom/mainbuttons';

function Main(props){

    return(
      <View
       style={styles.background}
       >
      <FlatButton text='Training' onPress={props.handleSubmit}/>
      <FlatButton text='Kitchen ' onPress={props.handleSubmit}/>
      </View>
    );
  
  }
  const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems:'center'
    }
  })

    export default Main;