import React, { useState } from 'react';

import { Image,View, CheckBox, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import backgroundImage from '../assets/images/backgroundImage.jpg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ProfileForm = ({user, navigation}) => {
    const [name, onChangeName] = useState(user.title);
    const [role, onChangeRole] = useState(user.role);
    const [bio, onChangeBio] = useState(user.bio);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.imageBackground} >
            <Text style={{marginTop: 4, textAlign: 'center', fontSize: 20}}>Profile</Text>
                <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.backText}>Go Back</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {{alert('Changes saved! '), navigation.navigate("Profile")}}}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row'}}>
                        <Image source={user.image} style={styles.profileImage}></Image>
                        <TouchableOpacity style={{marginTop: 80}}>
                            <FontAwesome name="upload" size={22} color={colors.darkBlue} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.bottomView}>
                
                
            <View>
                <Text style={styles.nameHeading}>Name</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={onChangeName}
                    value={name}
                />
                <Text style={styles.heading}>Role</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={onChangeRole}
                    value={role}
                />
                <Text style={styles.heading}>Bio</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.inputStyleBio}
                    onChangeText={onChangeBio}
                    value={bio}
                />

                
            </View>


        </View>
        </ScrollView >
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

export default ProfileForm;