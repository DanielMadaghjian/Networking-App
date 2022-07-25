import React from 'react';
import { StyleSheet, Image, View, Text, Linking } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import ProfileSocials from '../components/ProfileSocials';
import Options from '../components/Options';
// import user from '../assets/data/users';

const Profile = ({navigation}) => {
    return (
        <View>
            <View style={styles.profileWrapper}>
                {/**PROFILE INFO */}
                <ProfileInfo navigation={navigation}></ProfileInfo> 
                {/**SOCIALS */}
                <ProfileSocials></ProfileSocials>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Profile;