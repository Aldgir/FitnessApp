import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/register';
import Login from '../screens/login';
import GetStarted from '../screens/GetStarted.js';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createStackNavigator();

const AuthenticationBranch =({navigation}) => {

    const[FirstLaunch,setFirstLaunch] = useState(null);

    let route;

    useEffect(() =>{
        AsyncStorage.getItem('launched').then((value) => {
            if(value == null){
                AsyncStorage.setItem('launched','true');
                setFirstLaunch(true);
            }
            else{
                setFirstLaunch(false);
            }
        });

    },[]);
    if(FirstLaunch === null){
        return null;
    }
    else if(FirstLaunch == true){
        route = 'GetStarted';
    }
    else{
        route = 'Login';
    }

    return(
        <Stack.Navigator initialRoute={route}>
            <Stack.Screen
             name="Get Started"
             component={GetStarted}
             options={{
                headerTitleAlign:'center',
                headerTitle: 'Get Started',
                headerTitleStyle: {
                    color: '#00716F',
                    fontSize: 24,
                },
            }}
             >
             </Stack.Screen>
             <Stack.Screen
             name="Login"
             component={Login}
             options={{
                headerTitleAlign:'center',
                headerTitle: 'Login',
                headerTitleStyle: {
                    color: '#00716F',
                    fontSize: 24,
                },
            }}
             >
             </Stack.Screen>
             <Stack.Screen
             name="Register"
             component={Register}
             options={{
                headerTitleAlign:'center',
                headerTitle: 'Register',
                headerTitleStyle: {
                    color: '#00716F',
                    fontSize: 24,
                },
                }}
             />

        </Stack.Navigator>

    );
};
    export default AuthenticationBranch;