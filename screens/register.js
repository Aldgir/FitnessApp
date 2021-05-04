import React,{Component,useState,useContext} from 'react';
import {Text,View,TextInput,ScrollView} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import {Authentication} from '../navigation/Authentication';
import {auth,db,store} from '../firebase';

const Register =({navigation}) =>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[confirmPassword,setConfirmPassword]=useState();
    const[name,setName]=useState();
    const[age,setAge]=useState();
    const[weight,setWeight]=useState();
    const[height,setHeight]=useState();
    const[gender,setGender]=useState();
    const[goal,setGoal]=useState();

    const{register} = useContext(Authentication);
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <ScrollView>

                
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
                        onChangeText={(userName) => setName(userName)}
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
                    <Icon name="weight" color="#00716A" size={24}/>
                    <TextInput 
                        placeholder="Weight - kg"
                        onChangeText={(userWeight) => setWeight(userWeight)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:15}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716A",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="arrows-alt-v" color="#00716A" size={24}/>
                    <TextInput 
                        placeholder="Height - cm"
                        onChangeText={(userHeight) => setHeight(userHeight)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:15}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716A",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="calendar-day" color="#00716A" size={24}/>
                    <TextInput 
                        placeholder="Age"
                        onChangeText={(userAge) => setAge(userAge)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716A",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="venus-mars" color="#00716A" size={24}/>
                    <TextInput 
                        placeholder="Gender"
                        onChangeText={(userGender) => setGender(userGender)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716A",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="star" color="#00716A" size={24}/>
                    <TextInput 
                        placeholder="Goal"
                        onChangeText={(userGoal) => setGoal(userGoal)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716A",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="envelope" color="#00716A" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:10}}
                    />
                
                    

                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716A",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="lock" color="#00716A" size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <View style={{flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716A",
                    borderRadius:23,
                    paddingVertical:2}}>
                    <Icon name="lock" color="#00716A" size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                        placeholderTextColor="#00716A"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                
               
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716A",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text
                     onPress={() => register(email, password,name,weight,height,age,gender,goal)}
                    style={{
                        color:"white",
                        
                    }}>Register</Text>
                </View>
                </ScrollView>
            </View>
        )
    }

    export default Register;
