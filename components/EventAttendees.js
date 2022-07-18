import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import colors from '../assets/colors/colors';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';


import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const EventAttendees = ({item}) => {

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
        <View style={{alignItems:'center'}}>    
                <View style={styles.attendeesWrapper}>
                        <View style={styles.attendeesHeader}>
                            <Text style={styles.attendeesTitle}>Attendees</Text>
                            {/* Should be buttons */}
                            <View style={styles.symbolContainer}>
                                <TouchableOpacity>
                                    <Entypo name='list' color={colors.darkBlue} size={18} />
                                </TouchableOpacity >
                                <TouchableOpacity>
                                <MaterialCommunityIcons name='view-grid' color={colors.darkBlue} size={18} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView style={styles.attendees}>
                            <FlatList
                                data={item.attendees}
                                renderItem={renderAttendees}
                                keyExtractor={item => item.id}
                                marginBottom
                            />
                        </ScrollView>
                    
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    symbolContainer: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    attendees: {
        height: 300,
    },
    attendeesCard: {       
        width: 250, 
    },
    attendeesWrapper: {
        marginTop: 20,
        borderColor: colors.lightBlue,
        
        alignItems: 'center',
        width: 275,
        flex: 1,
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    attendeesHeader: {
        width: 250,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        fontSize: 20,
    },
    attendeesTitle: {
        marginTop: 10,
        fontSize: 20,
        fontStyle: 'bold'
    }
})

export default EventAttendees;