import React,{Component} from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

export default class Register extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Text
                 style={{
                     fontSize:30,
                     marginTop:100,
                     alignSelf:"center",
                 }}
                >Get started</Text>

                <Text
                style={{
                    
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    You need an account to use the application.
                </Text>
             

              

            
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="user" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Name"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>

                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="weight" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Weight - kg"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:15}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="arrows-alt-v" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Height - cm"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:15}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="calendar-day" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Age"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="venus-mars" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Sex"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="envelope" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                
                    

                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="lock" color="#00716F" size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="lock" color="#00716F" size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                
               
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text
                    onPress={()=>navigate('Login')}
                    style={{
                        color:"white",
                        
                    }}>Register</Text>
                </View>
              
            </View>
        )
    }
}

