import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import {auth,db} from '../firebase';
import  * as firebase from 'firebase';

export const Authentication = createContext();

export const AuthenticationProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <Authentication.Provider
          value={{
            user,
            setUser,
            login: async (email, password) => {
              try {
                await auth.signInWithEmailAndPassword(email, password);
              } catch (e) {
                console.log(e);
              }
            },
            register: async (email, password,name,weight,height,age,gender,goal) => {
              try {
                await auth.createUserWithEmailAndPassword(email, password)
                .then(() => {
                 
                  db.collection('users').doc(auth.currentUser.uid)
                  .set({
                      name: name,
                      weight:weight,
                      height:height,
                      age:age,
                      gender:gender,
                      email: email,
                      goal:goal,
                     
                  })
                  
                  .catch(e => {
                      console.log('error when adding to the database--', e);
                  })
                })
                .catch(e => {
                  
                    console.log('Sign up error-- ', e);
                   
                });
              } catch (e) {
                Alert.alert(
                  'Registration error.Make sure all fields are completed!',)
                console.log(e);
              }
            },
            logout: async () => {
              try {
                await auth.signOut();
              } catch (e) {
                console.log(e);
              }
            },
          }}>
          {children}
        </Authentication.Provider>
      );
}
