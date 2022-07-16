import React from 'react';
import { StyleSheet, Image, View, Text, Linking } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import ProfileSocials from '../components/ProfileSocials';
// import user from '../assets/data/users';

const Profile = () => {
    return (
        <View>
            <View style={styles.profileWrapper}>
                {/**PROFILE INFO */}
                <ProfileInfo></ProfileInfo>
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