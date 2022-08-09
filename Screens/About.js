import React from 'react';

import { Image,View, CheckBox, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import colors from '../assets/colors/colors';

const About = ({navigation}) => {
    return (
        // 
        <View style = {styles.container}>
            <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={32} color={'black'} />
            </TouchableOpacity>
            <Text>About</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})

export default About;