import React from 'react';
import colors from '../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Image, View, Text, Linking } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler/lib/commonjs';
// import user from '../assets/data/users';

const ProfileSocials = () => {
    const user =
    {
        "title": 'Javi Daniel',
        image: require('../assets/images/person.png'),
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
                <View style={styles.socialsWrapper}>
                    <View style={styles.socialsHeader}>
                        <Text>My Socials</Text>
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
})

export default ProfileSocials;