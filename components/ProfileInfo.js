import React from 'react';
import colors from '../assets/colors/colors';
import { StyleSheet, Image, View, Text } from 'react-native';
import Options from './Options';
import { TouchableOpacity } from 'react-native-gesture-handler/lib/commonjs';



const ProfileInfo = ({user, navigation}) => {
    

    return (
        <View>
            <View style={styles.headerWrapper}>
                        <Image source={user.image} style={styles.profileImage}></Image>
                        <View style={styles.nameAndRoleWrapper}>
                            <Text style={styles.nameText}>{user.title}</Text>
                            <Text style={styles.roleText}>{user.role}</Text>
                        </View>
                        
                        <View style = {{marginTop: 40, marginLeft: 10,}}>
                            <Options navigation={navigation}></Options>
                        </View>
                    </View>
                    <View style={styles.descriptionWrapper}>
                        <Text style={styles.aboutText} >About Me</Text>
                        <Text numberOfLines={4} ellipsizeMode="tail" style={styles.description}>{user.bio}</Text>
                    </View>
                    <View style={styles.statsWrapper}>
                        <TouchableOpacity  onPress={() => navigation.navigate('UserEventsAttended')}>
                            <View style={styles.statsCard}>
                                <Text style={styles.stat}>{user.eventsAttendedCount}</Text>
                                <Text style={styles.statName}>Events Attended</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => navigation.navigate('UserEventsPosted')}>
                            <View style={styles.statsCard}>
                                <Text style={styles.stat}>{user.eventsPostedCount}</Text>
                                <Text style={styles.statName}>Events Posted</Text>
                            </View>
                        </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    statsWrapper: {
        width: 275,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statsCard: {
        backgroundColor: colors.darkBlue,
        borderRadius: 10,
        width: 125,
        textAlign: 'center',
    },
   
    stat: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white
    },
   
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 10,
    },
    descriptionWrapper: {
        width: 275,
        marginTop: 20,
        textAlign: 'left'
    },
    statName: {
        marginTop: 10,
        color: colors.white,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: colors.lightGrey
    },
    aboutText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    roleText: {
        color: colors.lightGrey
    },
    nameAndRoleWrapper: {
        height: 60,
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    headerWrapper: {
        width: 275,
        marginHorizontal: 2,
        marginTop: 10,
        marginLeft: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
})

export default ProfileInfo;