import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import profile from '../assets/images/person.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../authLogic/AuthProvider';

const Header = ({ navigation }) => {
    const { isLoggedIn } = useContext(AuthContext)
    const { signOut } = useContext(AuthContext)
    console.log(isLoggedIn)
    return (
        <View>
            <Text style={styles.introductionTitle}>Hi Daniel!</Text>
            <View style={styles.headerWrapper}>
                <Text style={styles.browseEventsTitle}>Explore Events</Text>
                {isLoggedIn ?
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { signOut() }}>
                            <Text style={{ marginHorizontal: 10 }}>Log Out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Image source={profile} style={styles.profileImage}></Image>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ marginHorizontal: 10 }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ marginHorizontal: 10 }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    headerWrapper: {
        marginHorizontal: 20,
        marginTop: 5,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
    introductionTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Light',
        fontSize: 15,
        marginLeft: 42,
    },
    browseEventsTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        fontWeight: 'bold',
    },
})
export default Header;