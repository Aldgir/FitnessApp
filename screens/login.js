import React,{Component,useState,useContext} from 'react';
import {Text,View,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {Authentication} from '../navigation/Authentication';


const Login = ({navigation}) =>{
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const{login} = useContext(Authentication);
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Text
                 style={{
                     fontSize:30,
                     marginTop:100,
                     alignSelf:"center",
                 }}
                >Welcome!</Text>

                <Text
                style={{
                    
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Please login in order to use the application.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        onChangeText={(userEmail) =>setEmail(userEmail)}
                        placeholder= 'Enter Email'
                        autoCapitalize = 'none'
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput 
                        secureTextEntry
                        style={{paddingHorizontal:10}}
                        onChangeText={(userPassword) =>setPassword(userPassword)}
                        placeholder='Enter Password'
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
                    onPress={() => login(email, password)}
                    style={{
                        color:"white",
                    
                    }}>Log in</Text>
                </View>
                <Text 
                
                 onPress={() => navigation.navigate('Register')}
                 style={{
                    alignSelf:"center",
                    color:"#00716F",
                    paddingVertical:30
                }}>Dont have an account? Register Now</Text>
            </View>
        )
    
}


export default Login;