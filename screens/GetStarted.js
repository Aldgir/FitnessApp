import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Next = ({...props}) => (
    <Pressable style={{marginHorizontal:13}} {...props}>
       <Text style= {{fontSize:18}}>Next Page</Text>
    </Pressable>
);

const Skip = ({...props}) => (
    <Pressable style={{marginHorizontal:13}} {...props}>
       <Text style= {{fontSize:18}}>Skip All</Text>
    </Pressable>
);

const Done = ({...props}) => (
    <Pressable style={{marginHorizontal:13}} {...props}>
       <Text style= {{fontSize:18}}>Done</Text>
    </Pressable>
);



const Dots = ({onPoint}) => {
let color;
color = onPoint ? 'rgb(0,50,50,0.9)': 'rgba(0,50,50,0.4)';
return(
    <View style={{
        width:8,
        height:8,
        marginHorizontal: 4,
        color
    }}
    />
);
}

const GetStarted = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#59ffcd',
            image: <Image source={require('../assets/getstarted1.png')} />,
            title: 'Welcome',
            subtitle: 'When logging in you can see your daily maintenance goal on the home screen.You can change your information in the Profile Screen.',
          },
          {
            backgroundColor: '#49f2bf',
            image: <Image source={require('../assets/getstarted2.png')} />,
            title: 'Kitchen',
            subtitle: 'Head to the Kitchen Area located in the main menu. Here you can log in your daily food intake by typing in the search bar',
          },
          {
            backgroundColor: '#12dba5',
            image: <Image 
            source={require('../assets/getstarted3.png')} />,
            title: 'Training',
            subtitle: "Head to the Training Area located in the main menu.Here you can log in your calories burned doing exercises.We will give you an estimate based on the intensity of the workout and the duration.",
          },
        ]}
      />
    );
};

export default GetStarted;