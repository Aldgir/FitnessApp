import React, {Component} from 'react';
import {TextInput,TouchableOpacity,Text,View} from 'react-native';
import {} from 'react-navigation';

export default class Register extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <View style = {styles.registerform}>
                    <TextInput style = {styles.input}>
                        placeholder = "Enter your username"
                        returnKeyType = "next"
                        onSubmitEditing = {() =>this.emailinput.focus()}
                    </TextInput>
                    <TextInput style = {styles.input}>
                        placeholder = "Enter your email"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCap="none"
                        autoCorrect={false}
                        ref={(input) => this.emailinput = input}
                    </TextInput>
                    <TextInput style = {styles.input}>
                        placeholder = "Enter your password"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCap="none"
                        autoCorrect={false}
                    </TextInput>
                    <TouchableOpacity style = {styles.buttoncontainer} onPress ={() =>this.props.navigation.navigate('Login')}>
                       <Text style ={styles.buttontext}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}