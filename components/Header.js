import React from 'react';
import {Text, View,  StyleSheet, Image} from 'react-native';

import profile from '../assets/images/person.png';
import { TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({navigation}) => {
    return (     
            <View>
                <Text style={styles.introductionTitle}>Hi Daniel!</Text>  
                <View style={styles.headerWrapper}>                  
                    <Text style={styles.browseEventsTitle}>Explore Events</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Login') }> 
                        <Text style={{marginHorizontal: 10}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('Register') }> 
                        <Text style={{marginHorizontal: 10}}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={profile} style={styles.profileImage}></Image>
                    </TouchableOpacity>
                    
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