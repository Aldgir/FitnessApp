import React,{Component} from 'react';
import {SafeAreaView, View,Text, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

export default class Training extends React.Component{
    render(){
        const{navigate} = this.props.navigation
        return(

            <SafeAreaView style={{
                backgroundColor:'#00716F',
            }}>
   
            
               <Pressable>
            
            <View
            style={{
                        fontSize:30,
                        marginTop:'8%',
                        alignSelf:'flex-start',
                        
                       
                       }}
            >
             <Icon 
             onPress={()=>navigate('Main')}
             style={{
                        justifyContent:'center',
                        marginLeft:10,
                        alignSelf:"flex-start",
                       }}
              name="arrow-left" color="#ffffff" size={40}/>
            </View>
          </Pressable>
          </SafeAreaView>
            
        )
    }
}