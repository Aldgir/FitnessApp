import React from 'react';
import { ImageBackground, StyleSheet, View,Button} from 'react-native';
import FlatButton from '../custom/welcomebuttons';
export default class Welcome extends Component{
  render(){
    return(
      <ImageBackground
       style={styles.background}
       source={require("../assets/background.jpg")}
       >
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems:'center'
  }
})

