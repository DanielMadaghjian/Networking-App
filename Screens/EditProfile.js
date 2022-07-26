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
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageBackground: {
        height: height * 0.4,
        backgroundColor: colors.lightBlue
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandViewText: {
        color: colors.white,
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: colors.white,
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    welcomeText: {
        color: colors.darkBlue,
        fontSize: 34
    },
    registerNowText: {
        color: 'red',
        fontStyle: 'italic',
    },
    nameHeading: {
        marginLeft: 25,
        marginBottom: 0, 
        marginTop: 15,
        color: colors.lightGrey
    },
    heading: {
        marginLeft: 25,
        marginBottom: 0, 
        marginTop: 1,
        color: colors.lightGrey
    },
    inputStyle: {
        // marginTop: 30,
        // width: 300,
        // height: 40,
        // paddingHorizontal: 10,
        // borderRadius: 50,
        // backgroundColor: colors.lightBlue,
        
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            fontWeight:'bold'
          
    },
    inputStyleBio: {
        height: 100,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            fontWeight:'bold'
    },
    formWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    forgetPassView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        marginTop: 20,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: '#8f9195',
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 30,
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 6,
    },
    socialLoginView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    backText: {
        textAlign: "screenLeft",
        marginLeft: 20,
        color: 'red',
        marginTop: 10,
    },
    saveText: {
        textAlign: "screenRight",
        marginRight: 20,
        color: 'green',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default EditProfile;