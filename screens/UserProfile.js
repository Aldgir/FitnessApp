import React,{Component,useRef,useContext,useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,TextInput,
  Image,ScrollView,
  Alert,
  TouchableOpacity} from 'react-native';
import {auth,db} from '../firebase';
import Icon from '@expo/vector-icons/FontAwesome5';
import {Authentication} from '../navigation/Authentication';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomSheet from 'reanimated-bottom-sheet';

const UserProfile = ({navigation, route}) => {
      const {user, logout} = useContext(Authentication);
      const [isVisible, setIsVisible] = useState(false);

      const loseUpdate = async() => {

    
        db
        .collection('users')
        .doc(auth.currentUser.uid)
        .update({
          goal:'lose',
        })
        .then(() => {
         
          Alert.alert(
            'Goal Updated successfully!',
          )
        })
      };
      const mainUpdate = async() => {

    
        db
        .collection('users')
        .doc(auth.currentUser.uid)
        .update({
          goal:'maintain',
        })
        .then(() => {
         
          Alert.alert(
            'Goal Updated successfully!',
          )
        })
      };
      const gainUpdate = async() => {

    
        db.collection('users').doc(auth.currentUser.uid)
        .update({
          goal:'gain',
        })
        .then(() => {
         
          Alert.alert(
            'Goal Updated successfully!',
          )
        })
      };
      const renderContent = () => (
        <View
          style={{
            backgroundColor: 'white',
            padding:16,
            height: 300,
          }}
        >
            <View style={styles.title}>
            <Text style={{alignSelf:'center'}}>
                Choose your new goal
            </Text>
            </View>
            
          <TouchableOpacity style={styles.button} onPress={loseUpdate}><Text>Lose Weight</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={mainUpdate}><Text>Maintain Weight</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={gainUpdate}><Text>Gain Weight</Text></TouchableOpacity>
          
          
        </View>
      );
    
      const sheetRef = React.useRef(null);

      return (
        <SafeAreaProvider>
        
        <SafeAreaView style={{
          flexDirection:"column",
          alignItems:"center",
          marginTop:20,
          
      }}>
         <ScrollView
         showsVerticalScrollIndicatior={false}
          > 
          <View style={{
              alignSelf:'center'
          }}>
          
           <Image style={{
            height: 125,
            width: 125,
            borderRadius: 60,
            
         }}
            source={require('../assets/profilepic.png')}
            />
              <Text style={{
                  fontSize:20,
                  alignSelf:'center',
              }}>
                  UserName
              </Text>
        </View>
              <View>
              <TouchableOpacity
                style={{borderColor: '#00716F',
                borderWidth: 2,
                borderRadius: 3,
                width:'20%',
                alignSelf:'center',
              }}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                    <View style={{alignSelf:'center'}}>
                <Text style={styles.userBtnTxt}>Edit</Text>
                </View>
              </TouchableOpacity>
              </View>
                  
  
                  <View style={styles.container}>
                      <Icon name="weight" color="#00716A" size={16}/>
                      <TextInput 
                          placeholder="Weight - kg"
                          placeholderTextColor="#00716A"
                          style={{paddingHorizontal:10}}
                      />
                      
                  </View>
                  <View style={styles.container}>
                      <Icon name="arrows-alt-v" color="#00716A" size={16}/>
                      <TextInput 
                          placeholder="Height - cm"
                          placeholderTextColor="#00716A"
                          style={{paddingHorizontal:10}}
                      />
                      
                  </View>
                  <View style={styles.container}>
                      <Icon name="calendar-day" color="#00716A" size={16}/>
                      <TextInput 
                          placeholder="Age"
                          placeholderTextColor="#00716A"
                          style={{paddingHorizontal:10}}
                      />
                      
                  </View>
                  <View style={styles.container}>
                      <Icon name="venus-mars" color="#00716A" size={16}/>
                      <TextInput 
                          placeholder="Gender"
                          placeholderTextColor="#00716A"
                          style={{paddingHorizontal:10}}
                      />
                      
                  </View>

      
        <View style={styles.container}>
                  <Icon name="star" color="#00716A" size={16}/>
                  <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                  <Text style={{
                      color:'#00716A'
                  }}>
                        Change goal
                    </Text>
                        
                  </TouchableOpacity>
          
        
        </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
      />
    
                  <View style={{
                      marginHorizontal:125,
                      alignItems:"center",
                      justifyContent:"center",
                      marginTop:30,
                      
                      paddingVertical:5,
                      borderRadius:12,
                      borderColor:"#00716A",
                      borderWidth:2,
                  }}>
                      <Text 
                       onPress={() => logout()}
                      style={{
                          color:"#00716A",
                          fontWeight:"bold",
                      }}>Log out</Text>
                  </View>
         </ScrollView>
      </SafeAreaView>
      </SafeAreaProvider>
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
        marginHorizontal:75,
        borderWidth:2,
        marginTop:30,
        paddingHorizontal:50,
        borderColor:"#00716A",
        borderRadius:29,
        paddingVertical:10,
  },
  title: {
    height: 36,
    fontSize: 26,
    
  },
  button: {
    backgroundColor: '#00716A',
    padding: 12,
    borderRadius: 9,
    marginVertical: 6,
    opacity:0.4,
    alignItems: 'center',
  },
});

  export default UserProfile;