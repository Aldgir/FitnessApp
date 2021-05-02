import React,{ Component , useState ,useEffect} from 'react';
import {StyleSheet,View,SafeAreaView,Text, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

const Main = ({navigation}) => {
    
    return(
      <SafeAreaView
       style={styles.background}
       >
         <Text style={{
           fontSize:30,
           
         }}>
           Total Calories left for today:
         </Text>

         <Text
                style={{
                    
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4,
                    fontSize: 25,
                }}
                >
                    2200 + 150 = 2350
                </Text>
       <Pressable>
         
         <View
         style={{
                     fontSize:30,
                     marginTop:150,
                     alignSelf:"center",
                    
                    }}
         >
          <Icon 
          onPress={()=>navigation.navigate('Kitchen')}
          style={{
                     fontSize:60,
                     marginLeft:2,
                     alignSelf:"center",
                    }}
           name="utensils" color="#00716F" size={24}/>
          <Text style={{
            marginLeft:10,
          }}>
            Kitchen
          </Text>
         </View>
       </Pressable>
       
       <Pressable>
         
         <View
         style={{
          fontSize:30,
          marginTop:200,
          alignSelf:"center",
         
                    }}
         >
          <Icon 
          onPress={()=>navigation.navigate('Training')}
          style={{
                     fontSize:60,
                     marginLeft:2,
                     alignSelf:"center",
                    }}
           name="dumbbell" color="#00716F" size={24}/>
          <Text style={{
            marginLeft:13,
          }}>
            Training
          </Text>
         </View>
       </Pressable>
                
      </SafeAreaView>
    );
  
  }


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

  export default Main;