import React,{Component,useEffect,useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView} from 'react-native';
import {auth,db} from '../firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const EditProfile = () => {
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
        const currentUser = await db
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
      }

    const handleUpdate = async() => {

        db
        .collection('users')
        .doc(auth.currentUser.uid)
        .update({
          name: userData.Name,
          age: userData.Age,
          weight: userData.Weight,
          height: userData.Height,
        })
        .then(() => {
          Alert.alert(
            'Profile Updated successfully!',
          )
          console.log('User profile has been updated!');
        })
      }

      useEffect(() => {
        getUser();
      }, []);

    return (    
        <SafeAreaProvider>
        
        <SafeAreaView style={{
          flexDirection:'column',
          alignItems:"center",
          marginTop:20,
      }}>  
         <ScrollView 
         showsVerticalScrollIndicatior={false}
          > 
        <View >
        
             <View style={{alignSelf:'center'}}>  
             
                <TouchableOpacity >
                <Image style={{
                    height: 125,
                     width: 125,
                     borderRadius: 60,}}
                     source={require('../assets/profilepic.png')} />
                     
                </TouchableOpacity>
                        
             </View>
             
            <View style={styles.container}>
              <TextInput 
                placeholder="Name"
                placeholderTextColor="#8c8c8c"
                autoCorrect={false}
                value={userData ? userData.Name : ''}
                onChangeText={(txt) => setUserData({...userData, name: txt})}
                
              />
            </View>
            <View style={styles.container}>
              <TextInput
                placeholder="Weight"
                placeholderTextColor="#8c8c8c"
                value={userData ? userData.Weight : ''}
                onChangeText={(txt) => setUserData({...userData, weight: txt})}
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                placeholder="Height"
                placeholderTextColor="#8c8c8c"
                value={userData ? userData.Height : ''}
                onChangeText={(txt) => setUserData({...userData, height: txt})}
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                placeholder="Age"
                placeholderTextColor="#8c8c8c"
                autoCorrect={false}
                value={userData ? userData.Age : ''}
                onChangeText={(txt) => setUserData({...userData, age: txt})}
                style={styles.textInput}
              />
            </View> 
        </View>
        <TouchableOpacity style={{
            borderRadius:20,
            backgroundColor:'#00716F',
            marginHorizontal:55,
            marginVertical:40,
            padding:10,

        }} onPress={handleUpdate}>
        <Text style={{color:'white',
    alignSelf:'center',}}>
            Update Info
        </Text>
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      </SafeAreaProvider>
      );
    };


export default EditProfile;

const styles = StyleSheet.create({
    background:{
    flex:1,
    alignItems:'center',
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
  },
});