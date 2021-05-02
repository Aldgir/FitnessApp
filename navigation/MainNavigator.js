import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/FontAwesome5';
import Main from '../screens/MainMenu';
import Kitchen from '../screens/kitchen';
import Training from '../screens/training';
import EditProfile from '../screens/EditProfile';
import UserProfile from '../screens/UserProfile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainBranch = ({navigation}) =>(
    <Stack.Navigator>
        <Stack.Screen
         name = "Welcome"
         component = {Main}
         options={{
            headerTitleAlign:'center',
            headerTitleStyle: {
                color: '#00716F',
                fontSize: 24,
              },
         }}
         >

         </Stack.Screen>
         <Stack.Screen
         name = "Kitchen"
         component = {Kitchen}
         options={{
            headerTitleAlign:'center',
            headerTitleStyle: {
                color: '#00716F',
                fontSize: 24,
              },
              headerRight: () => (
                <View style={{marginRight: 10}}>
                  <Icon.Button
                    name="utensils"
                    size={32}
                    color = '#00716F'
                    backgroundColor="#FFF"
                  />
                </View>
              ),
         }}
         >

         </Stack.Screen>
         <Stack.Screen
         name = "Training"
         component = {Training}
         options={{
            headerTitleAlign:'center',
            headerTitleStyle: {
                color: '#00716F',
                fontSize: 24,
              },
              headerRight: () => (
                <View style={{marginRight: 10}}>
                  <Icon.Button
                    name="dumbbell"
                    size={32}
                    color = '#00716F'
                    backgroundColor="#FFF"
                  />
                </View>
              ),
         }}
         >

         </Stack.Screen>
    </Stack.Navigator>
)

const ProfileBranch = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
    name = "UserProfile"
    component = {UserProfile}
    options={{
       headerTitleAlign:'center',
       headerTitle: 'User Profile',
       headerTitleStyle: {
           color: '#00716F',
           fontSize: 24,
         },
        
    }}
    >

    </Stack.Screen>
   
    <Stack.Screen
    name = "EditProfile"
    component = {EditProfile}
    options={{
       headerTitleAlign:'center',
       headerTitle: 'Edit Profile',
       headerTitleStyle: {
           color: '#00716F',
           fontSize: 24,
         },
          headerRight: () => (
            <View style={{marginLeft:10}}>
              <Icon.Button
                name="user-cog"
                size={32}
                color = '#00716F'
                backgroundColor="#FFF"
              />
            </View>
          ),
         
        
    }}
    >

    </Stack.Screen>
    </Stack.Navigator>
);

const MainStack = () => {

    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#00716F',
        }}>
        <Tab.Screen
        component={MainBranch}
          name="Home"
          options={({route}) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({}) => (
                <View>
                  <Icon style={{
                         alignSelf:"center",
                         color:"#00716F",
                         
                        }}
                        name= 'home'
                        size={24}/>
                </View>
              ),
          })}
        />
        
        <Tab.Screen
          name="UserProfile"
          component={ProfileBranch}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({}) => (
                <View>
                  <Icon style={{
                         alignSelf:"center",
                        
                         color:"#00716F",
                         
                        }}
                        name="user-circle"
                        size={24}/>
                </View>
              ),
          }}
        />
      </Tab.Navigator>
    );
  };
  
  export default MainStack;
