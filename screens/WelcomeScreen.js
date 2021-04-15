import React from 'react';
import { ImageBackground, StyleSheet, View,Button} from 'react-native';
import FlatButton from '../custom/button';
function Welcome(props){

  return(
    <ImageBackground
     style={styles.background}
     source={require("../assets/background.jpg")}
     >
    <FlatButton text='Sign Up' onPress={props.handleSubmit}/>
    <FlatButton text='Sign In ' onPress={props.handleSubmit}/>
    </ImageBackground>
  );

}
const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems:'center'
  }
})

export default Welcome;
