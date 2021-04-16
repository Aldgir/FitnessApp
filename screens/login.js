import React, {Component} from 'react';
import {TextInput,TouchableOpacity,Text,View} from 'react-native';
import {} from 'react-navigation';

export class Login extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <View style = {styles.textfields}>
                    <TextInput style = {styles.input}>
                        placeholder = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCap="none"
                        autoCorrect={false}
                    </TextInput>
                    <TextInput style = {styles.input}>
                        placeholder = "password"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput.focus()}
                    </TextInput>
                    <TouchableOpacity style = {styles.buttoncontainer} onPress ={() =>this.props.navigation.navigate('Register')} >
                       <Text style ={styles.buttontext}> Login </Text>
                    </TouchableOpacity>
                    <Button 
                       title = "Register Here"
                       color = "#C0392B"
                       onPress = {() => this.props.navigation}
                    />
                </View>
            </View>
        )
    }
}

export default class App extends Component{
    render(){
        return(
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator ({
    Login: login,
    Register: register,
    Home:WelcomeScreen
});

const styles ={
    container:{
        padding:20,
        flex:1,
        backgroundColor:'#C0392B',
        justifyContent:'center',
        alignItems:'stretch'
    },
    input:{
        paddingLeft:20,
        borderRadius:50,
        height:50,
        fontSize:25,
        backgroundColor:'white',
        borderColor:"#1abc9c",
        borderWidth: 1,
        marginBottom: 20,
        color:'#34495e'
    },
    buttoncontainer:{
        height:50,
        borderRadius:50,
        backgroundColor:'#1abc9c',
        paddingVertical:10,
        justifyContent: 'center'
    },
    buttontext:{
        textAlign:'center',
        color:'#ecf0f1'
    }
}