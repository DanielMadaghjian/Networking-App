import React, { useState } from 'react';

import { Image,View, CheckBox, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import backgroundImage from '../assets/images/backgroundImage.jpg';
import ProfileForm from '../components/ProfileForm';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const EditProfile = ({ navigation}) => {
    
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
    
    


    return (
        // 
        <View>
            <ProfileForm user={user} navigation={navigation}></ProfileForm>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default EditProfile;