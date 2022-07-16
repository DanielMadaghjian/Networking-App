import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Header from '../components/Header';
import ExploreEvents from '../components/ExploreEvents';
import MostRecentEvents from '../components/MostRecentEvents';

import colors from '../assets/colors/colors';
import { TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                
                

                {/**HEADER */}
                <Header navigation={navigation}></Header>

                {/**EXPLORE EVENTS */}
                <ExploreEvents navigation={navigation}></ExploreEvents>

                 {/**MOST RECENT EVENTS */}
                 <MostRecentEvents navigation={navigation}></MostRecentEvents>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,      
    },
    
      
})

export default Home;