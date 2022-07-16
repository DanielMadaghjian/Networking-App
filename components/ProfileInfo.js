import React from 'react';
import profile from '../assets/images/person.png';
import colors from '../assets/colors/colors';
import { StyleSheet, Image, View, Text } from 'react-native';


const user =
{
    "title": 'Javi Daniel',
    "role": 'UX Designer',
    "bio": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    "eventsAttended": 250,
    "eventsPosted": 50,
    "socials": [
        {
            "type": 'linkedin',
            "availiable": true,
            "name": 'Javi Daniel',
            "link": 'https://www.linkedin.com/in/diarmuidmcgonagle/',
            "image": 'https://media-exp1.licdn.com/dms/image/C5603AQF4WQOAQP_fvQ/profile-displayphoto-shrink_400_400/0/1619269064546?e=1662595200&v=beta&t=iGI7O8nMCfER4cPmcm-XMYS9CzhYSEZxavPnc3rW9eQ',
        },
        {
            "type": 'instagram',
            "availiable": true
        },
        {
            "type": 'twitter',
            "availiable": true,
            "name": 'Javi Daniel',
            "link": 'https://twitter.com/ManUtd',
            "image": 'https://media-exp1.licdn.com/dms/image/C5603AQF4WQOAQP_fvQ/profile-displayphoto-shrink_400_400/0/1619269064546?e=1662595200&v=beta&t=iGI7O8nMCfER4cPmcm-XMYS9CzhYSEZxavPnc3rW9eQ',
        },
        {
            "type": 'facebook',
            "availiable": true,
            "name": 'Javi Daniel',
            "link": 'https://www.facebook.com/St.FiniansCC/photos/?ref=page_internal',
            "image": 'https://media-exp1.licdn.com/dms/image/C5603AQF4WQOAQP_fvQ/profile-displayphoto-shrink_400_400/0/1619269064546?e=1662595200&v=beta&t=iGI7O8nMCfER4cPmcm-XMYS9CzhYSEZxavPnc3rW9eQ',
        },
    ],
}

const ProfileInfo = () => {
    return (
        <View>
            <View style={styles.headerWrapper}>
                        <Image source={profile} style={styles.profileImage}></Image>
                        <View style={styles.nameAndRoleWrapper}>
                            <Text style={styles.nameText}>{user.title}</Text>
                            <Text style={styles.roleText}>{user.role}</Text>
                        </View>
                    </View>
                    <View style={styles.descriptionWrapper}>
                        <Text style={styles.aboutText} >About Me</Text>
                        <Text numberOfLines={4} ellipsizeMode="tail" style={styles.description}>{user.bio}</Text>
                    </View>
                    <View style={styles.statsWrapper}>
                        <View style={styles.statsCard}>
                            <Text style={styles.stat}>{user.eventsAttended}</Text>
                            <Text style={styles.statName}>Events Attended</Text>
                        </View>
                        <View style={styles.statsCard}>
                            <Text style={styles.stat}>{user.eventsPosted}</Text>
                            <Text style={styles.statName}>Events Attended</Text>
                        </View>
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
        color: colors.darkBlue
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
        color: 'blue'
    },
    nameAndRoleWrapper: {
        height: 60,
        justifyContent: 'space-between',
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