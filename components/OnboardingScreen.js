import { Text, View, StyleSheet, Image} from "react-native";
import React from "react";
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
     return(
          <View style={styles.container}>
               <Onboarding
               containerStyles={{paddingHorizontal: 15}}
                pages={[
                  {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/images/goal.jpg')} style={{height: 400, width: 400}} />,
                    title:'Boost Productivity',
                    subtitle:'Subscribe this channel to boost your productivity level',
                  },
                  {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/images/work_hassle_free.jpg')} styles={{height: 100, width: 100}}/>,
                    title:'Work Seamlessly',
                    subtitle:'Get you work done seamlessly without interruption',
                  },
                  {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/images/focus.jpg')} styles={{height: 200, width: 100}} />,
                    title:'Achieve Higher Goals',
                    subtitle:'By boosting your productivity we help you to achieve higher goals',
                  }
                ]}
                />
          </View>
     );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
     container: {
          flex:1,
          backgroundColor: 'white'
     }     
})