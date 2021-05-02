import React,{Component,useState,useEffect} from 'react';
import {StyleSheet,ScrollView, View,Text, TextInput,TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import{Header} from 'react-native-elements';
import Food from '../custom/Nutrition';
import { FlatList } from 'react-native';


const Kitchen = ({}) => {
    const APP_ID ='41500512';
    const APP_KEY = '1bfc4fef2cf050625b31867f9ebbb897';
    const[foods,setFoods] = useState([]);

    const getFoods = async() => {
        const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=${APP_ID}&app_key=${APP_KEY}`)
        
        const data = await response.json();

        setFoods(data.hits)
    };
    
   useEffect(() => {
       getFoods();

   },[]);

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
                  Log your food down below or see lists with food items
              </Text>


              <TextInput style={styles.container} placeholder='search for food'
                >
                
              </TextInput>
          </View>
          </ScrollView>
          
        )
    }

    export default Kitchen;

    const styles = StyleSheet.create({
        background:{
        flex:1,
        alignItems:'center'
      },
      container:{
        flexDirection:'row',
        alignItems:'flex-start',
            marginHorizontal:55,
            borderWidth:2,
            marginTop:30,
            paddingHorizontal:50,
            borderColor:"#00716F",
            borderRadius:29,
            paddingVertical:10,
      }
    });