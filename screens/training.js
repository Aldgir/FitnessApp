import React,{Component} from 'react';
import {SafeAreaView, View,Text,ScrollView, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';


const Training = ({}) => {
    return(
      <ScrollView showsVerticalScrollIndicatior={false}>

      <View>
          <Text style={{
            fontSize:14,
            fontWeight:"600",
            alignSelf:"center",
            
           
          }}>
              Log your exercise below or learn more about training
          </Text>
      </View>

      </ScrollView>
      
    )
}

export default Training;