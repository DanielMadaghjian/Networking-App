import React, { useState } from 'react';

import { Image,View, Text, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ProfileForm = ({user, navigation}) => {
    const [name, onChangeName] = useState(user.title);
    const [role, onChangeRole] = useState(user.role);
    const [bio, onChangeBio] = useState(user.bio);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.imageBackground} >
                <Text style={styles.ProfileText}>Profile</Text>  
                <View style={styles.HeaderView}>
                    <TouchableOpacity
                        style={styles.backIcon}
                        onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={32} color={colors.white} />
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
    ProfileText: {
        marginTop: 4, 
        textAlign: 'center', 
        fontSize: 20 
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    HeaderView: {
        flexDirection: 'row', 
        justifyContent: "space-between"
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: colors.white,
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
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