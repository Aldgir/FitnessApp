import React,{Component} from 'react';
import {StyleSheet,View,SafeAreaView,Text,TextInput, Pressable} from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome5';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


class Main extends React.Component{
  render(){
    const {navigate} = this.props.navigation
    return(
      <SafeAreaView
       style={styles.background}
       >
         <Text style={{
           fontSize:35,
           marginTop:50,
         }}>
           Total Calories for today:
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
                    2200+150=2350
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
          onPress={()=>navigate('Kitchen')}
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
          onPress={()=>navigate('Training')}
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
}
class Profile extends React.Component{
  render(){
    return (
      
      
      <SafeAreaView style={{
        flexDirection:"column",
        alignItems:"center",
    }}>
      <Avatar
  rounded
  size='large'
 
  icon={{name: 'user',color:'#123abc', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 2, marginTop: 100}}
/>
    <View>
    <View style={styles.container}>
                    <Icon name="user" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Name"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>

                <View style={styles.container}>
                    <Icon name="weight" color="#00716F" size={16}/>
                    <TextInput 
                        placeholder="Weight - kg"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={styles.container}>
                    <Icon name="arrows-alt-v" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Height - cm"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={styles.container}>
                    <Icon name="calendar-day" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Age"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={styles.container}>
                    <Icon name="venus-mars" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Sex"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    
                </View>
                <View style={styles.container}>
                    <Icon name="envelope" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                
                    

                </View>
    </View>
    </SafeAreaView>
    );
 




    
  }
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
        marginTop:50,
        paddingHorizontal:50,
        borderColor:"#00716F",
        borderRadius:29,
        paddingVertical:10,
  }
});
  

  const TabNavigator = createBottomTabNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={{
                     fontSize:20,
                     
                     alignSelf:"center",
                    }}
           name="home" color="#00716F" size={24}/>
            </View>
          ),
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={{
                     fontSize:20,
                    
                     alignSelf:"center",
                    }}
           name="user" color="#00716F" size={24}/>
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#a3c2fa',
          barStyle: { backgroundColor: '#2163f6' },
        }
      },
    },
    {
      initialRouteName: 'Main',
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4' },
    }
  );
  
  export default createAppContainer(TabNavigator);