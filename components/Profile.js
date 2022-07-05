import React from 'react';
import profile from '../assets/images/person.png';
import colors from '../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Image, View, Text, Linking } from 'react-native';
import { FlatList } from 'react-native-gesture-handler/lib/commonjs';
// import user from '../assets/data/users';

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



const Profile = () => {
    const renderSocials = ({ item }) => {
        if (item.availiable == false) return
        return (
            <FontAwesome.Button style={styles.socialCard} name={item.type} backgroundColor={colors[item.type]} onPress={() => { Linking.openURL(`${item.link}`) }}>
                {item.type}
            </FontAwesome.Button>
        )
    }

    return (
        <View>
            <View style={styles.profileWrapper}>
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
                <View style={styles.socialsWrapper}>
                    <View style={styles.socialsHeader}>
                        <Text>My Socials</Text>
                        {/* Should be buttons */}
                        <View style={styles.symbolContainer}>
                            <Entypo name='list' color={colors.darkBlue} size={18} />
                            <MaterialCommunityIcons name='view-grid' color={colors.darkBlue} size={18} />
                        </View>
                    </View>
                    <View style={styles.socials}>
                        <FlatList
                            data={user.socials}
                            renderItem={renderSocials}
                            keyExtractor={item => item.id}
                            marginBottom
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    symbolContainer: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-between'
    },
    socials: {
        marginTop: 10,
        height: 300,
    },
    socialCard: {
        textTransform: 'capitalize',
        width: 250,
        marginBottom: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    statsWrapper: {
        width: 275,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    socialsWrapper: {
        marginTop: 20,
        borderColor: colors.lightBlue,
        borderRadius: '10',
        alignItems: 'center',
        width: 275,
        flex: 1,
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    socialsHeader: {
        width: 250,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        fontSize: 20,
    },
    stat: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white
    },
    statsCard: {
        backgroundColor: colors.darkBlue,
        borderRadius: 10,
        width: 125,
        textAlign: 'center',
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
    profileWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Profile;