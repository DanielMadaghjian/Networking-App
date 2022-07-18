import React from 'react';
import {View,  StyleSheet, Dimensions} from 'react-native';
import colors from '../assets/colors/colors';
import EventInfo from '../components/EventInfo';

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EventAttendees from '../components/EventAttendees';

const height = Dimensions.get('window').height;

const EventDetails = ({route, navigation}) => {
    const {item} = route.params;

    const renderAttendees = ({ item }) => {
      if (item.availiable == false) return
      return (
        <View style={{marginVertical:5}}>
          <FontAwesome.Button style={styles.attendeesCard} backgroundColor={colors.lightGrey} >
              {item.name}
          </FontAwesome.Button>
        </View>
      )
  }

    return (
        <View style={styles.container}>       
            <EventInfo item={item} navigation={navigation}></EventInfo> 
           <EventAttendees item={item}></EventAttendees>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,  
    },
})

export default EventDetails;