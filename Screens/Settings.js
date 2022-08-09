import React from 'react';

import { View,SafeAreaView, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

const height = Dimensions.get('window').height;


//https://uxdesign.cc/designing-a-better-settings-page-for-your-app-fcc32fe8c724

const settings = [
    {
        title: "Edit Profile",
        navigate: "EditProfile",
        IconName: "account-edit"
    },
    {
        title: "Change Password",
        navigate: "Home",
        IconName: "lock-open"
    },
    {
        title: "About",
        navigate: "About",
        IconName: "information-outline"
    },
    {
        title: "Privacy Policy",
        navigate: "PrivacyPolicy",
        IconName: "account-lock"
    },
    {
        title: "Help and Support",
        navigate: "Help",
        IconName: "help-circle-outline"
    },

];

const Settings = ({navigation}) => {

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={{marginTop: 10, textAlign: 'center', fontSize: 20}}>Settings</Text>
                <TouchableOpacity
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={'black'} />
                </TouchableOpacity>
                
                <SafeAreaView style={styles.optionsWrapper}>
                     
                     {settings.map((setting) => {
                           return (
                           <TouchableOpacity onPress={() => {navigation.navigate(setting.navigate)}} style={[styles.item]}>
                                <View style={{flexDirection: 'row'}}>                                  
                                        <MaterialCommunityIcons name={setting.IconName} size={32} color={'black'} />
                                         <Text style={[styles.title]}>{setting.title}</Text>
                                         <View style={{right: 10, position: 'absolute'}}>
                                            <Entypo name="chevron-right"  size={32} color={'black'} />
                                        </View>
                                </View>
                             </TouchableOpacity>
                           );
                       })}
                 </SafeAreaView>   
                 <TouchableOpacity
                        style={styles.buttonWrapper}
                        onPress={() => alert('You logged out ')}>
                        <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity> 

            </View>
            
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    optionsWrapper: {
        marginHorizontal: 30,
        
    },
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.lightGrey
      },
      title: {
        fontSize: 12,
        marginLeft: 10,
        
      },
      buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 30,
        backgroundColor: 'red',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        width: 90,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: colors.white,
        marginHorizontal: 6,
    },
})

export default Settings;